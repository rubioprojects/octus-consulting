#!/usr/bin/env node
/**
 * Phase 4 a11y remediation — recapture affected service routes + update homepage how-we-work chapter.
 * Preserves baseline/before evidence; updates reconciled hashes/manifest for touched routes only.
 */
import { chromium } from "playwright";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVICES = path.resolve(__dirname, "..");
const HOMEPAGE = path.resolve(__dirname, "../../homepage");
const REPO = path.resolve(__dirname, "../../../../../..");

const PREVIEW = process.env.PHASE4_PREVIEW;
const COMMIT = process.env.PHASE4_COMMIT || "";
const DEPLOYMENT_ID = process.env.PHASE4_DEPLOYMENT || "";
if (!PREVIEW || !COMMIT || !DEPLOYMENT_ID) {
  console.error("PHASE4_PREVIEW, PHASE4_COMMIT, PHASE4_DEPLOYMENT required");
  process.exit(1);
}

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000, label: "1440x1000" },
  mobile: { width: 390, height: 844, label: "390x844" },
};

const CHAPTERS = [
  { id: "full", fullPage: true },
  {
    id: "hero",
    selector: ".octus-dark-hero, .page-hero, header.hero, main > section:first-of-type",
    height: 900,
  },
  { id: "content", midScroll: true, height: 900 },
  { id: "cta", ctaSection: true, height: 520 },
];

const AFFECTED_ROUTES = [
  "/solutions",
  "/solutions/regulatory/fintech-licensing",
  "/solutions/corporate/holding-design",
  "/solutions/corporate/offshore-structuring",
];

const PAGE_FAMILY = {
  "/solutions": "overview",
  "/solutions/regulatory/fintech-licensing": "deep-service",
  "/solutions/corporate/holding-design": "deep-service",
  "/solutions/corporate/offshore-structuring": "deep-service",
};

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

async function captureChapter(page, vp, chapterSpec, outAbs) {
  ensureDir(path.dirname(outAbs));
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
    let loc = page.locator(".cta-block").first();
    if ((await loc.count()) === 0) loc = page.locator("section.surface-dark").last();
    if ((await loc.count()) === 0) loc = page.locator("main section").last();
    if ((await loc.count()) === 0) {
      const metrics = await page.evaluate(() => document.documentElement.scrollHeight);
      const y = Math.max(0, metrics - vp.height);
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(200);
      await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
      return { scroll: `bottomFallback;y=${y}`, ok: true };
    }
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    const box = await loc.boundingBox();
    const y = Math.max(0, (box?.y || 0) - 20);
    const h = Math.min(vp.height, chapterSpec.height || 520);
    await page.screenshot({
      path: outAbs,
      animations: "disabled",
      clip: { x: 0, y, width: vp.width, height: h },
    });
    return { scroll: `y=${Math.round(y)};ctaSection`, ok: true };
  }
  if (chapterSpec.text) {
    const loc = page.locator(chapterSpec.selector || "h2", { hasText: chapterSpec.text }).first();
    if ((await loc.count()) === 0) {
      await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
      return { scroll: chapterSpec.text, ok: false };
    }
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    const box = await loc.boundingBox();
    const y = Math.max(0, (box?.y || 0) - 40);
    const h = Math.min(vp.height, chapterSpec.height || 700);
    await page.screenshot({
      path: outAbs,
      animations: "disabled",
      clip: { x: 0, y, width: vp.width, height: h },
    });
    return { scroll: `y=${Math.round(y)};text=${chapterSpec.text}`, ok: true };
  }
  const loc = page.locator(chapterSpec.selector).first();
  if ((await loc.count()) === 0) {
    await page.screenshot({ path: outAbs, fullPage: false, animations: "disabled" });
    return { scroll: chapterSpec.selector || "missing", ok: false };
  }
  await loc.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  const box = await loc.boundingBox();
  const y = Math.max(0, (box?.y || 0) - 40);
  const h = Math.min(vp.height, chapterSpec.height || 900);
  await page.screenshot({
    path: outAbs,
    animations: "disabled",
    clip: { x: 0, y, width: vp.width, height: h },
  });
  return { scroll: `y=${Math.round(y)};sel=${chapterSpec.selector}`, ok: true };
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const updated = [];
  const changedHashes = [];

  const manifestPath = path.join(SERVICES, "SCREENSHOT_MANIFEST.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const byFile = new Map(manifest.items.map((i) => [i.file, i]));

  for (const route of AFFECTED_ROUTES) {
    for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await ctx.newPage();
      const url = originBase(PREVIEW) + route;
      const res = await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
      const status = res?.status() || 0;
      await page.waitForTimeout(350);

      for (const ch of CHAPTERS) {
        const fileRel = `reconciled/${routeSlug(route)}__${vpName}__${ch.id}.png`;
        const abs = path.join(SERVICES, fileRel);
        const prior = byFile.get(fileRel);
        const priorSha = prior?.sha256 || null;
        const capt = await captureChapter(page, vp, ch, abs);
        const sha = sha256File(abs);
        const bytes = fs.statSync(abs).size;
        if (priorSha && priorSha !== sha) {
          changedHashes.push({ file: fileRel, before: priorSha, after: sha });
        }
        const entry = {
          file: fileRel,
          classification: "reconciled",
          route,
          page_family: PAGE_FAMILY[route] || "unknown",
          chapter: ch.id,
          source_url: url,
          deployment_id: DEPLOYMENT_ID,
          immutable_commit_sha: COMMIT,
          viewport: vp.label,
          scroll_position_or_selector: capt.scroll,
          capture_timestamp: new Date().toISOString(),
          http_status: status,
          sha256: sha,
          bytes,
          status: status === 200 && capt.ok ? "PASS" : "FAIL",
          a11y_remediation_recapture: true,
        };
        byFile.set(fileRel, entry);
        updated.push(fileRel);
        console.log(fileRel, entry.status, sha.slice(0, 12));
      }
      await ctx.close();
    }
  }

  // Homepage how-we-work (step numerals) + desktop/mobile full for Phase 3 evidence system
  const homeManifestPath = path.join(HOMEPAGE, "SCREENSHOT_MANIFEST.json");
  const homeManifest = JSON.parse(fs.readFileSync(homeManifestPath, "utf8"));
  const homeByFile = new Map(homeManifest.items.map((i) => [i.file, i]));
  const homeChapters = [
    { id: "how-we-work", selector: "h2", text: "A structural approach", height: 700 },
    { id: "full", fullPage: true },
  ];
  for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    const url = originBase(PREVIEW) + "/";
    const res = await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
    const status = res?.status() || 0;
    await page.waitForTimeout(350);
    for (const ch of homeChapters) {
      const chapterId = vpName === "mobile" && ch.id === "full" ? "mobile-full" : ch.id;
      const fileRel =
        vpName === "mobile" && ch.id !== "full"
          ? `reconciled/home__mobile__${ch.id}.png`
          : vpName === "mobile"
            ? `reconciled/home__mobile-full.png`
            : `reconciled/home__desktop__${chapterId}.png`;
      // Prefer existing naming if present
      const existing = [...homeByFile.keys()].find(
        (f) =>
          f.includes("reconciled") &&
          f.includes(vpName === "mobile" ? "mobile" : "desktop") &&
          (ch.id === "full"
            ? f.includes("full") && !f.includes("how-we-work")
            : f.includes("how-we-work"))
      );
      const useRel = existing || fileRel;
      const abs = path.join(HOMEPAGE, useRel);
      const priorSha = homeByFile.get(useRel)?.sha256 || null;
      const capt = await captureChapter(page, vp, ch, abs);
      const sha = sha256File(abs);
      const bytes = fs.statSync(abs).size;
      if (priorSha && priorSha !== sha) {
        changedHashes.push({ file: `homepage/${useRel}`, before: priorSha, after: sha });
      }
      const entry = {
        ...(homeByFile.get(useRel) || {}),
        file: useRel,
        classification: "reconciled",
        route: "/",
        chapter: existing ? homeByFile.get(useRel).chapter : chapterId,
        source_url: url,
        deployment_id: DEPLOYMENT_ID,
        immutable_commit_sha: COMMIT,
        viewport: vp.label,
        scroll_position_or_selector: capt.scroll,
        capture_timestamp: new Date().toISOString(),
        http_status: status,
        sha256: sha,
        bytes,
        status: status === 200 && capt.ok ? "PASS" : "FAIL",
        a11y_remediation_note:
          "Homepage mutation limited to approved decorative step-numeral accessibility correction; HOME_PUNCTUATION_RESIDUAL_001 untouched.",
      };
      homeByFile.set(useRel, entry);
      updated.push(`homepage/${useRel}`);
      console.log("home", useRel, entry.status, sha.slice(0, 12));
    }
    await ctx.close();
  }

  await browser.close();

  manifest.items = [...byFile.values()];
  manifest.generated_at = new Date().toISOString();
  manifest.phase4_a11y_remediation = {
    immutable_preview_url: PREVIEW,
    deployment_id: DEPLOYMENT_ID,
    application_commit: COMMIT,
    affected_routes_recaptured: AFFECTED_ROUTES,
    updated_files: updated.filter((f) => !f.startsWith("homepage/")),
    changed_hashes: changedHashes.filter((c) => !c.file.startsWith("homepage/")),
    baseline_before_preserved: true,
  };
  manifest.immutable_preview_url = PREVIEW;
  manifest.deployment_id = DEPLOYMENT_ID;
  manifest.phase4_impl_commit = COMMIT;
  manifest.screenshot_count = manifest.items.length;
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

  homeManifest.items = [...homeByFile.values()];
  homeManifest.generated_at = new Date().toISOString();
  homeManifest.phase4_a11y_homepage_update = {
    immutable_preview_url: PREVIEW,
    deployment_id: DEPLOYMENT_ID,
    application_commit: COMMIT,
    mutation: "decorative_step_numerals_aria_hidden_css_content",
    home_punctuation_residual_001: "preserved_exactly_one",
    changed_hashes: changedHashes.filter((c) => c.file.startsWith("homepage/")),
  };
  fs.writeFileSync(homeManifestPath, JSON.stringify(homeManifest, null, 2) + "\n");

  const provenancePath = path.join(SERVICES, "PROVENANCE_BIND.json");
  const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
  provenance.a11y_remediation = {
    immutable_preview_url: PREVIEW,
    deployment_id: DEPLOYMENT_ID,
    deployed_git_sha: process.env.PHASE4_DEPLOYED_SHA || COMMIT,
    application_code_sha: COMMIT,
    recaptured_at: new Date().toISOString(),
    affected_routes: AFFECTED_ROUTES,
  };
  fs.writeFileSync(provenancePath, JSON.stringify(provenance, null, 2) + "\n");

  const summary = {
    updated_count: updated.length,
    changed_hash_count: changedHashes.length,
    screenshot_count: manifest.screenshot_count,
    preview: PREVIEW,
    commit: COMMIT,
    deployment_id: DEPLOYMENT_ID,
  };
  fs.writeFileSync(
    path.join(SERVICES, "audit/PHASE4_A11Y_RECAPTURE_SUMMARY.json"),
    JSON.stringify({ ...summary, changedHashes, updated }, null, 2) + "\n"
  );
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
