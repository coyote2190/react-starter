# react-starter

A production-ready React starter with strict TypeScript, a single-tool lint/format setup, and CI wired from the first commit.

```bash
pnpm dlx degit coyote2190/react-starter my-app
cd my-app
pnpm install
pnpm dev
```

Or click **Use this template** on GitHub.

## Stack

| Layer | Choice |
|---|---|
| Build | Vite 8 |
| UI | React 19.2 |
| Language | TypeScript (strict + `noUncheckedIndexedAccess`) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Base UI primitives) |
| Routing | React Router v8 (data mode) |
| Server state | TanStack Query |
| Client state | Zustand |
| Forms | React Hook Form + Zod |
| i18n | react-i18next |
| Lint & format | Biome |
| Tests | Vitest + Testing Library + MSW |
| Package manager | pnpm |

**Requires Node >= 22.22** (React Router v8 baseline).

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Dev server |
| `pnpm build` | Type-check then production build |
| `pnpm preview` | Serve the production build locally |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` | Biome: lint + format check + import order |
| `pnpm lint:fix` | Same, writing fixes |
| `pnpm test` | Vitest in watch mode |
| `pnpm test:run` | Vitest once (used in CI) |

## Project structure

```
src/
  components/      shared components (Header, Footer, Loader)
    ui/            shadcn/ui primitives
  layouts/         page shells
  pages/
    <page>/
      index.tsx
      components/  used only by this page
      hooks/       used only by this page
  hooks/           shared hooks
  services/        API clients
  lib/             third-party setup (queryClient, i18n, env)
  context/         cross-cutting context only (theme, auth)
  constants/
  utils/
  types/
```

Two rules keep this from rotting:

**Colocation.** Anything used by a single page lives inside that page's folder. It only moves up to the root when a second page needs it.

**No barrel exports.** Import from the file, not from a folder `index.ts`. Barrels pull the whole folder into the module graph, which slows the dev server, slows tests, and creates silent circular imports. The one exception is `components/ui/`, a leaf folder of dependency-free primitives.

```ts
// yes
import { Button } from '@/components/ui/Button'
import { ModelCard } from './components/ModelCard'

// no
import { Button, ModelCard } from '@/components'
```

## Conventions

- Named exports, no `export default` (better auto-import and rename refactors)
- `@/` alias resolves to `src/`
- Conventional Commits, with gitmoji prefix: `✨ feat: add model filters`
- Environment variables are validated by Zod at startup in `lib/env.ts` — a missing key fails the build, not the runtime

## State management

Server data goes in TanStack Query. Client-only UI state goes in Zustand. The two layers do not know about each other, and **query data is never copied into the store** — that reintroduces exactly the cache-invalidation problem TanStack Query exists to solve.

Context is reserved for stable, low-frequency values: theme, auth, locale.

## Testing

Vitest reuses the Vite config, so the `@/` alias and the React plugin work in tests with no duplicate setup. Testing Library drives the DOM assertions; MSW intercepts network calls so tests never hit a real API.

```bash
pnpm test
```

Playwright for end-to-end is not included yet — add it per project.

## Security

- `engine-strict=true` so a wrong Node version fails at install, not at runtime
- Renovate keeps dependencies current, patch updates auto-merge
- gitleaks runs pre-commit to catch secrets before they reach history
- CSP and security headers are defined in the app, not bolted on later
- An SBOM is generated in CI

## CI

GitHub Actions runs lint, typecheck, test and build in parallel on every push and pull request, with the pnpm store cached.

## Not included on purpose

- **Storybook** — worth adding once you have a component library to document, not before
- **Playwright** — add when the app has flows worth testing end to end
- **A UI kit beyond four shadcn components** — run `pnpm dlx shadcn add <component>` when you need one, rather than carrying code you never use

## License

MIT
