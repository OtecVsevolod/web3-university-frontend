// src/pages/modules/aboutproject/WhitepaperPage.jsx
import React from 'react';
import LessonTemplate from '../../../components/LessonTemplate';

export default function WhitepaperPage() {
  return (
    <LessonTemplate
      module="aboutproject"
      lessonKey="whitepaper"
      prevLink="/modules/aboutproject/philosophy"
      nextLink="/modules/aboutproject/manifest"
      moduleLink="/aboutproject"
    />
  );
}
