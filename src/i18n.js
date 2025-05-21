import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './i18n/ru.json';
import translationUA from './i18n/ua.json';
import translationEN from './i18n/en.json';
import translationES from './i18n/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: translationRU },
      ua: { translation: translationUA },
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
