import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function Lesson2() {
  return (
    <LessonTemplate
      module="zk"
      lessonKey="lesson2"
      prevLink="/zk/lesson1"
      nextLink="/zk/lesson3"
      moduleLink="/zk"
    />
  );
}
