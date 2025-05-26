import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../LessonStyle.css';

export default function LessonTemplate({ module, lessonKey, prevLink, nextLink, moduleLink }) {
  const { t } = useTranslation();
  const lang = t('lang');

  const titleKey = `${lessonKey}_title`;

  // Генерация параграфов до тех пор, пока ключ существует
  const generateParagraphKeys = () => {
    const keys = [];
    let index = 1;
    let key = `${lessonKey}_paragraph${index}`;
    while (t(key, { defaultValue: '' }) !== '') {
      keys.push(key);
      index++;
      key = `${lessonKey}_paragraph${index}`;
    }
    return keys;
  };

  const paragraphKeys = generateParagraphKeys();

  return (
    <>
      <div className="top-buttons">
        <Link to={moduleLink} className="top-return-button">Вернуться</Link>
        <Link to="/" className="home-icon-button" title="На главную">
          <span role="img" aria-label="home">🏠</span>
        </Link>
      </div>

      <div className="lesson-container">
        <h2>
          <Trans
            i18nKey={titleKey}
            components={{
              highlight: <span className="highlight" />,
              a: <a target="_blank" rel="noopener noreferrer" />
            }}
          />
        </h2>

        {paragraphKeys.map((key) => (
          <p key={key}>
            <Trans
              i18nKey={key}
              components={{
                highlight: <span className="highlight" />,
                a: <a target="_blank" rel="noopener noreferrer" />
              }}
            />
          </p>
        ))}

        <div className="navigation-buttons">
          <Link to={prevLink} className="nav-button">{t('back_button')}</Link>
          <Link to={nextLink} className="nav-button">{t('next_button')}</Link>
        </div>
      </div>
    </>
  );
}

