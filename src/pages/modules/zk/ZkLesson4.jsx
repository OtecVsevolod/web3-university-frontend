import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function Lesson4() {
  return (
    <LessonTemplate
      module="zk"
      lessonKey="lesson4"
      prevLink="/zk/lesson3"
      nextLink="/zk/lesson5"
      moduleLink="/zk"
    />
  );
}
