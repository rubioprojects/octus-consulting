#!/usr/bin/env node
/**
 * Phase 3 Homepage capture + validation against immutable Vercel preview.
 */
import { chromium } from "playwright";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPO = path.resolve(ROOT, "../../../../../");
const COMMIT = "47db576145b80f7c232b0d31c3372247a6f538fc";
const DEPLOYMENT_ID = "dpl_FCywMhkUrBatkqCH4t3s7izYvUYE";
const RECONCILED = "https://octus-consulting-l79bo9vrg-axle1.vercel.app";
const BASELINE = "https://octus-consulting-9q798dbg2-axle1.vercel.app";
const BEFORE = "https://octus-consulting-kovk3ad1l-axle1.vercel.app";

const EXPECTED_NAMES = [
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
const EXPECTED_PORTRAITS = {
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

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

const HOME_CHAPTERS = [
  { id: "full", selector: null, fullPage: true },
  { id: "hero", selector: ".home-hero", fullPage: false, height: 900 },
  { id: "hero-to-rail", selector: ".capability-rail", fullPage: false, height: 200, includeAbove: 700 },
  { id: "capability-rail", selector: ".capability-rail", fullPage: false, height: 120 },
  { id: "authority", selector: ".home-authority", fullPage: false, height: 400 },
  { id: "leadership", selector: ".home-leadership-trust", fullPage: false, height: 800 },
  { id: "rubio-portrait", selector: ".team-photo--rubio, .home-leadership-trust__card", fullPage: false, crop: true, index: 0 },
  { id: "maria-portrait", selector: ".team-photo--maria, .home-leadership-trust__card", fullPage: false, crop: true, index: 1 },
  { id: "what-we-fix", selector: "h2", text: "What we fix.", height: 900 },
  { id: "how-we-work", selector: "h2", text: "A structural approach", height: 700 },
  { id: "industries", selector: "h2", text: "Where we operate.", height: 700 },
  { id: "pressure", selector: "h2", text: "Where regulated operations stall.", height: 700 },
  { id: "crisis-cta", selector: "h2", text: "If your operation is stuck", height: 520 },
  { id: "seven-area", selector: "h2", text: "Seven areas.", height: 900 },
  { id: "remediation", selector: "h2", text: "Remediation & Readiness", height: 500 },
  { id: "intelligence", selector: "h2", text: "Authority for operators", height: 420 },
  { id: "final-cta", selector: "h2", text: "Mandates Octus accepts.", height: 480 },
  { id: "footer-transition", selector: "footer", fullPage: false, height: 500, includeAbove: 120 },
];

function sha256File(fp) {
  return crypto.createHash("sha256").update(fs.readFileSync(fp)).digest("hex");
}
function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}
async function httpMeta(url) {
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, xRobots: res.headers.get("x-robots-tag") || "" };
}

function entry(meta, fileRel, classification, route, chapter, viewport, scroll, http_status, hashMeta, status) {
  return {
    file: fileRel,
    classification,
    route,
    chapter,
    source_url: meta.base + route,
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

async function captureChapter(page, vp, chapterSpec, outAbs) {
  ensureDir(path.dirname(outAbs));
  if (chapterSpec.fullPage) {
    await page.screenshot({ path: outAbs, fullPage: true, animations: "disabled" });
    return { scroll: "fullPage", ok: true };
  }
  let loc;
  if (chapterSpec.text) {
    loc = page.locator(`${chapterSpec.selector || "h2"}`, { hasText: chapterSpec.text }).first();
  } else if (chapterSpec.crop) {
    const cards = page.locator(".home-leadership-trust__card");
    loc = cards.nth(chapterSpec.index || 0);
  } else {
    loc = page.locator(chapterSpec.selector).first();
  }
  if ((await loc.count()) === 0) {
    await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
    return { scroll: chapterSpec.selector || chapterSpec.text || "missing", ok: false };
  }
  await loc.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  if (chapterSpec.crop) {
    await loc.screenshot({ path: outAbs, animations: "disabled" });
    return { scroll: `crop:${chapterSpec.id}`, ok: true };
  }
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

async function captureOrigin(browser, label, meta, chapters, vps = ["desktop", "mobile"]) {
  const items = [];
  for (const vpName of vps) {
    const vp = VIEWPORTS[vpName];
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const res = await page.goto(meta.base + "/", { waitUntil: "networkidle", timeout: 90000 });
    const status = res?.status() || 0;
    await page.waitForTimeout(400);
    for (const ch of chapters) {
      // skip some chapters on mobile subset
      if (vpName === "mobile" && ["rubio-portrait", "maria-portrait", "footer-transition", "hero-to-rail"].includes(ch.id)) {
        continue;
      }
      const mobileOnlyExtra = [];
      const fileRel = `${label}/${vpName}-${ch.id}.png`;
      const abs = path.join(ROOT, fileRel);
      const capt = await captureChapter(page, vp, ch, abs);
      const hm = { bytes: fs.statSync(abs).size, sha256: sha256File(abs) };
      items.push(
        entry(
          meta,
          fileRel,
          label,
          "/",
          ch.id,
          `${vp.width}x${vp.height}`,
          capt.scroll,
          status,
          hm,
          status === 200 && capt.ok ? "PASS" : "FAIL"
        )
      );
    }
    // required mobile extras
    if (vpName === "mobile") {
      for (const extra of [
        { id: "mobile-first-fold", fullPage: false, height: 844, selector: "body" },
        { id: "mobile-leadership", selector: ".home-leadership-trust", height: 900 },
        { id: "mobile-seven-area", selector: "h2", text: "Seven areas.", height: 900 },
        { id: "mobile-final-cta", selector: "h2", text: "Mandates Octus accepts.", height: 500 },
      ]) {
        if (extra.selector === "body") {
          await page.evaluate(() => window.scrollTo(0, 0));
          await page.waitForTimeout(150);
          const fileRel = `${label}/${extra.id}.png`;
          const abs = path.join(ROOT, fileRel);
          await page.screenshot({ path: abs, fullPage: false, animations: "disabled" });
          const hm = { bytes: fs.statSync(abs).size, sha256: sha256File(abs) };
          items.push(entry(meta, fileRel, label, "/", extra.id, `${vp.width}x${vp.height}`, "y=0", status, hm, "PASS"));
        } else {
          const fileRel = `${label}/${extra.id}.png`;
          const abs = path.join(ROOT, fileRel);
          const capt = await captureChapter(page, vp, extra, abs);
          const hm = { bytes: fs.statSync(abs).size, sha256: sha256File(abs) };
          items.push(entry(meta, fileRel, label, "/", extra.id, `${vp.width}x${vp.height}`, capt.scroll, status, hm, capt.ok ? "PASS" : "FAIL"));
        }
      }
    }
    await ctx.close();
  }
  return items;
}

async function main() {
  const metaRec = { base: RECONCILED, commit: COMMIT, deploymentId: DEPLOYMENT_ID };
  const metaBase = { base: BASELINE, commit: "baseline_deployment:437tawkoMDv7sqxW6NzPzTegj1Lq", deploymentId: "dpl_437tawkoMDv7sqxW6NzPzTegj1Lq" };
  const metaBefore = { base: BEFORE, commit: "ef0d9465f07993c811144291d0da0371d12e7229", deploymentId: "dpl_4pDMJNttdiwdLJmkyBbSffxBqDWK" };

  const browser = await chromium.launch({ headless: true });
  const allItems = [];

  console.log("Capturing reconciled...");
  allItems.push(...(await captureOrigin(browser, "reconciled", metaRec, HOME_CHAPTERS)));
  console.log("Capturing baseline chapters...");
  allItems.push(...(await captureOrigin(browser, "baseline", metaBase, HOME_CHAPTERS.filter((c) => ["full", "hero", "authority", "leadership", "seven-area", "final-cta"].includes(c.id)))));
  console.log("Capturing before chapters...");
  allItems.push(...(await captureOrigin(browser, "before", metaBefore, HOME_CHAPTERS.filter((c) => ["full", "hero", "authority", "leadership", "seven-area", "final-cta"].includes(c.id)))));

  // shared: leadership portraits only if needed
  ensureDir(path.join(ROOT, "shared"));

  // Validation
  console.log("Validating...");
  const deskCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const desk = await deskCtx.newPage();
  await desk.goto(RECONCILED + "/", { waitUntil: "networkidle" });
  await desk.waitForTimeout(400);

  const homeAudit = await desk.evaluate(() => {
    const text = document.body.innerText;
    const hero = document.querySelector(".home-hero");
    const h1 = document.querySelector("h1");
    const auth = document.querySelector(".home-authority");
    const leads = [...document.querySelectorAll(".home-leadership-trust__name")].map((n) => n.textContent.trim());
    const roles = [...document.querySelectorAll(".home-leadership-trust__role")].map((n) => n.textContent.trim());
    const areas = [...document.querySelectorAll(".capability-rail__item, .capability-rail__grid-item")].map((el) => el.textContent.trim()).filter(Boolean);
    const uniqueAreas = [...new Set(areas.map((a) => a.replace(/\s+/g, " ")))];
    const links = [...document.querySelectorAll("main a[href]")].map((a) => ({
      text: a.textContent.trim().replace(/\s+/g, " ").slice(0, 80),
      href: a.getAttribute("href"),
    }));
    const arrowLabels = links.filter((l) => (l.text.match(/→/g) || []).length > 1);
    const labelCounts = {};
    for (const l of links) {
      if (!l.text) continue;
      labelCounts[l.text] = (labelCounts[l.text] || 0) + 1;
    }
    const dupLabels = Object.entries(labelCounts).filter(([, n]) => n > 2).map(([k, n]) => `${k}×${n}`);
    const prohibited = [
      "not a law firm",
      "06 solutions",
      "six solutions",
      "guaranteed",
      "license shop",
    ].filter((p) => text.toLowerCase().includes(p));
    const hs = [...document.querySelectorAll("h1,h2,h3")].map((h) => h.tagName);
    const overflow = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
    const wa = document.querySelector(".wa-float");
    const header = document.querySelector(".site-header, header");
    return {
      heroH: hero ? Math.round(hero.getBoundingClientRect().height) : null,
      h1W: h1 ? Math.round(h1.getBoundingClientRect().width) : null,
      authH: auth ? Math.round(auth.getBoundingClientRect().height) : null,
      leads,
      roles,
      uniqueAreas,
      areaCount: uniqueAreas.length,
      links,
      arrowLabels,
      dupLabels,
      prohibited,
      h1Count: document.querySelectorAll("h1").length,
      lang: document.documentElement.lang,
      overflow,
      waBottom: wa ? getComputedStyle(wa).bottom : null,
      headerH: header ? Math.round(header.getBoundingClientRect().height) : null,
      sevenHeading: /Seven areas\. One execution partner\./.test(text),
      bankingPeerCard: /Banking & Payments/.test(document.querySelector(".capability-rail")?.innerText || "") && false,
      hasBankingInRail: /Banking/.test(document.querySelector(".capability-rail")?.innerText || ""),
    };
  });

  // CTA target audit — relative links
  const broken = [];
  for (const l of homeAudit.links) {
    if (!l.href || l.href.startsWith("http") || l.href.startsWith("mailto") || l.href.startsWith("#")) continue;
    const meta = await httpMeta(RECONCILED + l.href.split("#")[0]);
    if (meta.status >= 400) broken.push({ ...l, status: meta.status });
  }

  const homeHeaders = await httpMeta(RECONCILED + "/");
  const overflowDesk = homeAudit.overflow;

  // mobile home overflow
  const mobCtx = await browser.newContext({ viewport: VIEWPORTS.mobile });
  const mob = await mobCtx.newPage();
  await mob.goto(RECONCILED + "/", { waitUntil: "networkidle" });
  const overflowMob = await mob.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  await mobCtx.close();

  // Team regression
  async function teamCheck(vp) {
    const ctx = await browser.newContext({ viewport: vp });
    const page = await ctx.newPage();
    await page.goto(RECONCILED + "/team", { waitUntil: "networkidle" });
    const data = await page.evaluate((expected) => {
      const names = [...document.querySelectorAll("h3")].map((h) => h.textContent.trim()).filter(Boolean);
      const bands = [...document.querySelectorAll(".team-band-label")].map((el) => el.textContent.trim());
      return {
        names,
        exact: names.length === 10 && expected.every((n, i) => names[i] === n),
        bands,
        overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      };
    }, EXPECTED_NAMES);
    await ctx.close();
    return data;
  }
  const teamDesk = await teamCheck(VIEWPORTS.desktop);
  const teamMob = await teamCheck(VIEWPORTS.mobile);

  // route crawl regression
  const crawl = {};
  for (const r of ["/", "/team", "/solutions", "/about", "/contact"]) {
    crawl[r] = await httpMeta(RECONCILED + r);
  }

  // global chrome on about
  const aboutCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const about = await aboutCtx.newPage();
  await about.goto(RECONCILED + "/about", { waitUntil: "networkidle" });
  const aboutChrome = await about.evaluate(() => {
    const header = document.querySelector(".site-header, header");
    const logo = document.querySelector("img.site-header__logo, .site-header img");
    const footerLogo = document.querySelector("footer img");
    const wa = document.querySelector(".wa-float");
    return {
      headerH: header ? Math.round(header.getBoundingClientRect().height) : null,
      logoH: logo ? Math.round(logo.getBoundingClientRect().height * 10) / 10 : null,
      footerLogoH: footerLogo ? Math.round(footerLogo.getBoundingClientRect().height) : null,
      waBottom: wa ? getComputedStyle(wa).bottom : null,
    };
  });
  await aboutCtx.close();

  await deskCtx.close();
  await browser.close();

  // portraits
  const portraits = {};
  let portraitsOk = true;
  for (const [file, expected] of Object.entries(EXPECTED_PORTRAITS)) {
    const fp = path.join(REPO, "public/team", file);
    const actual = fs.existsSync(fp) ? sha256File(fp) : "MISSING";
    const ok = actual === expected;
    if (!ok) portraitsOk = false;
    portraits[file] = { expected, actual, status: ok ? "PASS" : "FAIL" };
  }

  // frozen file scan vs accepted phase2 head
  const diffNames = execSync("git diff --name-only 4a4687134156dce4e5892552a049ff00747d1172..47db576145b80f7c232b0d31c3372247a6f538fc", {
    cwd: REPO,
    encoding: "utf8",
  })
    .trim()
    .split("\n")
    .filter(Boolean);
  const PROHIBITED = [
    "app/team/page.tsx",
    "components/Nav.tsx",
    "app/layout.tsx",
    "components/CookieBanner.tsx",
    "components/system/PageHero.tsx",
    "components/system/AreaHubPage.tsx",
    "components/system/DarkHeroAtmosphere.tsx",
    "public/team/",
  ];
  const prohibitedHits = diffNames.filter((f) => PROHIBITED.some((p) => f === p || f.startsWith(p)));
  const allowedApp = ["app/page.tsx", "app/globals.css"];
  const unexpectedApp = diffNames.filter((f) => (f.startsWith("app/") || f.startsWith("components/")) && !allowedApp.includes(f) && !f.startsWith("docs/"));

  const checks = {
    homepage_http: homeHeaders.status === 200 ? "PASS" : "FAIL",
    hero_height_880: homeAudit.heroH === 880 ? "PASS" : "FAIL",
    h1_full_width: homeAudit.h1W >= 800 ? "PASS" : "FAIL",
    authority_height: homeAudit.authH === 323 ? "PASS" : "FAIL",
    leadership_titles:
      homeAudit.roles?.[0] === "Founder & CEO" && homeAudit.roles?.[1] === "Operations Coordination" ? "PASS" : "FAIL",
    seven_areas_heading: homeAudit.sevenHeading ? "PASS" : "FAIL",
    no_banking_in_rail: !homeAudit.hasBankingInRail ? "PASS" : "FAIL",
    prohibited_copy: homeAudit.prohibited.length === 0 ? "PASS" : "FAIL",
    duplicate_arrows: homeAudit.arrowLabels.length === 0 ? "PASS" : "FAIL",
    internal_links: broken.length === 0 ? "PASS" : "FAIL",
    desktop_overflow: !overflowDesk ? "PASS" : "FAIL",
    mobile_overflow: !overflowMob ? "PASS" : "FAIL",
    a11y_h1: homeAudit.h1Count === 1 ? "PASS" : "FAIL",
    portrait_hashes: portraitsOk ? "PASS" : "FAIL",
    team_roster_desktop: teamDesk.exact ? "PASS" : "FAIL",
    team_roster_mobile: teamMob.exact ? "PASS" : "FAIL",
    team_overflow_desktop: !teamDesk.overflow ? "PASS" : "FAIL",
    team_overflow_mobile: !teamMob.overflow ? "PASS" : "FAIL",
    header_regression: homeAudit.headerH === 84 && aboutChrome.headerH === 84 ? "PASS" : "FAIL",
    logo_regression: aboutChrome.logoH === 36 ? "PASS" : "FAIL",
    footer_logo_regression: aboutChrome.footerLogoH === 48 ? "PASS" : "FAIL",
    whatsapp_24: String(homeAudit.waBottom).includes("24px") ? "PASS" : "FAIL",
    noindex: homeHeaders.xRobots.includes("noindex") ? "PASS" : "FAIL",
    crawl_regression: Object.values(crawl).every((c) => c.status === 200) ? "PASS" : "FAIL",
    frozen_files: prohibitedHits.length === 0 && unexpectedApp.length === 0 ? "PASS" : "FAIL",
  };

  const failed = Object.entries(checks).filter(([, v]) => v !== "PASS").map(([k, v]) => `${k}=${v}`);
  const validation = {
    generated_at: new Date().toISOString(),
    starting_head: "4a4687134156dce4e5892552a049ff00747d1172",
    phase3_impl_commit: COMMIT,
    immutable_preview_url: RECONCILED,
    deployment_id: DEPLOYMENT_ID,
    checks,
    failed_checks: failed,
    overall: failed.length === 0 ? "PASS" : "FAIL",
    results: {
      homeAudit,
      broken,
      crawl,
      aboutChrome,
      teamDesk,
      teamMob,
      portraits,
      diffNames,
      prohibitedHits,
      unexpectedApp,
      ctaRegister: homeAudit.links,
    },
  };

  const missingMeta = allItems.filter(
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
    phase: 3,
    accepted_phase2_head: "4a4687134156dce4e5892552a049ff00747d1172",
    phase3_impl_commit: COMMIT,
    immutable_preview_url: RECONCILED,
    deployment_id: DEPLOYMENT_ID,
    baseline_url: BASELINE,
    before_url: BEFORE,
    screenshot_count: allItems.length,
    screenshot_entries_missing_metadata: missingMeta.length,
    items: allItems,
  };

  fs.writeFileSync(path.join(ROOT, "SCREENSHOT_MANIFEST.json"), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(ROOT, "audit", "PHASE3_VALIDATION.json"), JSON.stringify(validation, null, 2));
  console.log(JSON.stringify({ screenshot_count: allItems.length, missing: missingMeta.length, overall: validation.overall, failed }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
