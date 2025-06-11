import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function Lesson1() {
  return (
    <LessonTemplate
      module="strategies"
      lessonKey="lesson1"
      prevLink="/dashboard"
      nextLink="/strategies/lesson2"
      moduleLink="/strategies"
    />
  );
}
