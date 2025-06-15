// lesson1.jsx
import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function TradingLesson1() {
  return (
    <LessonTemplate
      module="trading"
      lessonKey="lesson1"
      prevLink="/trading"
      nextLink="/trading/lesson2"
      moduleLink="/trading"
    />
  );
}
