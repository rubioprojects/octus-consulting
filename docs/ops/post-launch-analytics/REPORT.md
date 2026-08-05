# Post-launch analytics — architecture report

**Terminal:** `POST_LAUNCH_ANALYTICS_ARCHITECTURE_READY_FOR_CREDENTIALS`  
**Date:** 2026-08-05  
**Repo:** `rubioprojects/octus-consulting`  
**Branch:** `feat/post-launch-analytics-consent`  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/18  
**Base main:** `1c022f8490ba9ec359850d3d606b03ab165b54dd`  
**Starting correction head:** `b3a25d659ac4959119b7be2b00bbb3aac4030855`

## Sol correction gate (this commit)

| Blocker | Result |
|---------|--------|
| Diagnostic overclassification | PASS — `diagnostic_click` only via `data-octus-event="diagnostic_click"` |
| Post-consent view lost | PASS — dedupe after enqueue; re-eval on `octus:consent-updated` |
| Behavioral tests | PASS — classification + view dispatch (suite > 11) |
| GTM runtime SoT | `NEXT_PUBLIC_GTM_ID` only; GA4 inside GTM |
| Search Console | Domain Property DNS TXT required; meta token not required |

## Validation

| Check | Result |
|-------|--------|
| `npm run test:analytics` | PASS (25) |
| `npm run lint` | PASS (pre-existing img warnings only) |
| `npm run build` | PASS |
| CI | https://github.com/rubioprojects/octus-consulting/actions/runs/31020597592 success @ `6ebd78c` |
| Exact-head preview | `dpl_AxK6oM5zVPSUnQ5bVQAx1DGbJsa9` · https://octus-consulting-ne3m23zxt-axle1.vercel.app · source SHA `6ebd78c65aa87a1c7208a33fe84e263ebc312dfd` |
| Preview noindex | PASS (`X-Robots-Tag: noindex, nofollow`) |
| Preview GTM without env | PASS (absent) |
| Consent screenshots | retained (`docs/ops/evidence/OCTUS_POST_LAUNCH_ANALYTICS_2026-08-05/screenshots/`) — CookieBanner layout unchanged in correction |
| Production / DNS / merge | not touched |

## Human gate

```text
GTM_RUNTIME_ID_REQUIRED=true
GA4_ID_CONFIGURED_INSIDE_GTM=true
SEARCH_CONSOLE_DNS_VERIFICATION_REQUIRED=true
SEARCH_CONSOLE_META_TOKEN_REQUIRED=false
PRODUCTION_TOUCHED=false
DNS_TOUCHED=false
MERGE_PERFORMED=false
AWAITING_SOL_REVIEW=true
```
