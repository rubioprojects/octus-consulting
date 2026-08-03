# Decision Register — Controlled remediation PR #17

**Starting HEAD:** `bc40c2ae376867af1ba68ae3a8124d23c70f33c3`  
**Baseline:** https://octus-consulting-9q798dbg2-axle1.vercel.app (`dpl_437tawkoMDv7sqxW6NzPzTegj1Lq`)

## D-001 — Public Team roster size and membership

| Field | Value |
|---|---|
| Decision | Public Team = exactly **10** named people (mandate, 2026-08-03) |
| Supersedes | Prior “7 verified / 3 held” and “Larissa/Bianca/Luciana internal-only” gates |
| Authority | Rubio mandate Phase 1 Team hard gate |
| Status | ACCEPTED for Phase 1 |

## D-002 — Public hierarchy bands

| Field | Value |
|---|---|
| Decision | Render only **Leadership** + **Core Specialists** |
| Forbidden bands | Leadership Support · Operational Leadership · Practice Leads |
| Visual SoT | Baseline 9q798dbg2 composition |
| Status | ACCEPTED |

## D-003 — Titles

| Person | Title used | Source |
|---|---|---|
| Rubio Teixeira | Founder & CEO | Current verified lock |
| Maria Cristina | Operations Coordination | Current verified lock |
| Rodrigo Coelho Lopes | Legal Architecture Lead | Current verified |
| Claudia Nery | Chief Financial Officer | Current verified |
| Esther Vendrami | International Regulatory & Compliance Lead | Current verified |
| Caroline Giovanetti | Brazil Regulatory Lead | Current verified |
| Larissa Carvalho | Regulatory & Compliance Specialist | Verified public roster validation 2026-08-02 |
| Milla Ludovico | Business Development Lead | Current verified |
| Bianca Carolina Oliveira Andrade | People & Operations | Verified public roster validation 2026-08-02 |
| Luciana Santos Veloso | Operations Coordinator | Verified public roster validation 2026-08-02 |

## D-004 — Luciana portrait recovery

| Field | Value |
|---|---|
| Decision | Restore `public/team/luciana-santos-veloso.jpg` from historical commit `dc5862d` |
| Status | EXECUTED in Phase 1 |
| Note | File was absent at recovery HEAD; required for portrait completeness gate |

## D-005 — Phase 1 file isolation

| Field | Value |
|---|---|
| Decision | Touch only Team-allowed paths; do not edit Nav/layout/Home/PageHero/tokens |
| Global change needed? | No (as of Phase 1) |
| Status | ACCEPTED |

## D-006 — Phase sequencing

| Field | Value |
|---|---|
| Decision | Stop after Phase 1 for Sol audit; do not start Phase 2 |
| Status | BINDING |

## D-007 — Evidence provenance repair (2026-08-03)

| Field | Value |
|---|---|
| Decision | Sol blocked Phase 1 on unauditable SHA in reconciled manifests |
| Repair | Recapture reconciled shots from immutable preview `bvvs2ue51` @ `f5be0d8` |
| Preserve | `team_implementation_commit=3fb56fc…` separate from `capture_code_head=f5be0d8…` |
| Status | ACCEPTED by Sol |

## D-008 — Phase 1 accepted; Phase 2 authorized

| Field | Value |
|---|---|
| accepted_phase1_head | `0654dc1247967bcc36d760f47ae0654ff3814aa3` |
| Phase 2 | ACCEPTED by Sol |
| Terminology | `final_phase1_head` → `evidence_content_head` for `d9c58c5…`; authoritative tip = `accepted_phase1_head` |
| Status | BINDING |

## Open / deferred to later phases

| ID | Item | Phase |
|---|---|---|
| P2 | Global visual system / shell fidelity | 2 — ACCEPTED |
| P3 | Homepage remediation | 3 — ACCEPTED_WITH_RESIDUAL |
| P4 | Services families | 4 — READY_FOR_SOL_AUDIT |
| P5 | Institutional / content pages | 5 — BLOCKED |
| P6 | Full regression (incl. residual punctuation) | 6 — BLOCKED |

## D-009 — Phase 2 global system accepted

| Field | Value |
|---|---|
| Phase 2 | ACCEPTED by Sol |
| accepted_phase2_head | `4a4687134156dce4e5892552a049ff00747d1172` |
| implementation | `ef0d9465f07993c811144291d0da0371d12e7229` |
| immutable_preview | https://octus-consulting-kovk3ad1l-axle1.vercel.app |
| deployment_id | `dpl_4pDMJNttdiwdLJmkyBbSffxBqDWK` |
| Global system lock | Nav/header/footer/WhatsApp/cookies/tokens frozen |

## D-010 — Phase 3 Homepage authorized

| Field | Value |
|---|---|
| Phase 3 | AUTHORIZED / IN PROGRESS |
| Scope | Homepage composition only |
| Impact matrix | `homepage/PHASE3_HOME_IMPACT_MATRIX.md` |
| Phases 4–6 | BLOCKED |
| Merge / production / Rubio preview | forbidden |

## D-011 — Phase 3 Homepage returned for Sol audit

| Field | Value |
|---|---|
| Phase 3 | READY_FOR_SOL_AUDIT |
| control | `98125861a4c2ea5ff659d7da0c513490a2329d32` |
| implementation | `47db576145b80f7c232b0d31c3372247a6f538fc` |
| evidence | `9435d9bec86fde156d52bb13bfd57e06c210d9e3` |
| immutable_preview | https://octus-consulting-l79bo9vrg-axle1.vercel.app |
| deployment_id | `dpl_FCywMhkUrBatkqCH4t3s7izYvUYE` |
| Phase 4–6 | remain BLOCKED |
| Merge / production / Rubio preview | forbidden |

## D-012 — Phase 3 Homepage closeout repair authorized

| Field | Value |
|---|---|
| Sol | HOME composition/file/deployment/Team/global PASS; CTA + prohibited copy + PR governance FAIL |
| Allowed app file | `app/page.tsx` only |
| Fix | Unique /diagnostic labels; remove em dash; gate validator on duplicates + punctuation |
| WhatsApp allowlist | `Discuss your operation →` may appear twice only (hero + final CTA bookend) |
| Phase 4 | NOT AUTHORIZED |
| closeout_application_commit | `11c0f9da74408f270a22c23b5b2903ce45f5e33c` |
| closeout_preview | https://octus-consulting-7yzcy4yif-axle1.vercel.app · `dpl_ALymSbjVv45GWXdeFuYrPBXMN88w` |
| closeout_validation | duplicate_commercial_labels PASS · prohibited_punctuation PASS · overall PASS |
| terminal | `OCTUS_HOME_CLOSEOUT_READY_FOR_SOL_AUDIT` |

## D-013 — Phase 3 Homepage accepted with residual; Phase 4 authorized

| Field | Value |
|---|---|
| PHASE_3_HOMEPAGE_HARD_GATE | ACCEPTED_WITH_RESIDUAL |
| accepted_phase3_head | `620b725d613fba4ff4a062477c1110e453a4eb63` |
| accepted Homepage application commit | `11c0f9da74408f270a22c23b5b2903ce45f5e33c` |
| Phase 4 | AUTHORIZED → completed implementation; see D-016 |
| Phase 5–6 | BLOCKED |
| Rubio rescreen | BLOCKED |
| Merge / production / rebase | forbidden |

## D-014 — HOME_PUNCTUATION_RESIDUAL_001 (unresolved)

| Field | Value |
|---|---|
| RESIDUAL_ID | `HOME_PUNCTUATION_RESIDUAL_001` |
| CURRENT_TEXT | Trust starts with clear accountability — not a directory of faces. |
| REQUIRED_FINAL_TEXT | Trust starts with clear accountability, not a directory of faces. |
| OWNER | Phase 6 full regression |
| Location | `components/system/HomeLeadershipTrust.tsx` (frozen) |
| Phase 4 action | Do not fix · do not mark resolved · do not remove ALLOWED_DASH_SNIPPETS |
| Validator note | Temporary exemption only; not proof of zero Homepage em dashes site-wide |

## D-015 — Phase 4 Services file and architecture isolation

| Field | Value |
|---|---|
| Decision | Reconcile Services architecture vs baseline while preserving seven-area IA and 39 public services |
| Banking | Cross-cutting supporting only — never 8th peer area |
| Shared PageHero | Prefer services-specific variant/wrapper if institutional consumers would change |
| Status | BINDING |

## D-016 — Phase 4 Services returned for Sol audit

| Field | Value |
|---|---|
| Phase 4 | READY_FOR_SOL_AUDIT |
| implementation | `8228e342cfc9d3830b4f4a414f2a93ae208e5be1` |
| immutable_preview | https://octus-consulting-6dof5kn4k-axle1.vercel.app |
| deployment_id | `dpl_Ewm6SFyGB5wkkDefAAMnBs27bMfZ` |
| validation | overall PASS · 162 screenshots |
| residual | HOME_PUNCTUATION_RESIDUAL_001 still OPEN |
| Phase 5–6 | BLOCKED |
| terminal | `OCTUS_SERVICES_GATE_READY_FOR_SOL_AUDIT` |

## D-017 — Phase 4 Services closeout returned for Sol audit

| Field | Value |
|---|---|
| Prior gate | NOT ACCEPTED (visual compare stale / CTA / editorial / validator / catalogue) |
| Closeout | CLOSEOUT READY FOR SOL AUDIT |
| application_commit | `e72d3902670de83573bc32674c3cd02e036b787e` |
| evidence_commit | `3215152b63d73d7e618d2ad83865d83e30b7c0fc` |
| immutable_preview | https://octus-consulting-eyjy9sxq7-axle1.vercel.app |
| deployment_id | `dpl_4mRS5vF2QSS34aJkip3Zn56cUUa5` |
| validation | overall PASS · 272 screenshots · missing metadata 5 baseline-only |
| residual | HOME_PUNCTUATION_RESIDUAL_001 still OPEN · exactly one |
| Phase 5 | BLOCKED |
| Rubio rescreen | BLOCKED |
| terminal | `OCTUS_SERVICES_CLOSEOUT_READY_FOR_SOL_AUDIT` |

