import React from 'react';
import LessonWrapper from '../../../components/LessonWrapper';
import { useTranslation } from 'react-i18next';

export default function BlockLesson10() {
  const { t } = useTranslation();
  return (
    <LessonWrapper title={t('block_lesson10_title')} background="blockchain">
      <p>{t('block_lesson10_text')}</p>
    </LessonWrapper>
  );
}