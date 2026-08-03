# OLD vs NEW — Visual rebase to approved Octus direction

**Mission:** `OCTUS_WEBSITE_OLD_VISUAL_DIRECTION_REBASE`  
**PR:** [#17](https://github.com/rubioprojects/octus-consulting/pull/17) · branch `feat/seven-areas-website-architecture`  
**Terminal:** `OCTUS_WEBSITE_OLD_VISUAL_DIRECTION_REBASED_READY`  
**Date:** 2026-08-02

## Safety baseline

| Item | Value |
|------|--------|
| Starting PR #17 HEAD | `a304ef94fd22e6a470ff8e789de047cadb02c8e9` |
| Safety tag | `safety/pr17-pre-visual-rebase-a304ef9` |
| Safety branch | `safety/pr17-pre-visual-rebase` |
| Visual reference commit | `8b12fcc88922e6ed07b98dd40da0a27bde71bbf9` |
| Visual reference branch | `feat/authority-conversion-p0` |
| Visual reference deployment | `https://octus-consulting-6dieznt51-axle1.vercel.app/` (`dpl_2YpPkt1Y63KStBooH7pNEyue8qxJ`) |
| Method | Component-by-component restore/adapt — **not** wholesale merge or cherry-pick of old branch |

## Visual component inventory

### Restore directly (from `8b12fcc`)

| Asset / component | Provenance |
|-------------------|------------|
| `public/brand/symbol/*` (SVG + PNG) | `8b12fcc` |
| `public/brand/lockup/*` | `8b12fcc` |
| `public/brand/motifs/octus-arc-*.svg` | `8b12fcc` |
| `public/brand/wordmark/*`, `public/brand/social/*` | `8b12fcc` |
| `lib/brand.ts` | `8b12fcc` |
| `components/BrandLockup.tsx` | `8b12fcc` (adapted for current IA) |
| `components/system/CapabilityRail.tsx` | `8b12fcc` |
| `components/system/DarkHeroAtmosphere.tsx` | `8b12fcc` |
| `components/system/BrandSectionMotif.tsx` | `8b12fcc` |
| `components/system/OctusChapterTransition.tsx` | `8b12fcc` |
| `components/system/OctusEditorialDivider.tsx` | `8b12fcc` |
| `components/system/OctusSymbolMarker.tsx` | `8b12fcc` |
| Hero atmosphere / mesh / arcs / seam CSS | `8b12fcc` globals (brace-safe append) |
| Capability rail marquee + reduced-motion static CSS | `8b12fcc` |
| Branded footer shell CSS (`site-footer*`) | `8b12fcc` |

### Adapt to seven areas

| Element | Adaptation |
|---------|------------|
| Capability rail | 7 labels/icons — no Banking peer; no eighth icon |
| Nav Services menu | Current IA: Services / Industries / Insights / About / Contact + seven `PUBLIC_AREAS` |
| Footer Services column | Seven approved areas; corrected wording |
| Homepage Services accordion | Editorial numerals, richer open state, chips; seven-area labels only |
| Area hub pages | Shared dark hero + controlled per-area module variation |
| Authority strip | `Operating since 2019` + `07` service areas — not `06 solutions` |
| Leadership titles | Rubio Founder & CEO; Maria Cristina Operations Coordination |

### Discard (intentionally not restored)

- Six-area taxonomy / Solutions×6 nav
- Banking as eighth peer capability
- Defensive “Not a law firm / license shop / platform” hero copy
- Multiple competing hero CTAs + remediation-assess secondary path
- `Managing Director` for Maria Cristina
- Unsupported certification / DPO claims in authority strip
- “Illustrative situations — not case studies…” governance banner on Pressure patterns
- Old route names as canonicals
- Generic PNG-only nav logos when SVG symbol+wordmark lockup exists
- Wholesale rollback of PR #17 editorial / SEO / catalog / routing work

### Retain from current PR #17

- Seven approved service areas + 39-service catalog
- Canonical routes, redirects (`vercel.json`), sitemap corrections
- Page-specific metadata + preview `noindex`
- Banking supporting page (not peer area)
- International Hub, Private Clients, Remediation & Readiness
- Corrected leadership roles and editorial English
- Cookie persistence, WhatsApp positioning, CTA validation
- 33 Insights posts and accessibility improvements

## Section-by-section comparison (homepage)

| # | Section | Old (`8b12fcc` / live ref) | Rebased PR #17 |
|---|---------|----------------------------|----------------|
| 1 | Branded hero | Dark atmosphere, mesh/arcs, seam | Restored atmosphere + approved copy + Discuss / Explore / quiet How we work |
| 2 | Capability rail | Icon marquee (old six / banking mix) | Restored motion/static treatment; **seven** approved areas |
| 3 | Authority | Compact numerals (incl. defects) | Compact 2019 / 07 only — defects removed |
| 4 | Leadership | Compact cards + portraits | Editorial portrait crops; approved titles/images |
| 5 | What we fix | Four problem cards | Restored card treatment; approved problem framing |
| 6 | What structure allows | Compact outcomes | Restored; evidence-safe operational outcomes |
| 7 | Services | Rich architecture | Editorial accordion + divider + chips (seven areas) |
| 8 | Industries | Editorial cards + arrow | Restored card language |
| 9 | Pressure patterns | Left-rail scenario cards | Restored; governance disclaimer removed |
| 10 | How Octus works | Process chapter | Retained / restyled in chapter rhythm |
| 11 | Intelligence | Insights strip | Retained |
| 12 | Final CTA | Qualification close | Restored premium close |
| 13 | Footer | Large lockup + dark depth | Restored shell; current seven-area nav |

## Screenshots

Directory: `docs/ops/evidence/seven-areas-preview-2026-08-02/screenshots/visual-rebase/`

### Rebased (local static export after rebase)

| File | Subject |
|------|---------|
| `rebased/01-homepage-hero-desktop.png` | Homepage hero |
| `rebased/02-capability-rail-desktop.png` | Seven-area capability rail |
| `rebased/03-authority-leadership-desktop.png` | Authority + leadership |
| `rebased/04-what-we-fix-desktop.png` | What we fix |
| `rebased/05-services-desktop.png` | Services architecture |
| `rebased/06-industries-desktop.png` | Industries |
| `rebased/07-pressure-patterns-desktop.png` | Pressure patterns |
| `rebased/08-final-cta-desktop.png` | Final CTA |
| `rebased/09-footer-desktop.png` | Footer |
| `rebased/10-area-regulatory-desktop.png` | Regulatory Structuring |
| `rebased/11-private-clients-desktop.png` | Private Clients |
| `rebased/12-remediation-desktop.png` | Remediation & Readiness |
| `rebased/13-international-hub-desktop.png` | International Hub |
| `rebased/14-homepage-mobile.png` | Mobile homepage |
| `rebased/15-mobile-nav.png` | Mobile navigation |
| `rebased/16-mobile-footer.png` | Mobile footer |

### Old reference (live deployment)

| File | Subject |
|------|---------|
| `old/01-homepage-hero-desktop.png` | Old hero (includes defects not restored) |
| `old/02-capability-rail-desktop.png` | Old rail (when capturable) |
| `old/04-what-we-fix-desktop.png` | Old What we fix |
| `old/09-footer-desktop.png` | Old footer |
| `old/14-homepage-mobile.png` | Old mobile homepage |

## Validation results

| Check | Result |
|-------|--------|
| `npm run build` | PASS |
| `npx tsc --noEmit` | PASS |
| Sitemap / 81-route crawl | 81/81 present |
| Redirects (`vercel.json`) | 11 redirects retained (old six-area aliases → seven-area canonicals) |
| Capability rail labels | 7/7; Banking not a peer |
| Services menu areas | 7/7 |
| Cookie persistence | `localStorage` set; banner stays dismissed on reload |
| WhatsApp / cookie overlap | none |
| CTA Discuss / Explore / How we work | present |
| Roles | Founder & CEO + Operations Coordination; Managing Director = 0 |
| Unsupported-claim search | none (source) |
| Obsolete six-area labels on homepage | none |
| Homepage rhetorical em dash (rendered) | 0 |
| Merge | **not performed** |
| Production deploy | **not performed** |

Functional snapshot: `screenshots/visual-rebase/functional.json`  
Validation snapshot: `screenshots/visual-rebase/validation.json`

## Old defects prevented from returning

- Six-area nav / Banking peer rail item  
- “Not a law firm…” defensive hero positioning  
- `Managing Director`  
- `06 solutions` authority claim  
- Unsupported certification strip claims  
- `Remediation assess` public CTA language  
- Pressure-pattern governance disclaimer as visible banner  
- Old canonical routes displacing current SEO map  

## Unresolved visual decisions (human)

1. Exact marquee speed / density of capability rail vs old six-item pacing (seven longer labels).  
2. Whether leadership portraits should remain rectangular editorial crops (chosen) vs old circular crops.  
3. Degree of per-area hero variation beyond compact vs full (Private Clients / International Hub use compact).  
4. Final Rubio PNG PASS on preview after Vercel rebuild of this commit.

## Architecture confirmation

- Public areas remain exactly seven: REG, CMP, LEG, CORP, PC, REM, HUB.  
- Banking remains supporting content, not an eighth peer area.  
- Catalog, redirects, sitemap, metadata, Insights count and editorial repairs from PR #17 are preserved.
