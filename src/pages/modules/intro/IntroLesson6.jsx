import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson6() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      lessonKey="intro_lesson6"
      prevLink="/intro/lesson5"
      nextLink="/intro/lesson7"
      moduleLink="/intro"
    />
  );
}
