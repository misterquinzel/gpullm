# DESIGN.md — Diretrizes rápidas

Visão: guia técnico com estética editorial-typográfica, legível e eficiente para leitura rápida. Priorizar clareza, tipografia sóbria e um acento de cor para destacar badges/valores chave.

Color strategy: Restrained → neutros com um acento (verde frio) para indicadores de desempenho; paleta secundária para badges (azul, laranja, roxo). Evitar #000 e #fff puros; usar neutrals levemente tingidos.

Typography:
- Body: Sans legível (IBM Plex Sans ou Inter), 16px base, 65–75ch line-length.
- Code / numeric: Monospace para valores e badges (IBM Plex Mono).
- Hierarchy: H1 small uppercase meta, H2 expressive (28px desktop), H3/H4 regular scales.

Layout:
- Container central com largura máxima ~1000px; evitar múltiplos níveis de cartões.
- Tabela responsiva: permitir scroll-x ou fornecer versão empilhada em mobile.

Accessibility:
- Sempre usar landmarks (`<header>`, `<main>`, `<footer>`), `lang` e `meta viewport`.
- Tabela com `caption`, `scope` nos `th` e contraste suficiente para badges.

Motion: mínimo — foco em microinterações não-layout (hover de linha, foco acessível).

Deliverable constraints: manter arquivo HTML standalone com CSS separado; preferir desempenho e cache.
