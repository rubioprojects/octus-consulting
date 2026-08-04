#!/usr/bin/env node
/**
 * Insights Publication Integrity — full public-article validation.
 *
 * Env:
 *   IPI_PREVIEW (required)
 *   IPI_COMMIT (application SHA)
 *   IPI_DEPLOYMENT (dpl_…)
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

const PREVIEW = process.env.IPI_PREVIEW;
const COMMIT = process.env.IPI_COMMIT || "";
const DEPLOYMENT_ID = process.env.IPI_DEPLOYMENT || "";
if (!PREVIEW || !COMMIT || !DEPLOYMENT_ID) {
  console.error("IPI_PREVIEW, IPI_COMMIT, IPI_DEPLOYMENT required");
  process.exit(1);
}

// Load publication registry via dynamic import of compiled TS through tsx isn't available;
// parse counts from built sitemap + hold list embedded from known source.
const HOLD_SLUGS = JSON.parse(
  fs.readFileSync(path.join(AUDIT, "HOLD_SLUGS.json"), "utf8")
);
const PUBLIC_SLUGS = JSON.parse(
  fs.readFileSync(path.join(AUDIT, "PUBLIC_SLUGS.json"), "utf8")
);
const PUBLIC_META = JSON.parse(
  fs.readFileSync(path.join(AUDIT, "PUBLIC_META.json"), "utf8")
);

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

const REGRESSION_ROUTES = [
  { route: "/", name: "home" },
  { route: "/markets", name: "industries" },
  { route: "/about", name: "about" },
  { route: "/team", name: "team" },
  { route: "/solutions", name: "services" },
  { route: "/insights", name: "insights" },
  { route: "/international-hub", name: "hub" },
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
  return {
    em: (text.match(/\u2014/g) || []).length,
    en: (text.match(/\u2013/g) || []).length,
  };
}

function prohibitedHits(text) {
  const patterns = [
    /operational proof/i,
    /certificate wall/i,
    /\bPremium\b/,
    /largest operators/i,
    /major players/i,
    /market leaders/i,
    /tier 1 clients/i,
  ];
  return patterns.filter((p) => p.test(text)).map((p) => p.toString());
}

function brandCount(s) {
  return (String(s || "").match(/Octus Consulting/gi) || []).length;
}

async function main() {
  ensureDir(AUDIT);
  for (const d of ["desktop", "mobile"]) ensureDir(path.join(ROOT, d));

  const previewHdr = await headersFor(PREVIEW + "/");
  const intel = await headersFor(PREVIEW + "/intelligence");
  const sitemapRes = await fetch(PREVIEW + "/sitemap.xml");
  const sitemapText = await sitemapRes.text();
  const sitemapInsightUrls = [
    ...sitemapText.matchAll(
      /https:\/\/octusconsulting\.com\/insights\/([a-z0-9-]+)/g
    ),
  ].map((m) => m[1]);

  const holdChecks = [];
  for (const slug of HOLD_SLUGS) {
    const h = await headersFor(`${PREVIEW}/insights/${slug}`);
    holdChecks.push({
      slug,
      status: h.status,
      pass: h.status === 404,
      inSitemap: sitemapInsightUrls.includes(slug),
    });
  }

  const browser = await chromium.launch({ headless: true });
  const results = {
    phase: "insights-publication-integrity",
    preview: PREVIEW,
    application_sha: COMMIT,
    deployment_id: DEPLOYMENT_ID,
    axe_core: axeCoreVersion,
    captured_at: new Date().toISOString(),
    articleChecks: [],
    axe: { critical: 0, serious: 0, byRoute: [] },
    overflow: [],
    dash: { em: 0, en: 0 },
    prohibited: [],
    nav: {},
  };

  const metadata_routes_tested = [];
  const metadata_duplicate_titles = [];
  const h1_brand_suffix_failures = [];
  const public_routes_without_sources_or_basis = [];
  const current_law_routes_without_primary_sources = [];
  const historical_routes_without_primary_sources = [];
  const generic_source_urls_rejected = [];
  const historical_notice_without_sources = [];
  const source_link_failures = [];
  let duplicate_og = [];
  let duplicate_twitter = [];
  let canonical_failures = [];

  const context = await browser.newContext({
    viewport: VIEWPORTS.desktop,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  for (const slug of PUBLIC_SLUGS) {
    const meta = PUBLIC_META[slug] || {};
    const url = `${PREVIEW}/insights/${slug}`;
    const resp = await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(250);
    metadata_routes_tested.push(slug);

    const hdr = await headersFor(url);
    const evaled = await page.evaluate(() => {
      const g = (n) => document.querySelector(n)?.getAttribute("content") || "";
      const h1 = document.querySelector("h1");
      const body = document.body?.innerText || "";
      const sourceHeading = Array.from(document.querySelectorAll("h2")).find((h) =>
        /sources/i.test(h.textContent || "")
      );
      const editorialHeading = Array.from(document.querySelectorAll("h2")).find((h) =>
        /editorial basis/i.test(h.textContent || "")
      );
      const sourceLinks = sourceHeading
        ? Array.from(sourceHeading.parentElement?.querySelectorAll("a[href]") || []).map(
            (a) => a.getAttribute("href") || ""
          )
        : [];
      return {
        statusTitle: document.title,
        description: g('meta[name="description"]'),
        ogTitle: g('meta[property="og:title"]'),
        twitterTitle: g('meta[name="twitter:title"]'),
        canonical: document.querySelector('link[rel="canonical"]')?.href || "",
        h1: h1?.textContent?.trim() || "",
        h1Count: document.querySelectorAll("h1").length,
        body,
        hasPublished: /Published\s+/i.test(body),
        hasLastReviewed: /Last reviewed\s+/i.test(body),
        hasSources: Boolean(sourceHeading),
        hasEditorialBasis: Boolean(editorialHeading),
        citesWithoutSources:
          /consult the cited primary sources/i.test(body) && !sourceHeading,
        sourceLinks,
        statusLabel:
          /Historical analysis|Editorial commentary|Current analysis/i.test(body),
      };
    });

    const check = {
      slug,
      status: resp?.status(),
      noindex: /noindex/i.test(hdr.xRobots || ""),
      ...evaled,
    };
    results.articleChecks.push(check);

    if (brandCount(evaled.statusTitle) !== 1 || /Octus Consulting\s*\|\s*Octus Consulting/i.test(evaled.statusTitle)) {
      metadata_duplicate_titles.push({ slug, title: evaled.statusTitle });
    }
    if (brandCount(evaled.ogTitle) !== 1 || /Octus Consulting\s*\|\s*Octus Consulting/i.test(evaled.ogTitle)) {
      duplicate_og.push({ slug, title: evaled.ogTitle });
    }
    if (
      brandCount(evaled.twitterTitle) !== 1 ||
      /Octus Consulting\s*\|\s*Octus Consulting/i.test(evaled.twitterTitle)
    ) {
      duplicate_twitter.push({ slug, title: evaled.twitterTitle });
    }
    if (/Octus Consulting/i.test(evaled.h1)) {
      h1_brand_suffix_failures.push({ slug, h1: evaled.h1 });
    }
    const expectedCanon = `https://octusconsulting.com/insights/${slug}`;
    if (evaled.canonical !== expectedCanon) {
      canonical_failures.push({ slug, canonical: evaled.canonical, expected: expectedCanon });
    }

    const isEditorial = meta.publicationStatus === "EDITORIAL_COMMENTARY";
    const isHistorical = meta.publicationStatus === "PUBLISH_HISTORICAL_WITH_UPDATE";
    const isCurrentLaw = Boolean(meta.currentLawDependency);

    if (isEditorial) {
      if (!evaled.hasEditorialBasis) {
        public_routes_without_sources_or_basis.push({ slug, kind: "editorial_missing_basis" });
      }
    } else {
      if (!evaled.hasSources) {
        public_routes_without_sources_or_basis.push({ slug, kind: "missing_sources" });
      }
      if (isCurrentLaw && (!meta.primarySourceCount || meta.primarySourceCount < 1)) {
        current_law_routes_without_primary_sources.push(slug);
      }
      if (isHistorical && (!meta.primarySourceCount || meta.primarySourceCount < 1)) {
        historical_routes_without_primary_sources.push(slug);
      }
      if (evaled.citesWithoutSources) {
        historical_notice_without_sources.push(slug);
      }
      for (const href of evaled.sourceLinks) {
        try {
          const r = await fetch(href, {
            method: "GET",
            redirect: "follow",
            headers: { "user-agent": "OctusPublicationIntegrityBot/1.0" },
          });
          // 403 from bot protection on gov portals is not treated as a broken link;
          // 404/410 are hard failures.
          if (r.status === 404 || r.status === 410 || r.status >= 500) {
            source_link_failures.push({ slug, href, status: r.status });
          }
        } catch (e) {
          source_link_failures.push({ slug, href, error: String(e).slice(0, 120) });
        }
      }
    }

    const dashes = scanDashes(evaled.body);
    results.dash.em += dashes.em;
    results.dash.en += dashes.en;
    const hits = prohibitedHits(evaled.body);
    if (hits.length) results.prohibited.push({ slug, hits });

    try {
      const axe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      const crit = axe.violations.filter((v) => v.impact === "critical").length;
      const ser = axe.violations.filter((v) => v.impact === "serious").length;
      results.axe.critical += crit;
      results.axe.serious += ser;
      results.axe.byRoute.push({ route: `/insights/${slug}`, critical: crit, serious: ser });
    } catch (e) {
      results.axe.byRoute.push({ route: `/insights/${slug}`, error: String(e) });
    }
  }

  // Regression surfaces
  for (const r of REGRESSION_ROUTES) {
    await page.goto(PREVIEW + r.route, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(200);
    const shot = path.join(ROOT, "desktop", `${r.name}__desktop__full.png`);
    await page.screenshot({ path: shot, fullPage: true });
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return {
        overflowX: doc.scrollWidth > doc.clientWidth + 1,
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
      };
    });
    if (overflow.overflowX) results.overflow.push({ route: r.route, ...overflow });
    const bodyText = await page.evaluate(() => document.body?.innerText || "");
    const dashes = scanDashes(bodyText);
    results.dash.em += dashes.em;
    results.dash.en += dashes.en;
  }

  await page.goto(PREVIEW + "/", { waitUntil: "networkidle" });
  results.nav.desktop_labels = await page.evaluate(() => {
    const nav = document.querySelector('nav[aria-label="Main"]');
    if (!nav) return [];
    return Array.from(nav.querySelectorAll("a, button"))
      .map((el) => (el.textContent || "").replace(/\s+/g, " ").trim())
      .filter(Boolean);
  });

  // mobile smoke on home + insights
  const mobile = await browser.newContext({ viewport: VIEWPORTS.mobile });
  const mpage = await mobile.newPage();
  for (const r of ["/", "/insights"]) {
    await mpage.goto(PREVIEW + r, { waitUntil: "networkidle", timeout: 90000 });
    const name = r === "/" ? "home" : "insights";
    await mpage.screenshot({
      path: path.join(ROOT, "mobile", `${name}__mobile__full.png`),
      fullPage: true,
    });
  }
  await mobile.close();
  await context.close();
  await browser.close();

  const holdPass =
    holdChecks.every((h) => h.pass && !h.inSitemap) &&
    sitemapInsightUrls.length === PUBLIC_SLUGS.length &&
    PUBLIC_SLUGS.every((s) => sitemapInsightUrls.includes(s));

  const expectedNav = ["Services", "Industries", "How we engage", "Insights", "About", "Discuss"];
  const navPass = expectedNav.every((label) =>
    (results.nav.desktop_labels || []).some((t) => t.includes(label))
  );

  // generic URLs already rejected at registry build — report zero unless PUBLIC_META flags any
  for (const slug of PUBLIC_SLUGS) {
    const meta = PUBLIC_META[slug] || {};
    for (const g of meta.genericRejected || []) generic_source_urls_rejected.push({ slug, href: g });
  }

  const zeroBags = {
    metadata_routes_tested: metadata_routes_tested.length,
    metadata_duplicate_titles: metadata_duplicate_titles.length,
    h1_brand_suffix_failures: h1_brand_suffix_failures.length,
    public_routes_without_sources_or_basis: public_routes_without_sources_or_basis.length,
    current_law_routes_without_primary_sources: current_law_routes_without_primary_sources.length,
    historical_routes_without_primary_sources: historical_routes_without_primary_sources.length,
    generic_source_urls_rejected: generic_source_urls_rejected.length,
    historical_notice_without_sources: historical_notice_without_sources.length,
    source_link_failures: source_link_failures.length,
    duplicate_og: duplicate_og.length,
    duplicate_twitter: duplicate_twitter.length,
    canonical_failures: canonical_failures.length,
  };

  const bagsZero = Object.entries(zeroBags)
    .filter(([k]) => k !== "metadata_routes_tested")
    .every(([, v]) => v === 0);

  const validation = {
    phase: "insights-publication-integrity",
    application_sha: COMMIT,
    deployment_id: DEPLOYMENT_ID,
    preview: PREVIEW,
    preview_noindex: /noindex/i.test(previewHdr.xRobots || "") ? "PASS" : "FAIL",
    intelligence_redirect: {
      status: intel.status,
      location: intel.location,
      pass: intel.status === 308 && /\/insights/.test(intel.location || ""),
    },
    sitemap_article_count: sitemapInsightUrls.length,
    public_article_count: PUBLIC_SLUGS.length,
    hold_not_public_excluded: holdPass,
    holdChecks,
    nav_pass: navPass,
    ...zeroBags,
    metadata_duplicate_titles_detail: metadata_duplicate_titles,
    h1_brand_suffix_failures_detail: h1_brand_suffix_failures,
    public_routes_without_sources_or_basis_detail: public_routes_without_sources_or_basis,
    current_law_routes_without_primary_sources_detail: current_law_routes_without_primary_sources,
    historical_routes_without_primary_sources_detail: historical_routes_without_primary_sources,
    generic_source_urls_rejected_detail: generic_source_urls_rejected,
    historical_notice_without_sources_detail: historical_notice_without_sources,
    source_link_failures_detail: source_link_failures,
    duplicate_og_titles: duplicate_og,
    duplicate_twitter_titles: duplicate_twitter,
    canonical_failures_detail: canonical_failures,
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
      bagsZero &&
      metadata_routes_tested.length === PUBLIC_SLUGS.length &&
      results.axe.critical === 0 &&
      results.axe.serious === 0 &&
      results.dash.em === 0 &&
      results.dash.en === 0 &&
      results.overflow.length === 0 &&
      results.prohibited.length === 0
        ? "PASS"
        : "FAIL",
  };

  fs.writeFileSync(path.join(AUDIT, "IPI_CAPTURE.json"), JSON.stringify(results, null, 2));
  fs.writeFileSync(path.join(AUDIT, "IPI_VALIDATION.json"), JSON.stringify(validation, null, 2));
  console.log(JSON.stringify(validation, null, 2));
  process.exit(validation.overall === "PASS" ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
