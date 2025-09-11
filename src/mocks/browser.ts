// src/mocks/browser.ts
import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

// Création du worker qui va intercepter les appels réseau
export const worker = setupWorker(...handlers);
