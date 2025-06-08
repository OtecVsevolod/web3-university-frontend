import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './FinalTestTemplate.css';

export default function FinalTestTemplate({ module, prevLink, moduleLink, translationNamespace, totalQuestions }) {
  const { t } = useTranslation(translationNamespace);
  const { t: tShared } = useTranslation('shared');

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const questionKey = `question${currentQuestion}`;
  const correctAnswer = t(`${questionKey}_correct`);
  const isCorrect = selected === correctAnswer;

  const handleSubmit = () => {
    if (selected === null) return;
    if (selected === correctAnswer) {
      setCorrectCount((prev) => prev + 1);
    }
    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="lesson-container">
        <div className="top-buttons">
          <Link to={moduleLink} className="top-return-button">{tShared('shared_return_button')}</Link>
          <Link to="/" className="home-button">🏠</Link>
        </div>
        <h2 className="lesson-title">{t('title')}</h2>
        <div className="final-result">
          {correctCount >= totalQuestions * 0.90
            ? <p>{t('result_success')}</p>
            : <p>{t('result_fail')}</p>}
          <p>
            <strong>{correctCount}</strong> {tShared('shared_out_of')} <strong>{totalQuestions}</strong>
          </p>
        </div>
        <div className="nav-buttons">
          <Link to={prevLink} className="nav-button">{tShared('shared_finish_final_test')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-container">
      <div className="top-buttons">
        <Link to={moduleLink} className="top-return-button">{tShared('shared_return_button')}</Link>
        <Link to="/" className="home-button">🏠</Link>
      </div>

      <h2 className="lesson-title">{t('title')}</h2>
      <p className="question-progress">
        {tShared('shared_question')} {currentQuestion} {tShared('shared_of')} {totalQuestions}
      </p>
      <p className="question-text">{t(`${questionKey}`)}</p>

      <div className="test-options">
        {[1, 2, 3].map((i) => {
          const optionKey = `${questionKey}_option${i}`;
          const optionValue = `option${i}`;
          const isSelected = selected === optionValue;
          const isAnswer = correctAnswer === optionValue;
          const buttonClass = submitted
            ? isAnswer
              ? 'correct'
              : isSelected
                ? 'incorrect'
                : ''
            : isSelected
              ? 'selected'
              : '';

          return (
            <button
              key={i}
              className={`option-button ${buttonClass}`}
              onClick={() => !submitted && setSelected(optionValue)}
              disabled={submitted}
            >
              {t(optionKey)}
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button className="submit-button" onClick={handleSubmit}>
          {tShared('shared_submit')}
        </button>
      ) : (
        <button className="submit-button" onClick={handleNext}>
          {currentQuestion === totalQuestions
            ? tShared('shared_show_result')
            : tShared('shared_next_question')}
        </button>
      )}
    </div>
  );
}
