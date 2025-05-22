import React from 'react';
import LessonWrapper from '../../../components/LessonWrapper';
import { useTranslation } from 'react-i18next';

export default function BlockLesson4() {
  const { t } = useTranslation();
  return (
    <LessonWrapper title={t('block_lesson4_title')} background="blockchain">
      <p>{t('block_lesson4_text')}</p>
    </LessonWrapper>
  );
}