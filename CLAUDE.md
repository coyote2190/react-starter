# Project instructions

## Commands

| Command | Use |
|---|---|
| `pnpm dev` | Dev server |
| `pnpm lint:fix` | Biome — lint, format, import order |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm test` | Vitest, watch mode |
| `pnpm build` | Type-check then build |

Run `pnpm lint:fix && pnpm typecheck` before considering any change finished.

Package manager is **pnpm**. Never use npm or yarn commands.

## Conventions that differ from defaults

**No barrel exports.** Import from the file, not from a folder `index.ts`. Barrels pull the whole folder into the module graph and create silent circular imports. `components/ui/` is the only exception.

**Named exports only.** Never `export default`, including for pages and layouts.

**Colocation over shared folders.** Anything used by a single page goes in `pages/<page>/components/` or `pages/<page>/hooks/`. It moves to `src/components/` or `src/hooks/` only when a second page needs it. Do not put page-specific code in the shared folders.

**Types live with what produces them.** `User` is in `services/users.ts`, `Note` is in `stores/notesStore.ts`. `src/types/` is for cross-cutting types only — not domain types.

## State

Server data → TanStack Query. Client-only state → Zustand. **Never copy query data into a Zustand store** — it recreates the cache invalidation problem Query exists to solve. To read query data outside a component, use `queryClient.getQueryData`.

Zustand stores are read with selectors (`useStore(s => s.x)`), never destructured whole. Always update immutably — mutating in place produces no re-render.

Context is for stable values only: theme, auth, locale.

## Validation

Zod schemas are the single source of truth for types — derive with `z.infer`, never write the type separately.

API responses are parsed before use. Form input has its own schema, separate from the response schema.

Environment variables are read through `@/lib/env`, never `import.meta.env` directly.

## TypeScript

`strict` plus `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` are on. Handle the `undefined` cases rather than asserting — `!` is a lint error.

Path alias is `@/` for `src/`.

## Accessibility

Interactive elements need an accessible name. Form fields need `aria-invalid` and `aria-describedby` wired to their error message, with `role="alert"` on the message. Labels describe the action a control performs, not its current state.

## Styling

Tailwind v4 only. Theme tokens live in `src/styles/theme.css` under `@theme`. Do not write component styles in CSS files — they belong in `className`.

shadcn/ui components are generated with `pnpm dlx shadcn@latest add <name>`, not hand-written. They use Base UI primitives.

## Commits

Conventional Commits with a gitmoji prefix: `✨ feat: add model filters`. Lefthook formats staged files on commit.

## Before adding a dependency

Ask first. This starter is deliberately small — every dependency is one the project has to carry into every derived project.
