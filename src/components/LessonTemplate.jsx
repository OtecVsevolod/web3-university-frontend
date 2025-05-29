import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../LessonStyle.css';

export default function LessonTemplate({ module, lessonKey, prevLink, nextLink, moduleLink }) {
  const namespace = `${module}/lesson`;
  const { t, i18n } = useTranslation(namespace, { useSuspense: false });
  const { t: tShared } = useTranslation('shared', { useSuspense: false });

  const titleKey = `${module}_${lessonKey}_title`;

  const generateParagraphKeys = () => {
    const keys = [];
    let i = 1;
    while (t(`${module}_${lessonKey}_paragraph${i}`, { defaultValue: '' }) !== '') {
      keys.push(`${module}_${lessonKey}_paragraph${i}`);
      i++;
    }
    return keys;
  };

  const paragraphKeys = generateParagraphKeys();

  return (
    <>
      <div key={i18n.language} className="top-buttons">
        <Link to={moduleLink} className="top-return-button">
          {tShared('shared_return_button')}
        </Link>
        <Link to="/" className="home-icon-button" title="На главную">🏠</Link>
      </div>

      <div className={`lesson-container ${module}-background`}>
        <h2>
          <Trans i18nKey={titleKey} ns={namespace} components={{ highlight: <span className="highlight" /> }} />
        </h2>

        {paragraphKeys.map((key) => (
          <p key={key}>
            <Trans
              i18nKey={key}
              ns={namespace}
              components={{
                highlight: <span className="highlight" />,
                a: <a target="_blank" rel="noopener noreferrer" />,
              }}
            />
          </p>
        ))}

        <div className="navigation-buttons">
          <Link to={prevLink} className="nav-button">
            {tShared('shared_back_button')}
          </Link>
          <Link to={nextLink} className="nav-button">
            {tShared('shared_next_button_alt')}
          </Link>
        </div>
      </div>
    </>
  );
}
