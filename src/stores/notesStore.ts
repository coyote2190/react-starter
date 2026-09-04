import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

type NotesState = {
  notes: Note[];
  addNote: (input: Pick<Note, 'title' | 'content'>) => void;
  updateNote: (id: string, patch: Partial<Pick<Note, 'title' | 'content'>>) => void;
  deleteNote: (id: string) => void;
};

export const useNotesStore = create<NotesState>()(
  devtools(
    persist(
      (set) => ({
        notes: [],

        addNote: (input) =>
          set(
            (state) => ({
              notes: [
                {
                  id: crypto.randomUUID(),
                  createdAt: new Date().toISOString(),
                  ...input,
                },
                ...state.notes,
              ],
            }),
            undefined,
            'notes/add',
          ),

        updateNote: (id, patch) =>
          set(
            (state) => ({
              notes: state.notes.map((note) => (note.id === id ? { ...note, ...patch } : note)),
            }),
            undefined,
            'notes/update',
          ),

        deleteNote: (id) =>
          set(
            (state) => ({
              notes: state.notes.filter((note) => note.id !== id),
            }),
            undefined,
            'notes/delete',
          ),
      }),
      { name: 'notes' },
    ),
    { name: 'notes-store', enabled: import.meta.env.DEV },
  ),
);
