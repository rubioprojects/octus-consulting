# Octus commercial source of truth

**Status of pack:** `REQUIRES_RUBIO_REVIEW`  
**Control issue:** https://github.com/rubioprojects/octus-consulting/issues/13  
**Date:** 2026-08-02  

## Ownership

This tree is the **official public commercial catalog and sales-system source**.  
The website front consumes approved items only (`HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE`).  
Do not create a competing taxonomy elsewhere.

## Layout

| Path | Content |
|------|---------|
| `public-catalog/` | Catalog V1 md/json, decision register, claim register |
| `playbooks/` | Template + area playbooks for Milla |
| `system/` | Question bank, cross-sell, red flags, claim rules, templates |
| `deck/` | Deck content, storyboard, visual brief, modules, one-pager list |

## Terminals

- Phase 1: `OCTUS_PUBLIC_SERVICE_CATALOG_READY_FOR_RUBIO_REVIEW`  
- Phases 2–4: `OCTUS_COMMERCIAL_SYSTEM_READY_FOR_RUBIO_AND_MILLA_REVIEW`  

## Not in scope here

Website code · deploy · DNS · PPTX/PDF finals · internal price publication
