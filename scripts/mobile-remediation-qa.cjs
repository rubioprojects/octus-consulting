/**
 * Mobile remediation visual QA — Playwright.
 * Usage: BASE_URL=http://127.0.0.1:4173 node scripts/mobile-remediation-qa.cjs
 */
const { chromium, devices } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE_URL || "http://127.0.0.1:4173";
const OUT = path.join(
  __dirname,
  "..",
  "docs/ops/evidence/OCTUS_MOBILE_REMEDIATION_2026-08-05/screenshots"
);

const VIEWPORTS = [
  { name: "320x568", width: 320, height: 568 },
  { name: "360x800", width: 360, height: 800 },
  { name: "375x667", width: 375, height: 667 },
  { name: "390x844", width: 390, height: 844 },
  { name: "393x852", width: 393, height: 852 },
  { name: "412x915", width: 412, height: 915 },
  { name: "430x932", width: 430, height: 932 },
  { name: "768x1024", width: 768, height: 1024 },
  { name: "820x1180", width: 820, height: 1180 },
  { name: "1024x768", width: 1024, height: 768 },
  { name: "1440x900", width: 1440, height: 900 },
  { name: "390x844-landscape", width: 844, height: 390 },
];

const CRITICAL_PAGES = [
  "/",
  "/solutions",
  "/solutions/regulatory-structuring",
  "/solutions/compliance-risk",
  "/solutions/legal-structural-architecture",
  "/solutions/corporate-structuring",
  "/solutions/remediation-readiness",
  "/solutions/banking-payments-infrastructure",
  "/private-clients",
  "/international-hub",
  "/markets",
  "/markets/igaming",
  "/markets/fintech",
  "/markets/crypto",
  "/jurisdictions",
  "/brazil",
  "/how-we-engage",
  "/diagnostic",
  "/contact",
  "/about",
  "/team",
  "/insights",
  "/careers",
];

const REDIRECTS = [
  ["/services", "/solutions"],
  ["/intelligence", "/insights"],
  ["/industries", "/markets"],
  ["/industries/igaming", "/markets/igaming"],
  ["/solutions/international-hub", "/international-hub"],
];

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

async function measureOverflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const scrollWidth = Math.max(doc.scrollWidth, body.scrollWidth);
    const clientWidth = doc.clientWidth;
    return {
      overflowX: scrollWidth - clientWidth > 2,
      scrollWidth,
      clientWidth,
      delta: scrollWidth - clientWidth,
    };
  });
}

async function main() {
  ensureDir(OUT);
  const browser = await chromium.launch({ headless: true });
  const results = {
    base: BASE,
    generated_at: new Date().toISOString(),
    viewports: [],
    pages: [],
    redirects: [],
    evidence: [],
    console_errors: [],
    failed_assets: [],
    summary: { pass: true, notes: [] },
  };

  // Redirect checks — Vercel hosts apply vercel.json; local static `serve` does not.
  const isVercelHost = /vercel\.app|octusconsulting\.com/.test(BASE);
  {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    for (const [from, to] of REDIRECTS) {
      const res = await page.goto(BASE + from, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      const finalPath = new URL(page.url()).pathname.replace(/\/$/, "") || "/";
      const expectedPath = to.replace(/\/$/, "") || "/";
      const ok = finalPath === expectedPath || finalPath.startsWith(expectedPath + "/");
      const entry = {
        from,
        expected: to,
        final: page.url(),
        status: res?.status(),
        pass: ok,
        platform: isVercelHost ? "vercel" : "local-static",
      };
      if (!isVercelHost) {
        entry.pass = true;
        entry.note = "Deferred to Vercel preview — local static export does not apply vercel.json redirects";
      } else if (!ok) {
        results.summary.pass = false;
        results.summary.notes.push(`Redirect fail ${from} → ${to} got ${page.url()}`);
      }
      results.redirects.push(entry);
    }
    await ctx.close();
  }

  // Find one insight article
  let insightArticle = null;
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    await page.goto(BASE + "/insights", { waitUntil: "networkidle", timeout: 60000 });
    insightArticle = await page.evaluate(() => {
      const a = document.querySelector('a[href^="/insights/"]');
      return a ? a.getAttribute("href") : null;
    });
    await ctx.close();
  }
  if (insightArticle) CRITICAL_PAGES.push(insightArticle);

  // Viewport overflow matrix on homepage + nav transition
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    const consoleErrs = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrs.push(msg.text());
    });
    page.on("pageerror", (err) => consoleErrs.push(String(err)));
    page.on("requestfailed", (req) => {
      const u = req.url();
      if (u.includes(new URL(BASE).host) || u.startsWith(BASE) || u.startsWith("/")) {
        results.failed_assets.push({ viewport: vp.name, url: u, error: req.failure()?.errorText });
      }
    });

    await page.goto(BASE + "/", { waitUntil: "networkidle", timeout: 90000 });
    // Clear cookie to show banner for some captures
    await page.evaluate(() => localStorage.removeItem("octus-cookies-accepted"));
    await page.reload({ waitUntil: "networkidle" });

    const overflow = await measureOverflow(page);
    const hasDesktopNav = await page.evaluate(() => {
      const desktop = document.querySelector(".site-header .hidden.lg\\:flex, .site-header div.hidden.items-center");
      // Better: check hamburger visibility
      const burger = document.querySelector('button[aria-controls="mobile-nav"]');
      const style = burger ? window.getComputedStyle(burger) : null;
      return { burgerDisplay: style?.display, burgerVisible: style && style.display !== "none" };
    });

    const entry = {
      viewport: vp.name,
      ...vp,
      overflow,
      nav: hasDesktopNav,
      console_errors: consoleErrs.slice(0, 10),
      pass: !overflow.overflowX && consoleErrs.length === 0,
    };
    if (!entry.pass) {
      results.summary.pass = false;
      results.summary.notes.push(`Viewport ${vp.name} fail overflow=${overflow.overflowX} console=${consoleErrs.length}`);
    }
    results.viewports.push(entry);

    if (["390x844", "768x1024", "1024x768", "320x568"].includes(vp.name)) {
      const shot = path.join(OUT, `home-hero-${vp.name}.png`);
      await page.screenshot({ path: shot, fullPage: false });
      results.evidence.push(shot);
    }

    // Open mobile nav when hamburger visible
    if (vp.width < 1024) {
      const burger = page.locator('button[aria-controls="mobile-nav"]');
      if (await burger.isVisible()) {
        await burger.click();
        await page.waitForTimeout(300);
        const navShot = path.join(OUT, `nav-open-${vp.name}.png`);
        await page.screenshot({ path: navShot, fullPage: false });
        results.evidence.push(navShot);
        await page.keyboard.press("Escape");
        await page.waitForTimeout(200);
      }
    }

    await ctx.close();
  }

  // Critical evidence shots at 390×844
  {
    const ctx = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
    });
    const page = await ctx.newPage();
    await page.addInitScript(() => localStorage.removeItem("octus-cookies-accepted"));

    async function shot(name, url, prep) {
      await page.goto(BASE + url, { waitUntil: "networkidle", timeout: 90000 });
      if (prep) await prep(page);
      const file = path.join(OUT, `${name}.png`);
      await page.screenshot({ path: file, fullPage: false });
      results.evidence.push(file);
      const overflow = await measureOverflow(page);
      results.pages.push({ name, url, overflow, pass: !overflow.overflowX });
      if (overflow.overflowX) {
        results.summary.pass = false;
        results.summary.notes.push(`Page shot ${name} overflow`);
      }
    }

    await shot("01-home-hero", "/");
    await shot("02-nav-open", "/", async (p) => {
      await p.locator('button[aria-controls="mobile-nav"]').click();
      await p.waitForTimeout(250);
    });
    await shot("03-capability-rail", "/", async (p) => {
      await p.locator(".capability-rail").scrollIntoViewIfNeeded();
      await p.waitForTimeout(200);
    });
    await shot("04-leadership", "/", async (p) => {
      await p.locator(".home-leadership-trust").scrollIntoViewIfNeeded();
      await p.waitForTimeout(200);
    });
    await shot("05-services-accordion", "/", async (p) => {
      await p.locator(".home-modules-accordion").scrollIntoViewIfNeeded();
      await p.waitForTimeout(200);
    });
    await shot("06-diagnostic", "/diagnostic");
    await shot("07-contact", "/contact");
    await shot("08-team", "/team");
    await shot("09-footer-cookie-visible", "/", async (p) => {
      await p.evaluate(() => localStorage.removeItem("octus-cookies-accepted"));
      await p.reload({ waitUntil: "networkidle" });
      await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await p.waitForTimeout(300);
    });
    await shot("10-footer-cookie-accepted", "/", async (p) => {
      await p.evaluate(() => {
        localStorage.setItem("octus-cookies-accepted", "true");
      });
      await p.reload({ waitUntil: "networkidle" });
      await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await p.waitForTimeout(300);
    });

    // Page matrix overflow spot-check
    for (const route of CRITICAL_PAGES) {
      await page.goto(BASE + route, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(150);
      const overflow = await measureOverflow(page);
      const pass = !overflow.overflowX;
      results.pages.push({ url: route, overflow, pass });
      if (!pass) {
        results.summary.pass = false;
        results.summary.notes.push(`Page ${route} overflow delta=${overflow.delta}`);
      }
    }

    // Cookie / WA overlap check
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.evaluate(() => localStorage.removeItem("octus-cookies-accepted"));
    await page.reload({ waitUntil: "networkidle" });
    const overlap = await page.evaluate(() => {
      const wa = document.querySelector(".wa-float");
      const cookie = document.querySelector(".cookie-banner");
      if (!wa || !cookie) return { checked: false, reason: "missing element" };
      const a = wa.getBoundingClientRect();
      const b = cookie.getBoundingClientRect();
      const intersects = !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);
      return {
        checked: true,
        intersects,
        waBottom: a.bottom,
        cookieTop: b.top,
        gap: b.top - a.bottom,
      };
    });
    results.cookie_wa = overlap;
    if (overlap.checked && overlap.intersects) {
      results.summary.pass = false;
      results.summary.notes.push("WhatsApp overlaps cookie banner");
    }

    // robots / sitemap / noindex on preview-like local
    const robots = await page.goto(BASE + "/robots.txt", { waitUntil: "domcontentloaded" });
    results.robots = { status: robots?.status(), sample: (await page.textContent("body"))?.slice(0, 400) };
    const sitemap = await page.goto(BASE + "/sitemap.xml", { waitUntil: "domcontentloaded" });
    results.sitemap = { status: sitemap?.status() };

    await ctx.close();
  }

  // Lighthouse-lite: performance via CDP metrics on mobile
  {
    const ctx = await browser.newContext({
      viewport: { width: 390, height: 844 },
      ...devices["iPhone 12"],
    });
    const page = await ctx.newPage();
    await page.goto(BASE + "/", { waitUntil: "networkidle", timeout: 90000 });
    const perf = await page.evaluate(() => {
      const nav = performance.getEntriesByType("navigation")[0];
      const paints = performance.getEntriesByType("paint");
      const lcpEntries = performance.getEntriesByType("largest-contentful-paint");
      return {
        domContentLoaded: nav?.domContentLoadedEventEnd,
        loadEventEnd: nav?.loadEventEnd,
        fcp: paints.find((p) => p.name === "first-contentful-paint")?.startTime,
        lcp: lcpEntries.length ? lcpEntries[lcpEntries.length - 1].startTime : null,
      };
    });
    results.performance_mobile_home = perf;
    await ctx.close();
  }

  await browser.close();

  const reportPath = path.join(
    __dirname,
    "..",
    "docs/ops/evidence/OCTUS_MOBILE_REMEDIATION_2026-08-05/QA_MATRIX.json"
  );
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(JSON.stringify({ reportPath, pass: results.summary.pass, notes: results.summary.notes }, null, 2));
  process.exit(results.summary.pass ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
