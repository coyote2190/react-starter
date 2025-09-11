/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: 'dev' | 'qa' | 'prod';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
