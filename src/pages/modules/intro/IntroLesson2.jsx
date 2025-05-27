import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson2() {
  return (
    <LessonTemplate
      module="intro"
      lessonKey="lesson2"
      prevLink="/intro/lesson1"
      nextLink="/intro/lesson3"
      moduleLink="/intro"
    />
  );
}
