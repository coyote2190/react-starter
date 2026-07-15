import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import pluginPromise from 'eslint-plugin-promise';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist', '**/node_modules/', 'eslint.config.mjs', '**/coverage/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      perfectionist,
      promise: pluginPromise
    },
    rules: {
      // TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: true,
          classes: true,
          variables: true,
          typedefs: true
        }
      ],
      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: false
        }
      ],
      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Native import rules disabled to avoid conflicts with perfectionist
      'import/no-unresolved': 'off',
      'import/no-named-as-default': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: false,
          internalPattern: ['^(@|components|utils|hooks|contexts)(/.*|$)'],
          customGroups: [
            { groupName: 'react', elementNamePattern: '^react' },
            { groupName: 'style', elementNamePattern: '\\.(css|scss)$' }
          ],
          groups: [
            'react',
            ['value-builtin', 'value-external'],
            ['value-internal', 'type-internal'],
            ['side-effect', 'side-effect-style'],
            ['type-parent', 'value-parent'],
            ['type-sibling', 'value-sibling', 'type-index', 'value-index'],
            'style',
            'unknown'
          ],
          newlinesBetween: 'ignore'
        }
      ],
      'perfectionist/sort-exports': ['error', { type: 'natural', order: 'asc' }],
      'perfectionist/sort-objects': ['warn', { type: 'alphabetical', order: 'asc', ignoreCase: false }],
      // Promises
      'promise/always-return': 'warn',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/catch-or-return': 'warn',
      'promise/no-nesting': 'warn',
      'promise/no-new-statics': 'error',
      'promise/no-return-in-finally': 'warn',
      'promise/valid-params': 'warn'
    }
  }
);
