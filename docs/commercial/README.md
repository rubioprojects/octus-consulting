# Octus commercial source of truth

**Catalog status:** `HUMAN_APPROVED` · `CONSUMABLE_BY_WEBSITE`  
**Control principle:** `PRESERVE_RUBIO_ORIGINAL_SEVEN_AREAS`  
**Catalog version:** `V1.1-SEVEN-AREAS`  
**Control issue:** https://github.com/rubioprojects/octus-consulting/issues/13  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/15  
**Date:** 2026-08-02  

## Ownership

This tree is the **official public commercial catalog and sales-system source**.  
The website may consume the approved catalog, service descriptions and claim-register entries marked for website use.

Public commercial structure = **seven original Octus areas**.

## Artifact lifecycle

| Artifact class | Status |
|---|---|
| Public taxonomy and catalog (`public-catalog/`) | `HUMAN_APPROVED` + `CONSUMABLE_BY_WEBSITE` |
| Service names and plain-language descriptions | `CONSUMABLE_BY_WEBSITE` |
| Playbooks (`playbooks/`) | `REQUIRES_MILLA_REVIEW` |
| Institutional deck content (`deck/` content) | `REQUIRES_RUBIO_REVIEW` |
| Storyboard and visual brief | `REQUIRES_RUBIO_REVIEW` |
| Case studies, metrics and client logos | `HUMAN_EVIDENCE_REQUIRED` |
| Pricing | `INTERNAL_ONLY` |

## Layout

| Path | Content |
|------|---------|
| `public-catalog/` | Approved catalog V1.1 md/json, reconciliation, decision register, claim register |
| `playbooks/` | Area playbooks for Milla review |
| `system/` | Question bank, cross-sell, red flags, templates |
| `deck/` | Deck content, storyboard, modules, one-pager list |

## Terminals

- `OCTUS_PUBLIC_CATALOG_HUMAN_APPROVED`
- `OCTUS_PUBLIC_CATALOG_CONSUMABLE_BY_WEBSITE`

## Not in scope here

Website code · deploy · DNS · PPTX/PDF finals · public price publication · case/metrics approval
