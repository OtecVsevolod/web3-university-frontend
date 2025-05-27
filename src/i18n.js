import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(HttpBackend)
  .init({
    fallbackLng: 'ru',
    debug: true,

    // Никакие namespaces вручную не прописываем, всё загружается динамически
    ns: [],
    defaultNS: false,

    interpolation: {
      escapeValue: false, // поддержка HTML-тегов
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // путь к JSON-файлам
    },
  });

export default i18n;
