import React from 'react';
import PracticeLessonTemplate from '../PracticeLessonTemplate';
import step7 from '../../../../assets/practice/exchange/step7.png';
import step6 from '../../../../assets/practice/exchange/step6.png';



export default function Lesson2Register() {
  return (
    <PracticeLessonTemplate
      module="practice_exchange"
      lessonKey="lesson2"
      images={[step6, step7]}
      prevLink="/practice/exchange/lesson1"
      nextLink="/practice/exchange/lesson3"
      moduleLink="/practice/exchange"
    />
  );
}
