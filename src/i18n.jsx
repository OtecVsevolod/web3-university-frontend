// src/i18n.jsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './locales/ru/translation.json';
import translationUA from './locales/ua/translation.json';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  ru: { translation: translationRU },
  ua: { translation: translationUA },
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
