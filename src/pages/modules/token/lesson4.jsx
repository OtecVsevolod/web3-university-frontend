import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function TokenLesson4() {
  return (
    <LessonTemplate
      module="token"
      lessonKey="lesson4"
      prevLink="/token/lesson3"
      nextLink="/token/lesson5"
      moduleLink="/token"
    />
  );
}
