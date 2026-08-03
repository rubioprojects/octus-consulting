/**
 * Phase 4 — measure baseline vs current services templates (read-only).
 * Writes audit JSON under docs/ops/evidence/remediation/services/audit/
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../../../../..");
const OUT = path.join(ROOT, "docs/ops/evidence/remediation/services/audit");
const BASE = process.env.PHASE4_BASELINE || "https://octus-consulting-9q798dbg2-axle1.vercel.app";
const CUR = process.env.PHASE4_CURRENT || "https://octus-consulting-7yzcy4yif-axle1.vercel.app";

const ROUTES = [
  "/solutions",
  "/solutions/regulatory-structuring",
  "/solutions/compliance-risk",
  "/solutions/legal-structural-architecture",
  "/solutions/corporate-structuring",
  "/private-clients",
  "/solutions/remediation-readiness",
  "/international-hub",
  "/solutions/banking-payments-infrastructure",
  "/solutions/regulatory/igaming-licensing",
  "/solutions/compliance/aml-kyc",
  "/solutions/corporate/company-formation",
];

async function measure(page, origin, route) {
  const url = origin.replace(/\/$/, "") + route;
  const res = await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
  const status = res?.status() ?? 0;
  await page.waitForTimeout(400);
  const audit = await page.evaluate(() => {
    const main = document.querySelector("main") || document.body;
    const h1 = document.querySelector("h1");
    const hero = document.querySelector(".octus-dark-hero, [class*='PageHero'], section");
    const text = (main.innerText || "").slice(0, 12000);
    const em = (text.match(/\u2014/g) || []).length;
    const en = (text.match(/\u2013/g) || []).length;
    const links = [...document.querySelectorAll("main a")].map((a) => ({
      text: (a.textContent || "").replace(/\s+/g, " ").trim(),
      href: a.getAttribute("href") || "",
    }));
    const areas = [...document.querySelectorAll("main a")].filter((a) =>
      /Open area|Regulatory Structuring|International Hub|Private Clients|Banking/i.test(a.textContent || "")
    ).map((a) => (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80));
    const hasBankingInSeven =
      /Seven areas/i.test(text) &&
      [...document.querySelectorAll("h2,h3,a")].some((el) =>
        /Banking\s*&\s*Payments/i.test(el.textContent || "")
      ) &&
      !/Cross-cutting|Supporting/i.test(
        [...document.querySelectorAll("section")].map((s) => s.innerText).join(" ").slice(0, 4000)
      );
    return {
      title: document.title,
      h1: (h1?.innerText || "").replace(/\s+/g, " ").trim().slice(0, 200),
      heroH: hero ? Math.round(hero.getBoundingClientRect().height) : null,
      scrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth,
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      em,
      en,
      linkCount: links.length,
      ctaSample: links.filter((l) => /→|Discuss|Assess|Contact|diagnostic/i.test(l.text)).slice(0, 12),
      textSignals: {
        sixSolutions: /06 solutions|six solutions/i.test(text),
        notLawFirm: /not a law firm/i.test(text),
        guaranteed: /\bguaranteed\b/i.test(text),
        sevenAreas: /Seven areas|seven areas/i.test(text),
        bankingPeerHeuristic: /Banking & Payments/.test(text),
      },
      areasHint: areas.slice(0, 20),
      bodyHash: (() => {
        let h = 0;
        const t = text.slice(0, 8000);
        for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0;
        return h.toString(16);
      })(),
    };
  });
  return { route, url, status, ...audit };
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await ctx.newPage();
  const baseline = [];
  const current = [];
  for (const route of ROUTES) {
    baseline.push(await measure(page, BASE, route));
    current.push(await measure(page, CUR, route));
  }
  await browser.close();
  const report = {
    generated_at: new Date().toISOString(),
    baseline: BASE,
    current: CUR,
    routes: ROUTES.map((route, i) => ({
      route,
      baseline: baseline[i],
      current: current[i],
      heroDelta:
        baseline[i].heroH != null && current[i].heroH != null
          ? current[i].heroH - baseline[i].heroH
          : null,
      h1Equal: baseline[i].h1 === current[i].h1,
      bodyHashEqual: baseline[i].bodyHash === current[i].bodyHash,
    })),
  };
  const outPath = path.join(OUT, "PHASE4_BASELINE_CURRENT_COMPARE.json");
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ wrote: outPath, routes: ROUTES.length }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
