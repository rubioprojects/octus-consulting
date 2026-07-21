import { chromium, devices } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = process.env.BASE_URL || "http://127.0.0.1:4173";
const OUT = path.join(__dirname, "../docs/design/evidence/wave3-copy-sanitization");

const routes = [
  { id: "01-diagnostic", path: "/diagnostic" },
  { id: "02-how-we-engage", path: "/how-we-engage" },
  { id: "03-intelligence", path: "/intelligence" },
  { id: "04-homepage", path: "/" },
  { id: "05-partners", path: "/partners" },
];

async function shot(page, name) {
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
}

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const r of routes) {
  await desktop.goto(`${BASE}${r.path}`, { waitUntil: "networkidle" });
  await shot(desktop, `${r.id}-desktop`);
}
await desktop.goto(`${BASE}/`, { waitUntil: "networkidle" });
const stats = desktop.locator("section.border-b.border-border.bg-background").first();
await stats.screenshot({ path: path.join(OUT, "04-homepage-stats-strip-desktop.png") });

const mobile = await browser.newPage({
  ...devices["iPhone 12"],
  viewport: { width: 390, height: 844 },
});
for (const r of routes) {
  await mobile.goto(`${BASE}${r.path}`, { waitUntil: "networkidle" });
  await shot(mobile, `${r.id}-mobile-390`);
}
await mobile.goto(`${BASE}/`, { waitUntil: "networkidle" });
await mobile.locator("section.border-b.border-border.bg-background").first().screenshot({
  path: path.join(OUT, "04-homepage-stats-strip-mobile-390.png"),
});

await browser.close();
console.log("Evidence written to", OUT);
