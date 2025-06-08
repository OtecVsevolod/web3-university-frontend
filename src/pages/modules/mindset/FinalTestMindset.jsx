import React from 'react';
import FinalTestTemplate from '../../../components/FinalTestTemplate';

export default function FinalTestMindset() {
  return (
    <FinalTestTemplate
      module="mindset"
      translationNamespace="mindset/finalTest"
      totalQuestions={10}
      prevLink="/mindset"
      moduleLink="/mindset"
    />
  );
}
