import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function Lesson2() {
  return (
    <LessonTemplate
      module="strategies"
      lessonKey="lesson2"
      prevLink="/strategies/lesson1"
      nextLink="/strategies/lesson3"
      moduleLink="/strategies"
    />
  );
}
