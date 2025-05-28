import React, { useState } from "react";
import LessonWrapper from "../../../components/LessonWrapper";
import { Link } from "react-router-dom";
import "../../../LessonStyle.css";

function FinalTestWeb3DeFi() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Что такое Web3?",
      options: [
        "Новая версия Wi-Fi",
        "Централизованный интернет",
        "Интернет, в котором ты владеешь своими данными и активами",
        "Социальная сеть нового поколения"
      ],
      correctIndex: 2,
    },
    {
      question: "Зачем нужен DeFi?",
      options: [
        "Для развлечения",
        "Для децентрализованных финансовых операций без банков",
        "Чтобы инвестировать только в NFT",
        "Для создания мемов"
      ],
      correctIndex: 1,
    },
    {
      question: "Что такое DAO?",
      options: [
        "Бот в Телеграме",
        "Децентрализованная автономная организация",
        "Протокол NFT",
        "Майнинг-пул"
      ],
      correctIndex: 1,
    },
    {
      question: "Что позволяет делать Web3-кошелёк?",
      options: [
        "Подключаться к сайтам и взаимодействовать с dApps",
        "Играть в игры",
        "Хранить фото",
        "Создавать Wi-Fi сеть"
      ],
      correctIndex: 0,
    },
    {
      question: "Что такое смарт-контракт?",
      options: [
        "Обычный PDF-документ",
        "Программа, автоматически выполняющая условия без участия человека",
        "Секретный документ на блокчейне",
        "Юридический договор"
      ],
      correctIndex: 1,
    },
  ];

  const current = questions[step];

  const handleAnswer = (index) => {
    setSelected(index);
    if (index === current.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (step + 1 < questions.length) {
      setStep((prev) => prev + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <LessonWrapper>
      {!showResult ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <Link to="/modules/web3defi" className="nav-button">← Вернуться</Link>
            <Link to="/" className="nav-button">🏠</Link>
          </div>

          <h2 className="highlight">Вопрос {step + 1} из {questions.length}</h2>
          <p style={{ fontWeight: 'bold' }}>{current.question}</p>

          <div className="options-list">
            {current.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={
                  selected === null
                    ? "option-button"
                    : i === current.correctIndex
                      ? "option-button correct"
                      : i === selected
                        ? "option-button incorrect"
                        : "option-button disabled"
                }
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>

          {selected !== null && (
            <div style={{ marginTop: "30px", textAlign: "center" }}>
              <button className="nav-button" onClick={handleNext}>
                {step + 1 === questions.length ? "Завершить" : "Следующий вопрос"}
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <h2 className="highlight">Тест завершён!</h2>
          <p>Правильных ответов: <b>{score}</b> из <b>{questions.length}</b></p>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link to="/modules/web3defi" className="nav-button">← Вернуться в модуль</Link>
          </div>
        </>
      )}
    </LessonWrapper>
  );
}

export default FinalTestWeb3DeFi;
