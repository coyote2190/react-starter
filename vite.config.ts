import react from '@vitejs/plugin-react';
import path from 'path';
import UnfontsRaw from 'unplugin-fonts/vite';
import { defineConfig, UserConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
const Unfonts = UnfontsRaw as unknown as (o?: unknown) => unknown;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    eslint(),
    Unfonts({
      custom: {
        display: 'swap',
        families: [
          {
            local: 'Lato',
            name: 'Lato',
            src: './public/fonts/Lato*',
            transform(font) {
              if (font.basename === 'Lato-Light') font.weight = 300;
              if (font.basename === 'Lato-Regular') font.weight = 400;
              if (font.basename === 'Lato-Medium') font.weight = 500;
              if (font.basename === 'Lato-Semibold') font.weight = 600;
              if (font.basename === 'Lato-Bold') font.weight = 700;
              return font;
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/context': path.resolve(__dirname, './src/context'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/layouts': path.resolve(__dirname, './src/layouts'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/routes': path.resolve(__dirname, './src/routes'),
      '@/store': path.resolve(__dirname, './src/store'),
      '@/testing': path.resolve(__dirname, './src/testing'),
      '@/theme': path.resolve(__dirname, './src/theme'),
      '@/utils': path.resolve(__dirname, './src/utils')
    },
    dedupe: ['react', 'react-dom', 'styled-components']
  },
  server: {
    port: 3000
  },
  test: {
    coverage: {
      exclude: [
        '**/index.ts',
        '**/*.types.ts',
        'vitest.setup.tsx',
        '**/routes/*',
        '**/testing/*',
        '**/src/types/*',
        '**/src/config',
        '**/src/context',
        '**/src/main.tsx',
        '**/src/vite-env.d.ts',
        '**/src/theme',
        '**/src/layouts'
      ],
      include: ['src/**'],
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/testing/setup/vitest.setup.tsx'
  }
} as UserConfig);
