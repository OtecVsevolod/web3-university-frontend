import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LessonWrapper from '../../../components/LessonWrapper';

export default function Lesson1() {
  const { t } = useTranslation();

  return (
    <LessonWrapper
      title="ethereumModule.lesson1.title"
      returnTo="/modules/ethereum"
    >
      <Trans
        i18nKey="ethereumModule.lesson1.text"
        components={{ highlight: <span className="highlight" /> }}
      />

      <p>Сравнение с Биткоином:</p>
      <ul>
        <li><span className="highlight">BTC</span> — цифровое золото, <span className="highlight">ETH</span> — топливо для программ</li>
        <li>BTC = только переводы, ETH = умные контракты и приложения</li>
      </ul>

      {/* Кнопки Назад / Далее */}
      <div className="lesson-nav">
        <Link to="/modules/ethereum" className="nav-button left">{t('back_button')}</Link>
        <Link to="/modules/ethereum/lesson2" className="nav-button right">{t('next_button')}</Link>
      </div>
    </LessonWrapper>
  );
}
