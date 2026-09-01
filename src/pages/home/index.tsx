import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-2xl space-y-6 py-12 text-center">
      <h1 className="font-bold text-4xl tracking-tight">{t('home.title')}</h1>
      <p className="text-lg text-muted-foreground">{t('home.description')}</p>
      <Button size="lg">
        <Link to="/users">{t('home.cta')}</Link>
      </Button>
    </section>
  );
}
