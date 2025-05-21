import React from 'react';
import { Link } from 'react-router-dom';
import LessonWrapper from '../../../components/LessonWrapper';
import '../../../LessonStyle.css';

export default function IntroLesson8() {
  return (
    <LessonWrapper>
      <h2>Урок 8: <span className="highlight">Как продать и вывести криптовалюту</span></h2>

      <p>Теперь, когда у тебя уже есть крипта — важно понимать, <span className="highlight">как её продать</span> и <span className="highlight">вывести деньги</span> обратно себе на карту.</p>

      <h3>Продажа криптовалюты</h3>
      <p>
        Самый простой способ — снова использовать вкладку <span className="highlight">P2P</span> на бирже (например, Binance, OKX и др).
        <br />Ты выбираешь покупателя, указываешь, какую монету хочешь продать и на какую сумму.
        <br />После подтверждения — крипта блокируется, и как только покупатель переведёт тебе деньги, ты отпускаешь монеты.
      </p>

      <h3>Вывод денег на карту</h3>
      <p>
        После сделки ты получаешь <span className="highlight">фиатные деньги</span> (например, USD, EUR, PLN) прямо на свою банковскую карту.
        <br />Это просто как обычный перевод — деньги приходят на счёт, а крипта исчезает с твоего баланса.
      </p>

      <h3>Важные советы</h3>
      <ul>
        <li>Проверяй <span className="highlight">рейтинг покупателя</span> и количество сделок.</li>
        <li>Никогда не отпускай крипту <b>до</b> получения денег.</li>
        <li>Начни с небольших сумм — чтобы набраться опыта.</li>
      </ul>

      <p className="note">Важно: на каждой бирже есть инструкции и видео — не стесняйся их смотреть, это поможет тебе избежать ошибок.</p>

      <div className="navigation-buttons">
        <Link to="/intro/lesson7" className="nav-button">← Назад</Link>
        <Link to="/intro/lesson9" className="nav-button">Далее →</Link>
      </div>
    </LessonWrapper>
  );
}
