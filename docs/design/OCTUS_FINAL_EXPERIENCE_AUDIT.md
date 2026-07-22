# Octus — Final Experience Audit

**Mission:** `OCTUS_FINAL_BRAND_EXPERIENCE_AND_INFORMATION_AUDIT`  
**Date:** 2026-07-21  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/10  
**Terminal companion:** `OCTUS_ROUTE_AND_ORPHAN_AUDIT.md`

Scope: brand presence, capability rail, homepage rhythm, internal navigation integrity.  
Preserved: commercial architecture, Solutions model, People, routes (no unapproved deletes/redirects).

---

## 1. Brand presence

### Findings

| Factor | Before audit | Assessment |
|--------|--------------|------------|
| Header lockup | `h-8` / `md:h-9` | Slightly under-weighted vs mark-as-primary-identity goal |
| Dark/light variants | Blue+white on dark; blue+dark on light | Correct — keep |
| Footer lockup | `h-8` | Match header prominence |
| CTA hierarchy | Header: Discuss primary; Hero: Discuss primary / Assess secondary | Correct commercial hierarchy |
| Nav density | 6 primary links + CTA | Competitive with logo for attention |

### Applied refinement (this mission)

- Header logo → **`h-9` / `md:h-10`**; header height → **4.5rem / 5rem**
- Footer lockup → **`h-9` / `md:h-10`**
- Capability rail restored as **moving signature** (see §2)

### Remaining recommendations (no IA change)

- Optional: reduce header link letter-spacing slightly so mark wins optical weight
- Keep single primary CTA in header (Discuss) — do not add Assess to chrome
- Do not enlarge mobile hamburger competition; mark stays left-primary

---

## 2. Capability rail

### Current vs legacy

| | Legacy (production Framer) | New (pre-fix) | Target |
|--|---------------------------|-----------------|--------|
| Role | Moving capability / presence bar | Static centered authority strip | **Signature brand element** |
| Motion | Continuous horizontal movement | None (manual scroll overflow only) | Slow institutional marquee |
| Content | Capability language | Six Solutions labels + icons | Keep six Solutions (aligned to commercial model) |
| Placement | Under hero band | Under hero | Keep under hero — not global sticky nav |
| Interaction | Non-nav | `pointer-events: none` | Keep non-clickable (not secondary nav) |

### Recommendation (locked intent)

| Dimension | Spec |
|-----------|------|
| **Motion** | Infinite CSS marquee; edge fades; no bounce |
| **Speed** | ~48s full loop (~institutional, not ticker-news) |
| **Content** | Exactly the six Solutions short labels |
| **Placement** | Directly under homepage hero only |
| **A11y** | `prefers-reduced-motion` → static centered row |
| **Not** | Links, hover menus, SaaS glow, fast stock tickers |

### Applied in this mission

Implemented `CapabilityRail` with the above specs. Content remains Solutions-aligned — **not** restored legacy catalogue labels.

---

## 3. Homepage rhythm

### Section inventory (current)

| # | Section | Role | Density | Recommendation |
|---|---------|------|---------|----------------|
| 1 | Hero | Thesis + dual CTA | High value | **Remain** |
| 2 | Capability rail | Brand signature | Light | **Remain** (now moving) |
| 3 | Stats (15+ / 2019 / 6) | Silent proof | Light | **Remain** (compress copy under stats if needed) |
| 4 | What we fix (4 cards) | Problem framing | Medium | **Remain** — strategic |
| 5 | How we work (3 columns) | Approach + **legacy links** | Medium | **Remain structure**; retarget links to hubs (see route audit) |
| 6 | Industries (4 markets) | Markets map | Medium | **Remain** — short; hubs exist |
| 7 | Outcomes (dark list) | Benefit strip | Light | **Remain** or merge into §4 later |
| 8 | Pressure patterns (3) | Situational proof | Medium | **Remain** — differentiates from catalogue |
| 9 | Mid CTA (stuck/blocked) | Conversion | Light | **Remain** |
| 10 | Six solutions accordion | Commercial map | Heavy | **Remain** — core |
| 11 | Crisis / Remediation | Crisis door | Medium | **Remain** — strategic |
| 12 | How we operate + chips | Proof + geography | Medium | **Compress** chips row or move jurisdiction chips emphasis to `/jurisdictions` |
| 13 | Engagement models (4) | Commercial | Medium | **Compress** to teaser + link (full page exists) |
| 14 | Intelligence teaser | Authority | Light | **Remain** short teaser |
| 15 | Qualifier + final CTA | Positioning | Medium–Heavy | **Compress** repeated paragraphs |

**Section count:** ~15 blocks → scroll fatigue risk is **real** after §10.

### Evidence-based keep / move / compress

| Remain on homepage | Move / deepen on inner pages | Compress in place |
|--------------------|------------------------------|-------------------|
| Hero, rail, stats, problem grid | Full engagement model detail → already on `/how-we-engage` | Engagement 4-up → 1-row teaser + CTA |
| Solutions accordion + crisis door | Jurisdiction chip encyclopaedia → `/jurisdictions` | Qualifier section: cut repeated “not for everyone” lines to 2 beats |
| Markets four-up | — | Outcomes list may fold into problem section in a later polish PR |
| Pressure patterns | — | — |

**Do not remove without evidence:** crisis door, six solutions accordion, problem grid, pressure patterns — these carry commercial differentiation.

**Not executed this mission:** homepage section deletion (requires human approval on information loss). Link retarget for “How we work” recommended next.

---

## 4. Internal navigation integrity

See full detail: **`OCTUS_ROUTE_AND_ORPHAN_AUDIT.md`**.

Highlights:

- **1 orphan:** `/what-we-do`
- **Legacy faces** still linked from homepage “How we work”
- **8 live routes missing from sitemap** (mostly legacy)
- **0 broken hrefs**
- Redirects require **host/CDN** at cutover (`output: 'export'`)

---

## 5. Pre-merge checklist

- [ ] Human: logo scale feels primary on dark + light headers
- [ ] Human: capability rail motion feels Octus (not SaaS ticker)
- [ ] Human: homepage scroll still acceptable — approve compress plan before next PR
- [ ] Approve redirect queue before DNS
- [ ] Decide sitemap policy for legacy faces
- [ ] Optional follow-up: retarget homepage “How we work” links to Solution hubs

---

## Confirmations

| Constraint | Status |
|------------|--------|
| Commercial architecture unchanged | Yes |
| Solutions model unchanged | Yes |
| People unchanged | Yes |
| Routes deleted | No |
| Redirects applied | No |

**Terminal:** `OCTUS_FINAL_EXPERIENCE_AUDIT_READY`
