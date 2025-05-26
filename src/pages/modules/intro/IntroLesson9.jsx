import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson9() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      lessonKey="intro_lesson9"
      prevLink="/intro/lesson8"
      nextLink="/intro/lesson10"
      moduleLink="/intro"
    />
  );
}
