import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import ICU from 'i18next-icu';

const savedLang = localStorage.getItem('lang') || 'en-US';

i18n
  .use(ICU)
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    },
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    },
    lng: savedLang
  });

export default i18n;
