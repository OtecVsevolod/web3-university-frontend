// src/pages/modules/blockchain/BlockLesson1.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../../LessonStyle.css';

export default function BlockLesson1() {
  return (
    <div className="lesson-container">
      <h2>Урок 1: <span className="highlight">Что такое блокчейн?</span></h2>
      <p>
        <span className="highlight">Блокчейн</span> — это технология хранения данных, где информация разбивается на <span className="highlight">блоки</span> и объединяется в единую цепочку. Каждый блок содержит записи о транзакциях и связан с предыдущим с помощью криптографического хэша.
      </p>
      <p>
        Главное преимущество блокчейна — <span className="highlight">неизменяемость</span> и <span className="highlight">прозрачность</span>. После записи данные невозможно подделать без изменения всех последующих блоков, что делает систему устойчивой к фальсификациям.
      </p>
      <p>
        Это основа для криптовалют, смарт-контрактов и децентрализованных приложений. Блокчейн — это доверие без посредников, где сама система обеспечивает честность.
      </p>

      <div className="navigation-buttons">
        <Link to="/blockchain" className="nav-button">Назад</Link>
        <Link to="/blockchain/lesson2" className="nav-button">Далее</Link>
      </div>
    </div>
  );
}
