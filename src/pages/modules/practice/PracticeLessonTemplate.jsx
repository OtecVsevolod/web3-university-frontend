import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './PracticeStyle.css';

export default function PracticeLessonTemplate({ module, lessonKey, images, prevLink, nextLink, moduleLink }) {
  const namespace = `${module}/lesson`;
  const { t, i18n } = useTranslation(namespace, { useSuspense: false });
  const { t: tShared } = useTranslation('shared', { useSuspense: false });

  const [selectedImage, setSelectedImage] = useState(null);

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

      <div className="practice-lesson-container">
        <h2>
          <Trans i18nKey={titleKey} ns={namespace} components={{ highlight: <span className="highlight" /> }} />
        </h2>

        {Array.isArray(images) && images.length > 0 && (
          <div className="practice-gallery">
            {images.map((img, index) => (
              <div key={index} className="practice-image-wrapper" onClick={() => setSelectedImage(img)}>
                <img src={img} alt={`step-${index}`} />
              </div>
            ))}
          </div>
        )}

        <div className="practice-text">
          {paragraphKeys.map((key) => (
            <p key={key}>
              <Trans
                i18nKey={key}
                ns={namespace}
                components={{
                  highlight: <span className="highlight" />,
                  a: <a target="_blank" rel="noopener noreferrer" />
                }}
              />
            </p>
          ))}
        </div>

        <div className="navigation-buttons">
          <Link to={prevLink} className="nav-button">
            {tShared('shared_back_button')}
          </Link>
          <Link to={nextLink} className="nav-button">
            {tShared('shared_next_button_alt')}
          </Link>
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="full" className="modal-image" />
        </div>
      )}
    </>
  );
}
