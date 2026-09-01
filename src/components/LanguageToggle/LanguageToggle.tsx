import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const next = i18n.language === 'fr' ? 'en' : 'fr';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => void i18n.changeLanguage(next)}
      aria-label={t('language.switchTo', { lang: next.toUpperCase() })}
    >
      {next.toUpperCase()}
    </Button>
  );
};
