import { chromium, devices } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = process.env.BASE_URL || "http://127.0.0.1:4174";
const OUT = path.join(__dirname, "../docs/design/evidence/wave4-people");

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

async function full(page, name) {
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
}

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await desktop.goto(`${BASE}/team`, { waitUntil: "networkidle" });
await full(desktop, "01-team-full-desktop");
const sections = desktop.locator("main > section");
await sections.nth(0).screenshot({ path: path.join(OUT, "02-team-hero-desktop.png") });
await sections.nth(1).screenshot({ path: path.join(OUT, "03-leadership-desktop.png") });
await sections.nth(2).screenshot({ path: path.join(OUT, "04-core-specialists-desktop.png") });
await sections.nth(3).screenshot({ path: path.join(OUT, "05-operations-delivery-desktop.png") });
await sections.nth(4).screenshot({ path: path.join(OUT, "06-team-cta-desktop.png") });

await desktop.goto(`${BASE}/about`, { waitUntil: "networkidle" });
await full(desktop, "07-about-desktop");
await desktop.goto(`${BASE}/careers`, { waitUntil: "networkidle" });
await full(desktop, "08-careers-desktop");
await desktop.goto(`${BASE}/partners`, { waitUntil: "networkidle" });
await full(desktop, "09-partners-desktop");

const mobile = await browser.newPage({
  ...devices["iPhone 12"],
  viewport: { width: 390, height: 844 },
});
for (const [route, name] of [
  ["/team", "10-team-mobile-390"],
  ["/about", "11-about-mobile-390"],
  ["/careers", "12-careers-mobile-390"],
  ["/partners", "13-partners-mobile-390"],
]) {
  await mobile.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
  await full(mobile, name);
}

await browser.close();
console.log("Evidence →", OUT);
