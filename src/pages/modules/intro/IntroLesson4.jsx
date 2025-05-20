// src/pages/modules/intro/IntroLesson4.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../../LessonStyle.css';

export default function IntroLesson4() {
  return (
    <div className="lesson-container">
      <h2>Урок 4: <span className="highlight">Как работает криптовалюта?</span></h2>

      <p>
        Чтобы понять, как работает <span className="highlight">криптовалюта</span>, представь себе цифровой дневник, куда каждый записывает переводы — кто кому и сколько отправил.
      </p>

      <p>
        Эти записи собираются в <span className="highlight">блоки</span>, и каждый блок подтверждается участниками сети. Участники называются <span className="highlight">ноды</span> или <span className="highlight">валидаторы</span>.
      </p>

      <p>
        Когда ты отправляешь кому-то крипту, создаётся <span className="highlight">транзакция</span>. Она отправляется в сеть и ждёт подтверждения.
      </p>

      <p>
        Твою транзакцию проверяют: есть ли у тебя эти средства, не пытался ли ты отправить их дважды. Это называется <span className="highlight">консенсус</span> — согласие между участниками, что всё честно.
      </p>

      <p>
        После подтверждения, транзакция записывается в блок, и блок присоединяется к <span className="highlight">блокчейну</span>. Изменить или удалить её уже невозможно.
      </p>

      <p>
        Всё это происходит без участия банков, за секунды или минуты, в зависимости от криптовалюты.
      </p>

      <p>
        Вот основные шаги:
        <ul>
          <li>Ты создаёшь транзакцию (например, отправляешь другу 0.1 BTC)</li>
          <li>Сеть проверяет, можешь ли ты это сделать</li>
          <li>Транзакция добавляется в блок</li>
          <li>Блок записывается в блокчейн</li>
          <li>Деньги у друга. Без посредников.</li>
        </ul>
      </p>

      <div className="navigation-buttons">
        <Link to="/intro/lesson3" className="nav-button">Назад</Link>
        <Link to="/intro/lesson5" className="nav-button">Далее</Link>
      </div>
    </div>
  );
}
