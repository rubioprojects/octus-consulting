#!/usr/bin/env node
/**
 * Production readiness SEO/metadata spot-check against a preview base URL.
 * Usage: node scripts/production-release-readiness-audit.cjs [previewBaseUrl]
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.argv[2] || "https://octus-consulting-fqtfbfvxm-axle1.vercel.app";
const OUT = path.join(
  process.cwd(),
  "docs/ops/evidence/OCTUS_PRODUCTION_RELEASE_READINESS_2026-08-04",
);

const ROUTES = [
  "/",
  "/solutions",
  "/solutions/regulatory-structuring",
  "/solutions/compliance-risk",
  "/solutions/legal-structural-architecture",
  "/solutions/corporate-structuring",
  "/solutions/remediation-readiness",
  "/international-hub",
  "/private-clients",
  "/markets",
  "/brazil",
  "/jurisdictions",
  "/team",
  "/about",
  "/how-we-engage",
  "/contact",
  "/diagnostic",
  "/careers",
  "/partners",
  "/insights",
  "/privacy",
  "/terms",
  "/cookies",
  "/compliance-channel",
];

function abs(u) {
  try {
    return new URL(u, "https://octusconsulting.com").href;
  } catch {
    return u;
  }
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const rows = [];
  const titles = new Map();

  for (const route of ROUTES) {
    const url = `${BASE.replace(/\/$/, "")}${route}`;
    const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    const status = res ? res.status() : 0;
    try {
      await page.click('button:has-text("Continue")', { timeout: 1500 });
    } catch {}

    const meta = await page.evaluate(() => {
      const g = (sel) => document.querySelector(sel)?.getAttribute("content") || "";
      const canonical = document.querySelector('link[rel="canonical"]')?.href || "";
      const title = document.title || "";
      const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')].map(
        (s) => s.textContent || "",
      );
      const brandCount = (title.match(/Octus Consulting/g) || []).length;
      return {
        title,
        brandCount,
        description: g('meta[name="description"]'),
        canonical,
        ogTitle: g('meta[property="og:title"]'),
        ogDescription: g('meta[property="og:description"]'),
        ogImage: g('meta[property="og:image"]'),
        ogUrl: g('meta[property="og:url"]'),
        twTitle: g('meta[name="twitter:title"]'),
        twDescription: g('meta[name="twitter:description"]'),
        twImage: g('meta[name="twitter:image"]'),
        jsonLdCount: jsonLd.length,
        jsonLdSample: jsonLd[0]?.slice(0, 120) || "",
        hasAxlePreviewInOg: [g('meta[property="og:url"]'), g('meta[property="og:image"]'), canonical]
          .join(" ")
          .includes("vercel.app"),
      };
    });

    titles.set(meta.title, (titles.get(meta.title) || 0) + 1);
    rows.push({ route, status, ...meta });
  }

  // robots + sitemap from preview (content should still reference production sitemap)
  const robotsRes = await page.goto(`${BASE.replace(/\/$/, "")}/robots.txt`, {
    waitUntil: "domcontentloaded",
  });
  const robotsText = await page.locator("body").innerText().catch(() => "");
  const sitemapRes = await page.goto(`${BASE.replace(/\/$/, "")}/sitemap.xml`, {
    waitUntil: "domcontentloaded",
  });
  const sitemapText = await page.content();
  const holdLeak = /HOLD_NOT_PUBLIC|stf-suspends-blocking/i.test(sitemapText);
  const sitemapUrls = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  await browser.close();

  const report = {
    preview_base: BASE,
    generated_at: new Date().toISOString(),
    route_count_checked: rows.length,
    http_non_200: rows.filter((r) => r.status !== 200).map((r) => ({ route: r.route, status: r.status })),
    missing_canonical: rows.filter((r) => !r.canonical).map((r) => r.route),
    missing_description: rows.filter((r) => !r.description).map((r) => r.route),
    missing_og: rows.filter((r) => !r.ogTitle || !r.ogDescription || !r.ogImage || !r.ogUrl).map((r) => r.route),
    missing_twitter: rows
      .filter((r) => !r.twTitle || !r.twDescription || !r.twImage)
      .map((r) => r.route),
    double_brand_titles: rows.filter((r) => r.brandCount > 1).map((r) => ({ route: r.route, title: r.title })),
    preview_urls_in_social: rows.filter((r) => r.hasAxlePreviewInOg).map((r) => r.route),
    duplicate_titles: [...titles.entries()].filter(([, c]) => c > 1),
    robots_status: robotsRes?.status() || 0,
    robots_has_sitemap: /Sitemap:\s*https:\/\/octusconsulting\.com\/sitemap\.xml/i.test(robotsText),
    robots_allows_googlebot: /User-agent:\s*Googlebot/i.test(robotsText),
    sitemap_status: sitemapRes?.status() || 0,
    sitemap_url_count: sitemapUrls.length,
    sitemap_hold_leak: holdLeak,
    organization_jsonld_on_home: rows.find((r) => r.route === "/")?.jsonLdCount > 0,
    team_jsonld: rows.find((r) => r.route === "/team")?.jsonLdCount > 0,
    rows,
  };

  fs.writeFileSync(path.join(OUT, "ROUTE_METADATA_AUDIT.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({
    ok:
      report.http_non_200.length === 0 &&
      report.missing_canonical.length === 0 &&
      report.missing_og.length === 0 &&
      report.preview_urls_in_social.length === 0 &&
      report.double_brand_titles.length === 0 &&
      !report.sitemap_hold_leak,
    route_count_checked: report.route_count_checked,
    sitemap_url_count: report.sitemap_url_count,
    out: path.join(OUT, "ROUTE_METADATA_AUDIT.json"),
  }, null, 2));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
