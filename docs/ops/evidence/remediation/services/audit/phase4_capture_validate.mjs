#!/usr/bin/env node
/**
 * Phase 4 Services capture + validation against immutable Vercel preview.
 *
 * Env:
 *   PHASE4_PREVIEW      (required) immutable preview URL
 *   PHASE4_COMMIT       40-char GitHub SHA
 *   PHASE4_DEPLOYMENT   dpl_...
 *   PHASE4_DIFF_BASE    starting head (default 620b725d613fba4ff4a062477c1110e453a4eb63)
 *   PHASE4_BASELINE     default https://octus-consulting-9q798dbg2-axle1.vercel.app
 */
import { chromium } from "playwright";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPO = path.resolve(__dirname, "../../../../../..");
const AUDIT = path.join(ROOT, "audit");
const RECONCILED_DIR = path.join(ROOT, "reconciled");

const PREVIEW = process.env.PHASE4_PREVIEW;
const COMMIT = process.env.PHASE4_COMMIT || "";
const DEPLOYMENT_ID = process.env.PHASE4_DEPLOYMENT || "";
const DIFF_BASE =
  process.env.PHASE4_DIFF_BASE || "620b725d613fba4ff4a062477c1110e453a4eb63";
const BASELINE =
  process.env.PHASE4_BASELINE || "https://octus-consulting-9q798dbg2-axle1.vercel.app";

if (!PREVIEW) {
  console.error("PHASE4_PREVIEW is required");
  process.exit(1);
}

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

/** 20 mandatory live public surfaces */
const MANDATORY_ROUTES = [
  "/solutions",
  "/solutions/regulatory-structuring",
  "/solutions/compliance-risk",
  "/solutions/legal-structural-architecture",
  "/solutions/corporate-structuring",
  "/private-clients",
  "/solutions/remediation-readiness",
  "/international-hub",
  "/solutions/banking-payments-infrastructure",
  "/solutions/regulatory/igaming-licensing",
  "/solutions/regulatory/fintech-licensing",
  "/solutions/regulatory/market-entry",
  "/solutions/compliance/aml-kyc",
  "/solutions/compliance/compliance-as-a-service",
  "/solutions/compliance/dpo-as-a-service",
  "/solutions/compliance/gli-readiness",
  "/solutions/compliance/internal-controls",
  "/solutions/corporate/company-formation",
  "/solutions/corporate/holding-design",
  "/solutions/corporate/offshore-structuring",
];

const INSTITUTIONAL_ROUTES = ["/about", "/contact", "/brazil", "/intelligence"];

const ALIAS_CHECKS = [
  { alias: "/services", canonical: "/solutions" },
  {
    alias: "/solutions/regulatory-strategy-licensing",
    canonical: "/solutions/regulatory-structuring",
  },
];

const EXPECTED_TEAM_NAMES = [
  "Rubio Teixeira",
  "Maria Cristina",
  "Rodrigo Coelho Lopes",
  "Claudia Nery",
  "Esther Vendrami",
  "Caroline Giovanetti",
  "Larissa Carvalho",
  "Milla Ludovico",
  "Bianca Carolina Oliveira Andrade",
  "Luciana Santos Veloso",
];

const DIAGNOSTIC_LABELS = [
  "Request a diagnostic →",
  "Assess your situation →",
  "Start remediation assessment →",
];

const HOME_RESIDUAL_SNIPPET = "accountability — not a directory";
const HOME_RESIDUAL_ALLOWED = [
  "Trust starts with clear accountability — not a directory of faces.",
  "Trust starts with clear accountability – not a directory of faces.",
];

const PROHIBITED_PHRASES = [
  "not a law firm",
  "06 solutions",
  "six solutions",
  "guaranteed",
  "license shop",
];

const FROZEN_PATH_PATTERNS = [
  "app/page.tsx",
  "app/team/",
  "public/team/",
  "components/Nav.tsx",
  "HomeLeadershipTrust",
  "CookieBanner",
  "app/layout.tsx",
];

const PAGE_FAMILY = {
  "/solutions": "overview",
  "/solutions/regulatory-structuring": "area-hub",
  "/solutions/compliance-risk": "area-hub",
  "/solutions/legal-structural-architecture": "area-hub",
  "/solutions/corporate-structuring": "area-hub",
  "/private-clients": "area-hub-compact",
  "/solutions/remediation-readiness": "area-hub-crisis",
  "/international-hub": "area-hub-compact",
  "/solutions/banking-payments-infrastructure": "banking-supporting",
};

for (const r of MANDATORY_ROUTES) {
  if (!PAGE_FAMILY[r] && r.startsWith("/solutions/")) {
    PAGE_FAMILY[r] = "deep-service";
  }
}

const DESKTOP_CHAPTERS = [
  { id: "full", fullPage: true },
  { id: "hero", selector: ".octus-dark-hero", height: 900 },
  { id: "content", midScroll: true, height: 900 },
  { id: "cta", ctaSection: true, height: 520 },
];

const MOBILE_CHAPTERS = [
  { id: "full", fullPage: true },
  { id: "first-fold", firstFold: true },
  { id: "content", midScroll: true, height: 844 },
  { id: "cta", ctaSection: true, height: 520 },
];

const OVERVIEW_EXTRA_CHAPTERS = [
  { id: "seven-area-grid", selector: "h2", text: "Seven areas. One accountable layer.", height: 900 },
  {
    id: "banking-chapter",
    selector: "h2",
    text: "Cross-cutting support. Not an eighth area.",
    height: 700,
  },
];

function sha256File(fp) {
  return crypto.createHash("sha256").update(fs.readFileSync(fp)).digest("hex");
}

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

function routeSlug(route) {
  return route.replace(/^\//, "").replace(/\//g, "-") || "root";
}

function entry(meta, fileRel, classification, route, chapter, viewport, scroll, http_status, hashMeta, status) {
  return {
    file: fileRel,
    classification,
    route,
    page_family: PAGE_FAMILY[route] || "unknown",
    chapter,
    source_url: meta.base.replace(/\/$/, "") + route,
    deployment_id: meta.deploymentId,
    immutable_commit_sha: meta.commit,
    viewport,
    scroll_position_or_selector: scroll,
    capture_timestamp: new Date().toISOString(),
    http_status,
    sha256: hashMeta.sha256,
    bytes: hashMeta.bytes,
    status,
  };
}

async function httpMeta(url, follow = false) {
  const res = await fetch(url, { redirect: follow ? "follow" : "manual" });
  const xRobots = res.headers.get("x-robots-tag") || "";
  let finalUrl = url;
  if (follow) finalUrl = res.url;
  return { status: res.status, xRobots, finalUrl, location: res.headers.get("location") || "" };
}

async function captureChapter(page, vp, chapterSpec, outAbs) {
  ensureDir(path.dirname(outAbs));
  if (chapterSpec.fullPage) {
    await page.screenshot({ path: outAbs, fullPage: true, animations: "disabled" });
    return { scroll: "fullPage", ok: true };
  }
  if (chapterSpec.firstFold) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(150);
    await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
    return { scroll: "y=0;first-fold", ok: true };
  }
  if (chapterSpec.midScroll) {
    const metrics = await page.evaluate(() => ({
      scrollH: document.documentElement.scrollHeight,
      clientH: document.documentElement.clientHeight,
    }));
    const y = Math.max(0, Math.round(metrics.scrollH / 2 - vp.height / 2));
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(200);
    const h = Math.min(vp.height, chapterSpec.height || vp.height);
    await page.screenshot({
      path: outAbs,
      animations: "disabled",
      clip: { x: 0, y: 0, width: vp.width, height: h },
    });
    return { scroll: `midScroll;y=${y}`, ok: true };
  }

  if (chapterSpec.ctaSection) {
    let loc = page.locator(".cta-block").first();
    if ((await loc.count()) === 0) {
      loc = page.locator("section.surface-dark").last();
    }
    if ((await loc.count()) === 0) {
      loc = page.locator("main section").last();
    }
    if ((await loc.count()) === 0) {
      const metrics = await page.evaluate(() => document.documentElement.scrollHeight);
      const y = Math.max(0, metrics - vp.height);
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(200);
      await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
      return { scroll: `bottomFallback;y=${y}`, ok: true };
    }
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    const box = await loc.boundingBox();
    const y = Math.max(0, (box?.y || 0) - 20);
    const h = Math.min(vp.height, chapterSpec.height || 520);
    await page.screenshot({
      path: outAbs,
      animations: "disabled",
      clip: { x: 0, y, width: vp.width, height: h },
    });
    return { scroll: `y=${Math.round(y)};ctaSection`, ok: true };
  }

  let loc;
  if (chapterSpec.text) {
    loc = page.locator(chapterSpec.selector || "h2", { hasText: chapterSpec.text }).first();
  } else if (chapterSpec.selector?.includes(",")) {
    const parts = chapterSpec.selector.split(",").map((s) => s.trim());
    loc = page.locator(parts[0]).first();
    for (let i = 1; i < parts.length; i++) {
      if ((await loc.count()) === 0) loc = page.locator(parts[i]).first();
    }
  } else {
    loc = page.locator(chapterSpec.selector).first();
  }

  if ((await loc.count()) === 0) {
    await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
    return { scroll: chapterSpec.selector || chapterSpec.text || "missing", ok: false };
  }
  await loc.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  const box = await loc.boundingBox();
  const y = Math.max(0, (box?.y || 0) - (chapterSpec.includeAbove || 40));
  const h = Math.min(vp.height, chapterSpec.height || 700);
  await page.screenshot({
    path: outAbs,
    animations: "disabled",
    clip: { x: 0, y, width: vp.width, height: h },
  });
  return { scroll: `y=${Math.round(y)};sel=${chapterSpec.selector || chapterSpec.text}`, ok: true };
}

async function captureRoute(browser, meta, route, items) {
  const slug = routeSlug(route);
  const routeHttp = {};

  for (const vpName of ["desktop", "mobile"]) {
    const vp = VIEWPORTS[vpName];
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const res = await page.goto(meta.base.replace(/\/$/, "") + route, {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    const status = res?.status() || 0;
    routeHttp[vpName] = status;
    await page.waitForTimeout(400);

    const chapters = vpName === "desktop" ? DESKTOP_CHAPTERS : MOBILE_CHAPTERS;
    for (const ch of chapters) {
      const fileRel = `reconciled/${slug}__${vpName}__${ch.id}.png`;
      const abs = path.join(ROOT, fileRel);
      const capt = await captureChapter(page, vp, ch, abs);
      const hm = { bytes: fs.statSync(abs).size, sha256: sha256File(abs) };
      items.push(
        entry(
          meta,
          fileRel,
          "reconciled",
          route,
          ch.id,
          `${vp.width}x${vp.height}`,
          capt.scroll,
          status,
          hm,
          status === 200 && capt.ok ? "PASS" : "FAIL"
        )
      );
    }

    if (route === "/solutions" && vpName === "desktop") {
      for (const extra of OVERVIEW_EXTRA_CHAPTERS) {
        const fileRel = `reconciled/${slug}__${vpName}__${extra.id}.png`;
        const abs = path.join(ROOT, fileRel);
        const capt = await captureChapter(page, vp, extra, abs);
        const hm = { bytes: fs.statSync(abs).size, sha256: sha256File(abs) };
        items.push(
          entry(
            meta,
            fileRel,
            "reconciled",
            route,
            extra.id,
            `${vp.width}x${vp.height}`,
            capt.scroll,
            status,
            hm,
            status === 200 && capt.ok ? "PASS" : "FAIL"
          )
        );
      }
    }

    await ctx.close();
  }

  return routeHttp;
}

async function pageAudit(page, route) {
  return page.evaluate(
    ({ routePath, prohibited, homeResidualSnippet }) => {
      const main = document.querySelector("main") || document.body;
      const text = main.innerText || "";
      const bodyText = document.body.innerText || "";

      const links = [...document.querySelectorAll("main a[href]")].map((a) => {
        const section =
          a.closest(".octus-dark-hero")
            ? "hero"
            : a.closest(".cta-block, section.surface-dark")
              ? "final_cta"
              : a.closest("section")?.querySelector("h2")?.textContent?.trim()?.slice(0, 60) || "other";
        return {
          text: (a.textContent || "").trim().replace(/\s+/g, " "),
          href: a.getAttribute("href") || "",
          section,
        };
      });

      const arrowDupes = links.filter((l) => /→\s*→/.test(l.text) || l.text.endsWith("→→"));
      const labelCounts = {};
      for (const l of links) {
        if (!l.text) continue;
        labelCounts[l.text] = (labelCounts[l.text] || 0) + 1;
      }

      const sevenHeading = [...document.querySelectorAll("h2")].find((h) =>
        /Seven areas\. One accountable layer\./.test(h.textContent || "")
      );
      const sevenSection = sevenHeading?.closest("section");
      const sevenGridArticles = sevenSection
        ? [...sevenSection.querySelectorAll("article")]
        : [];
      const sevenGridLabels = sevenGridArticles.map((el) => {
        const h3 = el.querySelector("h3");
        return (h3?.textContent || "").replace(/\s+/g, " ").trim();
      });
      const bankingInSevenGrid = sevenGridLabels.some((l) => /Banking/i.test(l));

      const openAreaLinks = sevenSection
        ? [...sevenSection.querySelectorAll("a")]
            .map((a) => (a.textContent || "").trim().replace(/\s+/g, " "))
            .filter((t) => /^Open .+ →$/.test(t))
        : links.filter((l) => /^Open .+ →$/.test(l.text)).map((l) => l.text);
      const openAreaDupes = Object.entries(
        openAreaLinks.reduce((acc, t) => {
          acc[t] = (acc[t] || 0) + 1;
          return acc;
        }, {})
      ).filter(([, n]) => n > 1);

      const WA_LABEL = "Discuss your operation →";
      const waLinks = links.filter((l) => l.text === WA_LABEL);
      const waOutsideAllowlist = waLinks.filter((l) => l.section !== "hero" && l.section !== "final_cta");

      const prohibitedFound = prohibited.filter((p) => text.toLowerCase().includes(p));

      const emDashCount = (text.match(/\u2014/g) || []).length;
      const enDashCount = (text.match(/\u2013/g) || []).length;

      const overflow = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
      const h1Count = document.querySelectorAll("h1").length;

      let homeResidualCount = 0;
      if (routePath === "/") {
        const re = new RegExp(homeResidualSnippet.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
        homeResidualCount = (bodyText.match(re) || []).length;
      }

      const hero = document.querySelector(".home-hero, .octus-dark-hero");
      const header = document.querySelector(".site-header, header");
      const wa = document.querySelector(".wa-float");

      const diagnosticLabels = links
        .filter((l) => l.href === "/diagnostic" || (l.href || "").startsWith("/diagnostic"))
        .map((l) => l.text);
      const diagnosticUnique = [...new Set(diagnosticLabels)];

      return {
        route: routePath,
        openAreaCount: openAreaLinks.length,
        sevenGridCardCount: sevenGridArticles.length,
        sevenGridLabels,
        bankingInSevenGrid,
        openAreaDupes,
        labelCounts,
        waCount: waLinks.length,
        waOutsideAllowlist: waOutsideAllowlist.map((l) => l.section),
        arrowDupes: arrowDupes.map((l) => l.text),
        prohibitedFound,
        emDashCount,
        enDashCount,
        overflow,
        h1Count,
        homeResidualCount,
        heroH: hero ? Math.round(hero.getBoundingClientRect().height) : null,
        headerH: header ? Math.round(header.getBoundingClientRect().height) : null,
        waBottom: wa ? getComputedStyle(wa).bottom : null,
        diagnosticLabels,
        diagnosticUnique,
        textSample: text.slice(0, 400),
      };
    },
    { routePath: route, prohibited: PROHIBITED_PHRASES, homeResidualSnippet: HOME_RESIDUAL_SNIPPET }
  );
}

async function teamAudit(browser, preview) {
  const ctx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const page = await ctx.newPage();
  await page.goto(preview.replace(/\/$/, "") + "/team", { waitUntil: "networkidle" });
  const data = await page.evaluate((expected) => {
    const names = [...document.querySelectorAll("h3")]
      .map((h) => h.textContent.trim())
      .filter(Boolean);
    return {
      names,
      count: names.length,
      exact: names.length === 10 && expected.every((n, i) => names[i] === n),
    };
  }, EXPECTED_TEAM_NAMES);
  await ctx.close();
  return data;
}

async function aliasAudit(preview, { alias, canonical }) {
  const base = preview.replace(/\/$/, "");
  const aliasUrl = base + alias;
  const manual = await httpMeta(aliasUrl, false);
  const follow = await httpMeta(aliasUrl, true);
  const canonicalPath = new URL(base + canonical).pathname;
  let resolvedPath = "";
  try {
    resolvedPath = new URL(follow.finalUrl).pathname;
  } catch {
    resolvedPath = "";
  }
  const ok =
    manual.status === 200 ||
    [301, 302, 307, 308].includes(manual.status) ||
    (follow.status === 200 && resolvedPath === canonicalPath);
  return {
    alias,
    canonical,
    manualStatus: manual.status,
    location: manual.location,
    followStatus: follow.status,
    resolvedPath,
    canonicalPath,
    status: ok ? "PASS" : "FAIL",
  };
}

function frozenFilesCheck() {
  let diffNames = [];
  try {
    const range = COMMIT ? `${DIFF_BASE}..${COMMIT}` : DIFF_BASE;
    diffNames = execSync(`git diff --name-only ${range}`, { cwd: REPO, encoding: "utf8" })
      .trim()
      .split("\n")
      .filter(Boolean);
  } catch (e) {
    return { status: "FAIL", diffNames, hits: ["git_diff_error"], error: String(e.message || e) };
  }
  const hits = diffNames.filter((f) =>
    FROZEN_PATH_PATTERNS.some(
      (p) => f === p || f.startsWith(p) || f.includes(p.replace(/\/$/, ""))
    )
  );
  return { status: hits.length === 0 ? "PASS" : "FAIL", diffNames, hits };
}

async function main() {
  ensureDir(RECONCILED_DIR);
  ensureDir(AUDIT);

  const meta = {
    base: PREVIEW,
    commit: COMMIT,
    deploymentId: DEPLOYMENT_ID,
  };

  const browser = await chromium.launch({ headless: true });
  const manifestItems = [];
  const crawlStatus = {};
  const routeAudits = {};
  const overflowResults = {};

  console.log("Capturing reconciled service routes...");
  for (const route of MANDATORY_ROUTES) {
    console.log(`  ${route}`);
    const http = await captureRoute(browser, meta, route, manifestItems);
    crawlStatus[route] = http.desktop === 200 ? 200 : http.desktop;
  }

  console.log("Running per-route audits...");
  for (const route of MANDATORY_ROUTES) {
    for (const vpName of ["desktop", "mobile"]) {
      const vp = VIEWPORTS[vpName];
      const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
      const page = await ctx.newPage();
      await page.goto(PREVIEW.replace(/\/$/, "") + route, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(300);
      const audit = await pageAudit(page, route);
      if (vpName === "desktop") routeAudits[route] = audit;
      overflowResults[`${route}:${vpName}`] = audit.overflow;
      await ctx.close();
    }
  }

  console.log("Homepage + institutional regression...");
  const homeHeaders = await httpMeta(PREVIEW.replace(/\/$/, "") + "/");
  const homeHtml = await fetch(PREVIEW.replace(/\/$/, "") + "/")
    .then((r) => r.text())
    .catch(() => "");
  const metaNoindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(homeHtml);
  const headerNoindex = homeHeaders.xRobots.toLowerCase().includes("noindex");
  const homeCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const homePage = await homeCtx.newPage();
  await homePage.goto(PREVIEW.replace(/\/$/, "") + "/", { waitUntil: "networkidle" });
  const homeAudit = await pageAudit(homePage, "/");
  await homeCtx.close();

  const mobHomeCtx = await browser.newContext({ viewport: VIEWPORTS.mobile });
  const mobHome = await mobHomeCtx.newPage();
  await mobHome.goto(PREVIEW.replace(/\/$/, "") + "/", { waitUntil: "networkidle" });
  overflowResults["/:mobile"] = await mobHome.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  );
  await mobHomeCtx.close();

  const institutionalCrawl = {};
  for (const r of INSTITUTIONAL_ROUTES) {
    institutionalCrawl[r] = await httpMeta(PREVIEW.replace(/\/$/, "") + r);
  }

  const aboutCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const aboutPage = await aboutCtx.newPage();
  await aboutPage.goto(PREVIEW.replace(/\/$/, "") + "/about", { waitUntil: "networkidle" });
  const aboutChrome = await aboutPage.evaluate(() => {
    const header = document.querySelector(".site-header, header");
    const wa = document.querySelector(".wa-float");
    return {
      headerH: header ? Math.round(header.getBoundingClientRect().height) : null,
      waBottom: wa ? getComputedStyle(wa).bottom : null,
    };
  });
  await aboutCtx.close();

  const teamData = await teamAudit(browser, PREVIEW);

  const aliasResults = [];
  for (const spec of ALIAS_CHECKS) {
    aliasResults.push(await aliasAudit(PREVIEW, spec));
  }

  await browser.close();

  const frozen = frozenFilesCheck();

  const solutionsAudit = routeAudits["/solutions"] || {};
  const openAreaDupesFail =
    (solutionsAudit.openAreaDupes || []).length > 0 ||
    Object.entries(solutionsAudit.labelCounts || {}).some(([label, count]) => {
      if (/^Open .+ →$/.test(label) && count > 1) return true;
      if (label === "Discuss your operation →" && count > 2) return true;
      return false;
    }) ||
    (solutionsAudit.waOutsideAllowlist || []).length > 0 ||
    (solutionsAudit.waCount || 0) > 2;

  const serviceDashFail = MANDATORY_ROUTES.some((r) => {
    const a = routeAudits[r];
    return a && (a.emDashCount > 0 || a.enDashCount > 0);
  });

  const serviceProhibitedFail = MANDATORY_ROUTES.some(
    (r) => (routeAudits[r]?.prohibitedFound || []).length > 0
  );

  const serviceArrowFail = MANDATORY_ROUTES.some((r) => (routeAudits[r]?.arrowDupes || []).length > 0);

  const overflowFail = Object.values(overflowResults).some(Boolean);

  const h1Fail = MANDATORY_ROUTES.some((r) => routeAudits[r]?.h1Count !== 1);

  const capturedRoutes = new Set(manifestItems.map((i) => i.route));
  const inventoryComplete = MANDATORY_ROUTES.every((r) => capturedRoutes.has(r));

  const orphan404 = MANDATORY_ROUTES.filter((r) => crawlStatus[r] !== 200);

  const homeBody = homeHtml;
  const homeHasAllowedResidual = HOME_RESIDUAL_ALLOWED.some((s) => homeBody.includes(s));

  const checks = {
    mandatory_routes_http_200: orphan404.length === 0 ? "PASS" : "FAIL",
    seven_area_integrity: solutionsAudit.sevenGridCardCount === 7 ? "PASS" : "FAIL",
    banking_not_peer: solutionsAudit.bankingInSevenGrid ? "FAIL" : "PASS",
    inventory_completeness: inventoryComplete ? "PASS" : "FAIL",
    orphan_route_scan: orphan404.length === 0 ? "PASS" : "FAIL",
    duplicate_commercial_labels: openAreaDupesFail ? "FAIL" : "PASS",
    duplicate_arrows: serviceArrowFail ? "FAIL" : "PASS",
    prohibited_phrases: serviceProhibitedFail ? "FAIL" : "PASS",
    service_em_en_dash: serviceDashFail ? "FAIL" : "PASS",
    overflow_desktop_mobile: overflowFail ? "FAIL" : "PASS",
    a11y_h1_per_route: h1Fail ? "FAIL" : "PASS",
    frozen_files: frozen.status,
    homepage_regression:
      homeAudit.heroH != null &&
      homeAudit.heroH >= 870 &&
      homeAudit.heroH <= 890 &&
      homeAudit.diagnosticUnique?.length === 3 &&
      DIAGNOSTIC_LABELS.every((l) => homeAudit.diagnosticUnique.includes(l))
        ? "PASS"
        : "FAIL",
    home_residual:
      homeHasAllowedResidual && homeAudit.homeResidualCount === 1 ? "PASS" : "FAIL",
    team_regression: teamData.exact ? "PASS" : "FAIL",
    global_header_height:
      homeAudit.headerH === 84 && aboutChrome.headerH === 84 ? "PASS" : "FAIL",
    global_whatsapp_24:
      homeAudit.waBottom == null || String(homeAudit.waBottom).includes("24px") ? "PASS" : "FAIL",
    institutional_smoke: INSTITUTIONAL_ROUTES.every((r) => institutionalCrawl[r]?.status === 200)
      ? "PASS"
      : "FAIL",
    noindex: metaNoindex || headerNoindex ? "PASS" : "FAIL",
    alias_canonicals: aliasResults.every((a) => a.status === "PASS") ? "PASS" : "FAIL",
    capture_manifest_metadata:
      manifestItems.every(
        (i) =>
          i.file &&
          i.classification &&
          i.route &&
          i.page_family &&
          i.chapter &&
          i.source_url &&
          i.deployment_id != null &&
          i.immutable_commit_sha != null &&
          i.viewport &&
          i.scroll_position_or_selector &&
          i.capture_timestamp &&
          i.http_status != null &&
          i.sha256 &&
          i.bytes != null &&
          i.status
      )
        ? "PASS"
        : "FAIL",
  };

  const failed = Object.entries(checks).filter(([, v]) => v !== "PASS").map(([k]) => k);
  const captureFails = manifestItems.filter((i) => i.status === "FAIL").length;

  const validation = {
    generated_at: new Date().toISOString(),
    phase: 4,
    starting_head: DIFF_BASE,
    phase4_impl_commit: COMMIT,
    immutable_preview_url: PREVIEW,
    baseline_url: BASELINE,
    deployment_id: DEPLOYMENT_ID,
    mandatory_route_count: MANDATORY_ROUTES.length,
    screenshot_count: manifestItems.length,
    capture_failures: captureFails,
    checks,
    failed_checks: failed,
    overall: failed.length === 0 && captureFails === 0 ? "PASS" : "FAIL",
    results: {
      crawlStatus,
      routeAudits,
      solutionsAudit,
      overflowResults,
      homeAudit,
      homeHeaders,
      institutionalCrawl,
      aboutChrome,
      teamData,
      aliasResults,
      frozen,
      orphan404,
      capturedRoutes: [...capturedRoutes],
    },
  };

  const manifest = {
    generated_at: new Date().toISOString(),
    phase: 4,
    starting_head: DIFF_BASE,
    phase4_impl_commit: COMMIT,
    immutable_preview_url: PREVIEW,
    baseline_url: BASELINE,
    deployment_id: DEPLOYMENT_ID,
    mandatory_routes: MANDATORY_ROUTES,
    screenshot_count: manifestItems.length,
    items: manifestItems,
  };

  fs.writeFileSync(path.join(ROOT, "SCREENSHOT_MANIFEST.json"), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(AUDIT, "PHASE4_VALIDATION.json"), JSON.stringify(validation, null, 2));

  console.log(
    JSON.stringify(
      {
        screenshot_count: manifestItems.length,
        capture_failures: captureFails,
        overall: validation.overall,
        failed_checks: failed,
      },
      null,
      2
    )
  );

  process.exit(validation.overall === "PASS" ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
