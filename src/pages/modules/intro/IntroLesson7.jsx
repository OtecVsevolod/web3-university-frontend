import React from 'react';
import { useTranslation } from 'react-i18next';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson7() {
  const { i18n } = useTranslation();

  return (
    <LessonTemplate
      key={i18n.language}
      module="intro"
      lessonKey="intro_lesson7"
      prevLink="/intro/lesson6"
      nextLink="/intro/lesson8"
      moduleLink="/intro"
    />
  );
}
