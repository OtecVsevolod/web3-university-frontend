import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson3() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      lessonKey="intro_lesson3"
      prevLink="/intro/lesson2"
      nextLink="/intro/lesson4"
      moduleLink="/intro"
    />
  );
}
