# Phase 6 — Residual Closure Plan

**Starting HEAD:** `b617338510c030dccc6eac0f03d01e4042ca5532`  
**Date:** 2026-08-04

## R1 — HOME_PUNCTUATION_RESIDUAL_001

| Field | Value |
|---|---|
| Location | `components/system/HomeLeadershipTrust.tsx` |
| Current | `Trust starts with clear accountability — not a directory of faces.` |
| Required (D-014) | `Trust starts with clear accountability, not a directory of faces.` |
| Proof | Full rendered-site scan: em dash = 0, en dash = 0 (no allowlists) |

## R2 — GLOBAL_A11Y_REGION_RESIDUAL_001

| Field | Value |
|---|---|
| Location | `app/layout.tsx` WhatsApp float |
| Defect | Floating control outside landmark (Axe region) |
| Fix | Wrap in `<aside aria-label="WhatsApp contact">` without changing visual geometry or CTA href |
| Proof | Full Axe; region residual closed; no rule suppression |

## R3 — AXE_INCOMPLETE_REVIEW_001

| Field | Value |
|---|---|
| Register | `AXE_INCOMPLETE_DISPOSITION_REGISTER.md` |
| Rule | Every incomplete result classified: false_positive · manual_pass · required_remediation |
| Close | No unclassified incomplete remains |

## Stop rules

No phase reopen. No redesign. No merge / production / rebase / Rubio READY claim.
