import React from 'react';
import { Link } from 'react-router-dom';
import '../../../LessonStyle.css';

export default function IntroLesson5() {
  return (
    <div className="lesson-container">
      <h2>Урок 5: <span className="highlight">Кошельки и хранение</span></h2>

      <p>
        <span className="highlight">Криптокошелёк</span> — это как твой личный сейф в мире крипты. Он не хранит сами деньги, 
        а хранит ключи, которые дают доступ к твоим деньгам на блокчейне.
      </p>

      <p>
        Есть <span className="highlight">два ключа</span>: <b>публичный</b> и <b>приватный</b>.
      </p>

      <ul>
        <li><b>Публичный ключ</b> — это твой <span className="highlight">адрес</span>. Его можно показывать другим — по нему тебе могут прислать крипту. Пример:
          <br/><code>0xAB12...CD34</code>
        </li>
        <li><b>Приватный ключ</b> — это как пароль. Его <span className="highlight">нельзя никому показывать</span>. Если его украдут — потеряешь всё.</li>
      </ul>

      <p>
        Но вместо длинного приватного ключа чаще используется <span className="highlight">seed-фраза</span> — это 12 или 24 слова вроде:
        <br/><code>apple mirror ocean fire green ...</code>
      </p>

      <p>
        Эти слова — твой ключ ко всему кошельку. Потеряешь их — никто не сможет восстановить. 
        Это не как банк — тут нет "забыл пароль". Ты сам себе банк.
      </p>

      <h3>Типы кошельков</h3>
      <ul>
        <li>
          <span className="highlight">Hot Wallet</span> (горячий кошелёк) — подключён к интернету. Удобно, но менее безопасно. Примеры: <b>MetaMask, Trust Wallet</b>.
        </li>
        <li>
          <span className="highlight">Cold Wallet</span> (холодный кошелёк) — не подключён к интернету. Самый безопасный. Примеры: <b>Ledger, Trezor</b>.
        </li>
      </ul>

      <h3>Ответственность</h3>
      <p>
        Крипта — это <span className="highlight">свобода и приватность</span>, но и <span className="highlight">ответственность</span>.
        <br />Забыл seed-фразу? Потерял всё. Дал кому-то ключ? Потерял всё. Это не шутки.
      </p>

      <p>
        Но зато: <b>никто не может заморозить твой счёт</b>. Только ты управляешь своими активами. Это настоящая финансовая независимость.
      </p>

      <div className="navigation-buttons">
        <Link to="/intro/lesson4" className="nav-button">Назад</Link>
        <Link to="/intro/lesson6" className="nav-button">Далее</Link>
      </div>
    </div>
  );
}
