# 🧩 React Starter

Template de démarrage pour applications React, avec Vite, TypeScript, Redux Toolkit, i18n, routing et un socle de tests/qualité déjà configuré.

## 🚀 Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vitejs.dev/)
- [TypeScript 6](https://www.typescriptlang.org/)
- [React Router 8](https://reactrouter.com/) — routing
- [Redux Toolkit](https://redux-toolkit.js.org/) + [Redux Persist](https://github.com/rt2zz/redux-persist) — state management
- [i18next](https://www.i18next.com/) / [react-i18next](https://react.i18next.com/) — internationalisation
- [MSW](https://mswjs.io/) — mock des appels réseau (dev & tests)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) — tests unitaires
- CSS Modules
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [Stylelint](https://stylelint.io/) — qualité de code

## 📦 Prérequis

- Node.js 20+
- npm

## 🏁 Démarrage

```bash
npm install
cp .env.example .env
npm run dev
```

L'application est servie sur [http://localhost:3000](http://localhost:3000).

## 📂 Structure du projet

```
src/
├── assets/       # Images, icônes...
├── components/   # Composants réutilisables
├── config/       # Configuration (i18n, ...)
├── context/      # React contexts (toast, ...)
├── layouts/      # Layouts (MainLayout, ...)
├── mocks/        # Handlers MSW
├── pages/        # Pages de l'application
├── routes/       # Configuration du routing (appRouter)
├── store/        # Store Redux (slices, hooks)
├── testing/      # Utilitaires de test (render, setup)
├── theme/        # Styles globaux
└── types/        # Types globaux (env, vite-env)
```

### Alias d'import

Configurés dans `vite.config.ts` :

```
@/components  @/context  @/hooks  @/layouts
@/pages       @/routes   @/store  @/testing
@/theme       @/utils
```

## 🛠️ Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement (port 3000) |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualise le build de production |
| `npm test` | Lance les tests (Vitest) |
| `npm run test:watch` | Tests en mode watch |
| `npm run test:ui` | Interface UI de Vitest |
| `npm run test:coverage` | Rapport de couverture |
| `npm run lint` / `lint:fix` | Vérifie/corrige le code avec ESLint |
| `npm run lint:css` / `lint:css:fix` | Vérifie/corrige les `.module.css` avec Stylelint |
| `npm run tscheck` | Vérification des types TypeScript |
| `npm run create:component <name>` | Génère un nouveau composant dans `src/components/` |

## 🧱 Génération de composant

```bash
npm run create:component mon-composant
```

Crée `src/components/mon-composant/` avec un `.tsx`, un `.module.css` et les types associés, en PascalCase.

## 🌐 Variables d'environnement

Copier `.env.example` en `.env`. Variable actuelle :

| Variable | Description |
| --- | --- |
| `VITE_ENV` | Environnement courant (`dev`, `prod`, ...), utilisé notamment pour activer/désactiver les Redux DevTools |

## 🔀 State & routing

- Le store Redux est configuré dans `src/store/store.ts` avec persistance (`redux-persist`) du reducer `counter`.
- Les routes sont déclarées dans `src/routes/appRouter.tsx` (React Router, avec `MainLayout` comme layout racine).

## 🧪 Tests

Les tests utilisent Vitest + Testing Library, avec un environnement `jsdom` et un setup dans `src/testing/setup/vitest.setup.tsx`. Les mocks réseau (MSW) sont définis dans `src/mocks/`.
