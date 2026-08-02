# Octus commercial source of truth

**Status of pack:** `REQUIRES_RUBIO_REVIEW`  
**Control principle:** `PRESERVE_RUBIO_ORIGINAL_SEVEN_AREAS`  
**Catalog version:** `V1.1-SEVEN-AREAS`  
**Control issue:** https://github.com/rubioprojects/octus-consulting/issues/13  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/15  
**Date:** 2026-08-02  

## Ownership

This tree is the **official public commercial catalog and sales-system source**.  
The website front consumes approved items only (`HUMAN_APPROVED` or `CONSUMABLE_BY_WEBSITE`).  
Do not create a competing taxonomy elsewhere.

Public commercial structure = **seven original Octus areas** (not the six website Solutions).

## Layout

| Path | Content |
|------|---------|
| `public-catalog/` | Catalog V1.1 md/json, reconciliation, decision register, claim register |
| `playbooks/` | Template + seven area playbooks (+ remapped BNK/TAX notes) |
| `system/` | Question bank, cross-sell, red flags, claim rules, templates |
| `deck/` | Deck content, storyboard, visual brief, modules, one-pager list |

## Terminals

- Prior six-area Phase 1: superseded for taxonomy control  
- Current: `OCTUS_ORIGINAL_SEVEN_AREAS_READY_FOR_RUBIO_REVIEW`  
- Commercial system pack: `OCTUS_COMMERCIAL_SYSTEM_READY_FOR_RUBIO_AND_MILLA_REVIEW` (still `REQUIRES_RUBIO_REVIEW`)  

## Not in scope here

Website code · deploy · DNS · PPTX/PDF finals · internal price publication · merge of PR #15 · `HUMAN_APPROVED` / `CONSUMABLE_BY_WEBSITE`
