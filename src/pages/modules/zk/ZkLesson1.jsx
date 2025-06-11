import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function Lesson1() {
  return (
    <LessonTemplate
      module="zk"
      lessonKey="lesson1"
      prevLink="/zk"
      nextLink="/zk/lesson2"
      moduleLink="/zk"
    />
  );
}
