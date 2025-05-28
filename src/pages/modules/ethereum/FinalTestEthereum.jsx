import React, { useState } from "react";
import LessonWrapper from "../../../components/LessonWrapper";
import { Link } from "react-router-dom";
import "../../../LessonStyle.css";

const questions = [
  {
    question: "Что такое Ethereum?",
    options: [
      "Просто ещё одна криптовалюта",
      "Централизованный банк",
      "Глобальный компьютер и платформа для смарт-контрактов",
      "Биржа криптовалют"
    ],
    correctIndex: 2,
  },
  {
    question: "Что делает смарт-контракт?",
    options: [
      "Хранит пароли",
      "Автоматически выполняет условия без участия человека",
      "Позволяет создать Bitcoin",
      "Создаёт фейковые токены"
    ],
    correctIndex: 1,
  },
  {
    question: "Что такое ERC-20?",
    options: [
      "Новый тип блокчейна",
      "Стандарт для создания токенов в сети Ethereum",
      "Вид криптовалюты",
      "Биржа"
    ],
    correctIndex: 1,
  },
  {
    question: "Зачем нужен gas в Ethereum?",
    options: [
      "Чтобы ускорить интернет",
      "Для украшения сайта",
      "Для оплаты операций в сети Ethereum",
      "Это токен"
    ],
    correctIndex: 2,
  },
  {
    question: "Чем отличается адрес от аккаунта в Ethereum?",
    options: [
      "Ничем",
      "Адрес — это публичная часть, аккаунт — сущность с приватным ключом",
      "Адрес — это имя, аккаунт — пароль",
      "Аккаунт — это почта"
    ],
    correctIndex: 1,
  },
  {
    question: "Что произойдёт при потере приватного ключа?",
    options: [
      "Можно восстановить через почту",
      "Данные останутся в MetaMask",
      "Доступ к средствам будет утерян навсегда",
      "Поддержка Binance восстановит"
    ],
    correctIndex: 2,
  },
  {
    question: "Что делает контрактный аккаунт?",
    options: [
      "Запоминает пароли",
      "Хранит медиафайлы",
      "Выполняет код смарт-контракта",
      "Заменяет обычный кошелёк"
    ],
    correctIndex: 2,
  },
  {
    question: "Кто создал Ethereum?",
    options: [
      "Илон Маск",
      "Чарли Ли",
      "Виталик Бутерин",
      "Сатоши Накамото"
    ],
    correctIndex: 2,
  },
  {
    question: "Для чего используется стандарт ERC-721?",
    options: [
      "Для выпуска stablecoin",
      "Для хранения логов",
      "Для уникальных токенов (NFT)",
      "Для транзакций между банками"
    ],
    correctIndex: 2,
  },
  {
    question: "Можно ли изменить смарт-контракт после публикации?",
    options: [
      "Да, если заплатить комиссию",
      "Да, если у тебя есть приватный ключ",
      "Нет, код навсегда в блокчейне",
      "Зависит от настроек MetaMask"
    ],
    correctIndex: 2,
  }
];

const FinalTestEthereum = () => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
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
                    <Link to="/modules/ethereum" className="nav-button">← Вернуться</Link>
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
            <Link to="/modules/ethereum" className="nav-button">← Вернуться к модулю</Link>
          </div>
        </>
      )}
    </LessonWrapper>
  );
};

export default FinalTestEthereum;
