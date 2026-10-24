# Insights (posts) — fluxo editorial

Este repositório é **público**. Nunca incluir segredos, nomes ou dados de clientes, nem material interno de ferramentas de bastidor.

## Onde os posts vivem
- Conteúdo publicado: array `posts` em `lib/posts.ts` (campos: `slug`, `title`, `date`, `category`, `author`, `excerpt`, `content` em markdown, `related`, `cta`).
- Governança de publicação: `lib/insightsPublication.ts`. Todo `slug` precisa de um status (`PUBLISH_CURRENT`, `PUBLISH_HISTORICAL_WITH_UPDATE`, `EDITORIAL_COMMENTARY`, `HOLD_NOT_PUBLIC`). Tema de lei vigente sem fonte primária = `HOLD_NOT_PUBLIC`.
- Rotas: `/insights` (hub) e `/insights/[slug]` (estático).

## Rascunhos
- Rascunhos **não** entram neste repositório até a aprovação do dono. O texto fica fora do repo.
- `docs/content/post-template.md` é só o molde de campos (sem texto real).
- `docs/content/drafts/` fica reservada para metadados de pauta sem conteúdo sensível.

## Fluxo
1. Pauta (tema, categoria, fontes primárias previstas).
2. Rascunho (IA permitida) com fontes primárias listadas.
3. Revisão humana do dono (linguagem e jurídico).
4. Aprovado: entrada em `lib/posts.ts` + status em `lib/insightsPublication.ts`, em PR draft.
5. Preview Vercel conferido pelo dono.
6. **Publicação só com OK explícito do dono** (merge na `main` = produção).

## Checklist de SEO
- Título ≤ 60 caracteres; `excerpt` ≤ 155; um único H1.
- Links internos via `related`; fontes primárias com data de acesso.
- JSON-LD (`ArticleJsonLd`) e sitemap já são automáticos.
- Sem promessa de resultado; aviso de "não é aconselhamento jurídico" quando houver tema regulatório.
