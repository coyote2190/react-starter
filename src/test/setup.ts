import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';

// Node >= 22 ships an experimental global `localStorage` that resolves to
// `undefined` unless `--localstorage-file` is passed, and it shadows the
// implementation jsdom would otherwise expose. Install a small in-memory
// Storage polyfill when a working `localStorage` isn't available.
function hasWorkingLocalStorage(): boolean {
  try {
    return typeof globalThis.localStorage?.clear === 'function';
  } catch {
    return false;
  }
}

if (!hasWorkingLocalStorage()) {
  class MemoryStorage implements Storage {
    #store = new Map<string, string>();

    get length(): number {
      return this.#store.size;
    }

    clear(): void {
      this.#store.clear();
    }

    getItem(key: string): string | null {
      return this.#store.has(key) ? (this.#store.get(key) as string) : null;
    }

    key(index: number): string | null {
      return [...this.#store.keys()][index] ?? null;
    }

    removeItem(key: string): void {
      this.#store.delete(key);
    }

    setItem(key: string, value: string): void {
      this.#store.set(key, String(value));
    }
  }

  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: new MemoryStorage(),
  });
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
});

afterEach(() => {
  cleanup();
});
