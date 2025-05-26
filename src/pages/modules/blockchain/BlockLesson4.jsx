import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonWrapper from '../../../components/LessonWrapper';
import { Link } from 'react-router-dom';

export default function BlockLesson4() {
  const { t } = useTranslation();

  return (
    <LessonWrapper title={t('block_lesson4_title')} backTo="/blockchain" background="blockchain">
      <p>{t('block_lesson4_text')}</p>

      <div className="navigation-buttons">
        <Link to="/blockchain/lesson3" className="nav-button">
          {t('back_button') || '← Назад'}
        </Link>
        <Link to="/blockchain/lesson5" className="nav-button">
          {t('next_button') || 'Далее'}
        </Link>
      </div>
    </LessonWrapper>
  );
}
