/**
 * Team hard-gate evidence capture + Phase 1 validation.
 * Usage:
 *   node scripts/team-hard-gate-capture.cjs --mode baseline --origin URL
 *   node scripts/team-hard-gate-capture.cjs --mode before --origin URL --commit SHA
 *   node scripts/team-hard-gate-capture.cjs --mode reconciled --origin URL --commit SHA
 *   node scripts/team-hard-gate-capture.cjs --mode validate --origin URL --commit SHA
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
const OUT_ROOT = path.join(ROOT, "docs/ops/evidence/remediation/team-hard-gate");

const APPROVED = [
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

const PROHIBITED_COPY = [
  "Leadership Support",
  "Operational Leadership",
  "Practice Leads",
  "Managing Director",
  "Daniel",
];

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};

function arg(name, fallback = "") {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function shaFile(p) {
  return sha256(fs.readFileSync(p));
}

async function shot(page, dest, opts = {}) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await page.screenshot({ path: dest, type: "png", ...opts });
  const buf = fs.readFileSync(dest);
  return { path: dest, sha256: sha256(buf), bytes: buf.length };
}

async function captureMode(mode, origin, commit) {
  const outDir = path.join(OUT_ROOT, mode);
  fs.mkdirSync(outDir, { recursive: true });
  const manifest = [];
  const browser = await chromium.launch({ headless: true });

  for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
    const context = await browser.newContext({
      viewport: vp,
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    page.setDefaultTimeout(45000);
    const url = `${origin.replace(/\/$/, "")}/team`;
    const resp = await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(900);

    const meta = {
      classification: mode,
      commit_sha: mode === "baseline" ? `baseline_deployment:437tawkoMDv7sqxW6NzPzTegj1Lq` : commit,
      url,
      http_status: resp ? resp.status() : null,
      capture_date: "2026-08-03",
      viewport: `${vp.width}x${vp.height}`,
    };

    const push = async (label, file, opts) => {
      const r = await shot(page, path.join(outDir, file), opts);
      manifest.push({ file: `${mode}/${file}`, label, ...meta, ...r, path: undefined });
    };

    await push("hero", `hero-${vpName}.png`, { fullPage: false });
    await push("full_page", `full-${vpName}.png`, { fullPage: true });

    // Leadership grid
    const leadership = page.locator(".team-grid--leadership");
    if ((await leadership.count()) > 0) {
      await leadership.first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      await push("leadership_grid", `leadership-grid-${vpName}.png`, {
        fullPage: false,
      });
      // Re-shot clipping the element
      const box = await leadership.first().boundingBox();
      if (box) {
        await page.screenshot({
          path: path.join(outDir, `leadership-grid-${vpName}.png`),
          clip: {
            x: Math.max(0, box.x - 8),
            y: Math.max(0, box.y - 8),
            width: Math.min(vp.width, box.width + 16),
            height: Math.min(vp.height * 2, box.height + 16),
          },
        });
        const buf = fs.readFileSync(path.join(outDir, `leadership-grid-${vpName}.png`));
        const entry = manifest.find((m) => m.file === `${mode}/leadership-grid-${vpName}.png`);
        if (entry) {
          entry.sha256 = sha256(buf);
          entry.bytes = buf.length;
        }
      }
    }

    // Rubio / Maria crops (first two leadership cards)
    const cards = page.locator(".team-grid--leadership .team-card, .team-grid--leadership .team-card-link .team-card");
    const cardCount = await cards.count();
    if (cardCount >= 1) {
      const rubio = cards.nth(0);
      await rubio.scrollIntoViewIfNeeded();
      const box = await rubio.boundingBox();
      if (box) {
        await page.screenshot({
          path: path.join(outDir, `rubio-crop-${vpName}.png`),
          clip: { x: box.x, y: box.y, width: box.width, height: box.height },
        });
        const buf = fs.readFileSync(path.join(outDir, `rubio-crop-${vpName}.png`));
        manifest.push({
          file: `${mode}/rubio-crop-${vpName}.png`,
          label: "rubio_crop",
          sha256: sha256(buf),
          bytes: buf.length,
          ...meta,
        });
      }
    }
    if (cardCount >= 2) {
      const maria = cards.nth(1);
      await maria.scrollIntoViewIfNeeded();
      const box = await maria.boundingBox();
      if (box) {
        await page.screenshot({
          path: path.join(outDir, `maria-crop-${vpName}.png`),
          clip: { x: box.x, y: box.y, width: box.width, height: box.height },
        });
        const buf = fs.readFileSync(path.join(outDir, `maria-crop-${vpName}.png`));
        manifest.push({
          file: `${mode}/maria-crop-${vpName}.png`,
          label: "maria_crop",
          sha256: sha256(buf),
          bytes: buf.length,
          ...meta,
        });
      }
    }

    // Core specialists / specialist grids (baseline uses team-grid--core; before may use other bands)
    const core = page.locator(".team-grid--core, .team-grid--specialists, section .team-grid").nth(1);
    const coreAlt = page.locator(".team-grid--core");
    const targetCore = (await coreAlt.count()) > 0 ? coreAlt.first() : core;
    if ((await targetCore.count()) > 0) {
      await targetCore.scrollIntoViewIfNeeded();
      const box = await targetCore.boundingBox();
      if (box) {
        // May be taller than viewport — full-page crop via element screenshot
        await targetCore.screenshot({ path: path.join(outDir, `core-grid-${vpName}.png`) });
        const buf = fs.readFileSync(path.join(outDir, `core-grid-${vpName}.png`));
        manifest.push({
          file: `${mode}/core-grid-${vpName}.png`,
          label: "core_specialists_grid",
          sha256: sha256(buf),
          bytes: buf.length,
          ...meta,
        });
      }
    }

    // Final CTA
    const cta = page.locator(".cta-block").last();
    if ((await cta.count()) > 0) {
      await cta.scrollIntoViewIfNeeded();
      await cta.screenshot({ path: path.join(outDir, `cta-${vpName}.png`) });
      const buf = fs.readFileSync(path.join(outDir, `cta-${vpName}.png`));
      manifest.push({
        file: `${mode}/cta-${vpName}.png`,
        label: "final_cta",
        sha256: sha256(buf),
        bytes: buf.length,
        ...meta,
      });
    }

    // Mobile card stacking — first specialist card column
    if (vpName === "mobile") {
      const specialistCard = page.locator(".team-grid--core .team-card, .team-card--specialist").first();
      if ((await specialistCard.count()) > 0) {
        await specialistCard.scrollIntoViewIfNeeded();
        await specialistCard.screenshot({
          path: path.join(outDir, `mobile-card-stack.png`),
        });
        const buf = fs.readFileSync(path.join(outDir, `mobile-card-stack.png`));
        manifest.push({
          file: `${mode}/mobile-card-stack.png`,
          label: "mobile_card_stacking",
          sha256: sha256(buf),
          bytes: buf.length,
          ...meta,
        });
      }
    }

    await context.close();
  }

  await browser.close();
  const manPath = path.join(outDir, `_manifest.json`);
  fs.writeFileSync(manPath, JSON.stringify({ mode, origin, commit, manifest }, null, 2));
  console.log(`CAPTURE ${mode} items=${manifest.length} -> ${outDir}`);
  return manifest;
}

async function validate(origin, commit) {
  const browser = await chromium.launch({ headless: true });
  const results = {};

  async function runVp(name, vp) {
    const context = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const page = await context.newPage();
    await page.goto(`${origin.replace(/\/$/, "")}/team`, {
      waitUntil: "networkidle",
      timeout: 45000,
    });
    await page.waitForTimeout(600);

    const roster = await page.evaluate(() => {
      const names = [...document.querySelectorAll(".team-card .heading-sm")].map((el) =>
        (el.textContent || "").trim()
      );
      const bands = [...document.querySelectorAll(".team-band-label")].map((el) =>
        (el.textContent || "").trim()
      );
      const imgs = [...document.querySelectorAll(".team-card-photo")].map((img) => ({
        src: img.getAttribute("src"),
        complete: img.complete,
        naturalWidth: img.naturalWidth,
      }));
      const links = [...document.querySelectorAll("a.team-card-link")].map((a) => ({
        href: a.href,
        label: a.getAttribute("aria-label"),
      }));
      const bodyText = document.body.innerText;
      const overflow = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
      const h1 = document.querySelectorAll("h1").length;
      const lang = document.documentElement.lang || "";
      return { names, bands, imgs, links, bodyText, overflow, h1, lang };
    });

    const dupes = roster.names.filter((n, i) => roster.names.indexOf(n) !== i);
    const missingApproved = APPROVED.filter((n) => !roster.names.includes(n));
    const extras = roster.names.filter((n) => !APPROVED.includes(n));
    const missingImages = roster.imgs.filter((i) => !i.src || !i.naturalWidth);
    const prohibitedHits = PROHIBITED_COPY.filter((p) => roster.bodyText.includes(p));
    const bandOk =
      roster.bands.length === 2 &&
      roster.bands[0] === "Leadership" &&
      roster.bands[1] === "Core Specialists";

    results[name] = {
      viewport: `${vp.width}x${vp.height}`,
      roster_count: roster.names.length,
      roster_names: roster.names,
      roster_exact_10: roster.names.length === 10 && missingApproved.length === 0 && extras.length === 0,
      missing_approved: missingApproved,
      extras,
      duplicate_names: [...new Set(dupes)],
      bands: roster.bands,
      bands_ok: bandOk,
      missing_images: missingImages,
      linkedin_links: roster.links,
      linkedin_count: roster.links.length,
      overflow: roster.overflow,
      a11y: { h1_count: roster.h1, lang: roster.lang, h1_ok: roster.h1 === 1, lang_ok: !!roster.lang },
      prohibited_copy_hits: prohibitedHits,
    };
    await context.close();
  }

  await runVp("desktop", VIEWPORTS.desktop);
  await runVp("mobile", VIEWPORTS.mobile);
  await browser.close();

  // Portrait hashes
  const portraits = {};
  const teamDir = path.join(ROOT, "public/team");
  for (const f of fs.readdirSync(teamDir).filter((x) => x.endsWith(".jpg"))) {
    const p = path.join(teamDir, f);
    portraits[f] = { sha256: shaFile(p), bytes: fs.statSync(p).size };
  }

  // Crop values from globals.css
  const css = fs.readFileSync(path.join(ROOT, "app/globals.css"), "utf8");
  const cropValues = {};
  for (const m of css.matchAll(
    /\.team-photo--([a-z-]+)[^{]*\{[^}]*object-position:\s*([^;]+);/g
  )) {
    cropValues[m[1]] = m[2].trim();
  }

  const desktop = results.desktop;
  const checks = {
    roster_count: desktop.roster_exact_10 ? "PASS" : "FAIL",
    duplicate_name_scan: desktop.duplicate_names.length === 0 ? "PASS" : "FAIL",
    missing_image_scan: desktop.missing_images.length === 0 ? "PASS" : "FAIL",
    linkedin_link_scan: desktop.linkedin_count >= 1 ? "PASS" : "FAIL",
    bands: desktop.bands_ok ? "PASS" : "FAIL",
    desktop_overflow: desktop.overflow ? "FAIL" : "PASS",
    mobile_overflow: results.mobile.overflow ? "FAIL" : "PASS",
    accessibility_desktop:
      desktop.a11y.h1_ok && desktop.a11y.lang_ok ? "PASS" : "FAIL",
    accessibility_mobile:
      results.mobile.a11y.h1_ok && results.mobile.a11y.lang_ok ? "PASS" : "FAIL",
    prohibited_copy_scan: desktop.prohibited_copy_hits.length === 0 ? "PASS" : "FAIL",
  };

  const out = {
    commit,
    origin,
    captured_at: new Date().toISOString(),
    checks,
    results,
    portraits,
    crop_values: cropValues,
    overall: Object.values(checks).every((v) => v === "PASS") ? "PASS" : "FAIL",
  };
  fs.mkdirSync(path.join(OUT_ROOT, "audit"), { recursive: true });
  fs.writeFileSync(
    path.join(OUT_ROOT, "audit/PHASE1_VALIDATION.json"),
    JSON.stringify(out, null, 2)
  );
  console.log(JSON.stringify({ overall: out.overall, checks }, null, 2));
  return out;
}

(async () => {
  const mode = arg("mode", "validate");
  const origin = arg("origin", "http://127.0.0.1:3017");
  const commit = arg("commit", "");
  if (mode === "validate") {
    const out = await validate(origin, commit);
    process.exit(out.overall === "PASS" ? 0 : 2);
  }
  await captureMode(mode, origin, commit);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
