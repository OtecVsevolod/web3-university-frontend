import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson3() {
  return (
    <LessonTemplate
      module="intro"
      lessonKey="lesson3"
      prevLink="/intro/lesson2"
      nextLink="/intro/lesson4"
      moduleLink="/intro"
    />
  );
}
