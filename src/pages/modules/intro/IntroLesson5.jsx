import React from 'react';
import { Link } from 'react-router-dom';
import '../../../LessonStyle.css';

export default function IntroLesson5() {
  return (
    <div className="lesson-container">
      <h2>Урок 5: <span className="highlight">Кошельки и хранение</span></h2>

      <p>
        Криптовалюта — это деньги, которые находятся не у тебя в кармане, 
        а в <span className="highlight">блокчейне</span>. 
        Чтобы получить к ним доступ, тебе нужен <span className="highlight">ключ</span> — как от сейфа.
      </p>

      <p>
        Этот «ключ» хранится в <span className="highlight">криптокошельке</span>. 
        Кошелёк — это приложение или устройство, которое даёт тебе доступ к твоим средствам.
      </p>

      <p>
        У любого кошелька есть два ключа:
      </p>

      <ul>
        <li><span className="highlight">Публичный ключ</span> — это твой <strong>адрес</strong>, как номер карты. Его можно показывать всем. Пример:
          <br />
          <code>0x1A2b3C4d5E6f7G8h9I0j...</code>
        </li>
        <li><span className="highlight">Приватный ключ</span> или <strong>seed-фраза</strong> — это секрет. Это как пароль от сейфа. Никому не показывай. Пример фразы:
          <br />
          <code>zebra rocket peace tunnel pizza magic anchor sunset crew juice lunar gravity</code>
        </li>
      </ul>

      <p>
        <strong>Seed-фраза</strong> — это твой <span className="highlight">единственный доступ</span> к крипте. 
        Если ты её потеряешь — никто не поможет. 
        Если её украдут — все деньги уйдут.
      </p>

      <p><strong>Пример ситуации:</strong></p>
      <ul>
        <li>Ты скачал MetaMask и сохранил seed-фразу как скриншот в Google Фото.</li>
        <li>Через год Google взломали. Кто-то увидел твой скриншот — и увёл все средства.</li>
      </ul>

      <p><strong>Вывод:</strong> <span className="highlight">Крипта = приватность + ответственность</span>.</p>
      <ul>
        <li>Нет банкиров, поддержки, полиции или «забыл пароль».</li>
        <li>Ты сам себе хозяин. И сам себе охрана.</li>
      </ul>

      <p>Есть два типа кошельков:</p>
      <ul>
        <li><span className="highlight">Hot Wallet</span> — подключён к интернету. Удобно. Примеры: MetaMask, TrustWallet.</li>
        <li><span className="highlight">Cold Wallet</span> — не подключён. Самый надёжный. Примеры: Ledger, Trezor.</li>
      </ul>

      <p>
        Лучше всего: для мелких сумм — горячий кошелёк. Для крупных — холодный. И <strong>всегда</strong> храни seed-фразу в безопасном месте.
      </p>

      <p>
        Криптокошелёк — это не мешок с деньгами. Это <span className="highlight">доступ</span> к деньгам. 
        Все монеты всегда находятся в блокчейне, но только у тебя есть ключ, чтобы ими распоряжаться.
      </p>

      <div className="navigation-buttons">
        <Link to="/intro/lesson4" className="nav-button">Назад</Link>
        <Link to="/intro/lesson6" className="nav-button">Далее</Link>
      </div>
    </div>
  );
}
