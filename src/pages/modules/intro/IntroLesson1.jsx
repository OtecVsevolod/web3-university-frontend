import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function IntroLesson1() {
  return (
    <LessonTemplate
      module="intro"
      lessonKey="lesson1"
      prevLink="/intro"
      nextLink="/intro/lesson2"
      moduleLink="/intro"
    />
  );
}
