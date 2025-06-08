import React from 'react';
import FinalTestTemplate from '../../../components/FinalTestTemplate';
import '../../../components/FinalTestTemplate.css';

export default function FinalTestToken() {
  return (
    <FinalTestTemplate
      module="token"
      prevLink="/token"
      moduleLink="/token"
      translationNamespace="token/finalTest"
      totalQuestions={20}
    />
  );
}
