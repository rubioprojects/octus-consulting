#!/usr/bin/env node
/**
 * Phase 5A Institutional/Engagement — capture + validation against immutable preview.
 *
 * Env:
 *   PHASE5A_PREVIEW (required)
 *   PHASE5A_COMMIT (application SHA)
 *   PHASE5A_DEPLOYMENT (dpl_…)
 *   PHASE5A_DEPLOYED_SHA (optional deployment git sha)
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

const PREVIEW = process.env.PHASE5A_PREVIEW;
const COMMIT = process.env.PHASE5A_COMMIT || "";
const DEPLOYMENT_ID = process.env.PHASE5A_DEPLOYMENT || "";
const DEPLOYED_SHA = process.env.PHASE5A_DEPLOYED_SHA || COMMIT;
if (!PREVIEW || !COMMIT || !DEPLOYMENT_ID) {
  console.error("PHASE5A_PREVIEW, PHASE5A_COMMIT, PHASE5A_DEPLOYMENT required");
  process.exit(1);
}

const VIEWPORTS = {
  desktop: { width: 1440, height: 1000, label: "1440x1000" },
  mobile: { width: 390, height: 844, label: "390x844" },
};

const ROUTES = [
  { route: "/about", template: "institutional-authority" },
  { route: "/how-we-engage", template: "engagement-model" },
  { route: "/contact", template: "commercial-intake" },
  { route: "/diagnostic", template: "structured-assessment" },
  { route: "/partners", template: "network-positioning" },
  { route: "/careers", template: "employer-talent-eoi" },
];

const CHAPTERS = [
  { id: "full", fullPage: true },
  { id: "hero", selector: ".octus-dark-hero, .page-hero, main > section:first-of-type", height: 900 },
  { id: "content", midScroll: true, height: 900 },
  { id: "cta", ctaSection: true, height: 520 },
];

const MOBILE_CHAPTERS = [
  { id: "full", fullPage: true },
  { id: "first-fold", selector: "main > section:first-of-type", height: 844 },
  { id: "content", midScroll: true, height: 844 },
  { id: "cta", ctaSection: true, height: 520 },
];

const BASELINE = "https://octus-consulting-9q798dbg2-axle1.vercel.app";
const BASELINE_DPL = "dpl_437tawkoMDv7sqxW6NzPzTegj1Lq";
const BEFORE = "https://octus-consulting-beqxfdqrk-axle1.vercel.app";
const BEFORE_COMMIT = "eac4e514ea751314774f3e69f71ebd52245d2534";
const BEFORE_DPL = "dpl_Fx8deWwccpuH6U3WhWzpUWr5g5kT";
/** Phase 5A starting HEAD (accepted Phase 4 evidence tip) — frozen-diff baseline */
const PHASE5A_START = "15df1e82c5ccd3dfb47d83dda30805fbd55b5497";

const FROZEN_PATHS = [
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
  "app/markets/",
  "app/jurisdictions/",
  "app/brazil/",
  "app/intelligence/",
  "app/insights/",
];

const PROHIBITED = [
  /—|–/,
  /\bsix[-\s]?area/i,
  /\b06\s+solutions/i,
  /not a law firm/i,
  /\bguarantee(?:d|s)?\b/i,
];

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
    let loc = page.locator(".cta-block, section.surface-dark, .octus-dark-hero").last();
    if ((await loc.count()) === 0) loc = page.locator("main section").last();
    await loc.scrollIntoViewIfNeeded().catch(() => {});
    await page.waitForTimeout(200);
    const box = await loc.boundingBox();
    const y = Math.max(0, (box?.y || 0) - 20);
    const h = Math.min(vp.height, chapterSpec.height || 520);
    await page.screenshot({
      path: outAbs,
      animations: "disabled",
      clip: { x: 0, y, width: vp.width, height: h },
    });
    return { scroll: `y=${Math.round(y)};cta`, ok: true };
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

async function httpMeta(url) {
  const res = await fetch(url, { redirect: "manual" });
  return {
    status: res.status,
    location: res.headers.get("location") || "",
    xRobots: res.headers.get("x-robots-tag") || "",
  };
}

async function main() {
  ensureDir(path.join(ROOT, "baseline"));
  ensureDir(path.join(ROOT, "before"));
  ensureDir(path.join(ROOT, "reconciled"));
  ensureDir(AUDIT);

  const manifestItems = [];
  const browser = await chromium.launch({ headless: true });
  const a11yResults = [];
  const crawl = {};
  const meta = [];
  const ctaRows = [];
  const prohibitedHits = [];
  const overflow = {};

  console.log("Capturing baseline + before + reconciled...");
  for (const { route, template } of ROUTES) {
    for (const [cls, base, commit, dpl] of [
      ["baseline", BASELINE, "baseline-9q798dbg2", BASELINE_DPL],
      ["before", BEFORE, BEFORE_COMMIT, BEFORE_DPL],
      ["reconciled", PREVIEW, COMMIT, DEPLOYMENT_ID],
    ]) {
      for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
        const chapters = vpName === "mobile" ? MOBILE_CHAPTERS : CHAPTERS;
        const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
        const page = await ctx.newPage();
        const url = originBase(base) + route;
        let status = 0;
        try {
          const res = await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
          status = res?.status() || 0;
        } catch {
          status = 0;
        }
        await page.waitForTimeout(300);
        if (cls === "reconciled" && vpName === "desktop") crawl[route] = status;

        for (const ch of chapters) {
          const fileRel = `${cls}/${routeSlug(route)}__${vpName}__${ch.id}.png`;
          const abs = path.join(ROOT, fileRel);
          const capt = await captureChapter(page, vp, ch, abs);
          const sha = fs.existsSync(abs) ? sha256File(abs) : "";
          const bytes = fs.existsSync(abs) ? fs.statSync(abs).size : 0;
          manifestItems.push({
            file: fileRel,
            classification: cls,
            route,
            template,
            chapter: ch.id,
            source_url: url,
            deployment_id: dpl,
            immutable_commit_sha: commit,
            viewport: vp.label,
            scroll_position_or_selector: capt.scroll,
            capture_timestamp: new Date().toISOString(),
            http_status: status,
            sha256: sha,
            bytes,
            status: status === 200 && capt.ok && sha ? "PASS" : "FAIL",
          });
        }

        if (cls === "reconciled") {
          const text = await page.locator("main").innerText().catch(() => "");
          for (const re of PROHIBITED) {
            if (re.test(text)) prohibitedHits.push({ route, vp: vpName, pattern: String(re) });
          }
          // overflow
          const ov = await page.evaluate(() => {
            const doc = document.documentElement;
            return {
              scrollWidth: doc.scrollWidth,
              clientWidth: doc.clientWidth,
              overflowX: doc.scrollWidth > doc.clientWidth + 1,
            };
          });
          overflow[`${route}:${vpName}`] = ov;

          // axe
          try {
            const axe = await new AxeBuilder({ page }).analyze();
            const serious = axe.violations.filter((v) => v.impact === "serious");
            const critical = axe.violations.filter((v) => v.impact === "critical");
            const moderate = axe.violations.filter((v) => v.impact === "moderate");
            const minor = axe.violations.filter((v) => v.impact === "minor");
            const regionWa = moderate.filter((v) => v.id === "region" && JSON.stringify(v.nodes).includes("wa-float"));
            a11yResults.push({
              route,
              viewport: vpName,
              axe_core_version: axeCoreVersion,
              unavailable: false,
              execution_error: false,
              critical: critical.length,
              serious: serious.length,
              moderate: moderate.length,
              minor: minor.length,
              incomplete: axe.incomplete?.length || 0,
              violations: axe.violations.map((v) => ({
                id: v.id,
                impact: v.impact,
                nodes: v.nodes.length,
                targets: v.nodes.slice(0, 5).map((n) => n.target),
              })),
              global_region_residual_nodes: regionWa.reduce((n, v) => n + v.nodes.length, 0),
              status:
                critical.length === 0 && serious.length === 0 ? "PASS" : "FAIL",
            });
          } catch (e) {
            a11yResults.push({
              route,
              viewport: vpName,
              unavailable: true,
              execution_error: true,
              error: String(e.message || e),
              status: "FAIL",
            });
          }

          if (vpName === "desktop") {
            const m = await page.evaluate(() => {
              const canon = document.querySelector('link[rel="canonical"]')?.href || "";
              const title = document.title || "";
              const desc =
                document.querySelector('meta[name="description"]')?.content || "";
              const og = document.querySelector('meta[property="og:title"]')?.content || "";
              const tw = document.querySelector('meta[name="twitter:card"]')?.content || "";
              const robots = document.querySelector('meta[name="robots"]')?.content || "";
              const links = [...document.querySelectorAll("main a[href]")].map((a) => ({
                text: (a.textContent || "").trim().replace(/\s+/g, " ").slice(0, 80),
                href: a.getAttribute("href"),
              }));
              return { canon, title, desc, og, tw, robots, links };
            });
            meta.push({ route, ...m, http_status: status });
            const labels = {};
            for (const l of m.links) {
              if (!l.text) continue;
              labels[l.text] = (labels[l.text] || 0) + 1;
            }
            const dupLabels = Object.entries(labels).filter(([, n]) => n > 1);
            ctaRows.push({ route, links: m.links, duplicate_labels: dupLabels });
          }
        }
        await ctx.close();
      }
    }
  }

  // regressions
  const homeCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const homePage = await homeCtx.newPage();
  await homePage.goto(originBase(PREVIEW) + "/", { waitUntil: "networkidle" });
  const homeText = await homePage.locator("main").innerText();
  const homeResidual = (homeText.match(/—/g) || []).length;
  const homeSeven =
    /Regulatory/.test(homeText) &&
    /Compliance/.test(homeText) &&
    /Corporate/.test(homeText);
  await homeCtx.close();

  const teamCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const teamPage = await teamCtx.newPage();
  await teamPage.goto(originBase(PREVIEW) + "/team", { waitUntil: "networkidle" });
  const teamText = await teamPage.locator("main").innerText();
  const bandLabels = await teamPage.locator(".team-band-label").evaluateAll((els) =>
    els.map((e) => (e.textContent || "").trim())
  );
  const teamNames = [
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
  const teamExact10 =
    teamNames.every((n) => teamText.includes(n)) &&
    /Founder & CEO/.test(teamText) &&
    /Operations Coordination/.test(teamText) &&
    bandLabels.includes("Leadership") &&
    bandLabels.includes("Core Specialists");
  await teamCtx.close();

  // services spotcheck
  const deepOk = [];
  for (const r of [
    "/solutions",
    "/solutions/regulatory/fintech-licensing",
    "/private-clients",
    "/international-hub",
  ]) {
    deepOk.push({ route: r, ...(await httpMeta(originBase(PREVIEW) + r)) });
  }

  await browser.close();

  // build/tsc
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
    FROZEN_PATHS.some((p) => {
      if (p.endsWith("/")) return f.startsWith(p) || f === p.slice(0, -1);
      return f === p || f.startsWith(p + "/");
    })
  );

  const critical = a11yResults.reduce((n, r) => n + (r.critical || 0), 0);
  const serious = a11yResults.reduce((n, r) => n + (r.serious || 0), 0);
  const moderate = a11yResults.reduce((n, r) => n + (r.moderate || 0), 0);
  const incomplete = a11yResults.reduce((n, r) => n + (r.incomplete || 0), 0);

  const checks = {
    build: build.status === 0 ? "PASS" : "FAIL",
    typecheck: tsc.status === 0 ? "PASS" : "FAIL",
    crawl_200: Object.values(crawl).every((s) => s === 200) ? "PASS" : "FAIL",
    canonicals: meta.every((m) => m.canon && m.canon.includes(m.route === "/" ? "" : m.route.replace(/^\//, "") || true) || m.canon.includes(routeSlug(m.route).replace(/-/g, "/")) || m.canon.endsWith(m.route))
      ? "PASS"
      : "FAIL",
    canonical_meta_robots_clean: meta.every((m) => !/noindex/i.test(m.robots || "")) ? "PASS" : "FAIL",
    preview_noindex_header: "SEE_CLOSEOUT",
    // retired misleading label: noindex_absent
    metadata: meta.every((m) => m.title && m.desc && m.og) ? "PASS" : "FAIL",
    prohibited_copy: prohibitedHits.length === 0 ? "PASS" : "FAIL",
    overflow: Object.values(overflow).every((o) => !o.overflowX) ? "PASS" : "FAIL",
    axe_critical_serious: critical === 0 && serious === 0 && a11yResults.every((r) => !r.execution_error && !r.unavailable)
      ? "PASS"
      : "FAIL",
    frozen_files: frozenHits.length === 0 ? "PASS" : "FAIL",
    home_residual_exactly_one: homeResidual === 1 ? "PASS" : "FAIL",
    home_regression_surface: homeSeven ? "PASS" : "FAIL",
    team_regression: teamExact10 ? "PASS" : "FAIL",
    services_spotcheck: deepOk.every((d) => d.status === 200 || d.status === 308 || d.status === 301)
      ? "PASS"
      : "FAIL",
    screenshot_metadata: manifestItems.every((i) => i.sha256 && i.deployment_id && i.immutable_commit_sha)
      ? "PASS"
      : "FAIL",
    duplicate_commercial_labels: ctaRows.every((r) => {
      const commercial = r.links.filter((l) =>
        /→$/.test(l.text) &&
        /discuss|assess|email|whatsapp|partner|send your profile|continue/i.test(l.text)
      );
      const counts = {};
      for (const l of commercial) counts[l.text] = (counts[l.text] || 0) + 1;
      return Object.values(counts).every((n) => n === 1);
    })
      ? "PASS"
      : "FAIL",
  };

  checks.canonicals = meta.every((m) => {
    try {
      const u = new URL(m.canon);
      return u.pathname.replace(/\/$/, "") === m.route.replace(/\/$/, "");
    } catch {
      return false;
    }
  })
    ? "PASS"
    : "FAIL";

  const failed = Object.entries(checks)
    .filter(([, v]) => v !== "PASS")
    .map(([k]) => k);

  const summary = {
    generated_at: new Date().toISOString(),
    phase: "5A",
    immutable_preview_url: PREVIEW,
    deployment_id: DEPLOYMENT_ID,
    deployed_git_sha: DEPLOYED_SHA,
    application_code_sha: COMMIT,
    axe_core_version: axeCoreVersion,
    routes: ROUTES.map((r) => r.route),
    viewports: ["desktop", "mobile"],
    violation_totals: { critical, serious, moderate, incomplete, minor: a11yResults.reduce((n, r) => n + (r.minor || 0), 0) },
    crawl,
    checks,
    failed_checks: failed,
    overall: failed.length === 0 ? "PASS" : "FAIL",
    bound_residuals: {
      HOME_PUNCTUATION_RESIDUAL_001: { count: homeResidual, status: homeResidual === 1 ? "OPEN_EXACTLY_ONE" : "ANOMALY" },
      GLOBAL_A11Y_REGION_RESIDUAL_001: {
        status: "OPEN_BOUND",
        note: "Axe moderate region on .wa-float recorded; not treated as Phase 5A failure",
      },
      AXE_INCOMPLETE_REVIEW_001: { status: "OPEN_BOUND", incomplete_total: incomplete },
    },
    screenshot_count: manifestItems.length,
    missing_metadata: manifestItems.filter((i) => !i.sha256 || !i.deployment_id).length,
    frozen_diff: frozenDiff,
    frozen_hits: frozenHits,
    prohibited_hits: prohibitedHits,
    real_form_submissions: 0,
    diagnostic_data_flow: "whatsapp_and_mailto_only_no_html_form_post",
  };

  fs.writeFileSync(path.join(ROOT, "SCREENSHOT_MANIFEST.json"), JSON.stringify({
    generated_at: summary.generated_at,
    phase: "5A",
    immutable_preview_url: PREVIEW,
    deployment_id: DEPLOYMENT_ID,
    phase5a_application_commit: COMMIT,
    screenshot_count: manifestItems.length,
    items: manifestItems,
  }, null, 2) + "\n");

  fs.writeFileSync(path.join(AUDIT, "PHASE5A_VALIDATION.json"), JSON.stringify(summary, null, 2) + "\n");
  fs.writeFileSync(path.join(AUDIT, "PHASE5A_A11Y_AUDIT.json"), JSON.stringify({ generated_at: summary.generated_at, axe_core_version: axeCoreVersion, results: a11yResults }, null, 2) + "\n");
  fs.writeFileSync(path.join(AUDIT, "PHASE5A_CTA_AUDIT.json"), JSON.stringify({ generated_at: summary.generated_at, routes: ctaRows }, null, 2) + "\n");
  fs.writeFileSync(path.join(AUDIT, "PHASE5A_METADATA_AUDIT.json"), JSON.stringify({ generated_at: summary.generated_at, routes: meta }, null, 2) + "\n");
  fs.writeFileSync(path.join(AUDIT, "PHASE5A_OVERFLOW_AUDIT.json"), JSON.stringify({ generated_at: summary.generated_at, overflow }, null, 2) + "\n");
  fs.writeFileSync(path.join(ROOT, "PROVENANCE_BIND.json"), JSON.stringify({
    phase: "5A",
    immutable_preview_url: PREVIEW,
    deployment_id: DEPLOYMENT_ID,
    application_code_sha: COMMIT,
    deployed_git_sha: DEPLOYED_SHA,
    baseline_url: BASELINE,
    before_preview_url: BEFORE,
  }, null, 2) + "\n");

  console.log(JSON.stringify({ overall: summary.overall, failed, critical, serious, moderate, incomplete, screenshots: manifestItems.length }, null, 2));
  process.exit(summary.overall === "PASS" ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
