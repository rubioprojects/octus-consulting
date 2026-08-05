# Post-launch analytics — architecture report

**Terminal:** `POST_LAUNCH_ANALYTICS_ARCHITECTURE_READY`  
**Date:** 2026-08-05  
**Repo:** `rubioprojects/octus-consulting`  
**Branch:** `feat/post-launch-analytics-consent`  
**Base main:** `1c022f8490ba9ec359850d3d606b03ab165b54dd`

## Phase 1 — Audit (main @ baseline)

| Check | Result |
|-------|--------|
| GTM_PRESENT | false |
| GA4_PRESENT | false |
| GOOGLE_SITE_VERIFICATION_PRESENT | false |
| COOKIE_BANNER_MODE | essential_only (replaced on branch) |
| CONTACT_INTAKE_MODE | whatsapp_and_email |
| DIAGNOSTIC_INTAKE_MODE | whatsapp_and_email |
| Lead forms on /contact /diagnostic | none |
| PREVIEW_NOINDEX_STATE | retained via vercel.json |
| PRODUCTION_INDEXABILITY | robots.txt 200, sitemap.xml 200, no production-wide noindex on apex/www |

## Phase 2–6 — Implemented on branch

- Env-gated GTM orchestration; GA4 ID optional context only (no direct gtag)
- Consent Mode v2 preference UI (Accept all / Reject / Manage)
- Host gate: apex + www only
- Event layer + click/view trackers
- GSC meta readiness via `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- Privacy + Cookie policy updates (honest when IDs absent)

## Validation

| Check | Result |
|-------|--------|
| `npm run test:analytics` | PASS (11) |
| `npm run lint` | PASS (pre-existing img warnings only) |
| `npm run build` | PASS |
| Preview | https://octus-consulting-f8jvyq0bs-axle1.vercel.app (`dpl_8RTMy6zmtSr53QMTut7Fnr5GBrEF`) Ready; `X-Robots-Tag: noindex`; no GTM/verification in HTML without env |
| PR | https://github.com/rubioprojects/octus-consulting/pull/18 |
| Production DNS | not modified |
| Production deploy | not performed |
| Merge | not performed |

## Human gate

```text
GTM_ID_REQUIRED=true
GA4_ID_REQUIRED=true
SEARCH_CONSOLE_TOKEN_REQUIRED=true
PRODUCTION_TOUCHED=false
DNS_TOUCHED=false
MERGE_PERFORMED=false
AWAITING_RUBIO_CREDENTIAL_INPUT=true
```

Rubio next: create GTM+GA4, supply env IDs, complete Search Console DNS steps in SEARCH_CONSOLE_RUNBOOK.md, then approve merge/release under a separate mandate.
