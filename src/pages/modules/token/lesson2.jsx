import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function TokenLesson2() {
  return (
    <LessonTemplate
      module="token"
      lessonKey="lesson2"
      prevLink="/token/lesson1"
      nextLink="/token/lesson3"
      moduleLink="/token"
    />
  );
}
