import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  resources: {
    en: {
      translation: {}
    }
  }
});

export default i18n;
