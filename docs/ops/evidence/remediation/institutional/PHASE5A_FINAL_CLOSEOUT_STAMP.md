# Phase 5A — Final validation and provenance closeout stamp

**Terminal:** `OCTUS_PHASE5A_FINAL_CLOSEOUT_READY_FOR_SOL_AUDIT`  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/17  
**Return to:** Sol only  

**Not claimed:** Sol hard-gate approval · `READY_FOR_RUBIO_RESCREEN` · merge · production · rebase · Phase 5B · Phase 5C · Phase 6

## Binding

| Field | Value |
|---|---|
| starting HEAD (mandate) | `23bbdb039fba091c7af0674b6b58c0332b12c3d9` |
| Careers application commit | `9e97c13e90ecc4165e969ee04181e8d2a3a9110c` |
| application SHA | `9e97c13e90ecc4165e969ee04181e8d2a3a9110c` |
| immutable preview | https://octus-consulting-nx5t8xtoo-axle1.vercel.app |
| deployment ID | `dpl_C8Zt5mFCF6BaK165cKMt6ELBknKj` |
| deployment Git SHA | `9e97c13e90ecc4165e969ee04181e8d2a3a9110c` |
| final closeout validation | **PASS** · `audit/PHASE5A_FINAL_CLOSEOUT_VALIDATION.json` |
| screenshot manifest | **PASS** · 144 total · provenance conflicts **0** |

## Application mutation (sole authorised)

`app/careers/page.tsx` EOI headline:

> Share your profile for future opportunities.

Replaces position-promise language. Vacancy-free EOI, `talentos@`, indicative stages, mandate geography preserved.

## Hard gates corrected

| Gate | Result |
|---|---|
| CookieBanner dismiss + localStorage + reload persistence | PASS |
| Mobile nav open / button-close / Escape-close | PASS |
| External HTTPS + WhatsApp rel (`noopener`+`noreferrer`) | PASS · 13 HTTPS · 13 WA |
| Team DOM exact count/order/titles/bands/portraits | PASS · 10 cards |
| Services full Phase 4 (desktop+mobile Axe) | PASS · critical 0 · serious 0 |
| Global-system subchecks (machine-readable) | PASS |
| Screenshot provenance (48 recaptured reconciled) | PASS · hashes changed **6** · unchanged **42** |

## Screenshot top-level binding

- `generated_at`: `2026-08-04T01:20:40.929Z`
- `current_application_commit`: `9e97c13e90ecc4165e969ee04181e8d2a3a9110c`
- `current_deployment_id`: `dpl_C8Zt5mFCF6BaK165cKMt6ELBknKj`
- `current_preview_url`: https://octus-consulting-nx5t8xtoo-axle1.vercel.app
- `screenshot_count`: 144
- baseline SHA lock: `8b12fcc88922e6ed07b98dd40da0a27bde71bbf9`

## Gates still blocked

Phase 5B · Phase 5C · Phase 6 · Rubio rescreen · merge · production · rebase

## PR body markers

```
Phase 5A: FINAL_CLOSEOUT_READY_FOR_SOL_AUDIT
visual_evidence_status: PENDING_SOL_PHASE5A_FINAL_AUDIT
acceptance_criteria_passed: false
```
