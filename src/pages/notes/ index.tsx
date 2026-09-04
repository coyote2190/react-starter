import { useTranslation } from 'react-i18next';
import { useNotesStore } from '@/stores/notesStore';
import { NoteCard } from './components/NoteCard';
import { NoteForm } from './components/NoteForm';

export const NotesPage = () => {
  const { t } = useTranslation();
  const notes = useNotesStore((state) => state.notes);

  return (
    <section className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="font-bold text-3xl tracking-tight">{t('notes.title')}</h1>
        <p className="text-muted-foreground">{t('notes.description')}</p>
      </div>

      <NoteForm />

      {notes.length === 0 ? (
        <p className="rounded-lg border border-dashed p-8 text-center text-muted-foreground text-sm">
          {t('notes.empty')}
        </p>
      ) : (
        <div className="space-y-3">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </section>
  );
};
