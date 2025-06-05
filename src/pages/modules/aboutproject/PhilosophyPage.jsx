// src/pages/modules/aboutproject/PhilosophyPage.jsx
import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function PhilosophyPage() {
  return (
    <LessonTemplate
      module="aboutproject"
      lessonKey="philosophy"
      prevLink="/aboutproject"
      nextLink="/modules/aboutproject/whitepaper"
      moduleLink="/aboutproject"
    />
  );
}
