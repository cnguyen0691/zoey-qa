# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x"
import reactDom from "eslint-plugin-react-dom"

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## TODO – Tagger Parity & Project House-Keeping

The new **lite-tagger** plugin provides the first slice of the node-metadata tagging work but is still missing a number of features that exist in the original `babel-plugin-inject-node-metadata.ts` implementation.

Things we still need to implement / clean-up:

1. Iterator mapping support
   - Detect calls to `.map`, `.filter`, `.flatMap`, `.find`, `.reduce`, etc. and tag the resulting JSX nodes with:
     - `data-source-array`
     - `data-source-item`
     - `data-array-index` (inject an index param when missing)
2. ✅ Spread & alias detection _(done)_
   - Alias chains (`const x = y`, `[...cars]`, `.slice()`, etc.) now resolve to the root array before tagging.
3. ✅ Attribute / child expression analysis _(done)_
   - `data-prop-path` now points at the first property path found within each element (or `."` for whole item).
4. ✅ `data-source-module` _(done)_
   - Tag now includes `data-src-module="<import-path>"` or `"local"` when the source is local.
5. ✅ ESLint ignores _(done)_
6. ✅ Streamlined imports _(done)_
7. ✅ React-Router route catalogue _(done)_
   - `listRoutesPlugin` now lives in `plugins/lite-tagger` and is registered via the barrel import.
8. Tests / examples
   - Add representative unit tests that cover iterator mapping, spreads, primitive arrays, SVG/image tagging, and property-path tagging.
9. Documentation
   - Flesh out this README with setup & usage instructions once the above gaps are closed.

> Until the checklist above is completed the tagged build **will not** reach parity with the original `inject-node-metadata` behaviour.

## TODO – Bridge Integration (future)

When we re-enable the live-editing bridge, these are the open questions / improvements to tackle:

1. Namespaced `postMessage` events
   - Adopt a channel prefix for every message, e.g. `bridge:elementClick` instead of plain `elementClick`.
   - Possible channel set: `bridge:*` for runtime editing, `vite:*` for dev-server notifications, `babel:*` for compile-time tagging/errors. We can prepend an overall `dv:` prefix (`dv:bridge:*`) if we need stronger collision-proofing.
   - Define the exact naming convention early so both host and iframe (and any plugins such as `plugin.ts`) can route events deterministically.
2. Single-source conventions
   - Decide whether to keep the home-grown `src/lib/bridge.ts` behaviour or migrate to the conventions of the published `vite-bridge` package (which already provides route & performance tracking hooks).
3. Message schema typing
   - Generate shared TypeScript types (e.g. `bridge/protocol.ts`) so both host and iframe agree on the exact payload shape.
4. Overlay UX polish
   - Improve hover/selection performance; add throttling or `requestAnimationFrame` based updates to reduce jank.
5. Security hardening
   - Restrict `window.postMessage` targets to specific origins in production builds.
6. Test harness
   - Provide a Cypress / Playwright rig that spins up both host & iframe to exercise all bridge events.
