import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson10() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      lessonKey="intro_lesson10"
      prevLink="/intro/lesson9"
      nextLink="/intro/FinalTestIntro"
      moduleLink="/intro"
    />
  );
}
