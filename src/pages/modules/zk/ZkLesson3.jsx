import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function Lesson3() {
  return (
    <LessonTemplate
      module="zk"
      lessonKey="lesson3"
      prevLink="/zk/lesson2"
      nextLink="/zk/lesson4"
      moduleLink="/zk"
    />
  );
}
