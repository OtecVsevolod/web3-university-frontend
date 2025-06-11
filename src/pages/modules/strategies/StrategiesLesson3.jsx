import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function Lesson3() {
  return (
    <LessonTemplate
      module="strategies"
      lessonKey="lesson3"
      prevLink="/strategies/lesson2"
      nextLink="/strategies/lesson4"
      moduleLink="/strategies"
    />
  );
}
