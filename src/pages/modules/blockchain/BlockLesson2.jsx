import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function BlockLesson2() {
  return (
    <LessonTemplate
      module="blockchain"
      lessonKey="lesson2"
      prevLink="/blockchain/lesson1"
      nextLink="/blockchain/lesson3"
      moduleLink="/blockchain"
    />
  );
}
