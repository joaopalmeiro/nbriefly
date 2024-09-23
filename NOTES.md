# Notes

- https://github.com/tuxu/nbviewer-app
- TanStack Router:
  - https://tanstack.com/router/latest/docs/framework/react/quick-start
  - https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#dynamic-route-segments
  - https://tanstack.com/router/latest/docs/framework/react/guide/navigation#dynamic-links
  - https://tanstack.com/router/latest/docs/framework/react/guide/navigation#usenavigate
  - https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#using-path-params
  - https://tanstack.com/router/latest/docs/framework/react/examples/basic-file-based
  - https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#showing-a-pending-component
- https://github.com/swan-io/chicane
- https://gitlab.com/joaommpalmeiro/template-react-vite
- https://ui.shadcn.com/docs/components/typography
- https://shiki.style/:
  - https://github.com/raycast/ray-so/blob/363fd7fa96a95023d46ed85eb0e4fe5bb852f90c/app/(navigation)/(code)/code.tsx#L16
  - https://github.com/raycast/ray-so/blob/363fd7fa96a95023d46ed85eb0e4fe5bb852f90c/app/(navigation)/(code)/components/HighlightedCode.tsx#L17
  - https://shiki.matsu.io/guide/bundles#fine-grained-bundle
  - https://shiki.matsu.io/guide/sync-usage
  - https://shiki.matsu.io/guide/regex-engines#javascript-regexp-engine-experimental: "The JavaScript engine is more suitable for running in the browser in some cases that you want to control the bundle size."
  - https://shiki.matsu.io/references/engine-js-compat#report-summary
- https://github.com/developit/redaxios
- https://biomejs.dev/guides/configure-biome/#share-a-configuration-file:
  - "The entries defined in `extends` are resolved from the path where the `biome.json` file is defined. They are processed in the order they are listed, with settings in later files overriding earlier ones."
- https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- https://www.reddit.com/r/HTML/comments/jthr13/should_i_use_input_typesubmit_or_button/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url
- TanStack Form:
  - https://tanstack.com/form/latest/docs/overview
  - https://tanstack.com/form/latest/docs/framework/react/quick-start
  - https://tanstack.com/form/latest/docs/overview#enough-talk-show-me-some-code-already
- Zod:
  - https://github.com/jupyter/nbformat/blob/main/nbformat/v4/nbformat.v4.schema.json
  - https://github.com/colinhacks/zod#strict: "By default Zod object schemas strip out unrecognized keys during parsing."
  - https://zod.dev/?id=literals
  - https://zod.dev/?id=unions
- https://github.com/quantizor/markdown-to-jsx

## Commands

```bash
npm install \
@tanstack/react-router \
react \
react-dom \
zod \
&& npm install -D \
@biomejs/biome \
@joaopalmeiro/biome-react-config \
@tanstack/router-plugin \
@types/react \
@types/react-dom \
@vitejs/plugin-react \
npm-run-all2 \
sort-package-json \
vite
```

```bash
rm -rf node_modules/ && npm install
```

```bash
npm create @tanstack/router@latest demo
```

## Snippets

- https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#using-router-context

```ts
export const fetchPosts = async () => {
  const res = await fetch(`/api/posts?page=${pageIndex}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};
```
