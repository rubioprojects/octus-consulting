# Octus Consulting — Website

Site oficial da Octus Consulting em Next.js 14.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** CSS classes via `styles/globals.css` — design token system
- **Fonts:** `next/font/google` (Syne + DM Sans)
- **Blog:** Markdown-based — arquivos `.md` em `content/posts/`
- **Hosting:** Netlify (auto-deploy via GitHub)

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Acessa: `http://localhost:3000`

---

## Como fazer o build

```bash
npm install
npm run build
npm run start
```

O build deve completar sem erros antes de qualquer deploy.

---

## Como fazer deploy no Netlify

1. Sobe o código no GitHub (`octus-consulting` repo)
2. No Netlify: **Add new site → Import from Git → GitHub → octus-consulting**
3. Build settings (detectados automaticamente pelo `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
4. Clica **Deploy site**
5. Conecta domínio: Site settings → Domain → Add custom domain → `octusconsulting.com`

---

## Como publicar um post (sem código)

O blog usa **markdown simples** — não MDX com componentes. Para publicar:

### Opção 1 — Pelo GitHub.com (sem instalar nada, funciona no iPad)

1. Vai em `content/posts/` no repositório
2. Clica **Add file → Create new file**
3. Nome do arquivo: `titulo-do-post.md`
4. Conteúdo com frontmatter obrigatório:

```markdown
---
title: "Título do post"
date: "2025-06-01"
category: "Brazil"
summary: "Resumo curto que aparece na listagem."
---

Conteúdo do post em markdown normal.

## Subtítulo

Parágrafo de texto.

- Item 1
- Item 2

**Texto em negrito**
```

5. Clica **Commit new file**
6. Netlify detecta o push e publica em ~60 segundos

### Categorias disponíveis

`Brazil` · `iGaming` · `Fintech` · `Compliance` · `Regulatory`

### Sintaxe de markdown suportada

✅ Títulos (`##`, `###`)
✅ Parágrafos
✅ Negrito (`**texto**`) e itálico (`*texto*`)
✅ Listas (`-` ou `1.`)
✅ Links (`[texto](url)`)
✅ Linha divisória (`---`)

❌ Componentes JSX/React — não suportados (não é MDX)
❌ Tabelas complexas — não estilizadas

---

## Estrutura do projeto

```
app/                    → Páginas (Next.js App Router)
  page.tsx              → Homepage
  about/                → /about
  what-we-do/           → /what-we-do
  regulatory/           → /regulatory
  compliance/           → /compliance
  legal-architecture/   → /legal-architecture
  corporate/            → /corporate
  private-clients/      → /private-clients
  audit/                → /audit
  international-hub/    → /international-hub
  brazil/               → /brazil (fora do nav)
  insights/             → /insights (blog)
  insights/[slug]/      → /insights/post-slug
  careers/              → /careers
  privacy/              → /privacy
  cookies/              → /cookies
  compliance-channel/   → /compliance-channel
  layout.tsx            → Nav + Footer globais

components/
  Nav.tsx               → Navegação (desktop + mobile)
  Footer.tsx            → Rodapé
  CTABlock.tsx          → CTA reutilizável
  ServicePage.tsx       → Template para páginas de serviço

data/
  services.ts           → Dados dos 7 módulos
  home.ts               → Dados da homepage

lib/
  posts.ts              → Leitura de posts markdown

content/posts/          → Posts do blog (.md)
styles/globals.css      → Design tokens + classes CSS
```

---

## Checklist de validação antes de publicar

- [ ] `npm run build` completa sem erros
- [ ] Homepage abre em localhost:3000
- [ ] Nav: dropdown "What we do" funciona
- [ ] Menu mobile funciona em 390px
- [ ] Footer: todos os links navegam corretamente
- [ ] `/regulatory` abre
- [ ] `/insights` lista posts
- [ ] `/insights/igaming-brazil-regulation-2025` abre o post
- [ ] CTA "Start a diagnostic" navega para `/#contact`
- [ ] Deploy Netlify completa sem erro
- [ ] `octus-consulting.netlify.app` abre em browser real

---

## Redes sociais

- LinkedIn: `https://www.linkedin.com/company/octusconsulting/`
- Instagram: `https://www.instagram.com/octusconsulting/`
- X/Twitter: adicionar em `components/Footer.tsx` quando conta for recuperada
