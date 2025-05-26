import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Подключаем загрузку переводов с сервера
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', // Язык по умолчанию
    debug: true, // Можно выключить в продакшене

    ns: ['intro/lesson1'], // Можешь указывать любые доступные namespace (имя JSON-файла без расширения)
    defaultNS: 'intro/lesson1', // Основной namespace по умолчанию

    backend: {
      // Путь до файлов переводов
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },

    interpolation: {
      escapeValue: false // HTML-теги типа <highlight> будут работать
    }
  });

export default i18n;