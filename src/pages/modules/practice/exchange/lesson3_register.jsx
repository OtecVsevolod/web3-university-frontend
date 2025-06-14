import React from 'react';
import PracticeLessonTemplate from '../PracticeLessonTemplate';

import step8 from '../../../../assets/practice/exchange/step8.png';
import step9 from '../../../../assets/practice/exchange/step9.png';
import step10 from '../../../../assets/practice/exchange/step10.png';
import step11 from '../../../../assets/practice/exchange/step11.png';
import step12 from '../../../../assets/practice/exchange/step12.png';



export default function Lesson3Receive() {
  return (
    <PracticeLessonTemplate
      module="practice_exchange"
      lessonKey="lesson3"
      images={[step8, step9, step10, step11, step12]}
      prevLink="/practice/exchange/lesson2"
      nextLink="/practice/exchange"
      moduleLink="/practice/exchange"
    />
  );
}
