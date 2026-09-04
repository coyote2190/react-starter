import { Pencil, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type Note, useNotesStore } from '@/stores/notesStore';

type NoteCardProps = {
  note: Note;
};

export const NoteCard = ({ note }: NoteCardProps) => {
  const { t } = useTranslation();
  const updateNote = useNotesStore((state) => state.updateNote);
  const deleteNote = useNotesStore((state) => state.deleteNote);

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({ title: note.title, content: note.content });

  const save = () => {
    if (draft.title.trim() === '') return;
    updateNote(note.id, draft);
    setIsEditing(false);
  };

  const cancel = () => {
    setDraft({ title: note.title, content: note.content });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <Card>
        <CardContent className="space-y-3 pt-6">
          <Input
            value={draft.title}
            onChange={(event) => setDraft((d) => ({ ...d, title: event.target.value }))}
            aria-label={t('notes.form.title')}
          />
          <Textarea
            rows={3}
            value={draft.content}
            onChange={(event) => setDraft((d) => ({ ...d, content: event.target.value }))}
            aria-label={t('notes.form.content')}
          />
          <div className="flex gap-2">
            <Button size="sm" onClick={save}>
              {t('notes.save')}
            </Button>
            <Button size="sm" variant="ghost" onClick={cancel}>
              {t('notes.cancel')}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between gap-2 space-y-0">
        <CardTitle className="text-base">{note.title}</CardTitle>
        <div className="flex shrink-0 gap-1">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsEditing(true)}
            aria-label={t('notes.edit')}
          >
            <Pencil className="size-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => deleteNote(note.id)}
            aria-label={t('notes.delete')}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap text-muted-foreground text-sm">{note.content}</p>
      </CardContent>
    </Card>
  );
};
