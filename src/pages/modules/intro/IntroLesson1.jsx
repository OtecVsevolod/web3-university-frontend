import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson1() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      lessonKey="intro_lesson1"
      prevLink="/intro"
      nextLink="/intro/lesson2"
      moduleLink="/intro"
    />
  );
}
