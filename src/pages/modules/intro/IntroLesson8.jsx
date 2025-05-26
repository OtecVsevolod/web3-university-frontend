import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson8() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      lessonKey="intro_lesson8"
      prevLink="/intro/lesson7"
      nextLink="/intro/lesson9"
      moduleLink="/intro"
    />
  );
}
