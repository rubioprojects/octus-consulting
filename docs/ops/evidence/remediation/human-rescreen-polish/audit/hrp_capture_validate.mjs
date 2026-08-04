#!/usr/bin/env node
/**
 * Human Rescreen Polish — capture + regression against immutable preview.
 *
 * Env:
 *   HRP_PREVIEW (required)
 *   HRP_COMMIT (application SHA)
 *   HRP_DEPLOYMENT (dpl_…)
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

const PREVIEW = process.env.HRP_PREVIEW;
const COMMIT = process.env.HRP_COMMIT || "";
const DEPLOYMENT_ID = process.env.HRP_DEPLOYMENT || "";
if (!PREVIEW || !COMMIT || !DEPLOYMENT_ID) {
  console.error("HRP_PREVIEW, HRP_COMMIT, HRP_DEPLOYMENT required");
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
  { route: "/markets/fintech", name: "industry-fintech" },
  { route: "/markets/crypto", name: "industry-crypto" },
  { route: "/markets/technology", name: "industry-technology" },
  { route: "/markets/forex", name: "industry-forex" },
  { route: "/markets/high-risk", name: "industry-high-risk" },
  { route: "/how-we-engage", name: "how-we-engage" },
  { route: "/insights", name: "insights" },
  { route: "/about", name: "about" },
  { route: "/team", name: "team" },
  { route: "/contact", name: "contact" },
  { route: "/solutions", name: "services" },
  { route: "/solutions/regulatory-structuring", name: "service-regulatory" },
  { route: "/solutions/remediation-readiness", name: "service-remediation" },
  { route: "/international-hub", name: "service-hub" },
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
  for (const d of ["desktop", "mobile", "after", "control"]) {
    ensureDir(path.join(ROOT, d));
  }

  const previewHdr = await headersFor(PREVIEW + "/");
  const intel = await headersFor(PREVIEW + "/intelligence");
  const tech = await headersFor(PREVIEW + "/markets/technology");
  const forex = await headersFor(PREVIEW + "/markets/forex");

  const browser = await chromium.launch({ headless: true });
  const results = {
    phase: "human-rescreen-polish",
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
      await page.waitForTimeout(400);

      const shotName = `${r.name}__${vpName}__full.png`;
      const shotPath = path.join(ROOT, vpName, shotName);
      await page.screenshot({ path: shotPath, fullPage: true });
      results.screenshots.push({ route: r.route, viewport: vpName, file: shotPath, status: resp?.status() });

      // chapter crop: hero
      const heroShot = path.join(ROOT, "after", `${r.name}__${vpName}__hero.png`);
      await page.screenshot({ path: heroShot, fullPage: false });
      results.screenshots.push({ route: r.route, viewport: vpName, file: heroShot, kind: "hero" });

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
        if (overflow.overflowX) results.overflow.push({ route: r.route, viewport: "desktop", ...overflow });

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

    // Navigation order check on home
    if (vpName === "desktop") {
      await page.goto(PREVIEW + "/", { waitUntil: "networkidle" });
      const desktopNav = await page.evaluate(() => {
        const nav = document.querySelector('nav[aria-label="Main"]');
        if (!nav) return [];
        return Array.from(nav.querySelectorAll("a, button"))
          .map((el) => (el.textContent || "").replace(/\s+/g, " ").trim())
          .filter(Boolean);
      });
      results.nav.desktop_labels = desktopNav;
    }

    if (vpName === "mobile") {
      await page.goto(PREVIEW + "/", { waitUntil: "networkidle" });
      const openBtn = page.getByRole("button", { name: /open menu/i });
      if (await openBtn.count()) {
        await openBtn.click();
        await page.waitForTimeout(300);
        const mobileNav = await page.evaluate(() => {
          const dlg = document.querySelector('#mobile-nav, [aria-label="Mobile navigation"]');
          if (!dlg) return [];
          return Array.from(dlg.querySelectorAll("a"))
            .map((el) => (el.textContent || "").replace(/\s+/g, " ").trim())
            .filter(Boolean);
        });
        results.nav.mobile_labels = mobileNav;
        const menuShot = path.join(ROOT, "mobile", "nav-open__mobile.png");
        await page.screenshot({ path: menuShot, fullPage: false });
        results.screenshots.push({ route: "/", viewport: "mobile", file: menuShot, kind: "nav" });
      }
      // footer
      await page.goto(PREVIEW + "/", { waitUntil: "networkidle" });
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(200);
      const footShot = path.join(ROOT, "mobile", "footer__mobile.png");
      await page.screenshot({ path: footShot, fullPage: false });
      results.screenshots.push({ route: "/", viewport: "mobile", file: footShot, kind: "footer" });
    }

    if (vpName === "desktop") {
      await page.goto(PREVIEW + "/", { waitUntil: "networkidle" });
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(200);
      const footShot = path.join(ROOT, "desktop", "footer__desktop.png");
      await page.screenshot({ path: footShot, fullPage: false });
      results.screenshots.push({ route: "/", viewport: "desktop", file: footShot, kind: "footer" });
    }

    await context.close();
  }

  await browser.close();

  // Article count from source
  const postsPath = path.join(REPO, "lib/posts.ts");
  const postsSrc = fs.readFileSync(postsPath, "utf8");
  const articleCount = (postsSrc.match(/slug:\s*"/g) || []).length;

  const validation = {
    phase: "human-rescreen-polish",
    application_sha: COMMIT,
    deployment_id: DEPLOYMENT_ID,
    preview: PREVIEW,
    preview_noindex: /noindex/i.test(previewHdr.xRobots || "") ? "PASS" : "FAIL",
    intelligence_redirect: {
      status: intel.status,
      location: intel.location,
      pass: intel.status === 308 && /\/insights/.test(intel.location || ""),
    },
    new_routes: {
      technology: tech.status,
      forex: forex.status,
    },
    screenshot_count: results.screenshots.length,
    axe_critical: results.axe.critical,
    axe_serious: results.axe.serious,
    dash_em: results.dash.em,
    dash_en: results.dash.en,
    overflow_count: results.overflow.length,
    prohibited_count: results.prohibited.length,
    article_count: articleCount,
    overall:
      /noindex/i.test(previewHdr.xRobots || "") &&
      intel.status === 308 &&
      tech.status === 200 &&
      forex.status === 200 &&
      results.axe.critical === 0 &&
      results.axe.serious === 0 &&
      results.dash.em === 0 &&
      results.dash.en === 0 &&
      results.overflow.length === 0 &&
      results.prohibited.length === 0
        ? "PASS"
        : "FAIL",
  };

  fs.writeFileSync(path.join(AUDIT, "HRP_CAPTURE.json"), JSON.stringify(results, null, 2));
  fs.writeFileSync(path.join(AUDIT, "HRP_VALIDATION.json"), JSON.stringify(validation, null, 2));
  console.log(JSON.stringify(validation, null, 2));
  process.exit(validation.overall === "PASS" ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
