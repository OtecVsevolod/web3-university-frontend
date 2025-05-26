import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson5() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      lessonKey="intro_lesson5"
      prevLink="/intro/lesson4"
      nextLink="/intro/lesson6"
      moduleLink="/intro"
    />
  );
}
