# Route inventory — human rescreen polish

Starting HEAD: `ea97f1f0196dc6ad35302d88c4510aa5ae2eae42`

## Preserve

- 20 existing service routes  
- 39 services / 34 families / 11 deep routes  
- 33 Insights articles  
- Contact route live (nav removal only)  
- `/markets` label Industries  

## Create

- `/markets/technology`  
- `/markets/forex`  

## Redirect

- `/intelligence` → `/insights` (308 permanent via vercel.json)  
- Remove standalone indexable Intelligence page  

## Sitemap deltas

- Remove `/intelligence`  
- Add `/markets/technology`, `/markets/forex`  
- Keep `/insights` + 33 article URLs  
