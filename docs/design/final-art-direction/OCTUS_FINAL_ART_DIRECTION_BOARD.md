# Octus — Final Executive Art Direction Board

**Document ID:** `OCTUS_FINAL_ART_DIRECTION_BOARD`  
**Mission:** `OCTUS_FINAL_EXECUTIVE_ART_DIRECTION_BOARD`  
**Terminal:** `OCTUS_FINAL_EXECUTIVE_ART_DIRECTION_READY`  
**Date:** 2026-07-21  
**Subject:** `rubioprojects/octus-consulting` · PR #10  
**Mode:** **Art direction only** — no code, no PR mutation, no merge, no routes, no copy, no People, no DNS, no redirects

**Companion docs:**
- [OCTUS_FINAL_VISUAL_SYSTEM.md](./OCTUS_FINAL_VISUAL_SYSTEM.md)
- [OCTUS_EXECUTIVE_POLISH_ROADMAP.md](./OCTUS_EXECUTIVE_POLISH_ROADMAP.md)

**Approved foundations (do not reopen):**
Commercial IA · Solutions model · People architecture · Official Canva brand assets · Brand Signature · Homepage consolidation

---

## Executive thesis

The site is **strategically correct**. The remaining gap is **premium brand perception** — the feeling of a global execution partner for highly regulated operations.

Legacy Octus won on **movement, atmosphere, depth, and visual confidence**.  
New Octus wins on **commercial clarity, Solutions structure, and positioning**.

**Directive:** Transfer visual *principles*, not the old IA, old copy, or old catalogue.

**Do not redesign. Do not restore the old website.**

---

## Part 1 — Header / Logo System

### Current state (PR #10)

| Surface | Lockup | Scale (approx.) |
|---------|--------|-----------------|
| Dark hero header | Blue symbol + white wordmark | `h-9` / `md:h-10` (~36–40px) |
| Light scroll header | Blue symbol + dark wordmark | same |
| Mobile header | Blue+white on dark / blue+dark on light | same family |
| Footer | Blue symbol + white wordmark | `h-9` / `md:h-10` |

CTA hierarchy (correct — keep):
- Header: **Discuss** only (primary)
- Hero: **Discuss** primary · **Assess** secondary
- Do not add Assess to chrome

### Specific issue

**“Octus Consulting” must be immediately readable.**

| Issue | Detail |
|-------|--------|
| Current | Lockup is correct on contrast (white on navy / dark on light), but **optical weight** still competes with 6 nav links + solid CTA |
| Wordmark | “OCTUS” reads; “CONSULTING” is small + heavily tracked — can disappear at distance / on mobile |
| Risk | Brand reads as “utility nav with a logo” rather than **institution first** |

### Final recommendation

| Spec | Value |
|------|--------|
| **Recommended lockup** | Keep official horizontal: **blue symbol + white wordmark** (dark) / **blue symbol + dark wordmark** (light). No recoloring. No full-white lockup unless emergency contrast. |
| **Recommended desktop height** | **40–44px** (`h-10` → `h-11` optical) — mark as primary identity |
| **Recommended mobile height** | **36–40px** — never below 36px |
| **Clear space** | ≥ 0.5× symbol diameter left/right of lockup; nav starts after that gap |
| **Symbol alone** | Favicon, separators, hero watermark, rail marks only — never replace wordmark in header |
| **Wordmark contrast** | Dark surfaces: white wordmark only. Light: charcoal/dark wordmark only. **Never dark-on-dark.** |
| **Nav weight** | Slightly quieter than lockup (opacity ~0.65–0.72 on dark; muted on light) so mark wins |
| **CTA** | Keep blue primary; do not enlarge CTA past lockup optical mass |

### Visual examples (existing evidence)

- Dark header: `docs/design/evidence/pr10-final-consolidation/header-logo-desktop.png`
- Mobile: `…/header-logo-mobile.png`
- Footer reference: `docs/design/evidence/brand-experience-refinement/footer-desktop.png`

---

## Part 2 — Typography System

### Audit findings

| Layer | Current tendency | Problem |
|-------|------------------|---------|
| Hero H1 | Large white Unigeo | Strong — keep |
| Section titles | Primary blue (`#0052C4`) | Brand-aligned but can feel “link-colored” at scale |
| Body | Muted gray (~36% L) | Often **too gray** — authority loss |
| Secondary / captions | Lighter still | Hierarchy collapses into “everything soft” |
| Eyebrow / section-label | Red + tracking | Correct emphasis — keep restrained |
| Footer | White/65 | Acceptable; legal can go softer |

### Final typography rules

| Role | Size (desktop) | Weight | Color | Notes |
|------|----------------|--------|-------|-------|
| Hero title | 3.5–3.75rem | 700 | `#FFFFFF` | Second line may be `#FFFFFF` / 85% |
| Page hero title | 2.75–3.5rem | 700 | `#FFFFFF` | Same dark-hero system |
| Section title | 2–2.25rem | 600 | Navy `#0B1220` **or** deep blue `#0052C4` | Prefer **navy for long titles**; blue for short brand beats |
| Card title | 1.125–1.25rem | 600 | Navy / primary | Avoid muted |
| Body large | 1.125rem | 400 | `#3A4149`–`#2B2B2B` | Raise contrast vs current muted |
| Body | 1rem | 400 | `#3A4149` | Min contrast AA on cream/light |
| Secondary | 0.875rem | 400 | `#5A6169` | Use sparingly |
| Caption / label | 0.6875–0.75rem | 500 | Red `#A80606` or navy 55% | Uppercase + tracking for labels only |
| Footer body | 0.875rem | 400 | White 70% | Columns headers white 75% |

**Spacing:** Title → body gap 16–24px; section vertical rhythm 80 / 96 / 112px desktop; 56 / 72 / 88 mobile.

**Hard rule:** Do not stack three gray levels in one paragraph block. One body tone + one secondary max.

---

## Part 3 — Octus Visual Language

See full grammar in [OCTUS_FINAL_VISUAL_SYSTEM.md](./OCTUS_FINAL_VISUAL_SYSTEM.md).

**Intentional placement only:**

| Surface | Allowed motifs | Avoid |
|---------|----------------|-------|
| **Hero** | Navy depth, blue radial atmosphere, secondary arcs, low-opacity symbol watermark, mesh drift | Stock photos, glow spectacle, cream fields |
| **Solutions** | Identity marks (numbered arcs), left rail accent, light primary arcs | Different random icons per card without system |
| **Markets** | Arc overlays as *market signal*, denser intel strips | Generic equal cards with only chips |
| **Jurisdictions** | Story rail, tier labels, restrained arcs | Map widgets, flag collage, licence-shop density |
| **Intelligence** | Navy authority band, white type, blue icons | Marketing “blog grid” fluff; Axle exposure |
| **Footer** | Navy close, blue+white lockup, thin brand rule | Large cream, busy social walls |

---

## Part 4 — Capability Rail

| | Option A — Navy (current) | Option B — Octus red accent |
|--|---------------------------|-----------------------------|
| Field | `#0B1220` continuous under hero | Navy field + red rule / red separators / red label tint |
| Memorability | High (legacy continuity + motion) | Higher short-term “pop” |
| Premium | Institutional, calm | Risk of alarm / promo if red dominates |
| Distraction | Low when slow (~48s) | Medium — red competes with Discuss CTA |
| Brand alignment | Navy = primary environment; blue = identity | Red = emphasis only (Brand Kit) |

### Final recommendation: **Option A (Navy) + restrained blue identity**

- Keep navy rail field and institutional marquee.
- Do **not** fill the rail with red.
- Optional P1: 1px blue brand-rule under rail (already used on header) — not red fill.
- Red remains for section labels and crisis emphasis only.

---

## Part 5 — Homepage Experience

Post-consolidation (~13 sections). Strategically sound; premium gap is **visual confidence**, not more content.

| Need | Sections | Direction |
|------|----------|-----------|
| **Compression** (already largely done) | Stats footnote, operate strip | Keep lean; no new blocks |
| **Stronger visual identity** | What we fix, How we work, Markets | Motifs + contrast lift; not new IA |
| **More authority** | Solutions accordion, Intelligence teaser, Crisis door | Clearer hierarchy, less gray, crisis red reserved |
| **Rhythm** | Mid-page CTA → Solutions | Maintain breathing room; avoid equal card walls |
| **Storytelling** | Pressure patterns | Keep — differentiation vs catalogue sites |

**Scroll experience:** Hero + rail must feel *owned*; after Solutions, every section must earn its height.

---

## Part 6 — Solutions Experience (six hubs, one system)

| Solution | Motif | Icon / mark | Emphasis |
|----------|-------|-------------|----------|
| Regulatory Strategy & Licensing | Arc pathway / sequential ring | Regulatory mark; blue rail | Sequencing, authority |
| Banking & Payments | Dual-circle “flow” / continuity | Banking mark; blue rail | Continuity under pressure |
| Compliance & Risk | Shield geometry inside arc | Compliance mark; blue rail | Operable system, not paper |
| Corporate & Cross-Border | Nested circles / structure | Corporate mark; blue rail | Structure across borders |
| Legal & Contractual Architecture | Fine line arc + rule | Licensing/legal mark; blue rail | Architecture with counsel boundary |
| Operational Remediation | Same system + **red** accent rail | Remediation mark; **crisis** | Door when failing — red only here |

**System rule:** Shared card chrome, shared number-in-arc identity, shared blue left rail — **only Remediation** gets red accent. Differentiation via motif + copy, not six unrelated styles.

---

## Part 7 — Markets Experience

| Market | Should feel like | Visual cue | Avoid |
|--------|------------------|------------|-------|
| iGaming | Licensed operations under scrutiny | Arc + denser “ops” language strip | Casino imagery |
| Fintech | Infrastructure & authorisation | Cleaner geometry, payment-flow hint | Neon fintech clichés |
| Digital Assets | Regime + custody gravity | Slightly cooler navy tint in motif | Crypto-bro gradients |
| High-Risk Operations | Structural resilience | Stronger contrast, banking-pressure framing | “Edge” / outlaw aesthetics |

Prefer **market intelligence** tone: problem → constraint → structural response — not equal marketing cards.

---

## Part 8 — Intelligence Experience

**Position:** Authority platform for operators — not a blog skin.

| Layer | Direction |
|-------|-----------|
| Editorial hierarchy | Category → featured thesis → grid; H1 restrained |
| Categories | Align to pillars (Regulatory / Market / Operational / Executive) |
| Visual authority | Navy bands, cream highlight sparingly, strong titles |
| Scalability | Pillars stable; Insights library expands underneath |
| Axle | **Never exposed** — no product chrome, no agent branding |

---

## Part 9 — People Experience

Aligned to People Final Lock (architecture unchanged).

| Band | Treatment |
|------|-----------|
| **Leadership** | Larger grayscale portraits; consistent circular/soft-rect crop; centered face; more whitespace; navy name / restrained title |
| **Core Specialists** | Smaller grayscale; same crop grammar; capability label above name; denser grid |
| **Operations & Delivery** | Same specialist grammar; quieter label; never “Leadership-looking” |

**Requirements (locked direction):** Grayscale · consistent crop · centralized framing · clear Leadership vs Specialist hierarchy · no partner faces as employees.

---

## Part 10 — Footer Experience

**Conceptual redesign (not implemented here):**

1. **Brand closing moment** — navy field, blue+white lockup at final recommended scale, one-line institution statement  
2. **Thin blue brand rule** under lockup row  
3. **Commercial columns** — Solutions / Markets / Engage / Company (current IA)  
4. **Legal hierarchy** — quieter, last  
5. **CTA** — Discuss text link or compact button; WhatsApp float remains secondary  
6. **Symbol** — optional low-opacity mark in far corner; never competing with lockup  

Footer should feel like a **close**, not a sitemap dump.

---

## Part 11 — Mobile Experience

| Area | Issue | Direction |
|------|-------|-----------|
| Logo | CONSULTING subline fragile | Keep ≥36px lockup; ensure wordmark not cropped |
| Nav | Hamburger OK | Full-screen sheet; primary links first |
| Home | Long scroll still real | Preserve consolidation; tighten card padding |
| Solutions | Cards stack well | Keep identity marks visible at top of card |
| Team | Portrait scale | Leadership larger; specialists 2-col |
| CTA | Dual hero CTAs | Stack full-width; primary first |
| Footer | Dense columns | Collapse to accordion or stacked lists |
| Rail | Marquee OK | Respect reduced-motion static row |

---

## Part 12 — Priority matrix (summary)

Full matrix: [OCTUS_EXECUTIVE_POLISH_ROADMAP.md](./OCTUS_EXECUTIVE_POLISH_ROADMAP.md)

| Priority | Theme |
|----------|--------|
| **P0** | Logo optical primacy · body contrast · Remediation red discipline · header quieting |
| **P1** | Solutions motif differentiation · Markets intel feel · Intelligence navy authority · Footer close · People grayscale consistency |
| **P2** | Motion vocabulary expansion · cream micro-highlights · editorial Intelligence scale |

---

## Top 10 final improvements

1. Increase lockup optical size so **OCTUS CONSULTING** is instantly primary  
2. Quiet nav link weight relative to mark  
3. Raise body text contrast (less gray wash)  
4. Prefer navy section titles for long headlines; blue for short brand beats  
5. Keep capability rail **navy** (not red fill)  
6. Differentiate six Solutions via motif + Remediation-only red rail  
7. Elevate Markets from equal cards toward market-intelligence framing  
8. Deepen Intelligence as navy authority platform (no Axle)  
9. Enforce People grayscale / crop / hierarchy treatments  
10. Treat footer as brand closing moment  

---

## No-code decisions (locked by this board)

| Decision | Choice |
|----------|--------|
| Capability rail color | **Navy (Option A)** |
| Header lockup | Blue+white / blue+dark — official masters only |
| Red usage | Emphasis + crisis Remediation only |
| Cream usage | Strategic highlight only — not section chrome |
| Legacy site | Principles only — no IA/copy restore |
| Axle | Never on public Octus surfaces |

---

## Confirmations

```
code_changed: false
pr_changed: false
routes_changed: false
people_changed: false
redirects_added: false
dns_changed: false
production_cutover: false
```
