import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function EthereumLesson2() {
  return (
    <LessonTemplate
      module="ethereum"
      lessonKey="lesson2"
      prevLink="/modules/ethereum/lesson1"
      nextLink="/modules/ethereum/lesson3"
      moduleLink="/modules/ethereum"
    />
  );
}
