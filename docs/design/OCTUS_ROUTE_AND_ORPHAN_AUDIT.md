# Octus — Route & Orphan Audit

**Mission:** `OCTUS_FINAL_BRAND_EXPERIENCE_AND_INFORMATION_AUDIT`  
**Date:** 2026-07-21  
**Subject:** `rubioprojects/octus-consulting`  
**Method:** Static route inventory from `app/**/page.tsx` + inbound `href` graph across `.tsx`/`.ts` (nav, footer, homepage, commercial lib, hubs).  
**Redirect config:** none (`next.config.js` is `output: 'export'` only — no redirects/rewrites).

---

## Summary

| Metric | Count |
|--------|------:|
| Static app routes (excl. `/insights/[slug]`) | 54 |
| True orphans (zero inbound internal links) | **1** — `/what-we-do` |
| Thin inbound (≤2 files, not in primary nav/footer) | 6 |
| Live pages **missing from `sitemap.ts`** | **8** |
| Broken internal href targets | **0** |

**Verdict:** Commercial IA (Solutions / Markets / How we engage / Intelligence) is well linked. Risk is concentrated in **legacy face pages** that still exist beside the six-hub model — some still linked from homepage “How we work,” others only via deep hubs or `/what-we-do` itself.

---

## 1. Orphan routes (no incoming links)

| Route | Status | Recommendation |
|-------|--------|----------------|
| `/what-we-do` | **Orphan** — not in nav, footer, homepage, or sitemap | Treat as **legacy catalogue face**. Keep live until redirect plan approved; do **not** promote. Prefer eventual **301 → `/solutions`**. Do not delete without SEO inventory of external backlinks. |

`/what-we-do` still outbound-links to legacy faces (`/regulatory`, `/compliance`, `/legal-architecture`, `/corporate`, `/private-clients`, `/audit`, `/international-hub`) — so it is an **orphan hub that keeps legacy pages alive** if anyone lands via old bookmarks/search.

---

## 2. Thin / fragile inbound (navigation integrity)

| Route | Inbound | Notes | Recommendation |
|-------|--------:|-------|----------------|
| `/brazil` | Thin | Linked from jurisdictions index primarily | Keep; ensure jurisdictions + Markets remain primary discovery. Optional: add to Markets/Brazil narrative later. |
| `/international-hub` | Thin | Not in nav/footer/sitemap | **Legacy / vague hub.** Candidate for redirect → `/how-we-engage` or `/solutions` after human approval. |
| `/legal-architecture` | Thin | Linked from commercial deep-related + `/what-we-do` | Prefer Solution hub `/solutions/legal-contractual-architecture`. Redirect later. |
| `/regulatory` | Thin | Homepage “How we work” + `/what-we-do` | Prefer `/solutions/regulatory-strategy-licensing`. Compress homepage link to hub. |
| `/solutions/compliance/gli-readiness` | Thin | Hub deep-link | Keep as depth page; ensure hub lists it (already in commercial map). |
| `/solutions/compliance/internal-controls` | Thin | Hub deep-link | Same as above. |
| `/compliance-channel` | Footer legal | Correct | Keep. |
| `/terms` | Footer legal | Correct | Keep. |

---

## 3. Duplicate / legacy commercial faces

These coexist with the **six Solution hubs**. They are not orphans but create **parallel IA** and SEO cannibalization risk.

| Legacy route | Preferred commercial surface | Redirect candidate (later, approval required) |
|--------------|------------------------------|-----------------------------------------------|
| `/what-we-do` | `/solutions` | 301 → `/solutions` |
| `/regulatory` | `/solutions/regulatory-strategy-licensing` | 301 → hub |
| `/corporate` | `/solutions/corporate-cross-border` | 301 → hub |
| `/compliance` | `/solutions/compliance-risk-systems` | 301 → hub |
| `/audit` | `/solutions/operational-remediation-readiness` (+ gli-readiness depth) | 301 → remediation hub |
| `/legal-architecture` | `/solutions/legal-contractual-architecture` | 301 → hub |
| `/international-hub` | `/how-we-engage` or `/solutions` | 301 after copy decision |
| `/private-clients` | Ownership/UBO depth under Corporate hub | Keep or nest; do not orphan |
| `/diagnostic` | Remediation assess CTA | Keep (footer + remediation path) |
| `/brazil` | Market/jurisdiction education | Keep (not a Solutions duplicate) |

**Deep solution routes** under `/solutions/regulatory/*`, `/solutions/compliance/*`, `/solutions/corporate/*` are **intentional depth**, not orphans — linked from hubs via `lib/commercial.ts`. Preserve.

---

## 4. Sitemap gaps (SEO risk)

Present as live pages but **absent from `app/sitemap.ts`**:

- `/what-we-do`
- `/regulatory`
- `/corporate`
- `/compliance`
- `/audit`
- `/legal-architecture`
- `/international-hub`
- `/private-clients`

**Risk:** If still indexed from legacy or external links, crawlers get inconsistent signals vs sitemap.  

**Policy recommendation:**

1. **Do not add** pure legacy faces to sitemap if the intent is to deprecate them.  
2. **Do add** `/private-clients` if it remains a deliberate commercial surface.  
3. After redirects ship, sitemap should list **only** canonical commercial routes + jurisdictions + markets + insights.

Also missing from sitemap but less critical: none of the legal pages gap (privacy/terms/cookies/compliance-channel are present).

---

## 5. Primary navigation integrity

| Surface | Links | Integrity |
|---------|-------|-----------|
| Header primary | Solutions, Markets, How we engage, Intelligence, About, Contact | Clean — maps to Wave 3 commercial face |
| Header supporting (mobile) | Team, Careers, Jurisdictions | Correct supporting IA |
| Footer Solutions | Six hubs | Canonical |
| Footer Markets | Four markets | Canonical |
| Footer Engage | How we engage, Intelligence, Insights, Partners, Remediation assess (`/diagnostic`) | OK |
| Footer Company | About, Team, Careers, Jurisdictions, Contact | OK |
| Homepage “How we work” | Mix of **legacy** (`/regulatory`, `/corporate`, `/compliance`, `/audit`) + deep solutions | **Integrity debt** — trains users into legacy faces |

**Recommended homepage fix (no route deletion):** Retarget “How we work” links to the **six hubs** (and `/solutions/...` depth only where needed). Defer actual redirects.

---

## 6. Pages requiring redirects later (approval gate)

Do **not** implement redirects in this mission (export site + no route changes without approval). Queue:

| Priority | From | To | Why |
|----------|------|----|-----|
| P0 | `/what-we-do` | `/solutions` | Orphan + catalogue IA |
| P1 | `/regulatory` | `/solutions/regulatory-strategy-licensing` | Parallel face |
| P1 | `/compliance` | `/solutions/compliance-risk-systems` | Parallel face |
| P1 | `/corporate` | `/solutions/corporate-cross-border` | Parallel face |
| P1 | `/legal-architecture` | `/solutions/legal-contractual-architecture` | Parallel face |
| P1 | `/audit` | `/solutions/operational-remediation-readiness` | Parallel face |
| P2 | `/international-hub` | `/how-we-engage` | Vague legacy hub |
| P3 | Legacy Framer paths (`/news`, `/quem-somos`, `/carreiras`, `/en/*`) | New equivalents | DNS cutover program — outside this repo until host redirects exist |

**Note:** Static export cannot express 301s in-app; cutover requires **host/CDN redirects** (Vercel/`_redirects`/edge) at production domain switch.

---

## 7. SEO risk register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Legacy faces compete with Solution hubs for same intent | High | Redirects + homepage link retarget |
| Orphan `/what-we-do` still crawlable | Medium | noindex short-term **or** 301; avoid promoting |
| Sitemap omits live legacy pages | Medium | Align sitemap with deprecation policy |
| Duplicate title/intent across hub + depth pages | Low–Med | Keep unique titles; hubs as parents |
| No redirect layer in `next.config` | High at cutover | Plan host redirects before DNS |

---

## 8. Keep / move / compress (information architecture — routes)

| Keep as-is | Compress discovery (don’t delete yet) | Move intent to hubs |
|------------|----------------------------------------|---------------------|
| Six Solution hubs | Homepage links into `/regulatory` etc. | Legacy faces |
| Markets + jurisdictions | — | `/international-hub` narrative |
| `/team`, `/about`, `/careers` | — | — |
| `/intelligence` + `/insights` | Thin Intelligence teaser on home is OK | — |
| Depth solution pages | — | — |

---

## Confirmations

- Commercial architecture / Solutions model / People / routes: **not deleted** in this audit.  
- No redirects applied.  
- No DNS / production cutover.

**Related:** `docs/design/OCTUS_FINAL_EXPERIENCE_AUDIT.md` (brand presence, capability rail, homepage rhythm).
