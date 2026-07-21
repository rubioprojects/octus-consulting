# Human Review Checklist — People Visual Treatment

Preview `/team` after PR opens. Dismiss cookie once.

## Must PASS

- [ ] All published portraits render **grayscale** (no color outliers)
- [ ] Frames are **circular**, same diameter within desktop / mobile breakpoints
- [ ] Faces are **centered** in crop (crown/chin not clipped for published set)
- [ ] Contrast looks **uniform** across the seven published cards
- [ ] Subtle **institutional border/ring** present; not SaaS glow
- [ ] Names / titles / bios / band order **unchanged** vs PR #6
- [ ] No AI-generated faces; source photos recognizable as same people
- [ ] LinkedIn cards still open correctly

## Spot-check

| Band | Focus |
|------|--------|
| Leadership | Rubio, Maria Cristina |
| Core Specialists | Esther, Caroline, Larissa, Milla |
| Operations | Bianca |
| Mobile 390px | Diameter + title wrap |

## Fail → rework

- Color portraits remain  
- Inconsistent circle sizes  
- Heavy beauty filter / morph look  
- Roster or copy drift  

**Terminal:** `OCTUS_PEOPLE_VISUAL_TREATMENT_READY_FOR_HUMAN_REVIEW`
