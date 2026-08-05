# Phase 3 — Homepage impact matrix

**Baseline:** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)  
**Before (accepted Phase 2 tip):** https://octus-consulting-kovk3ad1l-axle1.vercel.app (`ef0d946` / `dpl_4pDMJNttdiwdLJmkyBbSffxBqDWK`)  
**Starting HEAD / accepted_phase2_head:** `4a4687134156dce4e5892552a049ff00747d1172`  
**Computed probe:** `audit/HOME_COMPUTED_COMPARE.json`, `audit/HOME_HERO_LEADERSHIP_DEEP.json`

Rollback: `git revert` Phase 3 implementation commit(s); restore `accepted_phase2_head`.

Frozen systems (do not modify): Team page/portraits, Nav, header geometry, logos, footer, CookieBanner, WhatsApp, favicons, global tokens, DarkHeroAtmosphere shared impl, seven-area routes.

| # | Current chapter | Baseline equivalent | File(s) | Intended correction | Acceptance |
|---|---|---|---|---|---|
| 1 | Branded hero | Hero (h≈880, centered, H1 full width) | `app/page.tsx`, `.home-hero*` in `globals.css` | Match h≈880, `align-items:center`, pb=0; remove H1 18ch clamp; keep evidence-safe body + seven-area CTAs (no Email / no 06 / no obsolete “What Octus does”) | Desktop/mobile fold matches geometry; no prohibited copy |
| 2 | Capability rail | Same dark rail | `CapabilityRail.tsx` | Preserve seven labels; no peer Banking | 7 labels only; rail h≈68 |
| 3 | Authority signal | Centered 3-stat + symbol + footnote (h≈323) | `app/page.tsx` | Restore baseline **geometry** (symbol above, 3-col center grid, borders, footnote); numerals **Multi / 2019 / 07**; no `06 solutions`; no EXIN certificate wall claim | Section density ≈ baseline; factual 07 |
| 4 | Leadership | Same chapter | `HomeLeadershipTrust.tsx`, `.home-leadership-trust*` | Match card/portrait proportions; **keep** Founder & CEO / Operations Coordination + accepted crops | Titles locked; crop hashes unchanged |
| 5–6 | What we fix + Outcomes | Combined elevated chapter | `app/page.tsx` | Preserve evidence-safe cards; tune spacing only if materially off | Editorial density retained |
| 7 | How we work | Three pillars | `app/page.tsx` | Preserve; Banking remains supporting link not peer area | No 8th peer |
| 8 | Industries | Markets cards | `app/page.tsx` | Preserve four markets | Links valid |
| 9 | Pressure patterns | Same | `app/page.tsx` | Preserve | Rhythm OK |
| 10 | Crisis CTA | Dark intervention | `app/page.tsx` | Preserve Assess CTA; avoid adjacent duplicate primary Discuss | CTA audit PASS |
| 11 | Seven-area accordion | Baseline “Six solutions…” | `app/page.tsx`, `HomeModulesAccordion.tsx` | Keep **Seven areas. One execution partner.** + exact 7 PUBLIC_AREAS | Exactly 7; Banking not peer |
| 12 | Remediation feature | Operational Remediation chapter | `app/page.tsx` | Keep evidence-safe title **Remediation & Readiness**; match layout density | Links to remediation hub |
| 13 | How Octus operates | Operate grid | `app/page.tsx` | Preserve operate section | — |
| 14 | How Octus engages | Engage strip | `app/page.tsx` | Preserve; avoid CTA pile-up | — |
| 15 | Intelligence | Insights/Intelligence | `app/page.tsx` | Preserve dual links | — |
| 16 | Final CTA | “This is not for everyone.” | `app/page.tsx` | Keep evidence-safe **Mandates Octus accepts.**; match spacing/CTA hierarchy to baseline rhythm | WhatsApp primary intake |

## Intentional differences (binding)

| Item | Rationale |
|---|---|
| Seven areas (not Six solutions / 06) | Catalog SoT |
| Hero body / final CTA / remediation title wording | Evidence-safe current copy |
| Leadership titles Founder & CEO / Operations Coordination | Phase 1 lock (not baseline Founder / Managing Director) |
| Hero secondary CTA Explore services (not Email) | Phase 2 IA + WhatsApp primary intake |
| No EXIN certificate wall footnote | Forbidden certification wall / reintroduction |

## CTA register (pre-implementation intent)

| Label | Target | Priority | Section |
|---|---|---|---|
| Discuss your operation → | WhatsApp | Primary | Hero + Final |
| Explore services | `/solutions` | Secondary | Hero |
| See how we work → | `/how-we-engage` | Tertiary | Hero |
| Assess your situation → | `/diagnostic` | Text | Hero / Crisis / Remediation |
| Meet the team → | `/team` | Text | Leadership |
| Per-area Open → | area hrefs | Text | Accordion |
| Open remediation hub → | remediation | Secondary | Remediation |
| Open Intelligence / Read Insights | `/intelligence` `/insights` | Secondary | Intelligence |

## Regression routes

`/`, `/team`, `/solutions`, `/about`, `/contact`
