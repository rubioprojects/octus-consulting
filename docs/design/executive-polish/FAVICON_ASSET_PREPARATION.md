# Favicon / logo asset preparation — Brand Signature Final Refinement

**Date:** 2026-07-21  
**Branch:** `feat/brand-signature-final-refinement`  
**Policy:** Symbol-only · no wordmark in tabs · no invented geometry  

---

## Shipped in this PR

| Asset | Source | Notes |
|-------|--------|-------|
| `favicon-16/32/48.png` | `public/logo-symbol.png` | ~14% padding for chrome legibility |
| `favicon.ico` | same | 16+32+48 frames |
| `apple-touch-icon.png` | same | 180² on `#0B1220` tile |
| `icon-192.png` / `icon-512.png` | same | PWA / manifest |

`app/layout.tsx` icon metadata unchanged (paths already correct).

## Still required (Canva)

| Item | Status |
|------|--------|
| Official Octus symbol **SVG** master | `CANVA_ASSET_ACCESS_REQUIRED` |
| Re-export favicon pack from SVG | Follow-up — do not invent paths |
| Social / OG templates | Separate Canva pass |

## Decision

PR #7 + this regeneration pack is **ACCEPT for merge**. Canva SVG remains the final master replacement when accessible — geometry must match `logo-symbol.png`, not a new mark.
