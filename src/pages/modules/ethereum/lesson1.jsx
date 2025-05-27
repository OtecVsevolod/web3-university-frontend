import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function EthereumLesson1() {
  return (
    <LessonTemplate
      module="ethereum"
      lessonKey="lesson1"
      prevLink="/modules/ethereum"
      nextLink="/modules/ethereum/lesson2"
      moduleLink="/modules/ethereum"
    />
  );
}
