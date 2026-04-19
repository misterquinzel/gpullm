# GPUllm — GPUs para LLMs Locais (2026)

Tabela comparativa interativa de GPUs para rodar Large Language Models localmente, com foco em custo-benefício e desempenho real em tokens por segundo.

## Prévia

| Nível | GPU | VRAM | Modelos suportados | Preço aprox. |
|-------|-----|------|--------------------|--------------|
| Iniciante | Intel Arc B580 | 12 GB | até 13B Q4 | ~US$ 249 |
| Intermediário | RTX 4060 Ti 16 GB | 16 GB | até 14–27B Q4 | ~US$ 350 |
| Intermediário | AMD RX 7900 XTX | 24 GB | até 70B Q4 (Linux) | ~US$ 700 |
| Alto desempenho | RTX 4090 (usada) | 24 GB | até 32B confortável | ~US$ 1.600 |
| Top de linha | RTX 5090 | 32 GB | até 70B Q4 solo | ~US$ 1.999+ |

## Funcionalidades

- **Tema claro/escuro** — alternância manual com persistência via `localStorage`, respeitando `prefers-color-scheme` do sistema
- **Design responsivo** — adaptação para desktop e mobile
- **Zero dependências** — arquivo HTML único e autocontido (apenas Google Fonts externo)
- **Benchmarks reais** — tokens/s para modelos 7–8B, 13–14B e 32B Q4

## Como usar

Abra `gpu_llm_comparison_table.html` diretamente no navegador. Não requer servidor, build ou instalação.

```bash
# ou sirva localmente
npx serve .
```

## Stack com um único arquivo

- HTML semântico + CSS custom properties
- JavaScript vanilla (theme toggle + localStorage)
- Fontes: IBM Plex Sans / IBM Plex Mono

## Licença

MIT
