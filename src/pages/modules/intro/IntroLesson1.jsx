import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonWrapper from '../../../components/LessonWrapper';

export default function IntroLesson1() {
  const { t } = useTranslation();

  return (
    <LessonWrapper>
      <h2>{t('lesson1_title')}</h2>
      <p>{t('lesson1_text')}</p>
    </LessonWrapper>
  );
}
