import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl">{t('home.title')}</h1>
      <Button>{t('home.cta')}</Button>
    </div>
  );
}
