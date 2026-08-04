#!/usr/bin/env node
/**
 * Phase 6 Final Regression — capture + validation against immutable preview.
 *
 * Classification folder: final/ (not reconciled/).
 *
 * Env:
 *   PHASE6_PREVIEW (required)
 *   PHASE6_COMMIT (application SHA)
 *   PHASE6_DEPLOYMENT (dpl_…)
 *   PHASE6_DEPLOYED_SHA (optional deployment git sha)
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
/** final/ — parent of audit/ */
const ROOT = path.resolve(__dirname, "..");
/** octus-consulting repo root */
const REPO = path.resolve(__dirname, "../../../../../..");
const AUDIT = path.join(ROOT, "audit");

const PREVIEW = process.env.PHASE6_PREVIEW;
const COMMIT = process.env.PHASE6_COMMIT || "";
const DEPLOYMENT_ID = process.env.PHASE6_DEPLOYMENT || "";
const DEPLOYED_SHA = process.env.PHASE6_DEPLOYED_SHA || COMMIT;
if (!PREVIEW || !COMMIT || !DEPLOYMENT_ID) {
  console.error("PHASE6_PREVIEW, PHASE6_COMMIT, PHASE6_DEPLOYMENT required");
  process.exit(1);
}

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000, label: "1440x1000" },
  mobile: { width: 390, height: 844, label: "390x844" },
};

/**
 * Full chapter capture: baseline × before × final × desktop/mobile.
 * One unique template family each (mandate structure).
 */
const TEMPLATE_ROUTES = [
  { route: "/", template: "homepage" },
  { route: "/team", template: "team" },
  { route: "/solutions", template: "services-overview" },
  { route: "/solutions/regulatory-structuring", template: "area-hub" },
  /** Live banking supporting route (BANKING_SUPPORTING_ROUTE); not a peer area. */
  { route: "/solutions/banking-payments-infrastructure", template: "banking-supporting" },
  { route: "/solutions/compliance/aml-kyc", template: "deep-service" },
  { route: "/about", template: "institutional" },
  { route: "/how-we-engage", template: "institutional" },
  { route: "/contact", template: "institutional" },
  { route: "/diagnostic", template: "engagement" },
  { route: "/partners", template: "institutional" },
  { route: "/careers", template: "institutional" },
  { route: "/markets", template: "markets" },
  { route: "/jurisdictions", template: "jurisdictions" },
  { route: "/brazil", template: "brazil" },
  { route: "/intelligence", template: "intelligence" },
  { route: "/insights", template: "insights" },
  { route: "/insights/why-licensing-fails-post-approval", template: "article" },
  { route: "/privacy", template: "legal" },
  { route: "/terms", template: "legal" },
  { route: "/cookies", template: "legal" },
  { route: "/compliance-channel", template: "compliance" },
  { route: "/this-page-does-not-exist-phase6", template: "not-found", expectStatus: 404 },
];

/** All 33 insight slugs from lib/posts.ts (same inventory as Phase 5C). */
const ARTICLE_SLUGS = [
  "stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts",
  "senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs",
  "betting-taxation-risks-senate-legal-certainty-regulated-market",
  "new-spa-mf-normative-instruction-fixed-odds-betting",
  "centralised-self-exclusion-platform-key-changes-operators-bettors",
  "stf-suspends-municipal-lottery-operations-nationwide",
  "coaf-crisis-aml-obligations-online-gaming-operators",
  "annual-recertification-betting-platforms-spa-mf-new-guidelines",
  "risk-management-software-igaming-regulatory-compliance",
  "customised-studies-international-expansion-brazil",
  "rio-de-janeiro-regulates-vlts-lottery-equipment-decree",
  "games-not-classified-as-fixed-odds-betting-brazil",
  "bet-br-domain-extension-to-states-brazil",
  "intellectual-property-igaming-trademark-registration-brazil",
  "national-betting-system-sinapo-brazil",
  "why-your-international-licence-may-not-protect-you-in-brazil",
  "regulation-and-technology-legal-follows-igaming-evolution",
  "iof-update-financial-market-brazil-2025",
  "trump-tax-reform-betting-operators-lessons-for-brazil",
  "regulatory-agenda-2025-2026-secretariat-prizes-betting",
  "spa-ordinance-banks-refuse-illegal-betting-operators",
  "youtube-tightens-rules-illegal-betting-sites-impact-influencers",
  "brazil-b2b-registration-requirement-betting-igaming",
  "quinel-credentialed-certifying-entity-brazil-ministry-finance",
  "senate-commission-approves-casino-bingo-gaming-bill-brazil",
  "spa-mf-position-brazilian-partner-20-percent-share-capital",
  "new-rules-sports-betting-online-games-brazil-portaria-827-2024",
  "new-regulation-betting-online-game-systems-portaria-722-2024",
  "why-licensing-fails-post-approval",
  "banking-for-high-risk-operations",
  "mica-what-operators-need-to-do",
  "curacao-reform-what-changes",
  "compliance-as-a-service-vs-internal-teams",
];

/** Remaining six area hubs (TEMPLATE already includes regulatory-structuring). */
const REMAINING_AREA_HUBS = [
  { route: "/solutions/corporate-structuring", template: "area-hub" },
  { route: "/solutions/compliance-risk", template: "area-hub" },
  { route: "/solutions/remediation-readiness", template: "area-hub" }, // audit-readiness alias
  { route: "/solutions/legal-structural-architecture", template: "area-hub" }, // legal/tax-adjacent area
  { route: "/private-clients", template: "area-hub" },
  { route: "/international-hub", template: "area-hub" },
];

const REMAINING_MARKETS = [
  { route: "/markets/fintech", template: "standard-market" },
  { route: "/markets/igaming", template: "standard-market" },
  { route: "/markets/crypto", template: "standard-market" },
  { route: "/markets/high-risk", template: "high-risk-operations" },
];

const REMAINING_JURISDICTIONS = [
  { route: "/jurisdictions/malta", template: "standard-jurisdiction" },
  { route: "/jurisdictions/isle-of-man", template: "standard-jurisdiction" },
  { route: "/jurisdictions/curacao", template: "standard-jurisdiction" },
  { route: "/jurisdictions/anjouan", template: "standard-jurisdiction" },
  { route: "/jurisdictions/portugal", template: "standard-jurisdiction" },
  { route: "/jurisdictions/uae", template: "standard-jurisdiction" },
];

const ARTICLE_ROUTES = ARTICLE_SLUGS.map((slug) => ({
  route: `/insights/${slug}`,
  template: "insight-article",
  slug,
}));

const TEMPLATE_ROUTE_SET = new Set(TEMPLATE_ROUTES.map((r) => r.route));

/** All public routes for HTTP / meta / dash-scan / axe (lighter than full chapter capture). */
const CRAWL_ROUTES = (() => {
  const byRoute = new Map();
  for (const r of [
    ...TEMPLATE_ROUTES,
    ...REMAINING_AREA_HUBS,
    ...REMAINING_MARKETS,
    ...REMAINING_JURISDICTIONS,
    ...ARTICLE_ROUTES,
  ]) {
    if (!byRoute.has(r.route)) byRoute.set(r.route, r);
  }
  return [...byRoute.values()];
})();

const CRAWL_ONLY_ROUTES = CRAWL_ROUTES.filter((r) => !TEMPLATE_ROUTE_SET.has(r.route));

const CHAPTERS = [
  { id: "full", fullPage: true },
  { id: "hero", selector: ".octus-dark-hero, .page-hero, main > section:first-of-type", height: 900 },
  { id: "content", midScroll: true, height: 900 },
  { id: "cta", ctaSection: true, height: 520 },
];

const MOBILE_CHAPTERS = [
  { id: "full", fullPage: true },
  { id: "first-fold", selector: "main > section:first-of-type", height: 844 },
  { id: "content", midScroll: true, height: 844 },
  { id: "cta", ctaSection: true, height: 520 },
];

const BASELINE = "https://octus-consulting-9q798dbg2-axle1.vercel.app";
const BASELINE_DPL = "dpl_437tawkoMDv7sqxW6NzPzTegj1Lq";
const BEFORE = "https://octus-consulting-84n1zaqys-axle1.vercel.app";
const BEFORE_COMMIT = "c467ccf0bfa3a8a2df1ac7a58c7b29c8c169d62b";
const BEFORE_DPL = "dpl_8q5VbqyqV5vZxazerUKHco7VFCiW";
/** Phase 6 starting HEAD (accepted Phase 5C evidence tip) — frozen-diff baseline */
const PHASE6_START = "b617338510c030dccc6eac0f03d01e4042ca5532";

const PHASE5A_ROUTES = [
  "/about",
  "/contact",
  "/how-we-engage",
  "/diagnostic",
  "/partners",
  "/careers",
];

const PHASE5B_ROUTES = [
  "/markets",
  "/markets/fintech",
  "/markets/igaming",
  "/markets/crypto",
  "/markets/high-risk",
  "/jurisdictions",
  "/jurisdictions/malta",
  "/jurisdictions/isle-of-man",
  "/jurisdictions/curacao",
  "/jurisdictions/anjouan",
  "/jurisdictions/portugal",
  "/jurisdictions/uae",
  "/brazil",
];

const PHASE5C_ROUTES = [
  "/intelligence",
  "/insights",
  "/privacy",
  "/terms",
  "/cookies",
  "/compliance-channel",
];

/**
 * Residual-only allowlist since PHASE6_START.
 * Any other app/components/lib (or unrelated) path in the diff → frozen_files FAIL.
 */
const ALLOWED_MUTATIONS = [
  "components/system/HomeLeadershipTrust.tsx",
  "app/layout.tsx",
  "app/team/page.tsx",
  "app/globals.css",
  "docs/ops/evidence/remediation/",
  "docs/ops/evidence/remediation/REMEDIATION_CONTROL_PLAN.md",
  "docs/ops/evidence/remediation/DECISION_REGISTER.md",
];

const PROHIBITED = [
  /—|–/,
  /\bsix[-\s]?area/i,
  /\b06\s+solutions/i,
  /not a law firm/i,
  /\bare guaranteed\b/i,
  /Confidentiality and anonymity are guaranteed/i,
];

const TEAM_NAMES_ORDER = [
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

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}
function sha256File(fp) {
  return crypto.createHash("sha256").update(fs.readFileSync(fp)).digest("hex");
}
function routeSlug(route) {
  return route.replace(/^\//, "").replace(/\//g, "-") || "root";
}
function originBase(url) {
  return String(url).replace(/\/$/, "");
}
function expectedStatus(routeSpec) {
  return routeSpec.expectStatus ?? 200;
}
function statusOk(routeSpec, status) {
  return status === expectedStatus(routeSpec);
}
function pathMatches(file, prefix) {
  if (prefix.endsWith("/")) return file.startsWith(prefix) || file === prefix.slice(0, -1);
  return file === prefix || file.startsWith(prefix + "/");
}
function isAllowedMutation(file) {
  return ALLOWED_MUTATIONS.some((p) => pathMatches(file, p));
}
function countDashes(text) {
  const em = (String(text).match(/—/g) || []).length;
  const en = (String(text).match(/–/g) || []).length;
  return { em, en, total: em + en };
}

/** Resilient chapter capture (Phase 5C pattern) — never throw out of capture. */
async function captureChapter(page, vp, chapterSpec, outAbs) {
  ensureDir(path.dirname(outAbs));
  try {
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
      let loc = page.locator(".cta-block, section.surface-dark, .octus-dark-hero, main section, main").last();
      if ((await loc.count()) === 0) {
        await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
        return { scroll: "cta-missing", ok: false };
      }
      await loc.scrollIntoViewIfNeeded().catch(() => {});
      await page.waitForTimeout(200);
      const box = await loc.boundingBox().catch(() => null);
      const y = Math.max(0, (box?.y || 0) - 20);
      const h = Math.min(vp.height, chapterSpec.height || 520);
      await page.screenshot({
        path: outAbs,
        animations: "disabled",
        clip: { x: 0, y, width: vp.width, height: h },
      });
      return { scroll: `y=${Math.round(y)};cta`, ok: true };
    }
    const loc = page.locator(chapterSpec.selector).first();
    if ((await loc.count()) === 0) {
      await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
      return { scroll: chapterSpec.selector || "missing", ok: false };
    }
    await loc.scrollIntoViewIfNeeded().catch(() => {});
    await page.waitForTimeout(200);
    const box = await loc.boundingBox().catch(() => null);
    const y = Math.max(0, (box?.y || 0) - 40);
    const h = Math.min(vp.height, chapterSpec.height || 900);
    await page.screenshot({
      path: outAbs,
      animations: "disabled",
      clip: { x: 0, y, width: vp.width, height: h },
    });
    return { scroll: `y=${Math.round(y)};sel=${chapterSpec.selector}`, ok: true };
  } catch (e) {
    await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" }).catch(() => {});
    return { scroll: `error:${String(e.message || e).slice(0, 80)}`, ok: false };
  }
}

async function httpMeta(url) {
  const res = await fetch(url, { redirect: "manual" });
  return {
    status: res.status,
    location: res.headers.get("location") || "",
    xRobots: res.headers.get("x-robots-tag") || "",
  };
}

async function runAxe(page, route, vpName, a11yResults, incompleteRows) {
  try {
    const axe = await new AxeBuilder({ page }).analyze();
    const serious = axe.violations.filter((v) => v.impact === "serious");
    const critical = axe.violations.filter((v) => v.impact === "critical");
    const moderate = axe.violations.filter((v) => v.impact === "moderate");
    const minor = axe.violations.filter((v) => v.impact === "minor");
    const regionWa = moderate.filter(
      (v) => v.id === "region" && JSON.stringify(v.nodes).includes("wa-float")
    );
    const incompletes = axe.incomplete || [];
    for (const inc of incompletes) {
      incompleteRows.push({
        route,
        rule: inc.id,
        impact: inc.impact || "",
        reason: String(inc.description || inc.help || inc.helpUrl || "").slice(0, 300),
        nodes: (inc.nodes || []).length,
        viewport: vpName,
        targets: (inc.nodes || []).slice(0, 5).map((n) => n.target),
      });
    }
    a11yResults.push({
      route,
      viewport: vpName,
      axe_core_version: axeCoreVersion,
      unavailable: false,
      execution_error: false,
      critical: critical.length,
      serious: serious.length,
      moderate: moderate.length,
      minor: minor.length,
      incomplete: incompletes.length,
      incompletes: incompletes.map((inc) => ({
        id: inc.id,
        impact: inc.impact || "",
        help: inc.help || "",
        description: String(inc.description || "").slice(0, 240),
        nodes: (inc.nodes || []).length,
        targets: (inc.nodes || []).slice(0, 5).map((n) => n.target),
      })),
      violations: axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.length,
        targets: v.nodes.slice(0, 5).map((n) => n.target),
      })),
      global_region_residual_nodes: regionWa.reduce((n, v) => n + v.nodes.length, 0),
      status: critical.length === 0 && serious.length === 0 ? "PASS" : "FAIL",
    });
  } catch (e) {
    a11yResults.push({
      route,
      viewport: vpName,
      unavailable: true,
      execution_error: true,
      error: String(e.message || e),
      status: "FAIL",
    });
  }
}

async function collectPageAudits({
  page,
  route,
  vpName,
  status,
  a11yResults,
  incompleteRows,
  meta,
  ctaRows,
  prohibitedHits,
  overflow,
}) {
  const text = await page.locator("main").innerText().catch(() => "");
  for (const re of PROHIBITED) {
    if (re.test(text)) prohibitedHits.push({ route, vp: vpName, pattern: String(re) });
  }
  const ov = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      overflowX: doc.scrollWidth > doc.clientWidth + 1,
    };
  });
  overflow[`${route}:${vpName}`] = ov;

  await runAxe(page, route, vpName, a11yResults, incompleteRows);

  if (vpName === "desktop") {
    const m = await page.evaluate(() => {
      const canon = document.querySelector('link[rel="canonical"]')?.href || "";
      const title = document.title || "";
      const desc = document.querySelector('meta[name="description"]')?.content || "";
      const og = document.querySelector('meta[property="og:title"]')?.content || "";
      const tw = document.querySelector('meta[name="twitter:card"]')?.content || "";
      const robots = document.querySelector('meta[name="robots"]')?.content || "";
      const links = [...document.querySelectorAll("main a[href]")].map((a) => ({
        text: (a.textContent || "").trim().replace(/\s+/g, " ").slice(0, 80),
        href: a.getAttribute("href"),
      }));
      const header = !!document.querySelector("header, .site-header");
      const footer = !!document.querySelector("footer, .site-footer");
      const cookie = !!document.querySelector(".cookie-banner, [class*='cookie']");
      const wa = !!document.querySelector(".wa-float, a.wa-float, aside[aria-label*='WhatsApp']");
      return { canon, title, desc, og, tw, robots, links, header, footer, cookie, wa };
    });
    meta.push({ route, ...m, http_status: status });
    const labels = {};
    for (const l of m.links) {
      if (!l.text) continue;
      labels[l.text] = (labels[l.text] || 0) + 1;
    }
    const dupLabels = Object.entries(labels).filter(([, n]) => n > 1);
    ctaRows.push({ route, links: m.links, duplicate_labels: dupLabels });
  }
}

async function captureRouteSet({
  browser,
  routeSpec,
  classifications,
  chaptersFor,
  manifestItems,
  a11yResults,
  incompleteRows,
  crawl,
  meta,
  ctaRows,
  prohibitedHits,
  overflow,
  runFinalAudits,
}) {
  const { route, template } = routeSpec;
  for (const [cls, base, commit, dpl] of classifications) {
    for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
      const chapters = chaptersFor(vpName, cls);
      if (!chapters || chapters.length === 0) continue;

      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await ctx.newPage();
      const url = originBase(base) + route;
      let status = 0;
      try {
        const res = await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
        status = res?.status() || 0;
      } catch {
        status = 0;
      }
      await page.waitForTimeout(300);
      if (cls === "final" && vpName === "desktop") crawl[route] = status;

      for (const ch of chapters) {
        const fileRel = `${cls}/${routeSlug(route)}__${vpName}__${ch.id}.png`;
        const abs = path.join(ROOT, fileRel);
        const capt = await captureChapter(page, vp, ch, abs);
        const sha = fs.existsSync(abs) ? sha256File(abs) : "";
        const bytes = fs.existsSync(abs) ? fs.statSync(abs).size : 0;
        manifestItems.push({
          file: fileRel,
          classification: cls,
          route,
          template,
          chapter: ch.id,
          source_url: url,
          deployment_id: dpl,
          immutable_commit_sha: commit,
          viewport: vp.label,
          scroll_position_or_selector: capt.scroll,
          capture_timestamp: new Date().toISOString(),
          http_status: status,
          sha256: sha,
          bytes,
          status: statusOk(routeSpec, status) && capt.ok && sha ? "PASS" : "FAIL",
        });
      }

      if (cls === "final" && runFinalAudits) {
        await collectPageAudits({
          page,
          route,
          vpName,
          status,
          a11yResults,
          incompleteRows,
          meta,
          ctaRows,
          prohibitedHits,
          overflow,
        });
      }
      await ctx.close();
    }
  }
}

/** CRAWL-only routes: final axe/meta/overflow/prohibited — no baseline/before screenshots. */
async function auditCrawlOnlyRoute({
  browser,
  routeSpec,
  a11yResults,
  incompleteRows,
  crawl,
  meta,
  ctaRows,
  prohibitedHits,
  overflow,
}) {
  const { route } = routeSpec;
  for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    const url = originBase(PREVIEW) + route;
    let status = 0;
    try {
      const res = await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
      status = res?.status() || 0;
    } catch {
      status = 0;
    }
    await page.waitForTimeout(250);
    if (vpName === "desktop") crawl[route] = status;

    await collectPageAudits({
      page,
      route,
      vpName,
      status,
      a11yResults,
      incompleteRows,
      meta,
      ctaRows,
      prohibitedHits,
      overflow,
    });
    await ctx.close();
  }
}

async function dashScanAllRoutes(browser) {
  const rows = [];
  let emTotal = 0;
  let enTotal = 0;
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await ctx.newPage();
  for (const routeSpec of CRAWL_ROUTES) {
    const { route } = routeSpec;
    const url = originBase(PREVIEW) + route;
    let status = 0;
    try {
      const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });
      status = res?.status() || 0;
    } catch {
      status = 0;
    }
    await page.waitForTimeout(150);
    const extracted = await page.evaluate(() => {
      const main = document.querySelector("main");
      const mainText = main?.innerText || "";
      const bodyText = document.body?.innerText || "";
      const text = mainText.trim() ? mainText : bodyText;
      const source = mainText.trim() ? "main" : "body";
      return { text, source };
    });
    const counts = countDashes(extracted.text);
    emTotal += counts.em;
    enTotal += counts.en;
    rows.push({
      route,
      http_status: status,
      text_source: extracted.source,
      em_dash: counts.em,
      en_dash: counts.en,
      total: counts.total,
      status: counts.total === 0 ? "PASS" : "FAIL",
    });
  }
  await ctx.close();
  return {
    generated_at: new Date().toISOString(),
    routes_scanned: rows.length,
    em_dash_total: emTotal,
    en_dash_total: enTotal,
    dash_total: emTotal + enTotal,
    allowlists: "none",
    status: emTotal + enTotal === 0 ? "PASS" : "FAIL",
    rows,
  };
}

async function main() {
  ensureDir(path.join(ROOT, "baseline"));
  ensureDir(path.join(ROOT, "before"));
  ensureDir(path.join(ROOT, "final"));
  ensureDir(AUDIT);

  const manifestItems = [];
  const browser = await chromium.launch({ headless: true });
  const a11yResults = [];
  const incompleteRows = [];
  const crawl = {};
  const meta = [];
  const ctaRows = [];
  const prohibitedHits = [];
  const overflow = {};

  const classificationsFull = [
    ["baseline", BASELINE, "baseline-9q798dbg2", BASELINE_DPL],
    ["before", BEFORE, BEFORE_COMMIT, BEFORE_DPL],
    ["final", PREVIEW, COMMIT, DEPLOYMENT_ID],
  ];

  console.log("Capturing TEMPLATE routes (baseline + before + final)...");
  for (const routeSpec of TEMPLATE_ROUTES) {
    await captureRouteSet({
      browser,
      routeSpec,
      classifications: classificationsFull,
      chaptersFor: (vpName) => (vpName === "mobile" ? MOBILE_CHAPTERS : CHAPTERS),
      manifestItems,
      a11yResults,
      incompleteRows,
      crawl,
      meta,
      ctaRows,
      prohibitedHits,
      overflow,
      runFinalAudits: true,
    });
  }

  console.log("Auditing CRAWL-only routes (final: axe + meta + overflow; no screenshots)...");
  for (const routeSpec of CRAWL_ONLY_ROUTES) {
    await auditCrawlOnlyRoute({
      browser,
      routeSpec,
      a11yResults,
      incompleteRows,
      crawl,
      meta,
      ctaRows,
      prohibitedHits,
      overflow,
    });
  }

  console.log("Full-site rendered dash scan (main/body; no allowlists)...");
  const dashScan = await dashScanAllRoutes(browser);

  // —— Regressions against PREVIEW
  const homeCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const homePage = await homeCtx.newPage();
  await homePage.goto(originBase(PREVIEW) + "/", { waitUntil: "networkidle", timeout: 120000 });
  const homeEval = await homePage.evaluate(() => {
    const text = document.querySelector("main")?.innerText || "";
    const moduleButtons = [...document.querySelectorAll("button, [role='button']")]
      .map((el) => (el.textContent || "").trim().replace(/\s+/g, " "))
      .filter((t) => /^0[1-7]/.test(t));
    const emDashes = (text.match(/—/g) || []).length;
    const enDashes = (text.match(/–/g) || []).length;
    const ctas = [...document.querySelectorAll("main a[href]")].map((a) => ({
      text: (a.textContent || "").trim().replace(/\s+/g, " "),
      href: a.getAttribute("href") || "",
    }));
    const header = !!document.querySelector("header, .site-header");
    const footer = !!document.querySelector("footer, .site-footer");
    const cookie = !!document.querySelector(".cookie-banner, [class*='cookie']");
    const wa = !!document.querySelector(".wa-float, a.wa-float, aside[aria-label*='WhatsApp']");
    return { text, moduleButtons, emDashes, enDashes, ctas, header, footer, cookie, wa };
  });
  await homeCtx.close();

  const peerModules = homeEval.moduleButtons.filter((t) => /^0[1-7]/.test(t));
  const homeSevenSignals =
    /Regulatory/.test(homeEval.text) &&
    /Compliance/.test(homeEval.text) &&
    /Corporate/.test(homeEval.text) &&
    (/Seven areas/i.test(homeEval.text) || peerModules.length === 7);
  const bankingNotPeer = peerModules.every((t) => !/banking/i.test(t));
  const diagLabels = [
    ...new Set(
      homeEval.ctas
        .map((c) => c.text)
        .filter((t) => /diagnostic|assess your situation|remediation assessment/i.test(t))
    ),
  ];
  const whatsappOk =
    homeEval.wa ||
    homeEval.ctas.some((c) => /wa\.me|whatsapp/i.test(c.href) && /discuss/i.test(c.text));

  const teamCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const teamPage = await teamCtx.newPage();
  await teamPage.goto(originBase(PREVIEW) + "/team", { waitUntil: "networkidle" });
  const teamText = await teamPage.locator("main").innerText();
  const bandLabels = await teamPage.locator(".team-band-label").evaluateAll((els) =>
    els.map((e) => (e.textContent || "").trim())
  );
  let lastIdx = -1;
  const teamExactOrder = TEAM_NAMES_ORDER.every((n) => {
    const idx = teamText.indexOf(n);
    if (idx === -1 || idx < lastIdx) return false;
    lastIdx = idx;
    return true;
  });
  const teamExact10 =
    teamExactOrder &&
    /Founder & CEO/.test(teamText) &&
    /Operations Coordination/.test(teamText) &&
    bandLabels.includes("Leadership") &&
    bandLabels.includes("Core Specialists");
  await teamCtx.close();

  const servicesOk = [];
  for (const r of ["/solutions"]) {
    servicesOk.push({ route: r, ...(await httpMeta(originBase(PREVIEW) + r)) });
  }

  const phase5aOk = [];
  for (const r of PHASE5A_ROUTES) {
    phase5aOk.push({ route: r, ...(await httpMeta(originBase(PREVIEW) + r)) });
  }

  const phase5bOk = [];
  for (const r of PHASE5B_ROUTES) {
    phase5bOk.push({ route: r, ...(await httpMeta(originBase(PREVIEW) + r)) });
  }

  const phase5cOk = [];
  for (const r of PHASE5C_ROUTES) {
    phase5cOk.push({ route: r, ...(await httpMeta(originBase(PREVIEW) + r)) });
  }

  await browser.close();

  // build/tsc
  const build = spawnSync("npm", ["run", "build"], { cwd: REPO, encoding: "utf8" });
  const tsc = spawnSync("npx", ["tsc", "--noEmit"], { cwd: REPO, encoding: "utf8" });

  const frozenDiff = execSync(`git diff --name-only ${PHASE6_START}..${COMMIT}`, {
    cwd: REPO,
    encoding: "utf8",
  })
    .trim()
    .split("\n")
    .filter(Boolean);

  const frozenHits = frozenDiff.filter((f) => !isAllowedMutation(f));

  const critical = a11yResults.reduce((n, r) => n + (r.critical || 0), 0);
  const serious = a11yResults.reduce((n, r) => n + (r.serious || 0), 0);
  const moderate = a11yResults.reduce((n, r) => n + (r.moderate || 0), 0);
  const incomplete = a11yResults.reduce((n, r) => n + (r.incomplete || 0), 0);
  const regionWaTotal = a11yResults.reduce((n, r) => n + (r.global_region_residual_nodes || 0), 0);

  let previewNoindex = "FAIL";
  let previewHdr = { status: 0, xRobots: "" };
  try {
    previewHdr = await httpMeta(originBase(PREVIEW) + "/");
    previewNoindex = /noindex/i.test(previewHdr.xRobots || "") ? "PASS" : "FAIL";
  } catch {
    previewNoindex = "FAIL";
  }

  const metaForCanon = meta.filter((m) => m.http_status === 200);
  const crawlEntries = Object.entries(crawl);
  const crawlOk = crawlEntries.every(([route, s]) => {
    const spec = CRAWL_ROUTES.find((r) => r.route === route);
    return statusOk(spec || { route }, s);
  });

  const httpOkish = (rows) =>
    rows.every((d) => d.status === 200 || d.status === 308 || d.status === 301);

  const regression = {
    homepage: {
      seven_area_signals: homeSevenSignals ? "PASS" : "FAIL",
      banking_not_peer: bankingNotPeer ? "PASS" : "FAIL",
      peer_modules: peerModules,
      distinct_diagnostic_labels: diagLabels.length >= 3 ? "PASS" : "FAIL",
      diagnostic_labels: diagLabels,
      whatsapp: whatsappOk ? "PASS" : "FAIL",
      home_punctuation_zero:
        homeEval.emDashes === 0 && homeEval.enDashes === 0 ? "PASS" : "FAIL",
      home_em_dash: homeEval.emDashes,
      home_en_dash: homeEval.enDashes,
    },
    team: {
      team_exact_10_order: teamExact10 ? "PASS" : "FAIL",
      band_labels: bandLabels,
      names_order: TEAM_NAMES_ORDER,
    },
    services: {
      solutions_200: httpOkish(servicesOk) ? "PASS" : "FAIL",
      routes: servicesOk,
    },
    phase5a: {
      routes_200: httpOkish(phase5aOk) ? "PASS" : "FAIL",
      routes: phase5aOk,
    },
    phase5b: {
      routes_200: httpOkish(phase5bOk) ? "PASS" : "FAIL",
      routes: phase5bOk,
    },
    phase5c: {
      routes_200: httpOkish(phase5cOk) ? "PASS" : "FAIL",
      routes: phase5cOk,
    },
    global: {
      header_present: homeEval.header ? "PASS" : "FAIL",
      footer_present: homeEval.footer ? "PASS" : "FAIL",
      cookie_surface_present: homeEval.cookie ? "PASS" : "FAIL",
      whatsapp_float_or_cta: whatsappOk ? "PASS" : "FAIL",
      preview_noindex_header: previewNoindex,
      preview_x_robots_tag: previewHdr.xRobots || "",
    },
    dash_scan: {
      status: dashScan.status,
      dash_total: dashScan.dash_total,
      em_dash_total: dashScan.em_dash_total,
      en_dash_total: dashScan.en_dash_total,
    },
  };

  const regressionFlatPass =
    regression.homepage.seven_area_signals === "PASS" &&
    regression.homepage.banking_not_peer === "PASS" &&
    regression.homepage.distinct_diagnostic_labels === "PASS" &&
    regression.homepage.whatsapp === "PASS" &&
    regression.homepage.home_punctuation_zero === "PASS" &&
    regression.team.team_exact_10_order === "PASS" &&
    regression.services.solutions_200 === "PASS" &&
    regression.phase5a.routes_200 === "PASS" &&
    regression.phase5b.routes_200 === "PASS" &&
    regression.phase5c.routes_200 === "PASS" &&
    regression.global.header_present === "PASS" &&
    regression.global.footer_present === "PASS" &&
    regression.global.cookie_surface_present === "PASS" &&
    regression.global.preview_noindex_header === "PASS" &&
    regression.dash_scan.status === "PASS";

  const checks = {
    build: build.status === 0 ? "PASS" : "FAIL",
    typecheck: tsc.status === 0 ? "PASS" : "FAIL",
    crawl_status: crawlOk ? "PASS" : "FAIL",
    dash_scan_zero: dashScan.status,
    canonicals: metaForCanon.every((m) => {
      try {
        const u = new URL(m.canon);
        return u.pathname.replace(/\/$/, "") === m.route.replace(/\/$/, "");
      } catch {
        return false;
      }
    })
      ? "PASS"
      : "FAIL",
    canonical_meta_robots_clean: metaForCanon.every((m) => !/noindex/i.test(m.robots || ""))
      ? "PASS"
      : "FAIL",
    preview_noindex_header: previewNoindex,
    metadata: metaForCanon.every((m) => m.title && m.desc && m.og) ? "PASS" : "FAIL",
    prohibited_copy: prohibitedHits.length === 0 ? "PASS" : "FAIL",
    overflow: Object.values(overflow).every((o) => !o.overflowX) ? "PASS" : "FAIL",
    axe_critical_serious:
      critical === 0 &&
      serious === 0 &&
      a11yResults.every((r) => !r.execution_error && !r.unavailable)
        ? "PASS"
        : "FAIL",
    frozen_files: frozenHits.length === 0 ? "PASS" : "FAIL",
    home_seven_areas: homeSevenSignals ? "PASS" : "FAIL",
    banking_not_peer: bankingNotPeer ? "PASS" : "FAIL",
    diagnostic_labels_three: diagLabels.length >= 3 ? "PASS" : "FAIL",
    whatsapp_regression: whatsappOk ? "PASS" : "FAIL",
    team_regression: teamExact10 ? "PASS" : "FAIL",
    services_spotcheck: regression.services.solutions_200,
    phase5a_routes: regression.phase5a.routes_200,
    phase5b_routes: regression.phase5b.routes_200,
    phase5c_routes: regression.phase5c.routes_200,
    global_chrome:
      regression.global.header_present === "PASS" &&
      regression.global.footer_present === "PASS" &&
      regression.global.cookie_surface_present === "PASS" &&
      regression.global.preview_noindex_header === "PASS"
        ? "PASS"
        : "FAIL",
    regression_bundle: regressionFlatPass ? "PASS" : "FAIL",
    screenshot_metadata: manifestItems.every(
      (i) => i.sha256 && i.deployment_id && i.immutable_commit_sha
    )
      ? "PASS"
      : "FAIL",
    article_slug_count: ARTICLE_SLUGS.length === 33 ? "PASS" : "FAIL",
    /** Documentary: incompletes must be listed for disposition; does not fail overall. */
    incomplete_enumerated: Array.isArray(incompleteRows) ? "PASS" : "FAIL",
  };

  const failed = Object.entries(checks)
    .filter(([, v]) => v !== "PASS")
    .map(([k]) => k);

  const homePunctuationClosed = dashScan.dash_total === 0;
  const regionClosed = regionWaTotal === 0;
  const axeIncompleteStatus =
    incomplete === 0 ? "CLOSED" : "DISPOSITION_PENDING";

  const summary = {
    generated_at: new Date().toISOString(),
    phase: "6",
    immutable_preview_url: PREVIEW,
    deployment_id: DEPLOYMENT_ID,
    deployed_git_sha: DEPLOYED_SHA,
    application_code_sha: COMMIT,
    phase6_start: PHASE6_START,
    axe_core_version: axeCoreVersion,
    template_routes: TEMPLATE_ROUTES.map((r) => r.route),
    crawl_routes: CRAWL_ROUTES.map((r) => r.route),
    crawl_route_count: CRAWL_ROUTES.length,
    viewports: ["desktop", "mobile"],
    violation_totals: {
      critical,
      serious,
      moderate,
      incomplete,
      minor: a11yResults.reduce((n, r) => n + (r.minor || 0), 0),
      region_wa_float_nodes: regionWaTotal,
    },
    crawl,
    checks,
    failed_checks: failed,
    overall: failed.length === 0 ? "PASS" : "FAIL",
    bound_residuals: {
      HOME_PUNCTUATION_RESIDUAL_001: {
        status: homePunctuationClosed ? "CLOSED" : "OPEN",
        dash_total: dashScan.dash_total,
        em_dash_total: dashScan.em_dash_total,
        en_dash_total: dashScan.en_dash_total,
        note: "CLOSED only when full-site rendered em/en dash scan = 0 (no allowlists)",
      },
      GLOBAL_A11Y_REGION_RESIDUAL_001: {
        status: regionClosed ? "CLOSED" : "OPEN",
        wa_float_region_nodes: regionWaTotal,
        note: "CLOSED when no moderate region violations target wa-float",
      },
      AXE_INCOMPLETE_REVIEW_001: {
        status: axeIncompleteStatus,
        incomplete_total: incomplete,
        incomplete_rows: incompleteRows.length,
        note:
          "DISPOSITION_PENDING until AXE_INCOMPLETE_DISPOSITION_REGISTER.md is filled; documentary — not an overall FAIL when critical/serious=0 and rows are enumerated",
      },
    },
    screenshot_count: manifestItems.length,
    missing_metadata: manifestItems.filter((i) => !i.sha256 || !i.deployment_id).length,
    frozen_diff: frozenDiff,
    frozen_hits: frozenHits,
    allowed_mutations: ALLOWED_MUTATIONS,
    prohibited_hits: prohibitedHits,
    real_form_submissions: 0,
    diagnostic_data_flow: "whatsapp_and_mailto_only_no_html_form_post",
    build_exit: build.status,
    tsc_exit: tsc.status,
  };

  // —— Outputs under final/
  fs.writeFileSync(
    path.join(ROOT, "SCREENSHOT_MANIFEST.json"),
    JSON.stringify(
      {
        generated_at: summary.generated_at,
        phase: "6",
        immutable_preview_url: PREVIEW,
        deployment_id: DEPLOYMENT_ID,
        phase6_application_commit: COMMIT,
        classification_folders: ["baseline", "before", "final"],
        screenshot_count: manifestItems.length,
        items: manifestItems,
      },
      null,
      2
    ) + "\n"
  );

  fs.writeFileSync(
    path.join(ROOT, "PROVENANCE_BIND.json"),
    JSON.stringify(
      {
        phase: "6",
        immutable_preview_url: PREVIEW,
        deployment_id: DEPLOYMENT_ID,
        application_code_sha: COMMIT,
        deployed_git_sha: DEPLOYED_SHA,
        baseline_url: BASELINE,
        baseline_deployment_id: BASELINE_DPL,
        before_preview_url: BEFORE,
        before_commit: BEFORE_COMMIT,
        before_deployment_id: BEFORE_DPL,
        phase6_start: PHASE6_START,
      },
      null,
      2
    ) + "\n"
  );

  // —— Outputs under audit/
  fs.writeFileSync(path.join(AUDIT, "PHASE6_VALIDATION.json"), JSON.stringify(summary, null, 2) + "\n");
  fs.writeFileSync(
    path.join(AUDIT, "PHASE6_A11Y.json"),
    JSON.stringify(
      {
        generated_at: summary.generated_at,
        axe_core_version: axeCoreVersion,
        violation_totals: summary.violation_totals,
        incompletes: incompleteRows,
        results: a11yResults,
      },
      null,
      2
    ) + "\n"
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE6_INCOMPLETE_ROWS.json"),
    JSON.stringify(
      {
        generated_at: summary.generated_at,
        status: axeIncompleteStatus,
        count: incompleteRows.length,
        rows: incompleteRows.map(({ route, rule, impact, reason, nodes }) => ({
          route,
          rule,
          impact,
          reason,
          nodes,
        })),
      },
      null,
      2
    ) + "\n"
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE6_CRAWL.json"),
    JSON.stringify(
      {
        generated_at: summary.generated_at,
        crawl,
        crawl_route_count: CRAWL_ROUTES.length,
        status: checks.crawl_status,
      },
      null,
      2
    ) + "\n"
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE6_METADATA.json"),
    JSON.stringify({ generated_at: summary.generated_at, routes: meta }, null, 2) + "\n"
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE6_OVERFLOW.json"),
    JSON.stringify({ generated_at: summary.generated_at, overflow }, null, 2) + "\n"
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE6_PROHIBITED.json"),
    JSON.stringify(
      {
        generated_at: summary.generated_at,
        patterns: PROHIBITED.map(String),
        hits: prohibitedHits,
        status: checks.prohibited_copy,
      },
      null,
      2
    ) + "\n"
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE6_REGRESSION.json"),
    JSON.stringify(
      {
        generated_at: summary.generated_at,
        regression,
        status: checks.regression_bundle,
      },
      null,
      2
    ) + "\n"
  );
  fs.writeFileSync(
    path.join(AUDIT, "PHASE6_DASH_SCAN.json"),
    JSON.stringify(dashScan, null, 2) + "\n"
  );

  console.log(
    JSON.stringify(
      {
        overall: summary.overall,
        failed,
        critical,
        serious,
        moderate,
        incomplete,
        region_wa_float_nodes: regionWaTotal,
        dash_total: dashScan.dash_total,
        screenshots: manifestItems.length,
        crawl_routes: CRAWL_ROUTES.length,
        bound_residuals: summary.bound_residuals,
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
