# Phase 5C — Content Register (opening)

**Phase:** 5C Intelligence / Insights / Legal  
**Starting HEAD:** `cee3e907069542b14c85bec56769dc9549b4674c`  
**Date:** 2026-08-03

## Intelligence

| Element | Opening assessment | Remediation intent |
|---|---|---|
| Hero positioning | Strong: signals → execution | Tighten: practical regulatory, compliance, operational insight (not content hub / academic / awards) |
| Relationship to Insights | Explicit split present | Keep; ensure CTA hierarchy clear |
| Pillars | Four commercial pillars | Keep practical framing; no AI hype / leader claims |
| CTAs | Dual Explore Insights + Discuss | Differentiate hero vs final WhatsApp labels (Phase 5B pattern) |
| Metadata | `pageSocialMeta` OK | Review description for authority without unsupported claims |

## Insights index

| Element | Opening | Intent |
|---|---|---|
| Listing | `InsightsHubClient` + 33 posts | Preserve |
| Categories | Mapped via `lib/intelligence.ts` | Validate labels |
| Pagination | Client filter; no classic pager | Document |
| Cards / dates / authors | Author fallback “Octus Consulting” for 26/33 | Do not invent authors |
| Final CTA | WhatsApp discuss | Keep; no SLA language |

## Insights articles (33)

| Rule | Binding |
|---|---|
| Do not invent authors or dates | Binding |
| Do not invent legal conclusions | Binding |
| Qualify third-party statistics | Binding |
| Soften partnership marketing (Quinel) | Binding |
| Frame AI as sector context | Binding |
| Regulatory claims: classify current_law / historical / proposal / opinion | Binding |
| Metadata: title, description, canonical, OG via `pageSocialMeta` | Validate per slug |
| Schema / modified date | Record if absent — do not invent false modified dates |

## Legal / utility

| Route | Opening defect | Intent |
|---|---|---|
| `/privacy` | Analytics cookies overstated; DPO heading | Align to CookieBanner; contact-only DPO language; unify last-updated |
| `/terms` | Generally protective | Confirm identity + service refs vs engagement model |
| `/cookies` | Aligned to banner | Keep; confirm last-updated consistency |
| `/compliance-channel` | Hard anonymity guarantee; DPO label | Remove guarantee; no response SLA; Compliance contact |
| `/404` | Default Next export 404 | Add branded `app/not-found.tsx` |

## Editorial anti-patterns (avoid)

Generic blog card farms · AI-looking copy · excessive CTAs · certificate walls · market-leader claims · invented research.
