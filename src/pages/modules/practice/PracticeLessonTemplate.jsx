import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './PracticeStyle.css';

export default function PracticeLesson({ images, textKeys, lessonKey }) {
  const { t } = useTranslation('practice');

  return (
    <div className="practice-lesson-container">
      <div className="practice-gallery">
        {images.map((img, index) => (
          <div key={index} className="practice-image-wrapper">
            <img src={img} alt={`step-${index}`} />
          </div>
        ))}
      </div>

      <div className="practice-text">
        {textKeys.map((key, i) => (
          <p key={i}>
            <Trans i18nKey={`${lessonKey}_paragraph${i + 1}`} components={{ highlight: <span className="highlight" /> }} />
          </p>
        ))}
      </div>
    </div>
  );
}
