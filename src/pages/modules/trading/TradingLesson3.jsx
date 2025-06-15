import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

function TradingLesson3() {
  return (
    <LessonTemplate
      module="trading"
      lessonKey="lesson3"
      prevLink="/trading/lesson2"
      nextLink="/trading/lesson4"
      moduleLink="/trading"
    />
  );
}

export default TradingLesson3;
