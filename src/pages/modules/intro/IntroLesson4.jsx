import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson4() {
  return (
    <LessonTemplate
      module="intro"
      lessonKey="lesson4"
      prevLink="/intro/lesson3"
      nextLink="/intro/lesson5"
      moduleLink="/intro"
    />
  );
}
