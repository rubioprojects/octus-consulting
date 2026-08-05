# Post-launch analytics — implementation plan

**Branch:** `feat/post-launch-analytics-consent`  
**Baseline main:** `1c022f8490ba9ec359850d3d606b03ab165b54dd`  
**Status:** Architecture ready — awaiting Rubio credential input (no invented IDs).

## Goals

1. GTM as orchestration layer  
2. GA4 through GTM only (no direct gtag)  
3. Consent Mode v2 preference UI  
4. Commercial conversion events  
5. Search Console verification readiness (meta token env)  
6. Lead-path validation (WhatsApp / email; no forms)

## Non-goals / hard stops

- Do not invent GTM / GA4 / Search Console IDs  
- Do not deploy production  
- Do not modify DNS  
- Do not merge until Rubio provides credentials and approves  
- No Meta Pixel / LinkedIn Insight / advertising tags  
- No copy/IA/visual redesign beyond consent UI necessities  

## Architecture

| Layer | Location | Behavior when IDs absent |
|-------|----------|--------------------------|
| Config | `lib/analytics/config.ts` | Tracking inert |
| Host gate | `lib/analytics/hostGate.ts` | Non-prod hosts never track |
| Consent | `lib/analytics/consent.ts` + `CookieBanner` | Preference model; analytics default denied |
| Events | `lib/analytics/events.ts` + trackers | No `dataLayer` push without gates |
| GTM load | `components/analytics/GtmBootstrap.tsx` | Script inject only after analytics consent + prod host + `NEXT_PUBLIC_GTM_ID` |
| GSC meta | `app/layout.tsx` metadata.verification | Only if `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` set |

## Env vars (Rubio-supplied)

```text
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_GA4_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
```

## Rollout sequence (after credentials)

1. Rubio creates GTM + GA4; maps GA4 via GTM (not direct site gtag)  
2. Rubio supplies IDs to Vercel **production** env only (preview may stay empty)  
3. Rubio completes Search Console DNS verification (see SEARCH_CONSOLE_RUNBOOK.md)  
4. Preview QA with temporary preview env **only if** host gate temporarily tested via unit tests (preview hosts must remain tracking-off)  
5. Human approve → merge → production deploy (separate mandate)  

## Phase audit (pre-change on main)

```text
GTM_PRESENT=false
GA4_PRESENT=false
GOOGLE_SITE_VERIFICATION_PRESENT=false
COOKIE_BANNER_MODE=essential_only → replaced by consent preference model
CONTACT_INTAKE_MODE=whatsapp_and_email
DIAGNOSTIC_INTAKE_MODE=whatsapp_and_email
```
