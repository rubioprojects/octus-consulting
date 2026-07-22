# INSTITUTIONAL_DEEPENING — Implementation Report

**Terminal:** `OCTUS_INSTITUTIONAL_DEEPENING_READY`  
**Authority:** `OCTUS_BRAND_EXPLORATION_COMPLETE` · Option 1 — Institutional Deepening  
**Date:** 2026-07-21  
**PR:** https://github.com/rubioprojects/octus-consulting/pull/10  
**Branch:** `feat/official-brand-system-integration`  
**SHA:** _(tip after push)_  
**Build:** `npm run build` — **PASS**

---

## Scope

Deepen existing Octus expression. **Not** a redesign. PR10 foundations preserved.

```
ia_changed: false
routes_changed: false
commercial_architecture_changed: false
solutions_taxonomy_changed: false
markets_structure_changed: false
people_roster_changed: false
copy_strategy_changed: false
```

---

## P0 — Symbol system

New structural components (official Brand Kit SVGs only):

| Component | Role |
|-----------|------|
| `OctusSymbolMarker` | Section marker above labels |
| `OctusEditorialDivider` | Symbol + fade rule chapter break |
| `OctusChapterTransition` | Soft watermark + rule between homepage beats |

Applied on: homepage stats / problem / solutions · Solutions index · Intelligence · Markets.

**Rule:** one marker or divider per cluster — not wallpaper.

---

## P0 — Hero B (architectural)

- Fewer competing radials; deeper navy field  
- Dual-axis mesh (quieter, more structural)  
- Arc opacity ↓ (~0.42); watermark ≤ ~5.5%  
- Slower breathe / drift  

Result: more architecture, less decorative noise.

---

## P0 — Typography

- Body → charcoal `#2A303C`  
- `.editorial-numeral` (Unigeo) for stats / Intelligence index  
- Fonts unchanged: Unigeo + Inter  

---

## P1 — Trust layer

`HomeLeadershipTrust` on homepage:

- Rubio Teixeira · Maria Cristina **only**  
- Grayscale + Octus ring  
- Link to `/team` — **not** a directory  

---

## P1 — Intelligence / Markets

- Intelligence: editorial numeral band (01–03 signals) + dark divider  
- Markets: symbol separator strip between sector labels  
- No Axle · no product UI  

---

## Evidence

`docs/design/institutional-deepening/`

| Artifact |
|----------|
| `homepage-desktop.png` / `homepage-mobile.png` |
| `hero-desktop.png` / `hero-mobile.png` |
| `solutions-desktop.png` |
| `intelligence-desktop.png` |
| `team-desktop.png` |
| `footer-desktop.png` |

---

## Human review

- [ ] Symbol markers feel structural (not decorative)  
- [ ] Hero quieter / more architectural  
- [ ] Homepage leadership block appropriate  
- [ ] Intelligence editorial band clear  
- [ ] No IA / roster regressions  
