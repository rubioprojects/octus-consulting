# Octus — Final Visual System

**Document ID:** `OCTUS_FINAL_VISUAL_SYSTEM`  
**Parent:** [OCTUS_FINAL_ART_DIRECTION_BOARD.md](./OCTUS_FINAL_ART_DIRECTION_BOARD.md)  
**Date:** 2026-07-21  
**Mode:** Art direction — no implementation in this mission

---

## 1. Brand constants (official)

| Token | Hex | Role |
|-------|-----|------|
| Symbol blue | `#0065FF` | Mark / identity accent |
| Primary chrome | `#0052C4` | Buttons, links, short brand titles |
| Blue light | `#42A1FF` | Dark-surface accents, icons on navy |
| Navy | `#0B1220` | Primary environment (heroes, rail, footer, Intelligence authority) |
| Charcoal | `#2B2B2B` | Wordmark on light; strong body |
| Cream | `#F7F0D4` | Strategic highlight only |
| Red | `#A80606` | Emphasis labels; crisis Remediation only |
| Off-white | `#FAFAFA` / cool elevated | Light section fields |

**Fonts:** Unigeo64 (headings) · Inter (UI/body)

**Assets:** Official Canva Brand Kit masters only — no recoloring, no Pegasus/star/quarantined marks.

---

## 2. Visual grammar (reusable)

### Primitives

| Primitive | Form | Meaning |
|-----------|------|---------|
| **Dual circle / symbol** | Official Octus mark | Identity, watermark, separators |
| **Arcs** | Primary / secondary SVG motifs | Continuity, pathway, atmosphere |
| **Story rail** | 2px vertical blue→navy fade | Strategic narrative on light pages |
| **Identity mark** | Number inside incomplete ring | Six Solutions index |
| **Left accent rail** | 2px vertical on cards | Solution membership; red = crisis |
| **Brand rule** | Horizontal blue fade line | Header / footer / section close |
| **Mesh** | Fine diagonal technical lines | Dark-hero depth only |
| **Cream bar** | Short gradient highlight | Rare punctuation — never full bands |

### Motion vocabulary (restrained)

| Motion | Use | Speed / feel |
|--------|-----|--------------|
| Mesh drift | Dark heroes | Very slow ambient |
| Arc breathe | Heroes + light motifs | Slow scale/rotate |
| Capability marquee | Homepage rail only | ~48s loop |
| Reveal | Section entrances | Soft rise, once |
| Hover lift | Cards | 1–2px max |

Forbidden: SaaS bounce, particle fields, fast tickers, glow stacks, video backgrounds.

---

## 3. Surface map — where grammar appears

### Hero (home + dark PageHero)

| Element | Spec |
|---------|------|
| Field | Navy depth `#070B14` → `#0B1220` |
| Atmosphere | Blue radials (mark blue + primary) |
| Arcs | Secondary motif, masked, opacity ~0.45–0.55 |
| Symbol | Low-opacity watermark (~0.05–0.09) |
| Mesh | Subtle drift |
| Type | White hierarchy |
| Cream | None |
| Red | Eyebrow dot only |

### Solutions (index + hubs)

| Element | Spec |
|---------|------|
| Motifs | Light primary arcs in section background |
| Cards | Shared chrome + identity mark + blue left rail |
| Crisis hub | Red left rail + red identity arc |
| Icons | System OctusIcon set — monochrome blue |
| Cream | Optional thin highlight under “Commercial map” label only |

### Markets

| Element | Spec |
|---------|------|
| Motifs | Arc overlay on cards (intelligence, not decoration) |
| Differentiation | Tone + framing per market (see Art Direction Board §7) |
| Chips | Restrained; not the hero of the card |
| Navy | Optional intro strip — not required on every market page |

### Jurisdictions

| Element | Spec |
|---------|------|
| Story rail | Beside thesis copy |
| Tiers | Institutional / Structured / Tactical labels in blue |
| Cards | Hover lift; no flag kits |
| Arcs | Start/end positions alternating by section |

### Intelligence

| Element | Spec |
|---------|------|
| Authority band | Full navy for pillar coverage |
| Type | White titles; white/72 body |
| Icons | Blue light on translucent marks |
| Arcs | Secondary on navy |
| Insights bridge | Light surface + cream micro-bar optional |

### Footer

| Element | Spec |
|---------|------|
| Field | Navy |
| Lockup | Blue + white, final scale |
| Rule | Blue brand line |
| Symbol | Optional ultra-low watermark |
| Cream / red | None in footer chrome |

---

## 4. Contrast & accessibility floors

| Pairing | Minimum |
|---------|---------|
| Body on light | Charcoal / near-charcoal — avoid soft mid-gray paragraphs |
| Body on navy | White ≥ 72% for long text; 100% for titles |
| Links on light | `#0052C4` on white/elevated |
| Labels | Red on light OK at caption size; never red body paragraphs |

---

## 5. Component recipes (implementation-ready later)

### Header

```
[ Lockup 40–44px ][ gap ≥ 24px ][ quiet nav ][ Discuss CTA ]
bottom: 2px blue brand-rule
dark overlap → navy bar + blue/white lockup
light scroll → light bar + blue/dark lockup
```

### Capability rail

```
navy field | marquee six Solutions | edge fades | non-interactive
NOT red fill | NOT links | NOT secondary nav
```

### Solution card

```
[ identity mark 01–06 ][ optional crisis chip ]
title (navy)
problem (strong)
summary (body contrast)
markets line (secondary)
open → (blue)
left rail: blue | remediation: red
```

### People portrait

```
grayscale | consistent crop | face centered
Leadership: larger, more margin
Specialists: grid, capability label
Operations: same as specialists, quieter label
```

---

## 6. Anti-patterns

| Do not | Why |
|--------|-----|
| Cream full-width section bands | Breaks navy/blue discipline |
| Red capability rail | Promo / alarm; fights CTA |
| Six unrelated card styles | Breaks one-system rule |
| Stock photography in heroes | Dilutes Octus geometry |
| Axle / agent UI on Intelligence | Wrong brand surface |
| Dark wordmark on dark heroes | Legibility failure |
| Restoring legacy catalogue IA | Strategic regression |

---

## 7. Evidence anchors

| Theme | Path |
|-------|------|
| Header / rail | `docs/design/evidence/pr10-final-consolidation/` |
| Brand experience | `docs/design/evidence/brand-experience-refinement/` |
| Official brand | `docs/design/evidence/official-brand-integration/` |
