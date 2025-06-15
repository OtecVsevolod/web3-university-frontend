import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

function TradingLesson4() {
  return (
    <LessonTemplate
      module="trading"
      lessonKey="lesson4"
      prevLink="/trading/lesson3"
      nextLink="/trading/lesson5"
      moduleLink="/trading"
    />
  );
}

export default TradingLesson4;
