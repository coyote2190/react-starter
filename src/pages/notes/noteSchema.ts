import { z } from 'zod';

export const noteFormSchema = z.object({
  title: z.string().min(1, 'Title is required').max(80),
  content: z.string().min(1, 'Content is required').max(500),
});

export type NoteFormValues = z.infer<typeof noteFormSchema>;
