import React from 'react';
import PracticeLessonTemplate from '../PracticeLessonTemplate';

import step14 from '../../../../assets/practice/exchange/step14.png';
import step15 from '../../../../assets/practice/exchange/step15.png';
import step16 from '../../../../assets/practice/exchange/step16.png';

export default function Lesson4Transfer() {
  return (
    <PracticeLessonTemplate
      module="practice_exchange"
      lessonKey="lesson4"
      images={[step14, step15, step16]}
      prevLink="/practice/exchange/lesson3"
      nextLink="/practice/exchange/lesson5"
      moduleLink="/practice/exchange"
    />
  );
}
