import { z } from 'zod';
import { apiFetch } from './api';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.email(),
  company: z.object({
    name: z.string(),
  }),
});

const usersSchema = z.array(userSchema);

export type User = z.infer<typeof userSchema>;

export async function fetchUsers(): Promise<User[]> {
  const data = await apiFetch<unknown>('/users');
  return usersSchema.parse(data);
}
