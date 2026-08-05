#!/usr/bin/env node
/**
 * Phase 5A final validation + provenance closeout.
 *
 * Env: PHASE5A_PREVIEW, PHASE5A_COMMIT, PHASE5A_DEPLOYMENT [, PHASE5A_DEPLOYED_SHA]
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

const ROUTES = ["/about", "/how-we-engage", "/contact", "/diagnostic", "/partners", "/careers"];
const PHASE5A_START = "15df1e82c5ccd3dfb47d83dda30805fbd55b5497";
const BASELINE_SHA = "8b12fcc88922e6ed07b98dd40da0a27bde71bbf9";
const BEFORE_SHA = "eac4e514ea751314774f3e69f71ebd52245d2534";

const TEAM_ORDER = [
  { name: "Rubio Teixeira", title: "Founder & CEO", file: "rubio-teixeira.jpg" },
  { name: "Maria Cristina", title: "Operations Coordination", file: "maria-cristina.jpg" },
  { name: "Rodrigo Coelho Lopes", title: "Legal Architecture Lead", file: "rodrigo-lopes.jpg" },
  { name: "Claudia Nery", title: "Chief Financial Officer", file: "claudia-nery.jpg" },
  { name: "Esther Vendrami", title: "International Regulatory & Compliance Lead", file: "esther-vendrami.jpg" },
  { name: "Caroline Giovanetti", title: "Brazil Regulatory Lead", file: "caroline-giovanetti.jpg" },
  { name: "Larissa Carvalho", title: "Regulatory & Compliance Specialist", file: "larissa-carvalho.jpg" },
  { name: "Milla Ludovico", title: "Business Development Lead", file: "milla-ludovico.jpg" },
  { name: "Bianca Carolina Oliveira Andrade", title: "People & Operations", file: "bianca.jpg" },
  { name: "Luciana Santos Veloso", title: "Operations Coordinator", file: "luciana-santos-veloso.jpg" },
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

const ACCEPTED_WA = { bottom: 24, right: 24, h: 48, wMin: 48, wMax: 220 };
const ACCEPTED_HEADER_H = 84;

const ALIAS_PROBES = [
  "/about-us",
  "/about-octus",
  "/engagement",
  "/how-we-work",
  "/contact-us",
  "/get-in-touch",
  "/diagnostics",
  "/assessment",
  "/partners-network",
  "/jobs",
  "/careers-octus",
];

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
  "components/CookieBanner.tsx",
];

function originBase(u) {
  return String(u).replace(/\/$/, "");
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
  let url = new URL(href, base).href;
  const hops = [];
  for (let i = 0; i < 8; i++) {
    const meta = await headMeta(url);
    hops.push(meta);
    if ([301, 302, 307, 308].includes(meta.status) && meta.location) {
      url = new URL(meta.location, url).href;
      continue;
    }
    return { final_url: url, final_status: meta.status, hops };
  }
  return { final_url: url, final_status: hops.at(-1)?.status || 0, hops };
}

function relOk(target, rel) {
  if (target !== "_blank") return { ok: true, na: true };
  const r = rel || "";
  return {
    ok: /\bnoopener\b/i.test(r) && /\bnoreferrer\b/i.test(r),
    na: false,
  };
}

async function main() {
  fs.mkdirSync(AUDIT, { recursive: true });
  const base = originBase(PREVIEW);
  const browser = await chromium.launch({ headless: true });

  // —— preview x-robots + meta
  const robotsRoutes = [];
  for (const route of ROUTES) {
    const meta = await headMeta(base + route);
    robotsRoutes.push({
      ...meta,
      preview_x_robots_noindex:
        meta.status === 200 && /\bnoindex\b/i.test(meta.x_robots_tag) ? "PASS" : "FAIL",
    });
  }

  const internalLinks = [];
  const externalRel = [];
  const mailtoWa = [];
  const headingsOut = [];
  const accessibleFails = [];
  const a11yPhase5a = [];
  const metaRobots = [];

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
      result: status === 200 && !htmlRobots.accidental_noindex ? "PASS" : "FAIL",
    });

    const linkData = await page.evaluate(() => {
      const main = document.querySelector("main") || document.body;
      return [...main.querySelectorAll("a[href]")].map((a) => ({
        text: (a.textContent || "").trim().replace(/\s+/g, " ").slice(0, 100),
        href: a.getAttribute("href") || "",
        target: a.getAttribute("target") || "",
        rel: a.getAttribute("rel") || "",
      }));
    });

    const headingData = await page.evaluate(() =>
      [...document.querySelectorAll("main h1, main h2, main h3, main h4, main h5, main h6")].map(
        (h) => ({ level: Number(h.tagName.slice(1)), text: (h.textContent || "").trim().slice(0, 100) })
      )
    );
    let prev = 0;
    let skipped = false;
    for (const h of headingData) {
      if (prev && h.level > prev + 1) skipped = true;
      prev = h.level;
    }
    const h1 = headingData.filter((h) => h.level === 1).length;
    headingsOut.push({
      route,
      h1_count: h1,
      headings: headingData,
      status: h1 === 1 && !skipped ? "PASS" : "FAIL",
    });

    const unnamed = await page.evaluate(() =>
      [...document.querySelectorAll("main a[href], main button, main [role='button']")]
        .map((el) => ({
          name: (el.getAttribute("aria-label") || el.textContent || "").trim().replace(/\s+/g, " "),
          tag: el.tagName,
        }))
        .filter((x) => !x.name)
    );
    if (unnamed.length) accessibleFails.push({ route, count: unnamed.length });

    for (const l of linkData) {
      if (!l.href || l.href.startsWith("#") || l.href.startsWith("javascript:")) continue;
      if (l.href.startsWith("mailto:")) {
        mailtoWa.push({ route, type: "mailto", href: l.href, label: l.text });
        continue;
      }
      let abs;
      try {
        abs = new URL(l.href, base);
      } catch {
        continue;
      }
      const isWa = /wa\.me|whatsapp\.com/i.test(abs.href);
      if (abs.origin === new URL(base).origin) {
        const resolved = await resolveInternal(base, abs.pathname + abs.search);
        internalLinks.push({
          route,
          href: l.href,
          label: l.text,
          final_status: resolved.final_status,
          final_url: resolved.final_url,
          result: resolved.final_status === 200 ? "PASS" : "FAIL",
        });
      } else if (/^https?:/i.test(abs.href)) {
        const check = relOk(l.target, l.rel);
        externalRel.push({
          route,
          label: l.text,
          href: abs.href,
          target: l.target,
          rel: l.rel,
          external_origin: abs.origin,
          is_whatsapp: isWa,
          result: check.ok ? "PASS" : "FAIL",
        });
        if (isWa) mailtoWa.push({ route, type: "whatsapp", href: abs.href, label: l.text });
      }
    }

    for (const vp of [
      { name: "desktop", w: 1440, h: 1000 },
      { name: "mobile", w: 390, h: 844 },
    ]) {
      const c = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
      const p = await c.newPage();
      await p.goto(base + route, { waitUntil: "networkidle", timeout: 120000 });
      try {
        const axe = await new AxeBuilder({ page: p }).analyze();
        const critical = axe.violations.filter((v) => v.impact === "critical").length;
        const serious = axe.violations.filter((v) => v.impact === "serious").length;
        a11yPhase5a.push({
          route,
          viewport: vp.name,
          critical,
          serious,
          moderate: axe.violations.filter((v) => v.impact === "moderate").length,
          incomplete: axe.incomplete?.length || 0,
          status: critical === 0 && serious === 0 ? "PASS" : "FAIL",
        });
      } catch (e) {
        a11yPhase5a.push({ route, viewport: vp.name, status: "FAIL", error: String(e.message || e) });
      }
      await c.close();
    }
    await ctx.close();
  }

  // —— CookieBanner (fresh context, cleared storage)
  // Do NOT addInitScript that clears localStorage on every navigation — that
  // destroys post-dismiss persistence on reload and false-fails the gate.
  const cookieCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const cookiePage = await cookieCtx.newPage();
  await cookiePage.goto(base + "/about", { waitUntil: "networkidle", timeout: 120000 });
  await cookiePage.evaluate(() => localStorage.removeItem("octus-cookies-accepted"));
  await cookiePage.reload({ waitUntil: "networkidle" });
  await cookiePage
    .waitForFunction(
      () => !!document.querySelector('.cookie-banner[role="region"]'),
      null,
      { timeout: 10000 }
    )
    .catch(() => {});
  await cookiePage.waitForTimeout(200);
  const cookieInitialVisible = await cookiePage
    .locator('.cookie-banner[role="region"]')
    .isVisible()
    .catch(() => false);
  let cookieDismissed = false;
  let cookieStorage = "";
  let cookieReloadHidden = false;
  let cookieBodyClassCleared = false;
  if (cookieInitialVisible) {
    await cookiePage.getByRole("button", { name: "Continue" }).click();
    await cookiePage.waitForTimeout(300);
    cookieDismissed = !(await cookiePage
      .locator('.cookie-banner[role="region"]')
      .isVisible()
      .catch(() => true));
    cookieStorage = await cookiePage.evaluate(() => localStorage.getItem("octus-cookies-accepted") || "");
    await cookiePage.reload({ waitUntil: "networkidle" });
    // Wait for React hydration to honor localStorage before asserting hide/persist.
    await cookiePage
      .waitForFunction(() => {
        const accepted = localStorage.getItem("octus-cookies-accepted") === "true";
        const banner = document.querySelector('.cookie-banner[role="region"]');
        return accepted && !banner && !document.body.classList.contains("cookie-banner-visible");
      }, null, { timeout: 10000 })
      .catch(() => {});
    cookieReloadHidden = !(await cookiePage
      .locator('.cookie-banner[role="region"]')
      .isVisible()
      .catch(() => true));
    cookieBodyClassCleared = await cookiePage.evaluate(
      () => !document.body.classList.contains("cookie-banner-visible")
    );
  }
  const cookieResult = {
    initial_visible: cookieInitialVisible,
    dismiss_clicked: cookieInitialVisible,
    banner_hidden_after_click: cookieDismissed,
    localStorage_true: cookieStorage === "true",
    remains_hidden_after_reload: cookieReloadHidden,
    body_class_cookie_banner_visible_absent: cookieBodyClassCleared,
    status:
      cookieInitialVisible &&
      cookieDismissed &&
      cookieStorage === "true" &&
      cookieReloadHidden &&
      cookieBodyClassCleared
        ? "PASS"
        : "FAIL",
  };
  await cookieCtx.close();

  // —— Mobile nav open / button close / Escape close
  const navCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const navPage = await navCtx.newPage();
  await navPage.goto(base + "/about", { waitUntil: "networkidle", timeout: 120000 });
  const burger = navPage.getByRole("button", { name: /Open menu|Close menu/i });
  const initialExpanded = await burger.getAttribute("aria-expanded");
  const initialPanel = await navPage.locator("#mobile-nav").count();
  // open
  await burger.click();
  await navPage.waitForTimeout(250);
  const openExpanded = await burger.getAttribute("aria-expanded");
  const openPanelVisible = await navPage.locator("#mobile-nav").isVisible().catch(() => false);
  const navLinksReachable = await navPage.locator("#mobile-nav a[href]").count();
  // close by button
  await burger.click();
  await navPage.waitForTimeout(250);
  const buttonCloseExpanded = await burger.getAttribute("aria-expanded");
  const buttonClosePanelGone = (await navPage.locator("#mobile-nav").count()) === 0;
  // reopen + Escape
  await burger.click();
  await navPage.waitForTimeout(250);
  await navPage.keyboard.press("Escape");
  await navPage.waitForTimeout(250);
  const escapeExpanded = await burger.getAttribute("aria-expanded");
  const escapePanelGone = (await navPage.locator("#mobile-nav").count()) === 0;
  const mobileNavResult = {
    initial_aria_expanded: initialExpanded,
    initial_panel_hidden: initialPanel === 0 && initialExpanded === "false",
    open_aria_expanded: openExpanded,
    open_panel_visible: openPanelVisible,
    open_nav_links: navLinksReachable,
    button_close_aria_expanded: buttonCloseExpanded,
    button_close_panel_hidden: buttonClosePanelGone,
    escape_close_aria_expanded: escapeExpanded,
    escape_close_panel_hidden: escapePanelGone,
    status:
      initialExpanded === "false" &&
      initialPanel === 0 &&
      openExpanded === "true" &&
      openPanelVisible &&
      navLinksReachable >= 5 &&
      buttonCloseExpanded === "false" &&
      buttonClosePanelGone &&
      escapeExpanded === "false" &&
      escapePanelGone
        ? "PASS"
        : "FAIL",
  };
  await navCtx.close();

  // —— Global chrome external links (header / wa / footer)
  const gCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const gPage = await gCtx.newPage();
  await gPage.addInitScript(() => {
    try {
      localStorage.setItem("octus-cookies-accepted", "true");
    } catch {
      /* */
    }
  });
  await gPage.goto(base + "/about", { waitUntil: "networkidle", timeout: 120000 });
  const chromeLinks = await gPage.evaluate(() => {
    const sel = ['header a[href]', '.wa-float', 'a.wa-float', 'footer a[href]', '.site-footer a[href]'];
    const nodes = [];
    for (const s of sel) nodes.push(...document.querySelectorAll(s));
    return [...new Map(nodes.map((a) => [a, a])).keys()].map((a) => ({
      text: (a.textContent || a.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").slice(0, 80),
      href: a.getAttribute("href") || "",
      target: a.getAttribute("target") || "",
      rel: a.getAttribute("rel") || "",
      className: a.className || "",
    }));
  });
  const chromeExternal = [];
  for (const l of chromeLinks) {
    if (!l.href || l.href.startsWith("/") || l.href.startsWith("mailto:") || l.href.startsWith("#")) continue;
    try {
      const abs = new URL(l.href, base);
      if (abs.origin === new URL(base).origin) continue;
      if (!/^https?:/i.test(abs.href)) continue;
      const check = relOk(l.target || ( /wa\.me/i.test(abs.href) ? "_blank" : l.target), l.rel);
      // WA float may open in same or blank - require noopener if blank
      chromeExternal.push({
        zone: /wa-float|wa\.me/i.test(l.className + l.href) ? "whatsapp_float" : "chrome",
        label: l.text,
        href: abs.href,
        target: l.target,
        rel: l.rel,
        result: check.ok ? "PASS" : "FAIL",
      });
    } catch {
      /* */
    }
  }
  // ensure float WA audited even if target missing: check DOM node
  const waFloat = await gPage.evaluate(() => {
    const el = document.querySelector(".wa-float, a.wa-float");
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      href: el.getAttribute("href") || "",
      target: el.getAttribute("target") || "",
      rel: el.getAttribute("rel") || "",
      bottom: cs.bottom,
      right: cs.right,
      position: cs.position,
      h: Math.round(r.height),
      w: Math.round(r.width),
      visible: r.width > 0 && r.height > 0,
    };
  });
  if (waFloat && /^https?:/i.test(waFloat.href)) {
    const check = relOk(waFloat.target || "_blank", waFloat.rel);
    // force treat as external blank-like if targets blank or typical WA
    const needsBlankRel = waFloat.target === "_blank" || waFloat.target === "";
    const waRelPass =
      waFloat.target === "_blank"
        ? check.ok
        : true; // if not blank, don't fail solely on rel
    chromeExternal.push({
      zone: "whatsapp_float",
      label: "floating WhatsApp",
      href: waFloat.href,
      target: waFloat.target,
      rel: waFloat.rel,
      result: waFloat.target === "_blank" ? (check.ok ? "PASS" : "FAIL") : "PASS_NO_BLANK",
    });
  }

  const headerGeom = await gPage.evaluate(() => {
    // Site chrome is <nav class="site-header"> (no <header>); measure the fixed bar, not a wrapping parent.
    const bar =
      document.querySelector("nav.site-header") ||
      document.querySelector(".site-header") ||
      document.querySelector("nav");
    const box = bar?.getBoundingClientRect();
    const logo = document.querySelector("nav.site-header img, .site-header img, nav img, a[href='/'] img");
    const lb = logo?.getBoundingClientRect();
    const footer = document.querySelector("footer, .site-footer");
    const fb = footer?.getBoundingClientRect();
    const fcs = footer ? getComputedStyle(footer) : null;
    const desktopNavLinks = [
      ...document.querySelectorAll("nav.site-header .desktop-nav a[href], nav.site-header a[href]"),
    ].filter((a) => {
      const st = getComputedStyle(a);
      return st.display !== "none" && st.visibility !== "hidden" && a.offsetParent !== null;
    }).length;
    return {
      headerH: box ? Math.round(box.height) : 0,
      logo: logo
        ? { src: logo.getAttribute("src") || "", w: Math.round(lb.width), h: Math.round(lb.height) }
        : null,
      footerPresent: !!footer,
      footerPadT: fcs?.paddingTop || "",
      footerH: fb ? Math.round(fb.height) : 0,
      overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      favicon: !!document.querySelector('link[rel*="icon"]'),
      desktopNavLinks,
    };
  });

  // cookie vs wa overlap when banner forced
  await gPage.evaluate(() => localStorage.removeItem("octus-cookies-accepted"));
  await gPage.reload({ waitUntil: "networkidle" });
  await gPage.waitForTimeout(400);
  const overlap = await gPage.evaluate(() => {
    const wa = document.querySelector(".wa-float");
    const ck = document.querySelector(".cookie-banner");
    if (!wa || !ck) return { tested: false, overlap: false };
    const a = wa.getBoundingClientRect();
    const b = ck.getBoundingClientRect();
    const overlap = !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
    return { tested: true, overlap };
  });
  // dismiss again for cleanliness
  if (await gPage.locator('.cookie-banner[role="region"]').isVisible().catch(() => false)) {
    await gPage.getByRole("button", { name: "Continue" }).click().catch(() => {});
  }

  const mobileOvCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mOv = await mobileOvCtx.newPage();
  await mOv.goto(base + "/about", { waitUntil: "networkidle" });
  const mobileOverflow = await mOv.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  );
  await mobileOvCtx.close();
  await gCtx.close();

  const waGeomOk =
    waFloat &&
    waFloat.visible &&
    waFloat.h === ACCEPTED_WA.h &&
    waFloat.w >= ACCEPTED_WA.wMin &&
    waFloat.w <= ACCEPTED_WA.wMax &&
    Math.abs(parseFloat(waFloat.bottom) - ACCEPTED_WA.bottom) < 2;

  const headerGeomOk =
    Math.abs(headerGeom.headerH - ACCEPTED_HEADER_H) <= 4 &&
    headerGeom.logo &&
    /lockup/i.test(headerGeom.logo.src);

  const globalSub = {
    official_header_lockup: headerGeom.logo && /lockup/i.test(headerGeom.logo.src) ? "PASS" : "FAIL",
    accepted_header_geometry: headerGeomOk ? "PASS" : "FAIL",
    header_height: headerGeom.headerH,
    desktop_navigation: headerGeom.desktopNavLinks >= 4 ? "PASS" : "FAIL",
    mobile_menu_open: mobileNavResult.open_panel_visible ? "PASS" : "FAIL",
    mobile_menu_close_by_button: mobileNavResult.button_close_panel_hidden ? "PASS" : "FAIL",
    mobile_menu_close_by_escape: mobileNavResult.escape_close_panel_hidden ? "PASS" : "FAIL",
    footer_present: headerGeom.footerPresent ? "PASS" : "FAIL",
    footer_geometry: headerGeom.footerPadT === "80px" || parseInt(headerGeom.footerPadT) >= 64 ? "PASS" : "FAIL",
    floating_whatsapp_present: waFloat?.visible ? "PASS" : "FAIL",
    accepted_whatsapp_dimensions: waGeomOk ? "PASS" : "FAIL",
    whatsapp: waFloat,
    no_viewport_overflow_desktop: !headerGeom.overflowX ? "PASS" : "FAIL",
    no_viewport_overflow_mobile: !mobileOverflow ? "PASS" : "FAIL",
    cookie_whatsapp_overlap: !overlap.overlap ? "PASS" : "FAIL",
    cookie_banner_initial: cookieResult.initial_visible ? "PASS" : "FAIL",
    cookie_banner_dismissal: cookieResult.banner_hidden_after_click ? "PASS" : "FAIL",
    cookie_banner_localStorage: cookieResult.localStorage_true ? "PASS" : "FAIL",
    cookie_banner_persistence: cookieResult.remains_hidden_after_reload ? "PASS" : "FAIL",
    favicon: headerGeom.favicon ? "PASS" : "FAIL",
    chrome_external_rel: chromeExternal.every((l) => l.result === "PASS" || l.result === "PASS_NO_BLANK")
      ? "PASS"
      : "FAIL",
  };
  globalSub.cookie_detail = cookieResult;
  globalSub.mobile_nav_detail = mobileNavResult;
  globalSub.chrome_external_links = chromeExternal;
  globalSub.status = Object.entries(globalSub)
    .filter(([k]) => !["cookie_detail", "mobile_nav_detail", "chrome_external_links", "whatsapp", "header_height"].includes(k))
    .every(([, v]) => v === "PASS")
    ? "PASS"
    : "FAIL";

  // —— Homepage
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
    return { moduleButtons, emDashes, ctas };
  });
  await homeCtx.close();
  const peerModules = homeEval.moduleButtons.filter((t) => /^0[1-7]/.test(t));
  const diagLabels = [
    ...new Set(
      homeEval.ctas
        .map((c) => c.text)
        .filter((t) => /diagnostic|assess your situation|remediation assessment/i.test(t))
    ),
  ];
  const homeFrozen = execSync(`git diff --name-only ${PHASE5A_START}..${COMMIT}`, { cwd: REPO, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter((f) => f === "app/page.tsx" || f.includes("HomeModulesAccordion"));
  const homepageRegression = {
    seven_peer_areas: peerModules.length === 7 ? "PASS" : "FAIL",
    peer_modules: peerModules,
    banking_not_peer: peerModules.every((t) => !/banking/i.test(t)) ? "PASS" : "FAIL",
    distinct_diagnostic_labels: diagLabels.length >= 3 ? "PASS" : "FAIL",
    diagnostic_labels: diagLabels,
    whatsapp_hero: homeEval.ctas.some((c) => /wa\.me/i.test(c.href) && /discuss/i.test(c.text))
      ? "PASS"
      : "FAIL",
    whatsapp_final: [...homeEval.ctas].reverse().some((c) => /wa\.me/i.test(c.href)) ? "PASS" : "FAIL",
    home_punctuation_exactly_one: homeEval.emDashes === 1 ? "PASS" : "FAIL",
    homepage_unchanged: homeFrozen.length === 0 ? "PASS" : "FAIL",
  };
  homepageRegression.status = Object.values(homepageRegression).every((v) => v === "PASS" || Array.isArray(v))
    ? Object.entries(homepageRegression)
        .filter(([, v]) => typeof v === "string")
        .every(([, v]) => v === "PASS")
      ? "PASS"
      : "FAIL"
    : "FAIL";

  // —— Team DOM hard gate
  const teamCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const teamPage = await teamCtx.newPage();
  await teamPage.goto(base + "/team", { waitUntil: "networkidle", timeout: 120000 });
  const teamLive = await teamPage.evaluate(() => {
    const bands = [...document.querySelectorAll(".team-band-label")].map((el) =>
      (el.textContent || "").trim()
    );
    const cards = [...document.querySelectorAll("article.team-card")].map((card) => {
      const name = (card.querySelector("h3")?.textContent || "").trim();
      const title = (card.querySelector(".team-card-role")?.textContent || "").trim();
      const src = card.querySelector("img.team-card-photo")?.getAttribute("src") || "";
      return { name, title, src };
    });
    return { bands, cards, card_count: cards.length };
  });
  await teamCtx.close();

  const portraits = {};
  let portraitsOk = true;
  const orderOk =
    teamLive.card_count === 10 &&
    TEAM_ORDER.every((exp, i) => {
      const got = teamLive.cards[i];
      return got && got.name === exp.name && got.title === exp.title;
    });
  for (let i = 0; i < TEAM_ORDER.length; i++) {
    const exp = TEAM_ORDER[i];
    const got = teamLive.cards[i];
    const file = exp.file;
    const fp = path.join(REPO, "public/team", file);
    const hash = fs.existsSync(fp) ? sha256File(fp) : "";
    const expected = PORTRAIT_LOCK[file];
    const srcOk = got && (got.src.includes(file) || got.src.endsWith(file));
    portraits[file] = {
      src: got?.src || "",
      sha256: hash,
      expected,
      hash_match: hash === expected,
      src_match: !!srcOk,
    };
    if (hash !== expected || !srcOk) portraitsOk = false;
  }
  const teamFrozen = execSync(`git diff --name-only ${PHASE5A_START}..${COMMIT}`, { cwd: REPO, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter((f) => f.startsWith("app/team/") || f.startsWith("public/team/"));
  const teamRegression = {
    actual_card_count: teamLive.card_count,
    exact_ordered_roster: orderOk ? "PASS" : "FAIL",
    ordered_cards: teamLive.cards,
    bands: teamLive.bands,
    exact_two_bands:
      teamLive.bands.length === 2 &&
      teamLive.bands[0] === "Leadership" &&
      teamLive.bands[1] === "Core Specialists"
        ? "PASS"
        : "FAIL",
    portraits,
    portrait_hashes: portraitsOk ? "PASS" : "FAIL",
    team_files_unchanged: teamFrozen.length === 0 ? "PASS" : "FAIL",
  };
  teamRegression.status =
    teamRegression.exact_ordered_roster === "PASS" &&
    teamRegression.exact_two_bands === "PASS" &&
    teamRegression.portrait_hashes === "PASS" &&
    teamRegression.team_files_unchanged === "PASS" &&
    teamLive.card_count === 10
      ? "PASS"
      : "FAIL";

  await browser.close();

  // —— alias probes
  const aliasResults = [];
  for (const probe of ALIAS_PROBES) {
    const meta = await headMeta(base + probe);
    const redirectsTo5a =
      [301, 302, 307, 308].includes(meta.status) &&
      ROUTES.some((r) => (meta.location || "").includes(r));
    aliasResults.push({
      probe,
      status: meta.status,
      location: meta.location,
      result: redirectsTo5a ? "UNEXPECTED_ALIAS" : "NO_ALIAS_AS_EXPECTED",
    });
  }

  // —— Full Phase 4 services validator (desktop+mobile Axe)
  console.log("Running full Phase 4 validation closeout against Phase 5A preview...");
  let p4 = { status: 0, stderr: "" };
  const reuseServices =
    process.env.PHASE5A_REUSE_SERVICES === "1" &&
    fs.existsSync(path.join(SERVICES_AUDIT, "PHASE4_VALIDATION_CLOSEOUT.json"));
  if (!reuseServices) {
    p4 = spawnSync("node", [path.join(SERVICES_AUDIT, "phase4_validation_closeout.mjs")], {
      cwd: REPO,
      encoding: "utf8",
      env: {
        ...process.env,
        PHASE4_PREVIEW: PREVIEW,
        PHASE4_APPLICATION_SHA: COMMIT,
        PHASE4_DEPLOYMENT: DEPLOYMENT_ID,
        PHASE4_DEPLOYED_SHA: DEPLOYED_SHA,
        PHASE4_DIFF_BASE: PHASE5A_START,
      },
      timeout: 900000,
    });
  } else {
    console.log("Reusing existing PHASE4_VALIDATION_CLOSEOUT.json (PHASE5A_REUSE_SERVICES=1)");
  }
  let servicesCloseout = {};
  try {
    servicesCloseout = JSON.parse(
      fs.readFileSync(path.join(SERVICES_AUDIT, "PHASE4_VALIDATION_CLOSEOUT.json"), "utf8")
    );
  } catch {
    servicesCloseout = { overall: "FAIL", parse_error: true, stderr: p4.stderr?.slice(-2000) };
  }
  const cat = servicesCloseout.catalogue || servicesCloseout.checks?.catalogue_integrity_derived;
  const svcAxe = servicesCloseout.axe || servicesCloseout.violation_totals || {};
  const servicesRegression = {
    phase4_spawn_exit: p4.status,
    phase4_overall: servicesCloseout.overall || servicesCloseout.checks?.overall,
    catalogue_status:
      typeof cat === "string" ? cat : cat?.status || servicesCloseout.checks?.catalogue_integrity_derived,
    computed: servicesCloseout.catalogue?.computed || null,
    axe_desktop: servicesCloseout.axe_by_viewport?.desktop || servicesCloseout.desktop_axe || null,
    axe_mobile: servicesCloseout.axe_by_viewport?.mobile || servicesCloseout.mobile_axe || null,
    checks: servicesCloseout.checks || null,
    status:
      (servicesCloseout.overall === "PASS" || servicesCloseout.checks?.a11y_routes_and_home === "PASS") &&
      (servicesCloseout.checks?.catalogue_integrity_derived === "PASS" ||
        servicesCloseout.catalogue?.status === "PASS")
        ? "PASS"
        : p4.status === 0 && servicesCloseout.overall === "PASS"
          ? "PASS"
          : "FAIL",
  };
  // tighten from known fields
  if (servicesCloseout.checks) {
    const c = servicesCloseout.checks;
    const critical = (servicesCloseout.violation_totals?.critical ?? svcAxe.critical) ?? 99;
    const serious = (servicesCloseout.violation_totals?.serious ?? svcAxe.serious) ?? 99;
    servicesRegression.axe_critical = critical;
    servicesRegression.axe_serious = serious;
    servicesRegression.status =
      c.catalogue_integrity_derived === "PASS" &&
      c.a11y_routes_and_home === "PASS" &&
      c.mandatory_routes_http_200 === "PASS" &&
      critical === 0 &&
      serious === 0
        ? "PASS"
        : "FAIL";
  }

  const build = spawnSync("npm", ["run", "build"], { cwd: REPO, encoding: "utf8" });
  const tsc = spawnSync("npx", ["tsc", "--noEmit"], { cwd: REPO, encoding: "utf8" });

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

  const critical = a11yPhase5a.reduce((n, r) => n + (r.critical || 0), 0);
  const serious = a11yPhase5a.reduce((n, r) => n + (r.serious || 0), 0);
  const moderate = a11yPhase5a.reduce((n, r) => n + (r.moderate || 0), 0);
  const incomplete = a11yPhase5a.reduce((n, r) => n + (r.incomplete || 0), 0);

  const waInExternal = externalRel.filter((l) => l.is_whatsapp);
  const checks = {
    canonical_meta_robots_clean: metaRobots.every((r) => r.result === "PASS") ? "PASS" : "FAIL",
    preview_x_robots_noindex: robotsRoutes.every((r) => r.preview_x_robots_noindex === "PASS")
      ? "PASS"
      : "FAIL",
    preview_noindex_header: robotsRoutes.every((r) => r.preview_x_robots_noindex === "PASS")
      ? "PASS"
      : "FAIL",
    internal_link_crawl: internalLinks.every((l) => l.result === "PASS") ? "PASS" : "FAIL",
    external_rel_audit:
      externalRel.length > 0 &&
      waInExternal.length > 0 &&
      externalRel.every((l) => l.result === "PASS")
        ? "PASS"
        : "FAIL",
    heading_hierarchy: headingsOut.every((h) => h.status === "PASS") ? "PASS" : "FAIL",
    accessible_names: accessibleFails.length === 0 ? "PASS" : "FAIL",
    alias_probes: aliasResults.every((a) => a.result === "NO_ALIAS_AS_EXPECTED") ? "PASS" : "FAIL",
    homepage_full_regression: homepageRegression.status,
    team_full_regression: teamRegression.status,
    services_full_regression: servicesRegression.status,
    global_system_regression: globalSub.status,
    cookie_banner_persistence: cookieResult.status,
    mobile_nav_close_gate: mobileNavResult.status,
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
    phase: "5A_FINAL_CLOSEOUT",
    terminal_target: "OCTUS_PHASE5A_FINAL_CLOSEOUT_READY_FOR_SOL_AUDIT",
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
    external_https_links_tested: externalRel.length,
    whatsapp_links_tested: waInExternal.length,
    external_rel_failures: externalRel.filter((l) => l.result !== "PASS"),
    homepage_regression: homepageRegression,
    team_regression: teamRegression,
    services_regression: servicesRegression,
    global_regression: globalSub,
    frozen_hits: frozenHits,
  };

  writeJson(path.join(AUDIT, "PHASE5A_FINAL_CLOSEOUT_VALIDATION.json"), summary);
  writeJson(path.join(AUDIT, "PHASE5A_PREVIEW_X_ROBOTS.json"), {
    generated_at: summary.generated_at,
    overall: checks.preview_noindex_header,
    routes: robotsRoutes,
  });
  writeJson(path.join(AUDIT, "PHASE5A_META_ROBOTS.json"), {
    generated_at: summary.generated_at,
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
    whatsapp_count: waInExternal.length,
  });
  writeJson(path.join(AUDIT, "PHASE5A_HEADING_HIERARCHY.json"), {
    generated_at: summary.generated_at,
    overall: checks.heading_hierarchy,
    routes: headingsOut,
    accessible_name_fails: accessibleFails,
  });
  writeJson(path.join(AUDIT, "PHASE5A_ALIAS_PROBES.json"), {
    generated_at: summary.generated_at,
    overall: checks.alias_probes,
    probes: aliasResults,
  });
  writeJson(path.join(AUDIT, "PHASE5A_MAILTO_WHATSAPP.json"), {
    generated_at: summary.generated_at,
    destinations: mailtoWa,
  });
  writeJson(path.join(AUDIT, "PHASE5A_COOKIE_BANNER_GATE.json"), cookieResult);
  writeJson(path.join(AUDIT, "PHASE5A_MOBILE_NAV_GATE.json"), mobileNavResult);
  writeJson(path.join(AUDIT, "PHASE5A_TEAM_HARD_GATE.json"), teamRegression);
  writeJson(path.join(AUDIT, "PHASE5A_HOME_TEAM_SERVICES_GLOBAL.json"), {
    homepage: homepageRegression,
    team: teamRegression,
    services: servicesRegression,
    global: globalSub,
  });
  writeJson(path.join(AUDIT, "PHASE5A_CLOSEOUT_A11Y.json"), {
    axe_core_version: axeCoreVersion,
    phase5a_routes: a11yPhase5a,
  });

  console.log(
    JSON.stringify(
      {
        overall: summary.overall,
        failed,
        external: externalRel.length,
        whatsapp: waInExternal.length,
        team: teamRegression.status,
        services: servicesRegression.status,
        global: globalSub.status,
        cookie: cookieResult.status,
        mobile_nav: mobileNavResult.status,
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
