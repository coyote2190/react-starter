import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNotesStore } from '@/stores/notesStore';
import { type NoteFormValues, noteFormSchema } from '../noteSchema';

export const NoteForm = () => {
  const { t } = useTranslation();
  const addNote = useNotesStore((state) => state.addNote);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NoteFormValues>({
    resolver: zodResolver(noteFormSchema),
    defaultValues: { title: '', content: '' },
  });

  const onSubmit = (values: NoteFormValues) => {
    addNote(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="title">{t('notes.form.title')}</Label>
        <Input
          id="title"
          placeholder={t('notes.form.titlePlaceholder')}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'title-error' : undefined}
          {...register('title')}
        />
        {errors.title && (
          <p id="title-error" role="alert" className="text-destructive text-sm">
            {errors.title.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">{t('notes.form.content')}</Label>
        <Textarea
          id="content"
          rows={3}
          aria-invalid={Boolean(errors.content)}
          aria-describedby={errors.content ? 'content-error' : undefined}
          {...register('content')}
        />
        {errors.content && (
          <p id="content-error" role="alert" className="text-destructive text-sm">
            {errors.content.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {t('notes.form.submit')}
      </Button>
    </form>
  );
};
