import { chromium, devices } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = process.env.BASE_URL || "http://127.0.0.1:4173";
const OUT = path.join(__dirname, "../docs/design/evidence/wave3");

const routes = [
  { id: "01-homepage", path: "/" },
  { id: "02-solutions-index", path: "/solutions" },
  { id: "03-remediation-hub", path: "/solutions/operational-remediation-readiness" },
  { id: "04-legal-architecture-hub", path: "/solutions/legal-contractual-architecture" },
  { id: "05-how-we-engage", path: "/how-we-engage" },
  { id: "06-partners", path: "/partners" },
  { id: "07-intelligence", path: "/intelligence" },
  { id: "08-diagnostic", path: "/diagnostic" },
];

async function shot(page, name) {
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
}

const browser = await chromium.launch();
fs.mkdirSync(OUT, { recursive: true });

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const r of routes) {
  await desktop.goto(`${BASE}${r.path}`, { waitUntil: "networkidle" });
  await shot(desktop, `${r.id}-desktop`);
}
await desktop.goto(`${BASE}/`, { waitUntil: "networkidle" });
await desktop.locator("nav").first().screenshot({ path: path.join(OUT, "09-nav-desktop.png") });
await desktop.locator("footer").first().screenshot({ path: path.join(OUT, "10-footer-desktop.png") });

const mobile = await browser.newPage({
  ...devices["iPhone 12"],
  viewport: { width: 390, height: 844 },
});
for (const r of routes) {
  await mobile.goto(`${BASE}${r.path}`, { waitUntil: "networkidle" });
  await shot(mobile, `${r.id}-mobile-390`);
}
await mobile.goto(`${BASE}/`, { waitUntil: "networkidle" });
await mobile.locator('button[aria-label="Open menu"]').click();
await mobile.waitForTimeout(400);
await shot(mobile, "09-nav-mobile-open-390");
await mobile.locator('button[aria-label="Close menu"]').click();
await mobile.waitForTimeout(200);
await mobile.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await mobile.waitForTimeout(300);
await mobile.locator("footer").first().screenshot({ path: path.join(OUT, "10-footer-mobile-390.png") });

await browser.close();
console.log("Evidence written to", OUT);
