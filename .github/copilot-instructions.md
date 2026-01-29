# Copilot instructions for this repository

Purpose

- This is a small static site (no build step). Help should focus on small, targeted edits and preserving the project's conventions.

Big picture

- Single-page static site: `index.html` is the entry point and loads `script.js` as an ES module.
- `script.js` bootstraps the UI by importing `initModal` from `modal.js` and `initTooltip` from `tooltip.js` and calling them.
- UI behavior is driven by `data-` attributes, e.g. `data-modal` and `data-tooltip`.

Key files and patterns to inspect

- [index.html] contains structure and module script tag; images under `img/`.
- `script.js`: top-level bootstrap, imports and invokes module initializers.
- `modal.js`: default-exported `initModal()` — selects elements by `data-modal` and attaches click listeners.
- `tooltip.js`: default-exported `initTooltip()` — selects `[data-tooltip]` and expects tooltip text in `aria-label`.
- `styles.css` imports `geral.css`, `modal.css`, `tooltip.css` (CSS is modularized).

Conventions and gotchas

- Use ES module semantics (files are imported via `type="module"` in HTML). Avoid adding bundlers or transpilers unless requested.
- Look for `data-` attributes as the primary integration points (examples: `data-modal="abrir"`, `data-modal="container"`, `data-tooltip`).
- Tooltip text is taken from `aria-label` (important for accessibility). When adding tooltips, set `aria-label` on the element.
- Variable and function names are often Portuguese (e.g., `botaoAbrir`, `criarTooltipBox`). Preserve naming style in nearby code for consistency.
- No test harness or CI configured in repo; do not add heavy infra without asking the maintainer.

Editing rules for AI agents

- Small, focused patches only. Edit or add files under project root unless instructed otherwise.
- Preserve existing DOM query selectors and `data-` attribute usage. When changing selectors, update all consumers.
- When adding new UI behaviors, follow the init pattern: export default function `initX()` and call it from `script.js`.
- CSS changes should go into the specific CSS file (`modal.css`, `tooltip.css`, `geral.css`) and be imported via `styles.css`.

Examples

- To add a new modal: create `novoModal.js` that exports `initNovoModal()` and call it from `script.js`.
- To fix tooltip positioning: update `tooltip.js` to compute position, and adjust styles in `tooltip.css`.

If unsure, ask the maintainer for guidance before large refactors.

— End of file
