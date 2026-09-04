import { env } from '@/lib/env';

export type MetaParameterResponse = {
  cfu: string;
  sorption: string;
  traversal: string;
};

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${env.VITE_API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });

  if (!response.ok) {
    throw new ApiError(`Request failed: ${response.statusText}`, response.status);
  }

  return response.json() as Promise<T>;
}
