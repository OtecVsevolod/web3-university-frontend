import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './LessonWrapper.css';

export default function FinalTestTemplate({ module, prevLink, moduleLink, translationNamespace }) {
  const { t } = useTranslation(translationNamespace);
  const { t: tShared } = useTranslation('shared');

  const totalQuestions = 5; // можно заменить на 10, если нужно
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
      setCorrectCount(correctCount + 1);
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
        <h2 className="lesson-title">{t(`${translationNamespace}_title`)}</h2>
        <div className="final-result">
          {correctCount >= totalQuestions * 0.6
            ? <p>{t(`${translationNamespace}_result_success`)}</p>
            : <p>{t(`${translationNamespace}_result_fail`)}</p>}
        </div>
        <div className="nav-buttons">
          <Link to={prevLink} className="nav-button">{tShared('back_button')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-container">
      <div className="top-buttons">
        <Link to={moduleLink} className="top-return-button">{tShared('back_to_module')}</Link>
        <Link to="/" className="home-button">🏠</Link>
      </div>

      <h2 className="lesson-title">{t(`${translationNamespace}_title`)}</h2>
      <p className="question-progress">Вопрос {currentQuestion} из {totalQuestions}</p>
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
            : isSelected ? 'selected' : '';

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
          {t(`${translationNamespace}_submit`)}
        </button>
      ) : (
        <button className="submit-button" onClick={handleNext}>
          {currentQuestion === totalQuestions ? 'Показать результат' : 'Следующий вопрос'}
        </button>
      )}
    </div>
  );
}
