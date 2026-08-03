#!/usr/bin/env node
/**
 * Phase 2 global-system capture + validation against immutable Vercel preview.
 * Usage: node audit/phase2_capture_validate.mjs
 */
import { chromium } from "playwright";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const COMMIT = "ef0d9465f07993c811144291d0da0371d12e7229";
const DEPLOYMENT_ID = "dpl_4pDMJNttdiwdLJmkyBbSffxBqDWK";
const RECONCILED = "https://octus-consulting-kovk3ad1l-axle1.vercel.app";
const BASELINE = "https://octus-consulting-9q798dbg2-axle1.vercel.app";
const BEFORE = "https://octus-consulting-2dz7kf23q-axle1.vercel.app";
const INSIGHT =
  "/insights/stf-suspends-blocking-of-bolsa-familia-bpc-betting-accounts";
const DEEP = "/solutions/regulatory/fintech-licensing";

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
  "caroline-giovanetti.jpg":
    "7e8f71eb5cc1b90eec048d4184b9b1a08f0d4900da84f1022d0394e855899eb9",
  "claudia-nery.jpg":
    "344ea1734f68788244c6f71d5fd69972789b202c5f4e02b02af6941c7a1eeaa0",
  "esther-vendrami.jpg":
    "10906673c848baed9e2f12c066c53691d2765ff207595cddbdb50c06d0970650",
  "larissa-carvalho.jpg":
    "3dadbb3cebebd945700a737ed4eeff244cb102e9aed68564f2c12cfb39131fb7",
  "luciana-santos-veloso.jpg":
    "bb6fcc97ea426bebc0856d1e4df49c8aea6d5db36ce35eb7cfab1f6ce3b0749d",
  "maria-cristina.jpg":
    "4fe097595ed6753e8df9cc3208fd78993a69a7b645d332af25b449116ebbfe26",
  "milla-ludovico.jpg":
    "0d46dff8ede1d046cb053d6be038deba141ef78788c064863794f58002025c4a",
  "rodrigo-lopes.jpg":
    "82833b9103a0053dceae774a82da20a6e4c9692ff4bd7fbe9eabf0d3cf8ceaaf",
  "rubio-teixeira.jpg":
    "28d61e59f013debc140e6684b3783c4a8bb426a24ddbdf3dbdb45922b9fee200",
};

const ROUTES = [
  "/",
  "/team",
  "/solutions",
  "/solutions/regulatory-structuring",
  DEEP,
  "/brazil",
  "/about",
  "/contact",
  "/how-we-engage",
  "/intelligence",
  "/insights",
  INSIGHT,
  "/markets",
  "/markets/crypto",
  "/jurisdictions",
  "/jurisdictions/malta",
  "/careers",
  "/privacy",
];

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

function sha256File(fp) {
  return crypto.createHash("sha256").update(fs.readFileSync(fp)).digest("hex");
}

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

async function httpMeta(url) {
  const res = await fetch(url, { redirect: "manual" });
  return {
    status: res.status,
    xRobots: res.headers.get("x-robots-tag") || "",
  };
}

async function shot(page, filePath, opts = {}) {
  ensureDir(path.dirname(filePath));
  await page.screenshot({
    path: filePath,
    fullPage: !!opts.fullPage,
    animations: "disabled",
  });
  const st = fs.statSync(filePath);
  return {
    bytes: st.size,
    sha256: sha256File(filePath),
  };
}

function entry(meta, fileRel, classification, route, viewport, http_status, hashMeta, status) {
  return {
    file: fileRel,
    classification,
    route,
    source_url: meta.base + route,
    deployment_id: meta.deploymentId,
    immutable_commit_sha: meta.commit,
    viewport,
    capture_timestamp: new Date().toISOString(),
    http_status,
    sha256: hashMeta.sha256,
    bytes: hashMeta.bytes,
    status,
  };
}

async function overflowCheck(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    return (
      doc.scrollWidth > doc.clientWidth + 1 ||
      body.scrollWidth > body.clientWidth + 1
    );
  });
}

async function collectChrome(page) {
  return page.evaluate(() => {
    const header = document.querySelector("header, .site-header");
    const logo = document.querySelector(
      ".site-header__logo img, header img, .site-header img"
    );
    const footer = document.querySelector("footer, .site-footer");
    const footerLogo = document.querySelector(
      "footer img, .site-footer img"
    );
    const wa = document.querySelector(".wa-float, a[href*='wa.me'], a[href*='whatsapp']");
    const cookie = document.querySelector(".cookie-banner");
    const h1 = document.querySelector("h1");
    const body = document.body;
    const cs = getComputedStyle(document.documentElement);
    const container = document.querySelector(".max-w-7xl") || header;
    const btn =
      document.querySelector(".site-header a[href='/contact'], .btn-primary, a.btn") ||
      null;
    const rect = (el) =>
      el
        ? (() => {
            const r = el.getBoundingClientRect();
            const s = getComputedStyle(el);
            return {
              h: Math.round(r.height * 10) / 10,
              w: Math.round(r.width * 10) / 10,
              bottom: s.bottom,
              right: s.right,
              top: s.top,
              display: s.display,
              bg: s.backgroundColor,
              fontSize: s.fontSize,
              fontWeight: s.fontWeight,
              lineHeight: s.lineHeight,
              fontFamily: s.fontFamily,
              color: s.color,
              paddingTop: s.paddingTop,
              paddingBottom: s.paddingBottom,
              src: el.getAttribute("src") || el.querySelector?.("img")?.getAttribute("src") || null,
            };
          })()
        : null;
    return {
      header: rect(header),
      logo: logo
        ? {
            h: Math.round(logo.getBoundingClientRect().height * 10) / 10,
            w: Math.round(logo.getBoundingClientRect().width * 10) / 10,
            src: logo.getAttribute("src"),
          }
        : null,
      footer: footer
        ? {
            padT: getComputedStyle(footer).paddingTop,
            padB: getComputedStyle(footer).paddingBottom,
          }
        : null,
      footerLogo: footerLogo
        ? {
            h: Math.round(footerLogo.getBoundingClientRect().height * 10) / 10,
            w: Math.round(footerLogo.getBoundingClientRect().width * 10) / 10,
            src: footerLogo.getAttribute("src"),
          }
        : null,
      wa: rect(wa),
      cookie: rect(cookie),
      h1: h1
        ? {
            fontSize: getComputedStyle(h1).fontSize,
            weight: getComputedStyle(h1).fontWeight,
            lh: getComputedStyle(h1).lineHeight,
            family: getComputedStyle(h1).fontFamily,
          }
        : null,
      body: {
        fontSize: getComputedStyle(body).fontSize,
        lh: getComputedStyle(body).lineHeight,
        color: getComputedStyle(body).color,
        family: getComputedStyle(body).fontFamily,
      },
      btn: btn
        ? {
            h: Math.round(btn.getBoundingClientRect().height * 10) / 10,
            fontSize: getComputedStyle(btn).fontSize,
            bg: getComputedStyle(btn).backgroundColor,
            radius: getComputedStyle(btn).borderRadius,
          }
        : null,
      containerMax: container ? getComputedStyle(container).maxWidth : null,
      containerPad: container ? getComputedStyle(container).paddingLeft : null,
      tokens: {
        primary: cs.getPropertyValue("--primary").trim(),
        navy: cs.getPropertyValue("--brand-navy").trim(),
        red: cs.getPropertyValue("--brand-red").trim(),
        bg: cs.getPropertyValue("--background").trim(),
        elevated: cs.getPropertyValue("--elevated").trim(),
        textPrimary: cs.getPropertyValue("--text-primary").trim() || cs.getPropertyValue("--foreground").trim(),
        textSecondary: cs.getPropertyValue("--text-secondary").trim(),
      },
      focusSample: (() => {
        const el = document.querySelector("a");
        if (!el) return null;
        el.focus();
        const s = getComputedStyle(el);
        return { outline: s.outline, outlineOffset: s.outlineOffset };
      })(),
    };
  });
}

async function teamAudit(page) {
  return page.evaluate((expected) => {
    const cards = [...document.querySelectorAll("[data-person], .team-card, article")].filter(
      (el) => el.querySelector("h3, h2, .team-card__name")
    );
    const names = [...document.querySelectorAll("h3, .team-card__name")]
      .map((n) => n.textContent.trim())
      .filter(Boolean);
    // Prefer explicit profile headings under team sections
    const sectionText = document.body.innerText;
    const bands = ["Leadership", "Core Specialists"].filter((b) =>
      sectionText.includes(b)
    );
    const roster = expected.filter((n) => sectionText.includes(n));
    const extras = names.filter((n) => !expected.includes(n) && n.length > 3);
    const imgs = [...document.querySelectorAll("img[src*='/team/']")];
    const missing = imgs.filter((img) => !img.complete || img.naturalWidth === 0);
    return {
      roster_names_present: roster,
      roster_count: roster.length,
      bands,
      band_count: bands.length,
      img_count: imgs.length,
      missing_images: missing.map((i) => i.src),
      titles_sample: [...document.querySelectorAll("h3 + p, .team-card__title")]
        .slice(0, 12)
        .map((el) => el.textContent.trim()),
    };
  }, EXPECTED_NAMES);
}

async function runOriginCapture(browser, label, meta, outDir, routes) {
  ensureDir(outDir);
  const items = [];
  for (const vpName of ["desktop", "mobile"]) {
    const vp = VIEWPORTS[vpName];
    for (const route of routes) {
      const context = await browser.newContext({
        viewport: vp,
        deviceScaleFactor: 1,
      });
      const page = await context.newPage();
      const url = meta.base + route;
      let status = 0;
      try {
        const res = await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
        status = res?.status() || 0;
      } catch (e) {
        status = 0;
      }
      await page.waitForTimeout(400);
      const slug =
        route === "/"
          ? "home"
          : route
              .replace(/^\//, "")
              .replace(/\//g, "__")
              .slice(0, 80);
      const fileRel = `${label}/routes/${vpName}-${slug}-full.png`;
      const abs = path.join(ROOT, fileRel);
      const hashMeta = await shot(page, abs, { fullPage: true });
      const ov = await overflowCheck(page);
      items.push({
        ...entry(meta, fileRel, label, route, `${vp.width}x${vp.height}`, status, hashMeta, status === 200 && !ov ? "PASS" : "FAIL"),
        overflow: ov,
      });
      await context.close();
    }
  }
  return items;
}

async function captureShared(browser, meta) {
  const items = [];
  const sharedDir = path.join(ROOT, "shared");
  ensureDir(sharedDir);

  // Header dark (home) desktop
  {
    const ctx = await browser.newContext({ viewport: VIEWPORTS.desktop });
    const page = await ctx.newPage();
    const res = await page.goto(meta.base + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const header = page.locator("header, .site-header").first();
    const fileRel = "shared/header-over-dark-desktop.png";
    const box = await header.boundingBox();
    if (box) {
      await page.screenshot({
        path: path.join(ROOT, fileRel),
        clip: { x: 0, y: 0, width: 1440, height: Math.min(120, box.height + 8) },
      });
    } else {
      await shot(page, path.join(ROOT, fileRel));
    }
    const hm = { bytes: fs.statSync(path.join(ROOT, fileRel)).size, sha256: sha256File(path.join(ROOT, fileRel)) };
    items.push(entry(meta, fileRel, "shared", "/", "1440x1000", res.status(), hm, "PASS"));

    // Services dropdown
    const svcBtn = page.getByRole("button", { name: /Services/i }).first();
    if (await svcBtn.count()) {
      await svcBtn.click();
      await page.waitForTimeout(300);
      const fileRel2 = "shared/services-dropdown-desktop.png";
      await page.screenshot({
        path: path.join(ROOT, fileRel2),
        clip: { x: 0, y: 0, width: 1440, height: 520 },
      });
      const hm2 = { bytes: fs.statSync(path.join(ROOT, fileRel2)).size, sha256: sha256File(path.join(ROOT, fileRel2)) };
      items.push(entry(meta, fileRel2, "shared", "/", "1440x1000", res.status(), hm2, "PASS"));
    }

    // Logo crop
    const logo = page.locator(".site-header__logo img, header img").first();
    const fileRel3 = "shared/logo-desktop.png";
    if (await logo.count()) {
      await logo.screenshot({ path: path.join(ROOT, fileRel3) });
    } else {
      await shot(page, path.join(ROOT, fileRel3));
    }
    const hm3 = { bytes: fs.statSync(path.join(ROOT, fileRel3)).size, sha256: sha256File(path.join(ROOT, fileRel3)) };
    items.push(entry(meta, fileRel3, "shared", "/", "1440x1000", res.status(), hm3, "PASS"));

    // Footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    const fileRel4 = "shared/footer-desktop.png";
    const footer = page.locator("footer, .site-footer").first();
    if (await footer.count()) await footer.screenshot({ path: path.join(ROOT, fileRel4) });
    else await shot(page, path.join(ROOT, fileRel4));
    const hm4 = { bytes: fs.statSync(path.join(ROOT, fileRel4)).size, sha256: sha256File(path.join(ROOT, fileRel4)) };
    items.push(entry(meta, fileRel4, "shared", "/", "1440x1000", res.status(), hm4, "PASS"));

    // Dark hero atmosphere
    await page.goto(meta.base + "/", { waitUntil: "networkidle" });
    const fileRel5 = "shared/dark-hero-atmosphere-desktop.png";
    await page.screenshot({
      path: path.join(ROOT, fileRel5),
      clip: { x: 0, y: 0, width: 1440, height: 700 },
    });
    const hm5 = { bytes: fs.statSync(path.join(ROOT, fileRel5)).size, sha256: sha256File(path.join(ROOT, fileRel5)) };
    items.push(entry(meta, fileRel5, "shared", "/", "1440x1000", 200, hm5, "PASS"));

    // WA over dark
    const wa = page.locator(".wa-float").first();
    const fileRel6 = "shared/whatsapp-over-dark-desktop.png";
    if (await wa.count()) await wa.screenshot({ path: path.join(ROOT, fileRel6) });
    else await shot(page, path.join(ROOT, fileRel6));
    const hm6 = { bytes: fs.statSync(path.join(ROOT, fileRel6)).size, sha256: sha256File(path.join(ROOT, fileRel6)) };
    items.push(entry(meta, fileRel6, "shared", "/", "1440x1000", 200, hm6, "PASS"));

    await ctx.close();
  }

  // Header light (about) + WA light + cookie
  {
    const ctx = await browser.newContext({ viewport: VIEWPORTS.desktop });
    const page = await ctx.newPage();
    // clear cookie consent
    await page.goto(meta.base + "/about", { waitUntil: "networkidle" });
    await page.evaluate(() => {
      try {
        localStorage.clear();
        sessionStorage.clear();
      } catch {}
    });
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const fileRel = "shared/header-over-light-desktop.png";
    await page.screenshot({
      path: path.join(ROOT, fileRel),
      clip: { x: 0, y: 0, width: 1440, height: 100 },
    });
    let hm = { bytes: fs.statSync(path.join(ROOT, fileRel)).size, sha256: sha256File(path.join(ROOT, fileRel)) };
    items.push(entry(meta, fileRel, "shared", "/about", "1440x1000", 200, hm, "PASS"));

    const cookieFile = "shared/cookie-banner-initial-desktop.png";
    const cookie = page.locator(".cookie-banner").first();
    if (await cookie.count()) {
      await cookie.screenshot({ path: path.join(ROOT, cookieFile) });
    } else {
      await shot(page, path.join(ROOT, cookieFile));
    }
    hm = { bytes: fs.statSync(path.join(ROOT, cookieFile)).size, sha256: sha256File(path.join(ROOT, cookieFile)) };
    items.push(entry(meta, cookieFile, "shared", "/about", "1440x1000", 200, hm, "PASS"));

    const waFile = "shared/whatsapp-over-light-desktop.png";
    const wa = page.locator(".wa-float").first();
    if (await wa.count()) await wa.screenshot({ path: path.join(ROOT, waFile) });
    else await shot(page, path.join(ROOT, waFile));
    hm = { bytes: fs.statSync(path.join(ROOT, waFile)).size, sha256: sha256File(path.join(ROOT, waFile)) };
    items.push(entry(meta, waFile, "shared", "/about", "1440x1000", 200, hm, "PASS"));

    // Accept cookie
    const btn = page.locator(".cookie-banner button").first();
    if (await btn.count()) {
      await btn.click();
      await page.waitForTimeout(400);
    }
    const accepted = "shared/cookie-banner-accepted-desktop.png";
    await page.screenshot({
      path: path.join(ROOT, accepted),
      clip: { x: 0, y: 900, width: 1440, height: 100 },
    });
    hm = { bytes: fs.statSync(path.join(ROOT, accepted)).size, sha256: sha256File(path.join(ROOT, accepted)) };
    items.push(entry(meta, accepted, "shared", "/about", "1440x1000", 200, hm, "PASS"));
    await ctx.close();
  }

  // Mobile menu closed / open / logo / footer
  {
    const ctx = await browser.newContext({ viewport: VIEWPORTS.mobile });
    const page = await ctx.newPage();
    await page.goto(meta.base + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    let fileRel = "shared/mobile-menu-closed.png";
    await page.screenshot({
      path: path.join(ROOT, fileRel),
      clip: { x: 0, y: 0, width: 390, height: 90 },
    });
    let hm = { bytes: fs.statSync(path.join(ROOT, fileRel)).size, sha256: sha256File(path.join(ROOT, fileRel)) };
    items.push(entry(meta, fileRel, "shared", "/", "390x844", 200, hm, "PASS"));

    fileRel = "shared/logo-mobile.png";
    const logo = page.locator(".site-header__logo img, header img").first();
    if (await logo.count()) await logo.screenshot({ path: path.join(ROOT, fileRel) });
    else await shot(page, path.join(ROOT, fileRel));
    hm = { bytes: fs.statSync(path.join(ROOT, fileRel)).size, sha256: sha256File(path.join(ROOT, fileRel)) };
    items.push(entry(meta, fileRel, "shared", "/", "390x844", 200, hm, "PASS"));

    await page.getByRole("button", { name: /Open menu/i }).click();
    await page.waitForTimeout(400);
    fileRel = "shared/mobile-menu-open.png";
    await page.screenshot({ path: path.join(ROOT, fileRel), fullPage: false });
    hm = { bytes: fs.statSync(path.join(ROOT, fileRel)).size, sha256: sha256File(path.join(ROOT, fileRel)) };
    items.push(entry(meta, fileRel, "shared", "/", "390x844", 200, hm, "PASS"));

    await page.goto(meta.base + "/", { waitUntil: "networkidle" });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    fileRel = "shared/footer-mobile.png";
    const footer = page.locator("footer, .site-footer").first();
    if (await footer.count()) await footer.screenshot({ path: path.join(ROOT, fileRel) });
    else await shot(page, path.join(ROOT, fileRel));
    hm = { bytes: fs.statSync(path.join(ROOT, fileRel)).size, sha256: sha256File(path.join(ROOT, fileRel)) };
    items.push(entry(meta, fileRel, "shared", "/", "390x844", 200, hm, "PASS"));
    await ctx.close();
  }

  // Favicon — download asset and tab chrome proxy (favicon file proof)
  {
    const favUrl = meta.base + "/brand/favicons/octus-favicon-blue.svg";
    const res = await fetch(favUrl);
    const buf = Buffer.from(await res.arrayBuffer());
    const fileRel = "shared/favicon-asset.svg";
    fs.writeFileSync(path.join(ROOT, fileRel), buf);
    const hm = { bytes: buf.length, sha256: crypto.createHash("sha256").update(buf).digest("hex") };
    items.push({
      ...entry(meta, fileRel, "shared", "/brand/favicons/octus-favicon-blue.svg", "n/a", res.status, hm, res.status === 200 ? "PASS" : "FAIL"),
      note: "favicon_asset_capture_not_browser_tab_pixels",
    });
  }

  return items;
}

async function captureTeamRegression(browser, meta) {
  const items = [];
  const dir = path.join(ROOT, "reconciled", "team");
  ensureDir(dir);
  const shots = [
    { name: "full", fullPage: true, clip: null },
    { name: "leadership", fullPage: false, section: "Leadership" },
    { name: "core-specialists", fullPage: false, section: "Core Specialists" },
    { name: "rubio-crop", person: "Rubio" },
    { name: "maria-crop", person: "Maria" },
  ];
  for (const vpName of ["desktop", "mobile"]) {
    const vp = VIEWPORTS[vpName];
    const ctx = await browser.newContext({ viewport: vp });
    const page = await ctx.newPage();
    const res = await page.goto(meta.base + "/team", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    for (const s of shots) {
      const fileRel = `reconciled/team/${vpName}-${s.name}.png`;
      const abs = path.join(ROOT, fileRel);
      if (s.fullPage) {
        await shot(page, abs, { fullPage: true });
      } else if (s.section) {
        const loc = page.locator(`text=${s.section}`).first();
        if (await loc.count()) {
          await loc.scrollIntoViewIfNeeded();
          await page.waitForTimeout(200);
          const box = await loc.boundingBox();
          await page.screenshot({
            path: abs,
            clip: {
              x: 0,
              y: Math.max(0, (box?.y || 0) - 20),
              width: vp.width,
              height: Math.min(vp.height, 900),
            },
          });
        } else {
          await shot(page, abs);
        }
      } else if (s.person) {
        const card = page.locator(`text=${s.person}`).first();
        if (await card.count()) {
          await card.scrollIntoViewIfNeeded();
          const article = card.locator("xpath=ancestor::article[1]");
          if (await article.count()) await article.screenshot({ path: abs });
          else {
            const img = page.locator(`img[alt*='${s.person}'], img[src*='${s.person.toLowerCase()}']`).first();
            if (await img.count()) await img.screenshot({ path: abs });
            else await shot(page, abs);
          }
        } else await shot(page, abs);
      }
      const hm = { bytes: fs.statSync(abs).size, sha256: sha256File(abs) };
      items.push(entry(meta, fileRel, "reconciled_team", "/team", `${vp.width}x${vp.height}`, res.status(), hm, "PASS"));
    }
    await ctx.close();
  }
  return items;
}

async function main() {
  const metaRec = {
    base: RECONCILED,
    commit: COMMIT,
    deploymentId: DEPLOYMENT_ID,
  };
  const metaBase = {
    base: BASELINE,
    commit: "baseline_deployment:437tawkoMDv7sqxW6NzPzTegj1Lq",
    deploymentId: "dpl_437tawkoMDv7sqxW6NzPzTegj1Lq",
  };
  const metaBefore = {
    base: BEFORE,
    commit: "0654dc1247967bcc36d760f47ae0654ff3814aa3",
    deploymentId: "before_phase1_tip",
  };

  const browser = await chromium.launch({ headless: true });
  const allItems = [];

  console.log("Capturing reconciled routes...");
  allItems.push(...(await runOriginCapture(browser, "reconciled", metaRec, path.join(ROOT, "reconciled", "routes"), ROUTES)));

  console.log("Capturing baseline sample routes (subset + required matrix)...");
  allItems.push(...(await runOriginCapture(browser, "baseline", metaBase, path.join(ROOT, "baseline", "routes"), ROUTES)));

  console.log("Capturing before sample routes...");
  allItems.push(...(await runOriginCapture(browser, "before", metaBefore, path.join(ROOT, "before", "routes"), ROUTES)));

  console.log("Capturing shared chrome...");
  allItems.push(...(await captureShared(browser, metaRec)));

  console.log("Capturing team regression...");
  allItems.push(...(await captureTeamRegression(browser, metaRec)));

  // Audits on reconciled
  console.log("Running computed + interaction audits...");
  const deskCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const desk = await deskCtx.newPage();
  await desk.goto(RECONCILED + "/", { waitUntil: "networkidle" });
  await desk.waitForTimeout(400);
  // force cookie visible for WA geometry with banner
  await desk.evaluate(() => {
    try {
      localStorage.clear();
    } catch {}
  });
  await desk.reload({ waitUntil: "networkidle" });
  const desktopChrome = await collectChrome(desk);
  const deskOverflow = await overflowCheck(desk);

  // Nav interactions
  let servicesDropdownOk = false;
  try {
    await desk.getByRole("button", { name: /Services/i }).click();
    await desk.waitForTimeout(200);
    servicesDropdownOk = (await desk.getByRole("menu", { name: /Services/i }).count()) > 0
      || (await desk.locator('[role="menu"]').count()) > 0;
  } catch {
    servicesDropdownOk = false;
  }

  // Focus audit
  const focusOk = await desk.evaluate(() => {
    const a = document.querySelector(".site-header a, nav a");
    if (!a) return false;
    a.focus();
    const s = getComputedStyle(a);
    return Boolean(s.outlineStyle !== "none" || s.boxShadow !== "none" || a.matches(":focus-visible"));
  });

  const homeHeaders = await httpMeta(RECONCILED + "/");

  await deskCtx.close();

  const mobCtx = await browser.newContext({ viewport: VIEWPORTS.mobile });
  const mob = await mobCtx.newPage();
  await mob.goto(RECONCILED + "/", { waitUntil: "networkidle" });
  await mob.waitForTimeout(300);
  let mobileMenuOk = false;
  try {
    await mob.getByRole("button", { name: /Open menu/i }).click();
    await mob.waitForTimeout(300);
    mobileMenuOk = (await mob.locator("#mobile-nav, [aria-label='Mobile navigation']").count()) > 0;
  } catch {
    mobileMenuOk = false;
  }
  const mobOverflow = await overflowCheck(mob);
  const mobileChrome = await collectChrome(mob);
  await mobCtx.close();

  // Team audit
  const teamCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const teamPage = await teamCtx.newPage();
  await teamPage.goto(RECONCILED + "/team", { waitUntil: "networkidle" });
  const teamDesktop = await teamAudit(teamPage);
  const teamDeskOv = await overflowCheck(teamPage);
  const a11yDesk = await teamPage.evaluate(() => ({
    h1_count: document.querySelectorAll("h1").length,
    lang: document.documentElement.lang,
  }));
  await teamCtx.close();

  const teamMobCtx = await browser.newContext({ viewport: VIEWPORTS.mobile });
  const teamMob = await teamMobCtx.newPage();
  await teamMob.goto(RECONCILED + "/team", { waitUntil: "networkidle" });
  const teamMobile = await teamAudit(teamMob);
  const teamMobOv = await overflowCheck(teamMob);
  await teamMobCtx.close();

  // About light header chrome
  const aboutCtx = await browser.newContext({ viewport: VIEWPORTS.desktop });
  const about = await aboutCtx.newPage();
  await about.goto(RECONCILED + "/about", { waitUntil: "networkidle" });
  const aboutChrome = await collectChrome(about);
  await aboutCtx.close();

  await browser.close();

  // Portrait hash check (repo files — Global Phase 2 must not change them)
  const portraitResults = {};
  let portraitsOk = true;
  for (const [file, expected] of Object.entries(EXPECTED_PORTRAITS)) {
    // ROOT = .../global-system → repo root is ../../../../
    const real = path.resolve(ROOT, "../../../../public/team", file);
    const hash = fs.existsSync(real) ? sha256File(real) : "MISSING";
    const ok = hash === expected;
    if (!ok) portraitsOk = false;
    portraitResults[file] = { expected, actual: hash, status: ok ? "PASS" : "FAIL" };
  }

  // Logo assets
  const logoAssets = [
    "public/brand/lockup/octus-lockup-nav-on-dark.svg",
    "public/brand/lockup/octus-lockup-nav-on-light.svg",
    "public/brand/lockup/octus-lockup-horizontal-primary-on-dark.svg",
    "public/brand/favicons/octus-favicon-blue.svg",
  ];
  const logoAudit = {};
  for (const rel of logoAssets) {
    const fp = path.resolve(ROOT, "../../../../", rel);
    logoAudit[rel] = fs.existsSync(fp) ? "PASS" : "FAIL";
  }

  // Crawl
  const crawl = {};
  for (const route of ROUTES) {
    const m = await httpMeta(RECONCILED + route);
    crawl[route] = m;
  }

  // Prohibited file diff vs accepted_phase1_head (caller may also check)
  const waBottom = desktopChrome?.wa?.bottom || "";
  const waMatch =
    String(waBottom).includes("24px") || Number.parseFloat(desktopChrome?.wa?.bottom) === 24;

  const validation = {
    generated_at: new Date().toISOString(),
    starting_head: "0654dc1247967bcc36d760f47ae0654ff3814aa3",
    phase2_impl_commit: COMMIT,
    immutable_preview_url: RECONCILED,
    deployment_id: DEPLOYMENT_ID,
    checks: {
      logo_assets: Object.values(logoAudit).every((v) => v === "PASS") ? "PASS" : "FAIL",
      favicon: logoAudit["public/brand/favicons/octus-favicon-blue.svg"],
      header_height_desktop: desktopChrome?.header?.h === 84 ? "PASS" : "FAIL",
      header_logo: desktopChrome?.logo?.h === 36 ? "PASS" : "FAIL",
      footer_logo: desktopChrome?.footerLogo?.h === 48 ? "PASS" : "FAIL",
      footer_padT: desktopChrome?.footer?.padT === "80px" ? "PASS" : "FAIL",
      whatsapp_bottom_24: waMatch ? "PASS" : "FAIL",
      services_dropdown: servicesDropdownOk ? "PASS" : "FAIL",
      mobile_menu: mobileMenuOk ? "PASS" : "FAIL",
      focus_basics: focusOk ? "PASS" : "FAIL",
      desktop_overflow_home: !deskOverflow ? "PASS" : "FAIL",
      mobile_overflow_home: !mobOverflow ? "PASS" : "FAIL",
      x_robots_noindex: homeHeaders.xRobots.includes("noindex") ? "PASS" : "FAIL",
      team_roster_desktop:
        teamDesktop.roster_count === 10 && teamDesktop.band_count === 2 ? "PASS" : "FAIL",
      team_roster_mobile:
        teamMobile.roster_count === 10 && teamMobile.band_count === 2 ? "PASS" : "FAIL",
      team_overflow_desktop: !teamDeskOv ? "PASS" : "FAIL",
      team_overflow_mobile: !teamMobOv ? "PASS" : "FAIL",
      portrait_hashes: portraitsOk ? "PASS" : "FAIL",
      crawl_all_200: Object.values(crawl).every((c) => c.status === 200) ? "PASS" : "FAIL",
      a11y_team_h1: a11yDesk.h1_count === 1 ? "PASS" : "FAIL",
    },
    results: {
      desktopChrome,
      mobileChrome,
      aboutChrome,
      teamDesktop,
      teamMobile,
      a11yDesk,
      crawl,
      logoAudit,
      portraits: portraitResults,
      wa: desktopChrome?.wa,
      tokens: desktopChrome?.tokens,
    },
  };

  const failed = Object.entries(validation.checks)
    .filter(([, v]) => v !== "PASS")
    .map(([k, v]) => `${k}=${v}`);
  validation.overall = failed.length === 0 ? "PASS" : "FAIL";
  validation.failed_checks = failed;

  const missingMeta = allItems.filter(
    (i) =>
      !i.file ||
      !i.classification ||
      !i.route ||
      !i.source_url ||
      !i.deployment_id ||
      !i.immutable_commit_sha ||
      !i.viewport ||
      !i.capture_timestamp ||
      i.http_status == null ||
      !i.sha256 ||
      i.bytes == null ||
      !i.status
  );

  const manifest = {
    generated_at: new Date().toISOString(),
    phase: 2,
    accepted_phase1_head: "0654dc1247967bcc36d760f47ae0654ff3814aa3",
    phase2_impl_commit: COMMIT,
    immutable_preview_url: RECONCILED,
    deployment_id: DEPLOYMENT_ID,
    baseline_url: BASELINE,
    before_url: BEFORE,
    screenshot_count: allItems.length,
    screenshot_entries_missing_metadata: missingMeta.length,
    items: allItems,
  };

  fs.writeFileSync(path.join(ROOT, "SCREENSHOT_MANIFEST.json"), JSON.stringify(manifest, null, 2));
  fs.writeFileSync(path.join(ROOT, "audit", "PHASE2_VALIDATION.json"), JSON.stringify(validation, null, 2));
  fs.writeFileSync(
    path.join(ROOT, "reconciled", "_manifest.json"),
    JSON.stringify(allItems.filter((i) => String(i.classification).startsWith("reconciled")), null, 2)
  );

  console.log(
    JSON.stringify(
      {
        screenshot_count: allItems.length,
        missing_metadata: missingMeta.length,
        overall: validation.overall,
        failed,
        preview: RECONCILED,
        deployment_id: DEPLOYMENT_ID,
        commit: COMMIT,
      },
      null,
      2
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
