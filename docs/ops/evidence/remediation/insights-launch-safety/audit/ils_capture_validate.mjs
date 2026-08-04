#!/usr/bin/env node
/**
 * Insights Launch Safety — capture + regression against immutable preview.
 *
 * Env:
 *   ILS_PREVIEW (required)
 *   ILS_COMMIT (application SHA)
 *   ILS_DEPLOYMENT (dpl_…)
 */
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const axeCoreVersion = require("axe-core/package.json").version;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPO = path.resolve(__dirname, "../../../../../..");
const AUDIT = path.join(ROOT, "audit");

const PREVIEW = process.env.ILS_PREVIEW;
const COMMIT = process.env.ILS_COMMIT || "";
const DEPLOYMENT_ID = process.env.ILS_DEPLOYMENT || "";
if (!PREVIEW || !COMMIT || !DEPLOYMENT_ID) {
  console.error("ILS_PREVIEW, ILS_COMMIT, ILS_DEPLOYMENT required");
  process.exit(1);
}

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

const ROUTES = [
  { route: "/", name: "home" },
  { route: "/markets", name: "industries" },
  { route: "/markets/igaming", name: "industry-igaming" },
  { route: "/markets/technology", name: "industry-technology" },
  { route: "/markets/forex", name: "industry-forex" },
  { route: "/how-we-engage", name: "how-we-engage" },
  { route: "/insights", name: "insights" },
  { route: "/insights/mica-what-operators-need-to-do", name: "insight-mica" },
  {
    route: "/insights/senate-approves-plp-128-2025-tightens-fiscal-policy-bets-fintechs",
    name: "insight-lc224",
  },
  {
    route: "/insights/coaf-crisis-aml-obligations-online-gaming-operators",
    name: "insight-coaf",
  },
  {
    route: "/insights/brazil-b2b-registration-requirement-betting-igaming",
    name: "insight-b2b",
  },
  { route: "/insights/curacao-reform-what-changes", name: "insight-curacao" },
  { route: "/about", name: "about" },
  { route: "/team", name: "team" },
  { route: "/solutions", name: "services" },
  { route: "/international-hub", name: "service-hub" },
];

const HOLD_SLUGS = [
  "stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts",
  "intellectual-property-igaming-trademark-registration-brazil",
  "why-your-international-licence-may-not-protect-you-in-brazil",
  "risk-management-software-igaming-regulatory-compliance",
  "customised-studies-international-expansion-brazil",
  "senate-commission-approves-casino-bingo-gaming-bill-brazil",
];

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

async function headersFor(url) {
  const res = await fetch(url, { redirect: "manual" });
  return {
    status: res.status,
    location: res.headers.get("location") || "",
    xRobots: res.headers.get("x-robots-tag") || "",
  };
}

function scanDashes(text) {
  const em = (text.match(/\u2014/g) || []).length;
  const en = (text.match(/\u2013/g) || []).length;
  return { em, en };
}

function prohibitedHits(text) {
  const patterns = [
    /operational proof/i,
    /certificate wall/i,
    /\bPremium\b/,
    /not a law firm/i,
    /largest operators/i,
    /major players/i,
    /market leaders/i,
    /tier 1 clients/i,
  ];
  return patterns.filter((p) => p.test(text)).map((p) => p.toString());
}

async function main() {
  ensureDir(AUDIT);
  for (const d of ["desktop", "mobile", "after"]) {
    ensureDir(path.join(ROOT, d));
  }

  const previewHdr = await headersFor(PREVIEW + "/");
  const intel = await headersFor(PREVIEW + "/intelligence");
  const sitemapRes = await fetch(PREVIEW + "/sitemap.xml");
  const sitemapText = await sitemapRes.text();
  const sitemapInsightUrls = [
    ...sitemapText.matchAll(/https:\/\/octusconsulting\.com\/insights\/([a-z0-9-]+)/g),
  ].map((m) => m[1]);
  const sitemapArticleCount = sitemapInsightUrls.length;

  const holdChecks = [];
  for (const slug of HOLD_SLUGS) {
    const h = await headersFor(`${PREVIEW}/insights/${slug}`);
    holdChecks.push({
      slug,
      status: h.status,
      pass: h.status === 404 || h.status === 308 || h.status === 301,
      inSitemap: sitemapInsightUrls.includes(slug),
    });
  }

  const browser = await chromium.launch({ headless: true });
  const results = {
    phase: "insights-launch-safety",
    preview: PREVIEW,
    application_sha: COMMIT,
    deployment_id: DEPLOYMENT_ID,
    axe_core: axeCoreVersion,
    captured_at: new Date().toISOString(),
    screenshots: [],
    axe: { critical: 0, serious: 0, byRoute: [] },
    overflow: [],
    dash: { em: 0, en: 0, byRoute: [] },
    prohibited: [],
    nav: {},
    metadata: [],
    holdChecks,
    sitemapArticleCount,
  };

  for (const vpName of Object.keys(VIEWPORTS)) {
    const vp = VIEWPORTS[vpName];
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    for (const r of ROUTES) {
      const url = PREVIEW + r.route;
      const resp = await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(350);

      const shotName = `${r.name}__${vpName}__full.png`;
      const shotPath = path.join(ROOT, vpName, shotName);
      await page.screenshot({ path: shotPath, fullPage: true });
      results.screenshots.push({
        route: r.route,
        viewport: vpName,
        file: shotPath,
        status: resp?.status(),
      });

      if (vpName === "desktop") {
        const bodyText = await page.evaluate(() => document.body?.innerText || "");
        const dashes = scanDashes(bodyText);
        results.dash.em += dashes.em;
        results.dash.en += dashes.en;
        results.dash.byRoute.push({ route: r.route, ...dashes });
        const hits = prohibitedHits(bodyText);
        if (hits.length) results.prohibited.push({ route: r.route, hits });

        const overflow = await page.evaluate(() => {
          const doc = document.documentElement;
          return {
            scrollWidth: doc.scrollWidth,
            clientWidth: doc.clientWidth,
            overflowX: doc.scrollWidth > doc.clientWidth + 1,
          };
        });
        if (overflow.overflowX) {
          results.overflow.push({ route: r.route, viewport: "desktop", ...overflow });
        }

        const meta = await page.evaluate(() => {
          const g = (n) => document.querySelector(n)?.getAttribute("content") || "";
          return {
            title: document.title,
            description: g('meta[name="description"]'),
            ogTitle: g('meta[property="og:title"]'),
            twitterTitle: g('meta[name="twitter:title"]'),
            canonical: document.querySelector('link[rel="canonical"]')?.href || "",
            robots: g('meta[name="robots"]'),
          };
        });
        results.metadata.push({ route: r.route, ...meta });

        try {
          const axe = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
            .analyze();
          const crit = axe.violations.filter((v) => v.impact === "critical").length;
          const ser = axe.violations.filter((v) => v.impact === "serious").length;
          results.axe.critical += crit;
          results.axe.serious += ser;
          results.axe.byRoute.push({
            route: r.route,
            critical: crit,
            serious: ser,
            incomplete: axe.incomplete?.length || 0,
          });
        } catch (e) {
          results.axe.byRoute.push({ route: r.route, error: String(e) });
        }
      }
    }

    if (vpName === "desktop") {
      await page.goto(PREVIEW + "/", { waitUntil: "networkidle" });
      results.nav.desktop_labels = await page.evaluate(() => {
        const nav = document.querySelector('nav[aria-label="Main"]');
        if (!nav) return [];
        return Array.from(nav.querySelectorAll("a, button"))
          .map((el) => (el.textContent || "").replace(/\s+/g, " ").trim())
          .filter(Boolean);
      });
      const insightsIndex = await page.goto(PREVIEW + "/insights", {
        waitUntil: "networkidle",
      });
      results.insights_index_status = insightsIndex?.status();
      results.insights_card_count = await page.evaluate(() => {
        return document.querySelectorAll('a[href^="/insights/"]').length;
      });
    }

    await context.close();
  }

  await browser.close();

  const holdPass =
    holdChecks.every((h) => h.pass && !h.inSitemap) && sitemapArticleCount === 27;

  const expectedNav = [
    "Services",
    "Industries",
    "How we engage",
    "Insights",
    "About",
    "Discuss",
  ];
  const navPass = expectedNav.every((label) =>
    (results.nav.desktop_labels || []).some((t) => t.includes(label))
  );

  const validation = {
    phase: "insights-launch-safety",
    application_sha: COMMIT,
    deployment_id: DEPLOYMENT_ID,
    preview: PREVIEW,
    preview_noindex: /noindex/i.test(previewHdr.xRobots || "") ? "PASS" : "FAIL",
    intelligence_redirect: {
      status: intel.status,
      location: intel.location,
      pass: intel.status === 308 && /\/insights/.test(intel.location || ""),
    },
    sitemap_article_count: sitemapArticleCount,
    hold_not_public_excluded: holdPass,
    holdChecks,
    nav_pass: navPass,
    nav_labels: results.nav.desktop_labels,
    insights_card_count: results.insights_card_count,
    screenshot_count: results.screenshots.length,
    axe_critical: results.axe.critical,
    axe_serious: results.axe.serious,
    dash_em: results.dash.em,
    dash_en: results.dash.en,
    overflow_count: results.overflow.length,
    prohibited_count: results.prohibited.length,
    overall:
      /noindex/i.test(previewHdr.xRobots || "") &&
      intel.status === 308 &&
      holdPass &&
      navPass &&
      results.axe.critical === 0 &&
      results.axe.serious === 0 &&
      results.dash.em === 0 &&
      results.dash.en === 0 &&
      results.overflow.length === 0 &&
      results.prohibited.length === 0
        ? "PASS"
        : "FAIL",
  };

  fs.writeFileSync(path.join(AUDIT, "ILS_CAPTURE.json"), JSON.stringify(results, null, 2));
  fs.writeFileSync(
    path.join(AUDIT, "ILS_VALIDATION.json"),
    JSON.stringify(validation, null, 2)
  );
  console.log(JSON.stringify(validation, null, 2));
  process.exit(validation.overall === "PASS" ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
