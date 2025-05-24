import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // путь к файлам перевода
    },
    interpolation: {
      escapeValue: false, // React сам экранирует
    },
  });

export default i18n;
