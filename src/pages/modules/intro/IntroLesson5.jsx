import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson5() {
  return (
    <LessonTemplate
      module="intro"
      lessonKey="lesson5"
      prevLink="/intro/lesson4"
      nextLink="/intro/lesson6"
      moduleLink="/intro"
    />
  );
}
