import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

function TradingLesson2() {
  return (
    <LessonTemplate
      module="trading"
      lessonKey="lesson2"
      prevLink="/trading/lesson1"
      nextLink="/trading/lesson3"
      moduleLink="/trading"
    />
  );
}

export default TradingLesson2;