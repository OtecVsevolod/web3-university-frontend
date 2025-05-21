import React from 'react';
import { Link } from 'react-router-dom';
import LessonWrapper from '../../../components/LessonWrapper';
import '../../../LessonStyle.css';

export default function IntroLesson9() {
  return (
    <LessonWrapper>
      <h2>Урок 9: <span className="highlight">Где хранится моя крипта?</span></h2>

      <p>Многие новички думают, что крипта «лежит» в приложении MetaMask или на бирже. Но это не так.</p>

      <p>На самом деле, вся крипта находится <span className="highlight">в блокчейне</span>. А твой кошелёк — это просто <span className="highlight">доступ</span> к ней.</p>

      <p>Когда ты создаёшь кошелёк, тебе даётся уникальная <b>seed-фраза</b> — 12 слов. Это как <b>главный ключ</b>. У кого есть эти слова — у того есть доступ к деньгам.</p>

      <p>Твой кошелёк — это как дверь. А блокчейн — как огромный склад, где хранятся все данные. Ты просто открываешь «свою ячейку» этим ключом.</p>

      <h3>Примеры:</h3>
      <ul>
        <li>У тебя есть MetaMask — ты заходишь и видишь баланс. Но по факту, эти данные находятся в сети Ethereum или другой сети.</li>
        <li>Если ты удалишь MetaMask, но сохранишь seed-фразу — ты сможешь восстановить доступ на другом устройстве.</li>
      </ul>

      <p className="note">Важно: крипта не хранится «в приложении». Она всегда живёт в блокчейне. А ты просто управляешь ею с помощью кошелька.</p>

      <div className="navigation-buttons">
        <Link to="/intro/lesson8" className="nav-button">← Назад</Link>
        <Link to="/intro/lesson10" className="nav-button">Далее →</Link>
      </div>
    </LessonWrapper>
  );
}
