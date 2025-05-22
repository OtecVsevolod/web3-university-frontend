import React from 'react';
import LessonWrapper from '../../../components/LessonWrapper';
import { useTranslation } from 'react-i18next';

export default function BlockLesson5() {
  const { t } = useTranslation();
  return (
    <LessonWrapper title={t('block_lesson5_title')} background="blockchain">
      <p>{t('block_lesson5_text')}</p>
    </LessonWrapper>
  );
}