# People Visual Treatment — Implementation Report

**Mission:** `OCTUS_PEOPLE_VISUAL_TREATMENT_UPDATE`  
**Date:** 2026-07-21  
**Base:** `feat/wave4-people-trust-implementation` @ `4216a2e` (PR #6)  
**Tip SHA:** `1e913d1` · **PR:** https://github.com/rubioprojects/octus-consulting/pull/9  
**Preview:** https://octus-consulting-m3tc5znt3-axle1.vercel.app  
**Policy:** CSS-only presentation · no AI · no facial retouch · identity preserved  

---

## Outcome

Unified advisory-firm portrait system on `/team`:

| Treatment | Implementation |
|-----------|----------------|
| Grayscale | `filter: grayscale(1)` on `.team-card-photo` |
| Contrast | Uniform `contrast(1.07) brightness(1.02)` — CSS only |
| Circular mask | Existing `border-radius: 9999px` + `overflow: hidden` |
| Consistent crop | `object-fit: cover` + slight `scale(1.02)` |
| Centered faces | Existing `photoPosition` with micro-tunes (crop only) |
| Institutional border | Dual ring: slate edge + soft navy outer hairline |

## Explicitly unchanged

- Names, titles, bios  
- Roster / `publish` flags / group architecture  
- Photo asset files (no pixel editing)  

## photoPosition micro-tunes (centering only)

| Person | Before | After |
|--------|--------|-------|
| Rubio Teixeira | 50% 28% | 50% 30% |
| Esther Vendrami | 50% 28% | 50% 45% |
| Larissa Carvalho | 50% 30% | 50% 38% |
| Milla Ludovico | 50% 28% | 50% 36% |

## Human review

See `HUMAN_REVIEW_CHECKLIST.md` in this folder.
