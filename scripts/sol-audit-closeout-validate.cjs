/**
 * Sol audit closeout — explicit PASS/FAIL validation register.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');
const http = require('http');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const AUDIT = path.join(
  ROOT,
  'docs/ops/evidence/seven-areas-preview-2026-08-03/screenshots/full-site-9q798dbg2/audit',
);
const DATE = new Date().toISOString();
const PORT = 4178;
const ORIGIN = `http://127.0.0.1:${PORT}`;

function run(cmd, args, opts = {}) {
  const started = new Date().toISOString();
  const r = spawnSync(cmd, args, {
    cwd: ROOT,
    encoding: 'utf8',
    maxBuffer: 20 * 1024 * 1024,
    ...opts,
  });
  return {
    command: [cmd, ...args].join(' '),
    date: started,
    exit_code: r.status,
    status: r.status === 0 ? 'PASS' : 'FAIL',
    stdout_tail: (r.stdout || '').slice(-2000),
    stderr_tail: (r.stderr || '').slice(-2000),
  };
}

function sha256File(p) {
  return crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
}

function startServer() {
  const server = http.createServer((req, res) => {
    try {
      let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      if (urlPath.endsWith('/')) urlPath += 'index.html';
      let filePath = path.join(OUT, urlPath);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        const htmlTry = path.join(OUT, urlPath.replace(/^\//, '') + '.html');
        if (fs.existsSync(htmlTry)) filePath = htmlTry;
        else filePath = path.join(OUT, '404.html');
      }
      const ext = path.extname(filePath).toLowerCase();
      const types = {
        '.html': 'text/html; charset=utf-8',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.txt': 'text/plain',
        '.json': 'application/json',
      };
      const status = filePath.endsWith('404.html') && !String(req.url || '').includes('404.html') ? 404 : 200;
      res.writeHead(status, { 'Content-Type': types[ext] || 'application/octet-stream' });
      res.end(fs.readFileSync(filePath));
    } catch (e) {
      res.writeHead(500);
      res.end(String(e));
    }
  });
  return new Promise((resolve) => server.listen(PORT, '127.0.0.1', () => resolve(server)));
}

function listHtml() {
  const routes = [];
  function walk(dir, base = '') {
    for (const name of fs.readdirSync(dir)) {
      const p = path.join(dir, name);
      if (fs.statSync(p).isDirectory()) walk(p, path.join(base, name));
      else if (name.endsWith('.html')) {
        let route = '/' + path.join(base, name === 'index.html' ? '' : name.replace(/\.html$/, '')).replace(/\\/g, '/');
        route = route.replace(/\/$/, '') || '/';
        routes.push(route);
      }
    }
  }
  walk(OUT);
  return [...new Set(routes)].sort();
}

async function main() {
  fs.mkdirSync(AUDIT, { recursive: true });
  const checks = [];

  // build already expected to be run; re-run for explicit record
  checks.push({ id: 'build', ...run('npm', ['run', 'build'], { env: process.env }) });
  checks.push({ id: 'typecheck', ...run('npx', ['tsc', '--noEmit'], { env: process.env }) });

  const routes = listHtml();
  const crawl = {
    id: 'route_crawl',
    command: 'node scripts/sol-audit-closeout-validate.cjs (listHtml on out/)',
    date: DATE,
    status: routes.length >= 80 ? 'PASS' : 'FAIL',
    html_routes: routes.length,
    sample: routes.slice(0, 20),
  };
  checks.push(crawl);

  // metadata / canonical / robots noindex from built HTML
  const homeHtml = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
  const robots = fs.existsSync(path.join(OUT, 'robots.txt'))
    ? fs.readFileSync(path.join(OUT, 'robots.txt'), 'utf8')
    : '';
  const meta = {
    id: 'metadata',
    command: 'grep meta/title in out/index.html',
    date: DATE,
    status: /<title>/i.test(homeHtml) && /meta\s+name="description"/i.test(homeHtml) ? 'PASS' : 'FAIL',
    has_title: /<title>/i.test(homeHtml),
    has_description: /meta\s+name="description"/i.test(homeHtml),
  };
  checks.push(meta);

  const canonical = {
    id: 'canonical',
    command: 'grep rel=canonical in out/index.html',
    date: DATE,
    status: /rel=["']canonical["']/i.test(homeHtml) ? 'PASS' : 'FAIL',
    found: /rel=["']canonical["'][^>]*href=["']([^"']+)["']/i.exec(homeHtml)?.[1] || null,
  };
  checks.push(canonical);

  // redirects from vercel.json
  let redirectStatus = 'FAIL';
  let redirectNotes = '';
  let redirectCount = 0;
  const vercelPath = path.join(ROOT, 'vercel.json');
  if (fs.existsSync(vercelPath)) {
    const v = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
    const redirects = v.redirects || [];
    redirectCount = redirects.length;
    const badDest = redirects.filter((r) => {
      const dest = r.destination;
      if (!dest || !dest.startsWith('/')) return false;
      const candidates = [
        path.join(OUT, dest.replace(/^\//, '') + '.html'),
        path.join(OUT, dest.replace(/^\//, ''), 'index.html'),
      ];
      return !candidates.some((c) => fs.existsSync(c));
    });
    redirectStatus = redirectCount > 0 && badDest.length === 0 ? 'PASS' : 'FAIL';
    redirectNotes = `vercel.json redirects=${redirectCount}; missing_destinations=${badDest.length}`;
  } else {
    redirectNotes = 'vercel.json missing';
  }
  checks.push({
    id: 'redirects',
    command: 'validate vercel.json redirect destinations exist in out/',
    date: DATE,
    status: redirectStatus,
    redirect_count: redirectCount,
    notes: redirectNotes,
  });

  // internal page links from home (exclude assets, fonts, media, API)
  const hrefs = [...homeHtml.matchAll(/href=["'](\/[^"'#]*)/g)].map((m) => m[1].split('?')[0]);
  const pageHrefs = [...new Set(hrefs)].filter((h) => {
    if (h.startsWith('//')) return false;
    if (h.startsWith('/_next/')) return false;
    if (h.startsWith('/brand/')) return false;
    if (h.startsWith('/team/') && /\.(jpg|jpeg|png|webp|svg)$/i.test(h)) return false;
    if (/\.(css|js|png|jpg|jpeg|webp|svg|ico|woff2?|otf|ttf|map)$/i.test(h)) return false;
    return true;
  });
  const missing = pageHrefs.filter((h) => {
    if (h === '/') return false;
    const candidates = [
      path.join(OUT, h.replace(/^\//, '') + '.html'),
      path.join(OUT, h.replace(/^\//, ''), 'index.html'),
    ];
    return !candidates.some((c) => fs.existsSync(c));
  });
  checks.push({
    id: 'internal_links',
    command: 'parse page href=/ from out/index.html against out/*.html (exclude assets)',
    date: DATE,
    status: missing.length === 0 ? 'PASS' : 'FAIL',
    home_internal_page_hrefs: pageHrefs.length,
    missing,
  });

  // prohibited copy
  const prohibited = ['EXIN as peer area', 'six-area architecture', 'six areas of practice'];
  const hit = [];
  for (const file of routes) {
    const fp =
      file === '/'
        ? path.join(OUT, 'index.html')
        : fs.existsSync(path.join(OUT, file.slice(1) + '.html'))
          ? path.join(OUT, file.slice(1) + '.html')
          : path.join(OUT, file.slice(1), 'index.html');
    if (!fs.existsSync(fp)) continue;
    const text = fs.readFileSync(fp, 'utf8');
    for (const p of prohibited) {
      if (text.toLowerCase().includes(p.toLowerCase())) hit.push({ file, phrase: p });
    }
  }
  // false-positive note: word "indexing" contains "exin" — scan whole-word EXIN only
  const exinHits = [];
  for (const file of routes) {
    const fp =
      file === '/'
        ? path.join(OUT, 'index.html')
        : fs.existsSync(path.join(OUT, file.slice(1) + '.html'))
          ? path.join(OUT, file.slice(1) + '.html')
          : path.join(OUT, file.slice(1), 'index.html');
    if (!fs.existsSync(fp)) continue;
    const text = fs.readFileSync(fp, 'utf8');
    if (/\bEXIN\b/.test(text)) exinHits.push(file);
  }
  checks.push({
    id: 'prohibited_copy',
    command: 'scan out/**/*.html for prohibited phrases + word-boundary EXIN',
    date: DATE,
    status: hit.length === 0 && exinHits.length === 0 ? 'PASS' : 'FAIL',
    phrase_hits: hit,
    exin_word_hits: exinHits,
  });

  // favicon assets
  const favicons = [
    'public/favicon.ico',
    'public/favicon-32.png',
    'public/brand/favicons/octus-favicon-blue.svg',
  ];
  const favMissing = favicons.filter((f) => !fs.existsSync(path.join(ROOT, f)));
  checks.push({
    id: 'favicon_assets',
    command: 'fs.existsSync public favicon suite',
    date: DATE,
    status: favMissing.length === 0 ? 'PASS' : 'FAIL',
    missing: favMissing,
    hashes: favicons
      .filter((f) => fs.existsSync(path.join(ROOT, f)))
      .map((f) => ({ file: f, sha256: sha256File(path.join(ROOT, f)) })),
  });

  // portraits
  const portraits = [];
  function findPortraits(dir) {
    if (!fs.existsSync(dir)) return;
    for (const name of fs.readdirSync(dir)) {
      const p = path.join(dir, name);
      if (fs.statSync(p).isDirectory()) findPortraits(p);
      else if (/rubio|maria/i.test(name) && /\.(png|jpg|jpeg|webp)$/i.test(name)) {
        portraits.push({ file: path.relative(ROOT, p), sha256: sha256File(p), bytes: fs.statSync(p).size });
      }
    }
  }
  findPortraits(path.join(ROOT, 'public'));
  checks.push({
    id: 'portrait_assets',
    command: 'hash public/**/{rubio,maria}* images',
    date: DATE,
    status: portraits.length >= 2 ? 'PASS' : 'FAIL',
    portraits,
  });

  // preview noindex — Vercel preview deployments set x-robots-tag: noindex
  const previewUrl =
    process.env.PREVIEW_URL ||
    'https://octus-consulting-4lpoce2i8-axle1.vercel.app/';
  const curl = spawnSync('curl', ['-sI', previewUrl], { encoding: 'utf8' });
  const headers = curl.stdout || '';
  const hasXRobotsNoindex = /x-robots-tag:\s*noindex/i.test(headers);
  checks.push({
    id: 'preview_noindex',
    command: `curl -sI ${previewUrl} | check x-robots-tag: noindex`,
    date: DATE,
    status: curl.status === 0 && hasXRobotsNoindex ? 'PASS' : 'FAIL',
    preview_url: previewUrl,
    curl_exit: curl.status,
    x_robots_tag: (headers.match(/x-robots-tag:\s*(.+)/i) || [])[1] || null,
    note: 'Static robots.txt Allow is production SoT; preview isolation is via Vercel x-robots-tag',
  });

  // Playwright: a11y-lite, overflow, whatsapp overlap, cookies
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    for (const vp of [
      { name: 'desktop', width: 1440, height: 1000 },
      { name: 'mobile', width: 390, height: 844 },
    ]) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });
      await context.addInitScript(() => localStorage.setItem('octus-cookies-accepted', 'true'));
      const page = await context.newPage();
      await page.goto(ORIGIN + '/', { waitUntil: 'domcontentloaded', timeout: 28000 });
      await page.waitForTimeout(500);
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return {
          scrollWidth: doc.scrollWidth,
          clientWidth: doc.clientWidth,
          overflow: doc.scrollWidth > doc.clientWidth + 1,
        };
      });
      checks.push({
        id: `horizontal_overflow_${vp.name}`,
        command: `playwright measure documentElement.scrollWidth vs clientWidth @${vp.width}x${vp.height} /`,
        date: DATE,
        status: overflow.overflow ? 'FAIL' : 'PASS',
        ...overflow,
      });

      const a11y = await page.evaluate(() => {
        const imgs = Array.from(document.images);
        const missingAlt = imgs.filter((img) => !img.hasAttribute('alt')).length;
        const main = document.querySelector('main, [role="main"], h1');
        const lang = document.documentElement.lang;
        return { missingAlt, has_main_or_h1: Boolean(main), lang };
      });
      checks.push({
        id: `accessibility_${vp.name}`,
        command: `playwright a11y basics (alt/lang/h1) @${vp.name}`,
        date: DATE,
        status: a11y.missingAlt === 0 && a11y.has_main_or_h1 && a11y.lang ? 'PASS' : 'FAIL',
        ...a11y,
      });

      const wa = await page.evaluate(() => {
        const float = document.querySelector('.wa-float');
        if (!float) return { present: false };
        const r = float.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const top = document.elementFromPoint(cx, cy);
        return {
          present: true,
          rect: { x: r.x, y: r.y, w: r.width, h: r.height },
          topIsFloat: !!(top && (top === float || float.contains(top))),
        };
      });
      checks.push({
        id: `whatsapp_overlap_${vp.name}`,
        command: `playwright elementFromPoint center of .wa-float @${vp.name}`,
        date: DATE,
        status: wa.present && wa.topIsFloat ? 'PASS' : 'FAIL',
        ...wa,
      });
      await context.close();
    }

    // cookie behavior
    {
      const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
      const page = await context.newPage();
      await page.goto(ORIGIN + '/', { waitUntil: 'domcontentloaded', timeout: 28000 });
      await page.waitForSelector('.cookie-banner', { timeout: 28000 });
      const before = await page.locator('.cookie-banner').count();
      await page.locator('.cookie-banner button').click();
      await page.waitForTimeout(300);
      const after = await page.locator('.cookie-banner').count();
      const stored = await page.evaluate(() => localStorage.getItem('octus-cookies-accepted'));
      checks.push({
        id: 'cookie_behavior',
        command: 'playwright show banner → Continue → hidden + localStorage',
        date: DATE,
        status: before === 1 && after === 0 && stored === 'true' ? 'PASS' : 'FAIL',
        before,
        after,
        stored,
        reject_preferences_ui: 'NOT_IMPLEMENTED',
      });
      await context.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  const summary = {
    generated_at: DATE,
    head: spawnSync('git', ['rev-parse', 'HEAD'], { cwd: ROOT, encoding: 'utf8' }).stdout.trim(),
    checks,
    pass: checks.filter((c) => c.status === 'PASS').length,
    fail: checks.filter((c) => c.status === 'FAIL').length,
    overall: checks.every((c) => c.status === 'PASS') ? 'PASS' : 'FAIL',
  };
  fs.writeFileSync(path.join(AUDIT, 'VALIDATION_REGISTER.json'), JSON.stringify(summary, null, 2));
  const md = [
    '# Sol audit closeout — validation register',
    '',
    `Date: ${DATE}`,
    `HEAD: \`${summary.head}\``,
    `Overall: **${summary.overall}** (${summary.pass} PASS / ${summary.fail} FAIL)`,
    '',
    '| Check | Status | Command |',
    '|---|---|---|',
    ...checks.map((c) => `| ${c.id} | ${c.status} | \`${(c.command || '').replace(/\|/g, '\\|').slice(0, 120)}\` |`),
    '',
  ].join('\n');
  fs.writeFileSync(
    path.join(ROOT, 'docs/ops/evidence/seven-areas-preview-2026-08-03/SOL_AUDIT_CLOSEOUT_VALIDATION_REGISTER.md'),
    md,
  );
  console.log(JSON.stringify({ overall: summary.overall, pass: summary.pass, fail: summary.fail }, null, 2));
  process.exit(summary.overall === 'PASS' ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
