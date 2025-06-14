import React from 'react';
import PracticeLessonTemplate from '../PracticeLessonTemplate';
import step1 from '../../../../assets/practice/exchange/step1.png';
import step2 from '../../../../assets/practice/exchange/step2.png';
import step3 from '../../../../assets/practice/exchange/step3.png';
import step4 from '../../../../assets/practice/exchange/step4.png';
import step5 from '../../../../assets/practice/exchange/step5.png';



export default function Lesson1Register() {
  return (
    <PracticeLessonTemplate
      module="practice_exchange"
      lessonKey="lesson1"
      images={[step1, step2, step3, step4, step5]}
      prevLink="/practice/exchange"
      nextLink="/practice/exchange/lesson2"
      moduleLink="/practice/exchange"
    />
  );
}
