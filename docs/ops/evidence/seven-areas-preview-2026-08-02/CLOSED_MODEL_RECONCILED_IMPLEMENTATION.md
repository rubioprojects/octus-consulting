# Closed-model reconciled implementation

**Terminal:** `OCTUS_WEBSITE_CLOSED_MODEL_RECONCILED_IMPLEMENTATION_READY`  
**Date:** 2026-08-02  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/17

## HEADs

| Label | SHA |
|-------|-----|
| Starting HEAD | `99cd1fc547143da2d076db1b9ea4651ff11a5c73` |
| Corrected-audit commit | `0e80e88cc71427bc379a96eaf85669e64f3ac9ac` |
| Implementation commit | `62e7853ac19d819ca55ae4898b6af4728edfa32a` |
| Final tip (evidence pin) | `dcdcb17cfe501408d2a92f911039613be5f376ae` |

## Provenance rule applied

| Layer | Authority |
|-------|-----------|
| Visual | Rendered deployment https://octus-consulting-6dieznt51-axle1.vercel.app |
| Implementation how | Commit `8b12fcc88922e6ed07b98dd40da0a27bde71bbf9` for components visibly used in that deployment |
| Facts / IA | Current PR #17 (seven areas, roster, SEO, copy hygiene) |

Source-only classes (e.g. Team leadership-support / operational / operations bands) were **not** restored.

## Corrected matrix totals (audit)

| Primary recommendation | Count |
|------------------------|------:|
| RESTORE EXACTLY | 2 |
| RESTORE STRUCTURE / UPDATE DATA | 6 |
| ADAPT TO SEVEN AREAS | 1 |
| KEEP CURRENT | 16 |
| REMOVE | 1 |
| **Matrix rows** | **26** |
| HUMAN DECISION as primary | **0** |

See updated `CLOSED_MODEL_BASELINE_RECONCILIATION_AUDIT.md`.

## Pages restored / retained

| Surface | Action | Summary |
|---------|--------|---------|
| `/team` | Restored composition | Atmospheric hero; Leadership + Core Specialists; capability labels; multi-action CTA; current roster/titles |
| `/about` | Visual rhythm | Chapter transitions; editorial divider; multi-action CTA to live routes; copy retained |
| `/intelligence` | Restored architecture | Intelligence/Insights split; signal→structure; resources band; pillars; Reveal; no removed routes |
| `/contact` | Multi-path | Atmospheric hero; discuss/email; diagnostic; existing-client; WhatsApp primary |
| `/diagnostic` | KEEP CURRENT flow | PageHero atmosphere only; flow unchanged |
| Area hubs (7) | ADAPT | Shared AreaHub depth: chapter marks, motif, related paths, dark next-action CTA |
| Deep service pages (12) | Atmosphere restore | DarkHeroAtmosphere + seam; `Services ·` labels (not Solutions) |
| Homepage | Targeted delta | Chapter transition before final CTA; no wholesale redesign |
| `/what-octus-does` | Not restored | Remains absent as canonical route |
| `/resources/igaming-operator-readiness` | Not restored | Remains absent |

## Old defects prevented

- Maria Cristina as Managing Director  
- Rubio as bare Founder  
- Links to `/what-octus-does` or igaming-operator-readiness  
- Negative law-firm / “don’t produce reports” About framing  
- Unsupported cert/ESG/GLI-authority claims  
- Six-area `Solutions ·` UI labels on updated detail pages  
- Rhetorical em dashes in Team/Intelligence/Contact user-facing copy  

## Component provenance

| Component | Source | Notes |
|-----------|--------|-------|
| Team hero atmosphere | `DarkHeroAtmosphere` + `.octus-dark-hero` from closed model | Visible in old `/team` |
| Team band/card CSS | `8b12fcc` globals (leadership + specialist only) | Source-only support bands not used |
| Reveal | Restored `components/system/Reveal.tsx` from `8b12fcc` | Used on old Intelligence (visible motion) |
| StoryRail / SolutionIdentityMark | Not restored | Not required by approved visible composition for this pass |
| AreaHub depth | Current `AreaHubPage` + closed SolutionHub CTA/chapter patterns | Shared system, controlled variation |
| CTA aliases | `lib/cta.ts` | `MAILTO_DISCUSS`, `CTA_EMAIL_LABEL`, `ASSESS_PATH` |

## Mixed-system residues

Registered 12 residues treated in this pass (heroes, Team cards, chapter marks, CTAs, Contact/Diagnostic coherence, area/detail atmosphere, homepage CTA transition). Residual risk: deeper per-service section rhythm beyond hero may still vary; note as remaining visual debt if Rubio flags.

## Validation

| Check | Result |
|-------|--------|
| `npm run build` | PASS |
| `npx tsc --noEmit` | PASS |
| 81-route crawl (local `serve out`) | 81/81 HTTP 200 |
| Managing Director / bare Founder | absent on Team |
| Removed-route links | absent |
| Merge | no |
| Production deploy | no |

## Screenshot index

`docs/ops/evidence/seven-areas-preview-2026-08-02/screenshots/closed-model-reconciled/{old,reconciled}/`

Includes homepage, Team desktop/mobile + leadership/specialists, About desktop/mobile, Intelligence, Contact, Diagnostic, seven area hubs, AML service detail, header, footer, mobile menu, home final CTA.

## Unresolved / residual visual defects

- Some deep-service body sections retain pre-existing section denseness beyond hero treatment.  
- Mobile menu open-state capture depends on header button selector; verify on preview if ambiguous.  
- Preview URL updates after push; local crawl used `serve out` before Vercel tip refresh.  
