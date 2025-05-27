import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function BlockLesson3() {
  return (
    <LessonTemplate
      module="blockchain"
      lessonKey="lesson3"
      prevLink="/blockchain/lesson2"
      nextLink="/blockchain/lesson4"
      moduleLink="/blockchain"
    />
  );
}
