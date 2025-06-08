import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function TokenLesson1() {
  return (
    <LessonTemplate
      module="token"
      lessonKey="lesson1"
      prevLink="/dashboard"
      nextLink="/token/lesson2"
      moduleLink="/token"
    />
  );
}
