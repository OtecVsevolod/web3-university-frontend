import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson2() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      lessonKey="intro_lesson2"
      prevLink="/intro/lesson1"
      nextLink="/intro/lesson3"
      moduleLink="/intro"
    />
  );
}
