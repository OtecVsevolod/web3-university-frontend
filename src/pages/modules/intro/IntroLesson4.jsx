import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson4() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      lessonKey="intro_lesson4"
      prevLink="/intro/lesson3"
      nextLink="/intro/lesson5"
      moduleLink="/intro"
    />
  );
}
