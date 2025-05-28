import React, { useState } from "react";
import LessonWrapper from "../../../components/LessonWrapper";
import { Link } from "react-router-dom";
import "../../../LessonStyle.css";

const questions = [
  {
    question: "Что такое криптовалюта?",
    options: [
      "Игровая валюта в приложениях",
      "Децентрализованная цифровая валюта на блокчейне",
      "Цифровые рубли и доллары",
      "Баллы в магазине"
    ],
    correctIndex: 1,
  },
  {
    question: "Кто управляет криптовалютой?",
    options: [
      "ЦБ страны",
      "Сеть участников (нод)",
      "Visa и Mastercard",
      "Правительство"
    ],
    correctIndex: 1,
  },
  {
    question: "Что такое блокчейн?",
    options: [
      "Секретный сервер",
      "Цепочка блоков с данными, защищённая криптографией",
      "Приложение для хранения денег",
      "Налоговая база"
    ],
    correctIndex: 1,
  },
  {
    question: "Зачем нужна криптовалюта?",
    options: [
      "Чтобы хранить и передавать ценность без посредников",
      "Чтобы покупать скины",
      "Для банков",
      "Только для инвесторов"
    ],
    correctIndex: 0,
  },
  {
    question: "Как подтверждаются транзакции в блокчейне?",
    options: [
      "Через банковскую верификацию",
      "Через проверку участников сети (валидаторов/майнеров)",
      "Через email",
      "Ручной модерацией"
    ],
    correctIndex: 1,
  },
  {
    question: "Что такое seed-фраза?",
    options: [
      "Пароль от биржи",
      "Фраза для восстановления доступа к кошельку",
      "Никнейм в сети",
      "Код для скидки"
    ],
    correctIndex: 1,
  },
  {
    question: "Где безопаснее всего хранить seed-фразу?",
    options: [
      "В облаке",
      "В Телеграме",
      "На бумаге в офлайне",
      "В заметках телефона"
    ],
    correctIndex: 2,
  },
  {
    question: "Как правильно выбирать криптовалюту?",
    options: [
      "Смотреть, кто больше всех обещает",
      "Случайно",
      "Проверять проект, команду, whitepaper и реальную полезность",
      "Слушать чаты в Телеге"
    ],
    correctIndex: 2,
  },
  {
    question: "Что первым делом нужно сделать новичку?",
    options: [
      "Открыть счёт в банке",
      "Создать кошелёк и сохранить seed-фразу",
      "Купить токен по рекламе",
      "Взять кредит"
    ],
    correctIndex: 1,
  },
  {
    question: "Как безопасно продать крипту?",
    options: [
      "Через P2P на проверенной бирже",
      "Через форум",
      "Передать лично",
      "Попросить кого-то продать"
    ],
    correctIndex: 0,
  },
  {
    question: "Где на самом деле хранятся твои монеты?",
    options: [
      "На флешке",
      "В браузере",
      "В блокчейне",
      "В Excel-файле"
    ],
    correctIndex: 2,
  },
  {
    question: "Что НЕ стоит делать новичку?",
    options: [
      "Проверять адрес сайта",
      "Подключать кошелёк к неизвестным сайтам",
      "Хранить seed-фразу оффлайн",
      "Пользоваться 2FA"
    ],
    correctIndex: 1,
  },
  {
    question: "Что произойдёт, если ты потеряешь seed-фразу?",
    options: [
      "Можно будет восстановить через поддержку",
      "Придётся заплатить комиссию",
      "Ты потеряешь доступ навсегда",
      "Тебя забанят"
    ],
    correctIndex: 2,
  },
];

const FinalTestIntro = () => {
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
              <Link to="/intro" className="nav-button">← Вернуться</Link>
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
            <Link to="/" className="nav-button">← Вернуться на главную</Link>
          </div>
        </>
      )}
    </LessonWrapper>
  );
};

export default FinalTestIntro;
