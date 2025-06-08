import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function TokenLesson3() {
  return (
    <LessonTemplate
      module="token"
      lessonKey="lesson3"
      prevLink="/token/lesson2"
      nextLink="/token/lesson4"
      moduleLink="/token"
    />
  );
}
