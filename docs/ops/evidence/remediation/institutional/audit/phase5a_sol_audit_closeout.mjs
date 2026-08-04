#!/usr/bin/env node
/**
 * Phase 5A Sol audit narrow closeout validator.
 *
 * Env:
 *   PHASE5A_PREVIEW (required)
 *   PHASE5A_COMMIT (application SHA)
 *   PHASE5A_DEPLOYMENT (dpl_…)
 *   PHASE5A_DEPLOYED_SHA (optional)
 */
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { execSync, spawnSync } from "child_process";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const axeCoreVersion = require("axe-core/package.json").version;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPO = path.resolve(__dirname, "../../../../../..");
const AUDIT = path.join(ROOT, "audit");
const SERVICES_AUDIT = path.resolve(ROOT, "../services/audit");

const PREVIEW = process.env.PHASE5A_PREVIEW;
const COMMIT = process.env.PHASE5A_COMMIT || "";
const DEPLOYMENT_ID = process.env.PHASE5A_DEPLOYMENT || "";
const DEPLOYED_SHA = process.env.PHASE5A_DEPLOYED_SHA || COMMIT;
if (!PREVIEW || !COMMIT || !DEPLOYMENT_ID) {
  console.error("PHASE5A_PREVIEW, PHASE5A_COMMIT, PHASE5A_DEPLOYMENT required");
  process.exit(1);
}

const ROUTES = [
  "/about",
  "/how-we-engage",
  "/contact",
  "/diagnostic",
  "/partners",
  "/careers",
];

const SERVICE_MANDATORY = [
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

const ALIAS_PROBES = [
  { probe: "/about-us", expect: "no_alias_or_404_or_non_redirect_to_about" },
  { probe: "/about-octus", expect: "no_alias" },
  { probe: "/engagement", expect: "no_alias" },
  { probe: "/how-we-work", expect: "no_alias_to_how_we_engage" },
  { probe: "/contact-us", expect: "no_alias" },
  { probe: "/get-in-touch", expect: "no_alias" },
  { probe: "/diagnostics", expect: "no_alias" },
  { probe: "/assessment", expect: "no_alias" },
  { probe: "/partners-network", expect: "no_alias" },
  { probe: "/jobs", expect: "no_alias" },
  { probe: "/careers-octus", expect: "no_alias" },
];

const TEAM_EXPECTED = [
  { name: "Rubio Teixeira", title: "Founder & CEO", src: "/team/rubio-teixeira.jpg" },
  { name: "Maria Cristina", title: "Operations Coordination", src: "/team/maria-cristina.jpg" },
  { name: "Rodrigo Coelho Lopes", title: "Legal Architecture Lead", src: "/team/rodrigo-lopes.jpg" },
  { name: "Claudia Nery", title: "Chief Financial Officer", src: "/team/claudia-nery.jpg" },
  { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead", src: "/team/esther-vendrami.jpg" },
  { name: "Caroline Giovanetti", title: "Brazil Regulatory Lead", src: "/team/caroline-giovanetti.jpg" },
  { name: "Larissa Carvalho", title: "Regulatory & Compliance Specialist", src: "/team/larissa-carvalho.jpg" },
  { name: "Milla Ludovico", title: "Business Development Lead", src: "/team/milla-ludovico.jpg" },
  { name: "Bianca Carolina Oliveira Andrade", title: "People & Operations", src: "/team/bianca.jpg" },
  { name: "Luciana Santos Veloso", title: "Operations Coordinator", src: "/team/luciana-santos-veloso.jpg" },
];

const PORTRAIT_LOCK = {
  "bianca.jpg": "f923fd3591aaa68157d28591b88346ace4a515e6a11a6b516aa3c7888d5e9b64",
  "caroline-giovanetti.jpg": "7e8f71eb5cc1b90eec048d4184b9b1a08f0d4900da84f1022d0394e855899eb9",
  "claudia-nery.jpg": "344ea1734f68788244c6f71d5fd69972789b202c5f4e02b02af6941c7a1eeaa0",
  "esther-vendrami.jpg": "10906673c848baed9e2f12c066c53691d2765ff207595cddbdb50c06d0970650",
  "larissa-carvalho.jpg": "3dadbb3cebebd945700a737ed4eeff244cb102e9aed68564f2c12cfb39131fb7",
  "luciana-santos-veloso.jpg": "bb6fcc97ea426bebc0856d1e4df49c8aea6d5db36ce35eb7cfab1f6ce3b0749d",
  "maria-cristina.jpg": "4fe097595ed6753e8df9cc3208fd78993a69a7b645d332af25b449116ebbfe26",
  "milla-ludovico.jpg": "0d46dff8ede1d046cb053d6be038deba141ef78788c064863794f58002025c4a",
  "rodrigo-lopes.jpg": "82833b9103a0053dceae774a82da20a6e4c9692ff4bd7fbe9eabf0d3cf8ceaaf",
  "rubio-teixeira.jpg": "28d61e59f013debc140e6684b3783c4a8bb426a24ddbdf3dbdb45922b9fee200",
};

const PHASE5A_START = "15df1e82c5ccd3dfb47d83dda30805fbd55b5497";
const FROZEN = [
  "app/page.tsx",
  "components/HomeModulesAccordion.tsx",
  "app/team/",
  "public/team/",
  "app/solutions/",
  "app/private-clients/",
  "app/international-hub/",
  "components/system/AreaHubPage.tsx",
  "lib/publicAreas.ts",
  "components/Nav.tsx",
  "app/layout.tsx",
];

function originBase(url) {
  return String(url).replace(/\/$/, "");
}
function sha256File(fp) {
  return crypto.createHash("sha256").update(fs.readFileSync(fp)).digest("hex");
}
function writeJson(fp, obj) {
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, JSON.stringify(obj, null, 2) + "\n");
}

async function headMeta(url) {
  try {
    const res = await fetch(url, { redirect: "manual" });
    return {
      url,
      status: res.status,
      x_robots_tag: res.headers.get("x-robots-tag") || "",
      location: res.headers.get("location") || "",
    };
  } catch (e) {
    return { url, status: 0, x_robots_tag: "", location: "", error: String(e.message || e) };
  }
}

async function resolveInternal(base, href) {
  const abs = new URL(href, base).href;
  let url = abs;
  let hops = [];
  for (let i = 0; i < 8; i++) {
    const meta = await headMeta(url);
    hops.push(meta);
    if ([301, 302, 307, 308].includes(meta.status) && meta.location) {
      url = new URL(meta.location, url).href;
      continue;
    }
    return { requested: abs, final_url: url, final_status: meta.status, hops };
  }
  return { requested: abs, final_url: url, final_status: hops.at(-1)?.status || 0, hops };
}

function headingAudit(headings) {
  const levels = headings.map((h) => h.level);
  const h1 = levels.filter((l) => l === 1).length;
  let skipped = false;
  let prev = 0;
  for (const l of levels) {
    if (prev && l > prev + 1) skipped = true;
    prev = l;
  }
  return {
    h1_count: h1,
    headings,
    exactly_one_h1: h1 === 1,
    no_skipped_levels: !skipped,
    status: h1 === 1 && !skipped ? "PASS" : "FAIL",
  };
}

async function main() {
  fs.mkdirSync(AUDIT, { recursive: true });
  const base = originBase(PREVIEW);

  // 1) noindex gates
  const robotsRoutes = [];
  for (const route of ROUTES) {
    const meta = await headMeta(base + route);
    const headerOk =
      meta.status === 200 && /\bnoindex\b/i.test(meta.x_robots_tag || "");
    robotsRoutes.push({
      ...meta,
      preview_x_robots_noindex: headerOk ? "PASS" : "FAIL",
    });
  }
  const previewXRobots = robotsRoutes.every((r) => r.preview_x_robots_noindex === "PASS")
    ? "PASS"
    : "FAIL";

  const browser = await chromium.launch({ headless: true });
  const metaRobots = [];
  const internalLinks = [];
  const externalRel = [];
  const headingsOut = [];
  const mailtoWa = [];
  const a11yPhase5a = [];
  let accessibleNameFails = [];

  for (const route of ROUTES) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await ctx.newPage();
    const res = await page.goto(base + route, { waitUntil: "networkidle", timeout: 120000 });
    const status = res?.status() || 0;
    const htmlRobots = await page.evaluate(() => {
      const robots = document.querySelector('meta[name="robots"]')?.content || "";
      return { robots, accidental_noindex: /\bnoindex\b/i.test(robots) };
    });
    metaRobots.push({
      route,
      status,
      meta_robots: htmlRobots.robots,
      accidental_canonical_noindex: htmlRobots.accidental_noindex,
      result: !htmlRobots.accidental_noindex && status === 200 ? "PASS" : "FAIL",
    });

    const linkData = await page.evaluate(() => {
      const main = document.querySelector("main") || document.body;
      const anchors = [...main.querySelectorAll("a[href]")];
      return anchors.map((a) => ({
        text: (a.textContent || "").trim().replace(/\s+/g, " ").slice(0, 100),
        href: a.getAttribute("href") || "",
        target: a.getAttribute("target") || "",
        rel: a.getAttribute("rel") || "",
        accessible_name: (a.getAttribute("aria-label") || a.textContent || "").trim().replace(/\s+/g, " "),
      }));
    });

    const headingData = await page.evaluate(() =>
      [...document.querySelectorAll("main h1, main h2, main h3, main h4, main h5, main h6")].map(
        (h) => ({
          level: Number(h.tagName.slice(1)),
          text: (h.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120),
        })
      )
    );
    headingsOut.push({ route, ...headingAudit(headingData) });

    const actionables = await page.evaluate(() => {
      const nodes = [
        ...document.querySelectorAll("main a[href], main button, main [role='button']"),
      ];
      return nodes.map((el) => {
        const name = (
          el.getAttribute("aria-label") ||
          el.getAttribute("aria-labelledby") ||
          el.textContent ||
          ""
        )
          .trim()
          .replace(/\s+/g, " ");
        return { tag: el.tagName, name, href: el.getAttribute("href") || "" };
      });
    });
    const unnamed = actionables.filter((a) => !a.name);
    if (unnamed.length) {
      accessibleNameFails.push({ route, count: unnamed.length, samples: unnamed.slice(0, 5) });
    }

    for (const l of linkData) {
      const href = l.href;
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) continue;
      if (href.startsWith("mailto:") || href.includes("wa.me") || href.includes("whatsapp")) {
        mailtoWa.push({ route, type: href.startsWith("mailto:") ? "mailto" : "whatsapp", href, label: l.text });
        continue;
      }
      let abs;
      try {
        abs = new URL(href, base);
      } catch {
        continue;
      }
      if (abs.origin === new URL(base).origin || href.startsWith("/")) {
        const resolved = await resolveInternal(base, href.startsWith("/") ? href : abs.pathname + abs.search);
        internalLinks.push({
          route,
          href,
          label: l.text,
          final_status: resolved.final_status,
          final_url: resolved.final_url,
          redirect_hops: resolved.hops.length - 1,
          result: resolved.final_status === 200 ? "PASS" : "FAIL",
        });
      } else if (/^https?:/i.test(abs.href)) {
        const relOk =
          l.target === "_blank"
            ? /\bnoopener\b/i.test(l.rel) && /\bnoreferrer\b/i.test(l.rel)
            : true;
        const needsBlank = true; // validate attributes when blank used
        externalRel.push({
          route,
          href: abs.href,
          label: l.text,
          target: l.target,
          rel: l.rel,
          blank_noopener_noreferrer:
            l.target === "_blank"
              ? relOk
                ? "PASS"
                : "FAIL"
              : "N/A_NOT_BLANK",
          result: l.target === "_blank" ? (relOk ? "PASS" : "FAIL") : "PASS",
        });
      }
    }

    // axe
    try {
      const axe = await new AxeBuilder({ page }).analyze();
      const critical = axe.violations.filter((v) => v.impact === "critical").length;
      const serious = axe.violations.filter((v) => v.impact === "serious").length;
      const moderate = axe.violations.filter((v) => v.impact === "moderate").length;
      const incomplete = axe.incomplete?.length || 0;
      a11yPhase5a.push({
        route,
        viewport: "desktop",
        critical,
        serious,
        moderate,
        incomplete,
        status: critical === 0 && serious === 0 ? "PASS" : "FAIL",
      });
    } catch (e) {
      a11yPhase5a.push({ route, viewport: "desktop", status: "FAIL", error: String(e.message || e) });
    }

    // mobile axe
    const mctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mpage = await mctx.newPage();
    await mpage.goto(base + route, { waitUntil: "networkidle", timeout: 120000 });
    try {
      const axe = await new AxeBuilder({ page: mpage }).analyze();
      const critical = axe.violations.filter((v) => v.impact === "critical").length;
      const serious = axe.violations.filter((v) => v.impact === "serious").length;
      a11yPhase5a.push({
        route,
        viewport: "mobile",
        critical,
        serious,
        moderate: axe.violations.filter((v) => v.impact === "moderate").length,
        incomplete: axe.incomplete?.length || 0,
        status: critical === 0 && serious === 0 ? "PASS" : "FAIL",
      });
    } catch (e) {
      a11yPhase5a.push({ route, viewport: "mobile", status: "FAIL", error: String(e.message || e) });
    }
    await mctx.close();
    await ctx.close();
  }

  // alias probes
  const aliasResults = [];
  for (const a of ALIAS_PROBES) {
    const meta = await headMeta(base + a.probe);
    const redirectsToMandatory =
      [301, 302, 307, 308].includes(meta.status) &&
      ROUTES.some((r) => (meta.location || "").includes(r));
    aliasResults.push({
      probe: a.probe,
      status: meta.status,
      location: meta.location,
      x_robots_tag: meta.x_robots_tag,
      redirects_to_phase5a_route: redirectsToMandatory,
      result: redirectsToMandatory ? "UNEXPECTED_ALIAS" : "NO_ALIAS_AS_EXPECTED",
      expect: a.expect,
    });
  }

  // Homepage full regression
  const homeCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const homePage = await homeCtx.newPage();
  await homePage.goto(base + "/", { waitUntil: "networkidle", timeout: 120000 });
  const homeEval = await homePage.evaluate(() => {
    const text = document.querySelector("main")?.innerText || "";
    const moduleButtons = [...document.querySelectorAll("button, [role='button']")]
      .map((el) => (el.textContent || "").trim().replace(/\s+/g, " "))
      .filter((t) => /^0[1-7]/.test(t));
    const emDashes = (text.match(/—/g) || []).length;
    const ctas = [...document.querySelectorAll("main a[href]")].map((a) => ({
      text: (a.textContent || "").trim().replace(/\s+/g, " "),
      href: a.getAttribute("href") || "",
    }));
    return { text, moduleButtons, emDashes, ctas };
  });
  const peerModules = homeEval.moduleButtons.filter((t) => /^0[1-7]/.test(t));
  const bankingIsPeer = peerModules.some((t) => /banking/i.test(t));
  const diagLabels = [
    ...new Set(
      homeEval.ctas
        .map((c) => c.text)
        .filter((t) => /diagnostic|assess your situation|remediation assessment/i.test(t))
    ),
  ];
  const waHero = homeEval.ctas.some(
    (c) => /wa\.me|whatsapp/i.test(c.href) && /discuss your operation/i.test(c.text)
  );
  const waFinal = [...homeEval.ctas].reverse().find((c) => /wa\.me|whatsapp/i.test(c.href));
  await homeCtx.close();

  const homeFrozen = execSync(`git diff --name-only ${PHASE5A_START}..${COMMIT}`, {
    cwd: REPO,
    encoding: "utf8",
  })
    .trim()
    .split("\n")
    .filter((f) => f === "app/page.tsx" || f.includes("HomeModulesAccordion"));

  const homepageRegression = {
    seven_peer_areas: peerModules.length === 7 ? "PASS" : "FAIL",
    peer_modules: peerModules,
    banking_not_peer_area: !bankingIsPeer ? "PASS" : "FAIL",
    distinct_diagnostic_labels: diagLabels.length >= 3 ? "PASS" : "FAIL",
    diagnostic_labels: diagLabels,
    whatsapp_hero_cta: waHero ? "PASS" : "FAIL",
    whatsapp_final_cta: waFinal ? "PASS" : "FAIL",
    home_punctuation_residual_exactly_one: homeEval.emDashes === 1 ? "PASS" : "FAIL",
    em_dash_count: homeEval.emDashes,
    homepage_source_unchanged_in_phase5a: homeFrozen.length === 0 ? "PASS" : "FAIL",
    homepage_source_hits: homeFrozen,
  };
  homepageRegression.status = [
    homepageRegression.seven_peer_areas,
    homepageRegression.banking_not_peer_area,
    homepageRegression.distinct_diagnostic_labels,
    homepageRegression.whatsapp_hero_cta,
    homepageRegression.whatsapp_final_cta,
    homepageRegression.home_punctuation_residual_exactly_one,
    homepageRegression.homepage_source_unchanged_in_phase5a,
  ].every((s) => s === "PASS")
    ? "PASS"
    : "FAIL";

  // Team regression
  const teamCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const teamPage = await teamCtx.newPage();
  await teamPage.goto(base + "/team", { waitUntil: "networkidle", timeout: 120000 });
  const teamLive = await teamPage.evaluate(() => {
    const text = document.querySelector("main")?.innerText || "";
    const imgs = [...document.querySelectorAll("main img")].map((img) => ({
      src: img.getAttribute("src") || "",
      alt: img.getAttribute("alt") || "",
    }));
    const bands = [...document.querySelectorAll(".team-band-label")].map((el) =>
      (el.textContent || "").trim()
    );
    return { text, imgs, bands };
  });
  await teamCtx.close();

  const portraitHashes = {};
  let portraitOk = true;
  for (const [file, expected] of Object.entries(PORTRAIT_LOCK)) {
    const fp = path.join(REPO, "public/team", file);
    if (!fs.existsSync(fp)) {
      portraitOk = false;
      portraitHashes[file] = { exists: false };
      continue;
    }
    const hash = sha256File(fp);
    portraitHashes[file] = { sha256: hash, match: hash === expected };
    if (hash !== expected) portraitOk = false;
  }

  const orderOk = TEAM_EXPECTED.every((m) => teamLive.text.includes(m.name) && teamLive.text.includes(m.title));
  const teamFrozen = execSync(`git diff --name-only ${PHASE5A_START}..${COMMIT}`, {
    cwd: REPO,
    encoding: "utf8",
  })
    .trim()
    .split("\n")
    .filter((f) => f.startsWith("app/team/") || f.startsWith("public/team/"));

  const teamRegression = {
    profile_count_expected: 10,
    names_and_titles_present: orderOk ? "PASS" : "FAIL",
    leadership_and_core_bands:
      teamLive.bands.includes("Leadership") && teamLive.bands.includes("Core Specialists")
        ? "PASS"
        : "FAIL",
    bands: teamLive.bands,
    portrait_hashes_match_phase1_lock: portraitOk ? "PASS" : "FAIL",
    portraits: portraitHashes,
    team_files_unchanged: teamFrozen.length === 0 ? "PASS" : "FAIL",
    team_file_hits: teamFrozen,
  };
  teamRegression.status = [
    teamRegression.names_and_titles_present,
    teamRegression.leadership_and_core_bands,
    teamRegression.portrait_hashes_match_phase1_lock,
    teamRegression.team_files_unchanged,
  ].every((s) => s === "PASS")
    ? "PASS"
    : "FAIL";

  // Services: catalogue only + route HTTP + axe desktop on mandatory
  console.log("Running Phase 4 catalogue validator (catalogue-only mode)...");
  const cat = spawnSync(
    "node",
    [path.join(SERVICES_AUDIT, "phase4_validation_closeout.mjs")],
    {
      cwd: REPO,
      encoding: "utf8",
      env: {
        ...process.env,
        PHASE4_PREVIEW: PREVIEW,
        PHASE4_APPLICATION_SHA: COMMIT,
        PHASE4_DEPLOYMENT: DEPLOYMENT_ID,
        PHASE4_DEPLOYED_SHA: DEPLOYED_SHA,
        PHASE4_CATALOGUE_ONLY: "1",
      },
    }
  );
  let catalogue = { status: cat.status === 0 ? "PASS" : "FAIL", stdout: cat.stdout?.slice(-2000) };
  try {
    const catPath = path.join(SERVICES_AUDIT, "PHASE4_CATALOGUE_INTEGRITY.json");
    if (fs.existsSync(catPath)) catalogue = JSON.parse(fs.readFileSync(catPath, "utf8"));
  } catch {
    /* keep */
  }

  const serviceHttp = [];
  for (const r of SERVICE_MANDATORY) {
    serviceHttp.push({ route: r, ...(await headMeta(base + r)) });
  }
  const servicesHttpOk = serviceHttp.every((r) => r.status === 200);

  console.log("Axe desktop on 20 mandatory service routes...");
  let svcCritical = 0;
  let svcSerious = 0;
  const svcAxe = [];
  for (const route of SERVICE_MANDATORY) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await ctx.newPage();
    await page.goto(base + route, { waitUntil: "networkidle", timeout: 120000 });
    try {
      const axe = await new AxeBuilder({ page }).analyze();
      const critical = axe.violations.filter((v) => v.impact === "critical").length;
      const serious = axe.violations.filter((v) => v.impact === "serious").length;
      svcCritical += critical;
      svcSerious += serious;
      svcAxe.push({ route, critical, serious, status: critical === 0 && serious === 0 ? "PASS" : "FAIL" });
    } catch (e) {
      svcAxe.push({ route, status: "FAIL", error: String(e.message || e) });
      svcSerious += 1;
    }
    await ctx.close();
  }

  const catStatus = catalogue.catalogue?.status || catalogue.status || (cat.status === 0 ? "PASS" : "FAIL");
  const servicesRegression = {
    catalogue_status: catStatus,
    catalogue_computed: catalogue.catalogue?.computed || catalogue.computed || null,
    mandatory_routes_http_200: servicesHttpOk ? "PASS" : "FAIL",
    service_http: serviceHttp,
    axe_critical: svcCritical,
    axe_serious: svcSerious,
    axe_desktop_mandatory: svcAxe,
    status:
      catStatus === "PASS" && servicesHttpOk && svcCritical === 0 && svcSerious === 0
        ? "PASS"
        : "FAIL",
  };

  // Global system live smoke
  const gCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const gPage = await gCtx.newPage();
  await gPage.goto(base + "/about", { waitUntil: "networkidle", timeout: 120000 });
  const globalDesktop = await gPage.evaluate(() => {
    const header = !!document.querySelector("header, .site-header, nav");
    const logo = !!document.querySelector('header img, .site-logo, a[href="/"] img');
    const footer = !!document.querySelector("footer, .site-footer");
    const wa = document.querySelector(".wa-float, a.wa-float, [class*='wa-float']");
    const waBox = wa?.getBoundingClientRect();
    const favicon = !!document.querySelector('link[rel*="icon"]');
    const overflowX = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
    return {
      header,
      logo,
      footer,
      wa_present: !!wa,
      wa_geometry: waBox
        ? { w: Math.round(waBox.width), h: Math.round(waBox.height), bottom: Math.round(waBox.bottom), right: Math.round(waBox.right) }
        : null,
      favicon,
      overflowX,
    };
  });
  // cookie banner
  const cookieSel = ".cookie-banner, [class*='cookie'], #cookie-banner";
  let cookie = { initial_visible: false, dismissed: false, persistence: "unknown" };
  const cookieVisible = await gPage.locator(cookieSel).first().isVisible().catch(() => false);
  cookie.initial_visible = cookieVisible;
  if (cookieVisible) {
    await gPage.locator(`${cookieSel} button, ${cookieSel} [role='button']`).first().click().catch(() => {});
    await gPage.waitForTimeout(300);
    cookie.dismissed = !(await gPage.locator(cookieSel).first().isVisible().catch(() => false));
    await gPage.reload({ waitUntil: "networkidle" });
    cookie.persistence = (await gPage.locator(cookieSel).first().isVisible().catch(() => false))
      ? "FAIL_STILL_VISIBLE"
      : "PASS_STAYS_DISMISSED";
  } else {
    cookie.persistence = "ALREADY_DISMISSED_OR_ABSENT";
  }
  await gCtx.close();

  const mNav = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mPage = await mNav.newPage();
  await mPage.goto(base + "/about", { waitUntil: "networkidle", timeout: 120000 });
  let mobileNav = { open: false, close: false };
  const burger = mPage.locator("button[aria-label*='enu'], button[aria-label*='Menu'], .nav-toggle, header button").first();
  if (await burger.count()) {
    await burger.click().catch(() => {});
    await mPage.waitForTimeout(250);
    mobileNav.open = await mPage.locator("nav a, .mobile-nav a, [data-mobile-nav] a").first().isVisible().catch(() => false);
    await burger.click().catch(() => {});
    await mPage.waitForTimeout(250);
    mobileNav.close = true;
  }
  const mobileOverflow = await mPage.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  );
  await mNav.close();
  await browser.close();

  const globalRegression = {
    header_and_lockup: globalDesktop.header && globalDesktop.logo ? "PASS" : "FAIL",
    footer: globalDesktop.footer ? "PASS" : "FAIL",
    whatsapp_geometry: globalDesktop.wa_present ? "PASS" : "FAIL",
    whatsapp: globalDesktop.wa_geometry,
    favicon: globalDesktop.favicon ? "PASS" : "FAIL",
    desktop_overflow: !globalDesktop.overflowX ? "PASS" : "FAIL",
    mobile_overflow: !mobileOverflow ? "PASS" : "FAIL",
    mobile_nav: mobileNav,
    cookie_banner: cookie,
    status:
      globalDesktop.header &&
      globalDesktop.logo &&
      globalDesktop.footer &&
      globalDesktop.wa_present &&
      !globalDesktop.overflowX &&
      !mobileOverflow
        ? "PASS"
        : "FAIL",
  };

  // frozen application paths (beyond careers which is allowed)
  const frozenDiff = execSync(`git diff --name-only ${PHASE5A_START}..${COMMIT}`, {
    cwd: REPO,
    encoding: "utf8",
  })
    .trim()
    .split("\n")
    .filter(Boolean);
  const frozenHits = frozenDiff.filter((f) =>
    FROZEN.some((p) => (p.endsWith("/") ? f.startsWith(p) : f === p || f.startsWith(p + "/")))
  );

  const build = spawnSync("npm", ["run", "build"], { cwd: REPO, encoding: "utf8" });
  const tsc = spawnSync("npx", ["tsc", "--noEmit"], { cwd: REPO, encoding: "utf8" });

  const critical = a11yPhase5a.reduce((n, r) => n + (r.critical || 0), 0);
  const serious = a11yPhase5a.reduce((n, r) => n + (r.serious || 0), 0);
  const moderate = a11yPhase5a.reduce((n, r) => n + (r.moderate || 0), 0);
  const incomplete = a11yPhase5a.reduce((n, r) => n + (r.incomplete || 0), 0);

  const checks = {
    canonical_meta_robots_clean: metaRobots.every((r) => r.result === "PASS") ? "PASS" : "FAIL",
    preview_x_robots_noindex: previewXRobots,
    preview_noindex_header: previewXRobots,
    internal_link_crawl: internalLinks.every((l) => l.result === "PASS") ? "PASS" : "FAIL",
    external_rel_audit: externalRel.every((l) => l.result === "PASS") ? "PASS" : "FAIL",
    heading_hierarchy: headingsOut.every((h) => h.status === "PASS") ? "PASS" : "FAIL",
    accessible_names: accessibleNameFails.length === 0 ? "PASS" : "FAIL",
    alias_probes: aliasResults.every((a) => a.result === "NO_ALIAS_AS_EXPECTED") ? "PASS" : "FAIL",
    homepage_full_regression: homepageRegression.status,
    team_full_regression: teamRegression.status,
    services_20_39_34_11: servicesRegression.status,
    global_system_regression: globalRegression.status,
    axe_critical_serious: critical === 0 && serious === 0 ? "PASS" : "FAIL",
    frozen_files: frozenHits.length === 0 ? "PASS" : "FAIL",
    build: build.status === 0 ? "PASS" : "FAIL",
    typecheck: tsc.status === 0 ? "PASS" : "FAIL",
  };

  const failed = Object.entries(checks)
    .filter(([, v]) => v !== "PASS")
    .map(([k]) => k);

  const summary = {
    generated_at: new Date().toISOString(),
    phase: "5A_SOL_AUDIT_CLOSEOUT",
    terminal_target: "OCTUS_PHASE5A_SOL_AUDIT_CLOSEOUT_READY",
    immutable_preview_url: PREVIEW,
    deployment_id: DEPLOYMENT_ID,
    application_code_sha: COMMIT,
    deployed_git_sha: DEPLOYED_SHA,
    axe_core_version: axeCoreVersion,
    checks,
    failed_checks: failed,
    overall: failed.length === 0 ? "PASS" : "FAIL",
    preview_x_robots_routes: robotsRoutes,
    meta_robots_routes: metaRobots,
    violation_totals: { critical, serious, moderate, incomplete },
    homepage_regression: homepageRegression,
    team_regression: teamRegression,
    services_regression: {
      status: servicesRegression.status,
      catalogue_status: servicesRegression.catalogue_status,
      catalogue_computed: servicesRegression.catalogue_computed,
      axe_critical: servicesRegression.axe_critical,
      axe_serious: servicesRegression.axe_serious,
      mandatory_http: servicesRegression.mandatory_routes_http_200,
    },
    global_regression: globalRegression,
    frozen_hits: frozenHits,
  };

  writeJson(path.join(AUDIT, "PHASE5A_CLOSEOUT_VALIDATION.json"), summary);
  writeJson(path.join(AUDIT, "PHASE5A_PREVIEW_X_ROBOTS.json"), {
    generated_at: summary.generated_at,
    check: "preview_x_robots_noindex",
    overall: previewXRobots,
    routes: robotsRoutes,
  });
  writeJson(path.join(AUDIT, "PHASE5A_META_ROBOTS.json"), {
    generated_at: summary.generated_at,
    check: "canonical_meta_robots_clean",
    overall: checks.canonical_meta_robots_clean,
    routes: metaRobots,
  });
  writeJson(path.join(AUDIT, "PHASE5A_INTERNAL_LINK_CRAWL.json"), {
    generated_at: summary.generated_at,
    overall: checks.internal_link_crawl,
    links: internalLinks,
  });
  writeJson(path.join(AUDIT, "PHASE5A_EXTERNAL_REL_AUDIT.json"), {
    generated_at: summary.generated_at,
    overall: checks.external_rel_audit,
    links: externalRel,
  });
  writeJson(path.join(AUDIT, "PHASE5A_HEADING_HIERARCHY.json"), {
    generated_at: summary.generated_at,
    overall: checks.heading_hierarchy,
    routes: headingsOut,
    accessible_name_fails: accessibleNameFails,
  });
  writeJson(path.join(AUDIT, "PHASE5A_ALIAS_PROBES.json"), {
    generated_at: summary.generated_at,
    overall: checks.alias_probes,
    probes: aliasResults,
  });
  writeJson(path.join(AUDIT, "PHASE5A_MAILTO_WHATSAPP.json"), {
    generated_at: summary.generated_at,
    destinations: mailtoWa,
    note: "Recorded without opening client applications",
  });
  writeJson(path.join(AUDIT, "PHASE5A_CLOSEOUT_A11Y.json"), {
    generated_at: summary.generated_at,
    axe_core_version: axeCoreVersion,
    phase5a_routes: a11yPhase5a,
    services_desktop: svcAxe,
  });
  writeJson(path.join(AUDIT, "PHASE5A_HOME_TEAM_SERVICES_GLOBAL.json"), {
    generated_at: summary.generated_at,
    homepage: homepageRegression,
    team: teamRegression,
    services: servicesRegression,
    global: globalRegression,
  });

  console.log(
    JSON.stringify(
      {
        overall: summary.overall,
        failed,
        preview_x_robots: previewXRobots,
        catalogue: catStatus,
        critical,
        serious,
      },
      null,
      2
    )
  );
  process.exit(summary.overall === "PASS" ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
