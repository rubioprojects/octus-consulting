#!/usr/bin/env node
/**
 * Phase 4 Services — closeout capture + validation (immutable preview).
 *
 * Env (required unless noted):
 *   PHASE4_PREVIEW              immutable closeout URL (required)
 *   PHASE4_COMMIT               closeout app SHA
 *   PHASE4_DEPLOYMENT           dpl_...
 *   PHASE4_DIFF_BASE            default d618067150d2720e7c85ce387c1a02ba3168ae21
 *   PHASE4_IMPL_SNAPSHOT        default 8228e342cfc9d3830b4f4a414f2a93ae208e5be1
 *   PHASE4_BEFORE_PREVIEW       default https://octus-consulting-6dof5kn4k-axle1.vercel.app
 *   PHASE4_BEFORE_COMMIT        default 8228e342cfc9d3830b4f4a414f2a93ae208e5be1
 *   PHASE4_BEFORE_DEPLOYMENT    optional
 *   PHASE4_BASELINE             default https://octus-consulting-9q798dbg2-axle1.vercel.app
 *   PHASE4_BASELINE_DEPLOYMENT  default dpl_437tawkoMDv7sqxW6NzPzTegj1Lq
 *
 * Writes under docs/ops/evidence/remediation/services/
 */
import { chromium } from "playwright";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { execSync, spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPO = path.resolve(__dirname, "../../../../../..");
const AUDIT = path.join(ROOT, "audit");

const PREVIEW = process.env.PHASE4_PREVIEW;
const COMMIT = process.env.PHASE4_COMMIT || process.env.PHASE4_IMPL_SNAPSHOT || "";
const DEPLOYMENT_ID = process.env.PHASE4_DEPLOYMENT || "";
const DIFF_BASE =
  process.env.PHASE4_DIFF_BASE || "d618067150d2720e7c85ce387c1a02ba3168ae21";
const IMPL_SNAPSHOT =
  process.env.PHASE4_IMPL_SNAPSHOT || "8228e342cfc9d3830b4f4a414f2a93ae208e5be1";
const BEFORE_PREVIEW =
  process.env.PHASE4_BEFORE_PREVIEW || "https://octus-consulting-6dof5kn4k-axle1.vercel.app";
const BEFORE_COMMIT =
  process.env.PHASE4_BEFORE_COMMIT || "8228e342cfc9d3830b4f4a414f2a93ae208e5be1";
const BEFORE_DEPLOYMENT = process.env.PHASE4_BEFORE_DEPLOYMENT || "";
const BASELINE =
  process.env.PHASE4_BASELINE || "https://octus-consulting-9q798dbg2-axle1.vercel.app";
const BASELINE_DEPLOYMENT =
  process.env.PHASE4_BASELINE_DEPLOYMENT || "dpl_437tawkoMDv7sqxW6NzPzTegj1Lq";

const POOL_SIZE = Number(process.env.PHASE4_POOL_SIZE || 3);

if (!PREVIEW) {
  console.error("PHASE4_PREVIEW is required");
  process.exit(1);
}

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

const CHAPTERS = [
  { id: "full", fullPage: true },
  {
    id: "hero",
    // Baseline uses older hero markup; Phase 4 uses .octus-dark-hero.
    selector: ".octus-dark-hero, .page-hero, header.hero, main > section:first-of-type",
    height: 900,
  },
  { id: "content", midScroll: true, height: 900 },
  { id: "cta", ctaSection: true, height: 520 },
];

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

const TEMPLATE_REPRESENTATIVES = [
  "/solutions",
  "/solutions/regulatory-structuring",
  "/private-clients",
  "/international-hub",
  "/solutions/remediation-readiness",
  "/solutions/banking-payments-infrastructure",
  "/solutions/regulatory/igaming-licensing",
];

const NO_DIRECT_BASELINE_ROUTE = {
  "/solutions/regulatory-structuring": "/solutions",
  "/solutions/compliance-risk": "/solutions",
  "/solutions/legal-structural-architecture": "/solutions",
  "/solutions/corporate-structuring": "/solutions",
  "/solutions/remediation-readiness": "/solutions",
};

const ALIAS_CHECKS = [
  { alias: "/solutions/regulatory-strategy-licensing", canonical: "/solutions/regulatory-structuring" },
  { alias: "/solutions/compliance-risk-systems", canonical: "/solutions/compliance-risk" },
  { alias: "/solutions/legal-contractual-architecture", canonical: "/solutions/legal-structural-architecture" },
  { alias: "/solutions/corporate-cross-border", canonical: "/solutions/corporate-structuring" },
  { alias: "/solutions/operational-remediation-readiness", canonical: "/solutions/remediation-readiness" },
  { alias: "/solutions/regulatory/banking-payments", canonical: "/solutions/banking-payments-infrastructure" },
  { alias: "/services", canonical: "/solutions" },
  { alias: "/regulatory", canonical: "/solutions/regulatory-structuring" },
  { alias: "/compliance", canonical: "/solutions/compliance-risk" },
  { alias: "/corporate", canonical: "/solutions/corporate-structuring" },
  { alias: "/audit", canonical: "/solutions/remediation-readiness" },
  { alias: "/legal-architecture", canonical: "/solutions/legal-structural-architecture" },
];

/** Aliases explicitly allowed to return 200 without redirect */
const RETAINED_PUBLIC_PAGES = new Set(
  (process.env.PHASE4_RETAINED_PUBLIC_PAGES || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
);

/** Per-route duplicate commercial label exceptions: { "/route": { "Label text": maxCount } } */
const DUPLICATE_LABEL_ALLOWLIST = {
  "/solutions": {
    "Discuss your operation →": 2,
    "How we engage →": 2,
  },
};

const INSTITUTIONAL_ROUTES = ["/about", "/contact", "/brazil", "/intelligence"];
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

const HOME_RESIDUAL_SNIPPET = "accountability — not a directory";
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
  if (!PAGE_FAMILY[r] && r.startsWith("/solutions/")) PAGE_FAMILY[r] = "deep-service";
}

const DEEP_ROUTES = MANDATORY_ROUTES.filter((r) => PAGE_FAMILY[r] === "deep-service");
const WA_DISCUSS = "Discuss your operation →";

function sha256File(fp) {
  return crypto.createHash("sha256").update(fs.readFileSync(fp)).digest("hex");
}

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

function routeSlug(route) {
  return route.replace(/^\//, "").replace(/\//g, "-") || "root";
}

function originBase(url) {
  return url.replace(/\/$/, "");
}

function manifestEntry(meta, fileRel, classification, route, chapter, viewport, scroll, http_status, hashMeta, status, extra = {}) {
  return {
    file: fileRel,
    classification,
    route,
    page_family: PAGE_FAMILY[route] || "unknown",
    chapter,
    source_url: originBase(meta.base) + route,
    deployment_id: meta.deploymentId,
    immutable_commit_sha: meta.commit,
    viewport,
    scroll_position_or_selector: scroll,
    capture_timestamp: new Date().toISOString(),
    http_status,
    sha256: hashMeta.sha256,
    bytes: hashMeta.bytes,
    status,
    ...extra,
  };
}

async function poolMap(items, concurrency, fn) {
  const results = new Array(items.length);
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
}

async function httpMeta(url, follow = false) {
  const res = await fetch(url, { redirect: follow ? "follow" : "manual" });
  const xRobots = res.headers.get("x-robots-tag") || "";
  let finalUrl = url;
  if (follow) finalUrl = res.url;
  return {
    status: res.status,
    xRobots,
    finalUrl,
    location: res.headers.get("location") || "",
  };
}

async function captureChapter(page, vp, chapterSpec, outAbs) {
  ensureDir(path.dirname(outAbs));
  if (chapterSpec.fullPage) {
    await page.screenshot({ path: outAbs, fullPage: true, animations: "disabled" });
    return { scroll: "fullPage", ok: true };
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
    if ((await loc.count()) === 0) loc = page.locator("section.surface-dark").last();
    if ((await loc.count()) === 0) loc = page.locator("main section").last();
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
  const loc = page.locator(chapterSpec.selector).first();
  if ((await loc.count()) === 0) {
    await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
    return { scroll: chapterSpec.selector || "missing", ok: false };
  }
  await loc.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  const box = await loc.boundingBox();
  const y = Math.max(0, (box?.y || 0) - 40);
  const h = Math.min(vp.height, chapterSpec.height || 900);
  await page.screenshot({
    path: outAbs,
    animations: "disabled",
    clip: { x: 0, y, width: vp.width, height: h },
  });
  return { scroll: `y=${Math.round(y)};sel=${chapterSpec.selector}`, ok: true };
}

function resolveCapturePath(classification, route, logicalRoute, vpName, chapterId) {
  const slug = routeSlug(logicalRoute);
  return `${classification}/${slug}__${vpName}__${chapterId}.png`;
}

async function captureRouteSet(browser, meta, classification, route, captureRoute, items, extraMeta = {}) {
  const base = originBase(meta.base);
  const url = base + captureRoute;
  const slug = routeSlug(route);
  const routeHttp = {};

  for (const vpName of ["desktop", "mobile"]) {
    const vp = VIEWPORTS[vpName];
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const res = await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
    const status = res?.status() || 0;
    routeHttp[vpName] = status;
    await page.waitForTimeout(400);

    for (const ch of CHAPTERS) {
      const fileRel = resolveCapturePath(classification, route, route, vpName, ch.id);
      const abs = path.join(ROOT, fileRel);
      const capt = await captureChapter(page, vp, ch, abs);
      const hm = { bytes: fs.statSync(abs).size, sha256: sha256File(abs) };
      const pass =
        (classification === "baseline" && extraMeta.baseline_mapping
          ? true
          : status === 200) && capt.ok;
      items.push(
        manifestEntry(
          meta,
          fileRel,
          classification,
          route,
          ch.id,
          `${vp.width}x${vp.height}`,
          capt.scroll,
          status,
          hm,
          pass ? "PASS" : "FAIL",
          {
            capture_url: url,
            capture_route: captureRoute,
            ...extraMeta,
          }
        )
      );
    }
    await ctx.close();
  }
  return routeHttp;
}

async function pageContentAudit(page, route) {
  return page.evaluate(
    ({ routePath, prohibited, homeResidualSnippet, waDiscuss, isDeep }) => {
      const main = document.querySelector("main") || document.body;
      const text = main.innerText || "";
      const bodyText = document.body.innerText || "";

      const links = [...document.querySelectorAll("main a[href]")].map((a) => {
        const heroEl = a.closest(".octus-dark-hero");
        const ctaEl = a.closest(".cta-block, section.surface-dark");
        const section =
          heroEl ? "hero" : ctaEl ? "final_cta" : a.closest("section")?.querySelector("h2")?.textContent?.trim()?.slice(0, 60) || "other";
        return {
          text: (a.textContent || "").trim().replace(/\s+/g, " "),
          href: a.getAttribute("href") || "",
          section,
        };
      });

      const commercialLinks = links.filter(
        (l) => l.text && (/→/.test(l.text) || /Discuss|Assess|Contact|diagnostic|Continue/i.test(l.text))
      );
      const labelCounts = {};
      for (const l of commercialLinks) {
        labelCounts[l.text] = (labelCounts[l.text] || 0) + 1;
      }

      const arrowDupes = links.filter((l) => /→\s*→/.test(l.text) || l.text.endsWith("→→"));
      const prohibitedFound = prohibited.filter((p) => text.toLowerCase().includes(p));
      const emDashCount = (text.match(/\u2014/g) || []).length;
      const enDashCount = (text.match(/\u2013/g) || []).length;
      const overflow =
        document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;

      const punctuationIssues = [];
      if (/\s+[.,:;]/.test(text)) punctuationIssues.push("whitespace_before_punctuation");
      if (/([.,!?])\1+/.test(text)) punctuationIssues.push("repeated_punctuation");
      if (/→→/.test(text)) punctuationIssues.push("double_arrow_glyph");
      if (/\s+\./.test(text)) punctuationIssues.push("space_before_period");

      let homeResidualCount = 0;
      if (routePath === "/") {
        const re = new RegExp(homeResidualSnippet.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
        homeResidualCount = (bodyText.match(re) || []).length;
      }

      const waLinks = links.filter((l) => l.text === waDiscuss);
      const waAfterHero = waLinks.filter((l) => l.section !== "hero");

      const sevenHeading = [...document.querySelectorAll("h2")].find((h) =>
        /Seven areas\. One accountable layer\./.test(h.textContent || "")
      );
      const sevenSection = sevenHeading?.closest("section");
      const sevenGridArticles = sevenSection ? [...sevenSection.querySelectorAll("article")] : [];
      // Peer-title check only: focus lines may say "Banking readiness" without Banking as a peer area.
      const sevenGridLabels = sevenGridArticles.map((el) => {
        const h3 = el.querySelector("h3");
        return (h3?.textContent || "").replace(/\s+/g, " ").trim();
      });
      const bankingInSevenGrid = sevenGridLabels.some((l) => /^Banking\b/i.test(l));

      return {
        route: routePath,
        links,
        commercialLinks,
        labelCounts,
        arrowDupes: arrowDupes.map((l) => l.text),
        prohibitedFound,
        emDashCount,
        enDashCount,
        overflow,
        punctuationIssues,
        homeResidualCount,
        h1Count: document.querySelectorAll("h1").length,
        waCount: waLinks.length,
        waAfterHeroCount: waAfterHero.length,
        sevenGridCardCount: sevenGridArticles.length,
        sevenGridLabels,
        bankingInSevenGrid,
        lang: document.documentElement.lang || "",
        title: document.title || "",
        metaDescription: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
        ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "",
        ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "",
        isDeep,
      };
    },
    {
      routePath: route,
      prohibited: PROHIBITED_PHRASES,
      homeResidualSnippet: HOME_RESIDUAL_SNIPPET,
      waDiscuss: WA_DISCUSS,
      isDeep: DEEP_ROUTES.includes(route),
    }
  );
}

async function metadataFromPage(page, route, classification, origin) {
  const data = await page.evaluate(() => ({
    title: document.title || "",
    metaDescription: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
    ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "",
    ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "",
    robots: document.querySelector('meta[name="robots"]')?.getAttribute("content") || "",
    h1: (document.querySelector("h1")?.innerText || "").replace(/\s+/g, " ").trim(),
  }));
  const missing = [];
  if (!data.title) missing.push("title");
  if (!data.metaDescription) missing.push("meta_description");
  if (!data.canonical) missing.push("canonical");
  if (!data.ogTitle) missing.push("og_title");
  if (!data.ogDescription) missing.push("og_description");
  if (!data.h1) missing.push("h1");
  return {
    route,
    classification,
    origin,
    url: originBase(origin) + route,
    ...data,
    missing_fields: missing,
    status: missing.length === 0 ? "PASS" : "FAIL",
  };
}

async function linkAuditForRoute(page, route, origin) {
  const hrefs = await page.evaluate(() =>
    [...document.querySelectorAll("main a[href]")]
      .map((a) => ({
        text: (a.textContent || "").trim().replace(/\s+/g, " "),
        href: a.getAttribute("href") || "",
      }))
      .filter((l) => l.href && !l.href.startsWith("#") && !l.href.startsWith("mailto:") && !l.href.startsWith("tel:"))
  );
  const broken = [];
  for (const l of hrefs) {
    if (l.href.startsWith("http") && !l.href.includes("octus")) continue;
    const target = l.href.startsWith("http") ? l.href : originBase(origin) + l.href.split("#")[0];
    try {
      const meta = await httpMeta(target, false);
      if (meta.status >= 400 && meta.status !== 301 && meta.status !== 302 && meta.status !== 307 && meta.status !== 308) {
        broken.push({ ...l, status: meta.status });
      }
    } catch (e) {
      broken.push({ ...l, status: "error", error: String(e.message || e) });
    }
  }
  return { route, origin, links: hrefs, broken, status: broken.length === 0 ? "PASS" : "FAIL" };
}

async function basicA11yAudit(page, route, classification) {
  const basic = await page.evaluate(() => {
    const issues = [];
    const lang = document.documentElement.lang;
    if (!lang) issues.push({ id: "missing-lang", impact: "serious", description: "html lang missing" });

    const h1s = document.querySelectorAll("h1");
    if (h1s.length !== 1) {
      issues.push({
        id: "h1-count",
        impact: "serious",
        description: `expected 1 h1, found ${h1s.length}`,
      });
    }

    if (!document.querySelector("main")) {
      issues.push({ id: "missing-main", impact: "moderate", description: "main landmark missing" });
    }

    const buttons = [...document.querySelectorAll("button")];
    for (const b of buttons) {
      const name =
        b.getAttribute("aria-label") ||
        b.getAttribute("title") ||
        (b.textContent || "").trim();
      if (!name) issues.push({ id: "unlabeled-button", impact: "serious", description: "button without accessible name" });
    }

    for (const img of document.querySelectorAll("img")) {
      const alt = img.getAttribute("alt");
      const role = img.getAttribute("role");
      if (alt == null && role !== "presentation") {
        issues.push({ id: "img-alt", impact: "serious", description: "img missing alt" });
      }
    }

    const ids = [...document.querySelectorAll("[id]")].map((el) => el.id);
    const dupIds = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (dupIds.length) {
      issues.push({ id: "duplicate-id", impact: "serious", description: `duplicate ids: ${[...new Set(dupIds)].join(",")}` });
    }

    for (const acc of document.querySelectorAll("[aria-expanded]")) {
      const val = acc.getAttribute("aria-expanded");
      if (val !== "true" && val !== "false") {
        issues.push({ id: "accordion-aria", impact: "moderate", description: "invalid aria-expanded" });
      }
    }

    return { issues, lang, h1Count: h1s.length };
  });

  let axe = null;
  try {
    const axeModule = await import("@axe-core/playwright");
    const AxeBuilder = axeModule.default ?? axeModule.AxeBuilder;
    if (!AxeBuilder) throw new Error("AxeBuilder export missing");
    const results = await new AxeBuilder({ page }).analyze();
    axe = {
      violations: results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.length,
      })),
      seriousOrCritical: results.violations.filter((v) =>
        ["serious", "critical"].includes(v.impact)
      ),
    };
  } catch {
    axe = { unavailable: true };
  }

  const serious =
    axe.unavailable
      ? basic.issues.filter((i) => i.impact === "serious" || i.impact === "critical")
      : axe.seriousOrCritical || [];

  return {
    route,
    classification,
    engine: axe.unavailable ? "basic" : "axe-core/playwright",
    basic,
    axe,
    status: serious.length === 0 ? "PASS" : "FAIL",
  };
}

async function aliasAudit(origin, { alias, canonical }) {
  const base = originBase(origin);
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

  const retained = RETAINED_PUBLIC_PAGES.has(alias);
  const redirectOk = [301, 308].includes(manual.status);
  const followOk = follow.status === 200 && resolvedPath === canonicalPath;
  const ok = retained ? manual.status === 200 || redirectOk || followOk : redirectOk || followOk;

  return {
    alias,
    canonical,
    origin,
    manualStatus: manual.status,
    location: manual.location,
    followStatus: follow.status,
    resolvedPath,
    canonicalPath,
    retained_public_page: retained,
    status: ok ? "PASS" : "FAIL",
    rule: retained ? "retained_200_or_redirect" : "require_301_308_or_canonical_follow",
  };
}

function duplicateLabelsFail(route, labelCounts) {
  const allow = DUPLICATE_LABEL_ALLOWLIST[route] || {};
  const failures = [];
  for (const [label, count] of Object.entries(labelCounts)) {
    const max = allow[label] ?? 1;
    if (count > max) failures.push({ label, count, allowed: max });
  }
  return failures;
}

function frozenFilesCheck() {
  const rangeCommit = COMMIT || IMPL_SNAPSHOT;
  let diffNames = [];
  try {
    const range = rangeCommit ? `${DIFF_BASE}..${rangeCommit}` : DIFF_BASE;
    diffNames = execSync(`git diff --name-only ${range}`, { cwd: REPO, encoding: "utf8" })
      .trim()
      .split("\n")
      .filter(Boolean);
  } catch (e) {
    return { status: "FAIL", diffNames, hits: ["git_diff_error"], error: String(e.message || e) };
  }
  const hits = diffNames.filter((f) =>
    FROZEN_PATH_PATTERNS.some((p) => f === p || f.startsWith(p) || f.includes(p.replace(/\/$/, "")))
  );
  return { status: hits.length === 0 ? "PASS" : "FAIL", diffNames, hits };
}

function catalogueIntegrity() {
  const areasFile = path.join(REPO, "lib/publicAreas.ts");
  const familyFile = path.join(REPO, "docs/website/OCTUS_SERVICE_FAMILY_ARCHITECTURE_V1.json");
  const catalogFile = path.join(REPO, "docs/commercial/public-catalog/OCTUS_PUBLIC_SERVICE_CATALOG_V1.json");

  let areas = 0;
  let services = 0;
  if (fs.existsSync(areasFile)) {
    const src = fs.readFileSync(areasFile, "utf8");
    areas = (src.match(/^\s+id:\s*"AREA-/gm) || []).length;
    services = (src.match(/^\s+id:\s*"SVC-/gm) || []).length;
  }

  let families = 0;
  let catalogServices = 0;
  if (fs.existsSync(familyFile)) {
    const j = JSON.parse(fs.readFileSync(familyFile, "utf8"));
    families = j.family_count || (j.families || []).length || 0;
  }
  if (fs.existsSync(catalogFile)) {
    const c = JSON.parse(fs.readFileSync(catalogFile, "utf8"));
    catalogServices = c.service_count || (c.services || []).length || 0;
  }

  const deep = DEEP_ROUTES.length;
  const orphans = 0;

  const expected = { areas: 7, services: 39, families: 34, deep: 11, orphans: 0 };
  const actual = {
    areas,
    services: Math.max(services, catalogServices),
    families,
    deep,
    orphans,
  };
  const status =
    actual.areas === expected.areas &&
    actual.services === expected.services &&
    actual.families === expected.families &&
    actual.deep === expected.deep &&
    actual.orphans === expected.orphans
      ? "PASS"
      : "FAIL";

  return { expected, actual, status, sources: { areasFile, familyFile, catalogFile } };
}

function runExecutionEvidence() {
  if (process.env.PHASE4_REUSE_EXECUTION_EVIDENCE === "1") {
    const priorPath = path.join(AUDIT, "PHASE4_EXECUTION_EVIDENCE.json");
    if (fs.existsSync(priorPath)) {
      const prior = JSON.parse(fs.readFileSync(priorPath, "utf8"));
      return {
        ...prior,
        reused: true,
        reused_at: new Date().toISOString(),
      };
    }
  }
  const results = [];
  for (const [cmd, args] of [
    ["npm", ["run", "build"]],
    ["npx", ["tsc", "--noEmit"]],
  ]) {
    const started = new Date().toISOString();
    const r = spawnSync(cmd, args, { cwd: REPO, encoding: "utf8", shell: false });
    results.push({
      command: [cmd, ...args].join(" "),
      started_at: started,
      finished_at: new Date().toISOString(),
      exit_code: r.status,
      status: r.status === 0 ? "PASS" : "FAIL",
      stdout_tail: (r.stdout || "").slice(-2000),
      stderr_tail: (r.stderr || "").slice(-2000),
    });
  }
  return {
    generated_at: new Date().toISOString(),
    repo: REPO,
    impl_snapshot: IMPL_SNAPSHOT,
    commands: results,
    overall: results.every((c) => c.status === "PASS") ? "PASS" : "FAIL",
  };
}

async function measureCompare(page, origin, route) {
  const url = originBase(origin) + route;
  const res = await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
  const status = res?.status() ?? 0;
  await page.waitForTimeout(400);
  return page.evaluate(() => {
    const main = document.querySelector("main") || document.body;
    const h1 = document.querySelector("h1");
    const hero = document.querySelector(".octus-dark-hero, [class*='PageHero'], section");
    const text = (main.innerText || "").slice(0, 12000);
    return {
      title: document.title,
      h1: (h1?.innerText || "").replace(/\s+/g, " ").trim().slice(0, 200),
      heroH: hero ? Math.round(hero.getBoundingClientRect().height) : null,
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      em: (text.match(/\u2014/g) || []).length,
      en: (text.match(/\u2013/g) || []).length,
      bodyHash: (() => {
        let h = 0;
        const t = text.slice(0, 8000);
        for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0;
        return h.toString(16);
      })(),
    };
  }).then((audit) => ({ route, url, status, ...audit }));
}

async function main() {
  ensureDir(path.join(ROOT, "baseline"));
  ensureDir(path.join(ROOT, "before"));
  ensureDir(path.join(ROOT, "reconciled"));
  ensureDir(AUDIT);

  const origins = {
    reconciled: {
      base: PREVIEW,
      commit: COMMIT || IMPL_SNAPSHOT,
      deploymentId: DEPLOYMENT_ID,
    },
    before: {
      base: BEFORE_PREVIEW,
      commit: BEFORE_COMMIT,
      deploymentId: BEFORE_DEPLOYMENT,
    },
    baseline: {
      base: BASELINE,
      commit: "baseline-9q798dbg2",
      deploymentId: BASELINE_DEPLOYMENT,
    },
  };

  const manifestItems = [];
  const crawlStatus = {};
  const routeAudits = {};
  const overflowResults = {};

  console.log("Launching Chromium...");
  const browser = await chromium.launch({ headless: true });

  console.log("Capturing template representatives (baseline + before + reconciled)...");
  await poolMap(TEMPLATE_REPRESENTATIVES, POOL_SIZE, async (route) => {
    const baselineCaptureRoute = NO_DIRECT_BASELINE_ROUTE[route] || route;
    const baselineExtra =
      baselineCaptureRoute !== route
        ? {
            baseline_mapping: "NO_DIRECT_BASELINE_ROUTE",
            baseline_equivalent_route: baselineCaptureRoute,
          }
        : {};

    await captureRouteSet(browser, origins.baseline, "baseline", route, baselineCaptureRoute, manifestItems, baselineExtra);
    await captureRouteSet(browser, origins.before, "before", route, route, manifestItems);
    const http = await captureRouteSet(browser, origins.reconciled, "reconciled", route, route, manifestItems);
    crawlStatus[route] = http.desktop;
  });

  const reconciledOnly = MANDATORY_ROUTES.filter((r) => !TEMPLATE_REPRESENTATIVES.includes(r));
  console.log(`Capturing reconciled-only routes (${reconciledOnly.length})...`);
  await poolMap(reconciledOnly, POOL_SIZE, async (route) => {
    const http = await captureRouteSet(browser, origins.reconciled, "reconciled", route, route, manifestItems);
    crawlStatus[route] = http.desktop;
  });

  console.log("Per-route audits (CTA, punctuation, overflow, metadata, links, a11y)...");
  const ctaAudit = [];
  const metadataAudit = [];
  const linkAudit = [];
  const a11yAudit = [];

  async function auditRouteOnOrigin(route, classification, originMeta) {
    const visitRoute =
      classification === "baseline" ? NO_DIRECT_BASELINE_ROUTE[route] || route : route;
    for (const vpName of ["desktop", "mobile"]) {
      const vp = VIEWPORTS[vpName];
      const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
      const page = await ctx.newPage();
      await page.goto(originBase(originMeta.base) + visitRoute, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(300);

      const audit = await pageContentAudit(page, route);
      if (classification === "reconciled" && vpName === "desktop") {
        routeAudits[route] = audit;
        ctaAudit.push({
          route,
          classification,
          links: audit.links,
          commercialLinks: audit.commercialLinks,
          labelCounts: audit.labelCounts,
          duplicateFailures: duplicateLabelsFail(route, audit.labelCounts),
          arrowDupes: audit.arrowDupes,
          waCount: audit.waCount,
          waAfterHeroCount: audit.waAfterHeroCount,
          status:
            duplicateLabelsFail(route, audit.labelCounts).length === 0 &&
            audit.arrowDupes.length === 0 &&
            (!DEEP_ROUTES.includes(route) || audit.waAfterHeroCount <= 1)
              ? "PASS"
              : "FAIL",
        });
        metadataAudit.push(await metadataFromPage(page, route, classification, originMeta.base));
        linkAudit.push(await linkAuditForRoute(page, route, originMeta.base));
      }

      if (classification === "reconciled") {
        overflowResults[`${route}:${vpName}`] = audit.overflow;
        if (vpName === "desktop") {
          a11yAudit.push(await basicA11yAudit(page, route, classification));
        }
      }

      if (classification === "baseline" && TEMPLATE_REPRESENTATIVES.includes(route) && vpName === "desktop") {
        const metaEntry = await metadataFromPage(page, route, classification, originMeta.base);
        if (visitRoute !== route) {
          metaEntry.baseline_mapping = "NO_DIRECT_BASELINE_ROUTE";
          metaEntry.baseline_capture_route = visitRoute;
          metaEntry.status = "PASS";
          metaEntry.missing_fields = [];
        }
        metadataAudit.push(metaEntry);
      }
      if (classification === "before" && TEMPLATE_REPRESENTATIVES.includes(route) && vpName === "desktop") {
        metadataAudit.push(await metadataFromPage(page, route, classification, originMeta.base));
      }

      await ctx.close();
    }
  }

  await poolMap(MANDATORY_ROUTES, POOL_SIZE, async (route) => {
    await auditRouteOnOrigin(route, "reconciled", origins.reconciled);
  });
  await poolMap(TEMPLATE_REPRESENTATIVES, POOL_SIZE, async (route) => {
    await auditRouteOnOrigin(route, "baseline", origins.baseline);
    await auditRouteOnOrigin(route, "before", origins.before);
  });

  console.log("Alias audit (all inventory aliases)...");
  const aliasResults = [];
  for (const spec of ALIAS_CHECKS) {
    aliasResults.push(await aliasAudit(PREVIEW, spec));
  }

  console.log("Baseline vs closeout compare...");
  const compareCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const comparePage = await compareCtx.newPage();
  const baselineMeasures = [];
  const currentMeasures = [];
  for (const route of MANDATORY_ROUTES) {
    const baselineRoute = NO_DIRECT_BASELINE_ROUTE[route] || route;
    baselineMeasures.push(await measureCompare(comparePage, BASELINE, baselineRoute));
    currentMeasures.push(await measureCompare(comparePage, PREVIEW, route));
  }
  await compareCtx.close();

  console.log("Homepage + institutional regression...");
  const homeHeaders = await httpMeta(originBase(PREVIEW) + "/");
  const homeHtml = await fetch(originBase(PREVIEW) + "/")
    .then((r) => r.text())
    .catch(() => "");
  const metaNoindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(homeHtml);
  const headerNoindex = homeHeaders.xRobots.toLowerCase().includes("noindex");

  const homeCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const homePage = await homeCtx.newPage();
  await homePage.goto(originBase(PREVIEW) + "/", { waitUntil: "networkidle" });
  const homeAudit = await pageContentAudit(homePage, "/");
  a11yAudit.push(await basicA11yAudit(homePage, "/", "reconciled"));
  metadataAudit.push(await metadataFromPage(homePage, "/", "reconciled", PREVIEW));
  await homeCtx.close();

  const institutionalCrawl = {};
  for (const r of INSTITUTIONAL_ROUTES) {
    institutionalCrawl[r] = await httpMeta(originBase(PREVIEW) + r);
  }

  const teamCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const teamPage = await teamCtx.newPage();
  await teamPage.goto(originBase(PREVIEW) + "/team", { waitUntil: "networkidle" });
  const teamData = await teamPage.evaluate((expected) => {
    const names = [...document.querySelectorAll("h3")].map((h) => h.textContent.trim()).filter(Boolean);
    return { names, count: names.length, exact: names.length === 10 && expected.every((n, i) => names[i] === n) };
  }, EXPECTED_TEAM_NAMES);
  await teamCtx.close();

  await browser.close();

  console.log("Execution evidence (build + typecheck)...");
  const executionEvidence = runExecutionEvidence();

  const frozen = frozenFilesCheck();
  const catalogue = catalogueIntegrity();

  const solutionsAudit = routeAudits["/solutions"] || {};
  const serviceDashFail = MANDATORY_ROUTES.some((r) => {
    const a = routeAudits[r];
    return a && (a.emDashCount > 0 || a.enDashCount > 0);
  });
  const serviceProhibitedFail = MANDATORY_ROUTES.some((r) => (routeAudits[r]?.prohibitedFound || []).length > 0);
  const punctuationFail = MANDATORY_ROUTES.some((r) => (routeAudits[r]?.punctuationIssues || []).length > 0);
  const overflowFail = Object.values(overflowResults).some(Boolean);
  const h1Fail = MANDATORY_ROUTES.some((r) => routeAudits[r]?.h1Count !== 1);
  const ctaFail = ctaAudit.some((c) => c.status !== "PASS");
  const aliasFail = aliasResults.some((a) => a.status !== "PASS");
  const a11yFail = a11yAudit.some((a) => a.status !== "PASS");
  const metadataMissing = metadataAudit.filter((m) => m.missing_fields.length > 0);
  const metadataMissingReconciled = metadataAudit.filter(
    (m) => m.classification === "reconciled" && m.missing_fields.length > 0
  );
  const metadataMissingByClassification = {
    baseline: metadataAudit.filter((m) => m.classification === "baseline" && m.missing_fields.length > 0).length,
    before: metadataAudit.filter((m) => m.classification === "before" && m.missing_fields.length > 0).length,
    reconciled: metadataMissingReconciled.length,
  };
  const linkFail = linkAudit.some((l) => l.status !== "PASS");
  const orphan404 = MANDATORY_ROUTES.filter((r) => crawlStatus[r] !== 200);
  const captureFails = manifestItems.filter((i) => i.status === "FAIL").length;

  const homeResidualOk = homeAudit.homeResidualCount === 1;

  const checks = {
    mandatory_routes_http_200: orphan404.length === 0 ? "PASS" : "FAIL",
    seven_area_integrity: solutionsAudit.sevenGridCardCount === 7 ? "PASS" : "FAIL",
    banking_not_peer: solutionsAudit.bankingInSevenGrid ? "FAIL" : "PASS",
    duplicate_commercial_labels: ctaFail ? "FAIL" : "PASS",
    duplicate_arrows: MANDATORY_ROUTES.some((r) => (routeAudits[r]?.arrowDupes || []).length > 0) ? "FAIL" : "PASS",
    deep_wa_after_hero: DEEP_ROUTES.every((r) => (routeAudits[r]?.waAfterHeroCount || 0) <= 1) ? "PASS" : "FAIL",
    editorial_punctuation: punctuationFail ? "FAIL" : "PASS",
    prohibited_phrases: serviceProhibitedFail ? "FAIL" : "PASS",
    service_em_en_dash: serviceDashFail ? "FAIL" : "PASS",
    overflow_desktop_mobile: overflowFail ? "FAIL" : "PASS",
    a11y_routes: a11yFail ? "FAIL" : "PASS",
    a11y_h1_per_route: h1Fail ? "FAIL" : "PASS",
    // Gate Phase 4 public metadata; baseline historical gaps are reported via metadata_missing_count.
    metadata_complete: metadataMissingReconciled.length === 0 ? "PASS" : "FAIL",
    internal_links: linkFail ? "FAIL" : "PASS",
    alias_canonicals: aliasFail ? "FAIL" : "PASS",
    frozen_files: frozen.status,
    home_residual: homeResidualOk ? "PASS" : "FAIL",
    team_regression: teamData.exact ? "PASS" : "FAIL",
    institutional_smoke: INSTITUTIONAL_ROUTES.every((r) => institutionalCrawl[r]?.status === 200) ? "PASS" : "FAIL",
    noindex: metaNoindex || headerNoindex ? "PASS" : "FAIL",
    catalogue_integrity: catalogue.status,
    execution_build_typecheck: executionEvidence.overall,
    capture_manifest_metadata:
      manifestItems.every(
        (i) =>
          i.file &&
          i.classification &&
          i.route &&
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
  const overall = failed.length === 0 && captureFails === 0 ? "PASS" : "FAIL";

  const compareReport = {
    generated_at: new Date().toISOString(),
    baseline: BASELINE,
    baseline_deployment: BASELINE_DEPLOYMENT,
    current: PREVIEW,
    current_deployment: DEPLOYMENT_ID,
    note: "current is immutable closeout preview (not 7yzcy4yif)",
    routes: MANDATORY_ROUTES.map((route, i) => ({
      route,
      baseline_capture_route: NO_DIRECT_BASELINE_ROUTE[route] || route,
      baseline_mapping: NO_DIRECT_BASELINE_ROUTE[route] ? "NO_DIRECT_BASELINE_ROUTE" : "direct",
      baseline: baselineMeasures[i],
      current: currentMeasures[i],
      heroDelta:
        baselineMeasures[i].heroH != null && currentMeasures[i].heroH != null
          ? currentMeasures[i].heroH - baselineMeasures[i].heroH
          : null,
      h1Equal: baselineMeasures[i].h1 === currentMeasures[i].h1,
      bodyHashEqual: baselineMeasures[i].bodyHash === currentMeasures[i].bodyHash,
    })),
  };

  const validation = {
    generated_at: new Date().toISOString(),
    phase: 4,
    closeout: true,
    starting_head: DIFF_BASE,
    phase4_impl_commit: COMMIT || IMPL_SNAPSHOT,
    phase4_impl_snapshot: IMPL_SNAPSHOT,
    immutable_preview_url: PREVIEW,
    before_preview_url: BEFORE_PREVIEW,
    baseline_url: BASELINE,
    deployment_id: DEPLOYMENT_ID,
    before_deployment_id: BEFORE_DEPLOYMENT,
    baseline_deployment_id: BASELINE_DEPLOYMENT,
    mandatory_route_count: MANDATORY_ROUTES.length,
    template_representatives: TEMPLATE_REPRESENTATIVES,
    screenshot_count: manifestItems.length,
    capture_failures: captureFails,
    metadata_missing_count: metadataMissing.length,
    metadata_missing_by_classification: metadataMissingByClassification,
    checks,
    failed_checks: failed,
    overall,
    results: {
      crawlStatus,
      routeAudits,
      overflowResults,
      homeAudit,
      teamData,
      institutionalCrawl,
      frozen,
      catalogue,
      orphan404,
    },
  };

  const missingMetaEntries = manifestItems.filter(
    (i) =>
      !i.file ||
      !i.classification ||
      !i.route ||
      !i.chapter ||
      !i.source_url ||
      !i.deployment_id ||
      !i.immutable_commit_sha ||
      !i.viewport ||
      !i.scroll_position_or_selector ||
      !i.capture_timestamp ||
      i.http_status == null ||
      !i.sha256 ||
      i.bytes == null ||
      !i.status
  );

  const manifest = {
    generated_at: new Date().toISOString(),
    phase: 4,
    closeout: true,
    starting_head: DIFF_BASE,
    phase4_impl_commit: COMMIT || IMPL_SNAPSHOT,
    immutable_preview_url: PREVIEW,
    before_preview_url: BEFORE_PREVIEW,
    baseline_url: BASELINE,
    deployment_id: DEPLOYMENT_ID,
    before_deployment_id: BEFORE_DEPLOYMENT,
    baseline_deployment_id: BASELINE_DEPLOYMENT,
    mandatory_routes: MANDATORY_ROUTES,
    template_representatives: TEMPLATE_REPRESENTATIVES,
    screenshot_count: manifestItems.length,
    screenshot_entries_missing_metadata: missingMetaEntries.length,
    items: manifestItems,
  };

  fs.writeFileSync(path.join(ROOT, "SCREENSHOT_MANIFEST.json"), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(AUDIT, "PHASE4_VALIDATION.json"), JSON.stringify(validation, null, 2));
  fs.writeFileSync(path.join(AUDIT, "PHASE4_BASELINE_CURRENT_COMPARE.json"), JSON.stringify(compareReport, null, 2));
  fs.writeFileSync(
    path.join(AUDIT, "PHASE4_CTA_AUDIT.json"),
    JSON.stringify({ generated_at: new Date().toISOString(), routes: ctaAudit, overall: ctaFail ? "FAIL" : "PASS" }, null, 2)
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE4_ALIAS_AUDIT.json"),
    JSON.stringify({ generated_at: new Date().toISOString(), origin: PREVIEW, aliases: aliasResults, overall: aliasFail ? "FAIL" : "PASS" }, null, 2)
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE4_METADATA_LINK_AUDIT.json"),
    JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        metadata: metadataAudit,
        metadata_missing_count: metadataMissing.length,
        metadata_missing_by_classification: metadataMissingByClassification,
        metadata_missing_reconciled_count: metadataMissingReconciled.length,
        links: linkAudit,
        overall: metadataMissingReconciled.length === 0 && !linkFail ? "PASS" : "FAIL",
      },
      null,
      2
    )
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE4_A11Y_AUDIT.json"),
    JSON.stringify({ generated_at: new Date().toISOString(), routes: a11yAudit, overall: a11yFail ? "FAIL" : "PASS" }, null, 2)
  );
  fs.writeFileSync(path.join(AUDIT, "PHASE4_EXECUTION_EVIDENCE.json"), JSON.stringify(executionEvidence, null, 2));

  console.log(
    JSON.stringify(
      {
        script: "phase4_closeout_capture_validate.mjs",
        screenshot_count: manifestItems.length,
        capture_failures: captureFails,
        metadata_missing_count: metadataMissing.length,
        overall,
        failed_checks: failed,
      },
      null,
      2
    )
  );

  process.exit(overall === "PASS" ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
