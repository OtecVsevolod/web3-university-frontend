import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function BlockLesson1() {
  return (
    <LessonTemplate
      module="blockchain"
      lessonKey="lesson1"
      prevLink="/blockchain"
      nextLink="/blockchain/lesson2"
      moduleLink="/blockchain"
    />
  );
}
