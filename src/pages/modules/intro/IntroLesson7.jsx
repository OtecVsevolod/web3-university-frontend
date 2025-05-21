import React from 'react';
import { Link } from 'react-router-dom';
import LessonWrapper from '../../../components/LessonWrapper';
import '../../../LessonStyle.css';

export default function IntroLesson7() {
  return (
    <LessonWrapper>
      <h2>Урок 7: <span className="highlight">Как купить криптовалюту</span></h2>

      <p>
        Чтобы начать путь в крипте — тебе нужно сначала её <span className="highlight">купить</span>. Ниже — максимально простая пошаговая инструкция.
      </p>

      <h3>Шаг 1: Регистрируемся на бирже</h3>
      <p>
        Самый простой способ — завести аккаунт на бирже. Биржа — это как обменник, где ты покупаешь и продаёшь криптовалюту.
      </p>
      <ul>
        <li><a href="https://www.bybit.com/invite?ref=B1XGLW" target="_blank" rel="noreferrer">Bibit</a></li>
        <li><a href="https://accounts.binance.com/register?ref=477681384" target="_blank" rel="noreferrer">Binance (по нашей ссылке — бонус)</a></li>
        <li><a href="https://bingx.com/invite/4KQ2KY/" target="_blank" rel="noreferrer">Bingx</a></li>
        <li><a href="https://invite.evedex.com/ixjrpwo4" target="_blank" rel="noreferrer">Evedex</a></li>
        <li><a href="https://app.storm.tg/?t=498542302" target="_blank" rel="noreferrer">ShtormTrade</a></li>
      </ul>

      <h3>Шаг 2: Проходим верификацию</h3>
      <p>
        Это как в банке — загружаешь фото паспорта и подтверждаешь свою личность. Это нужно, чтобы защитить тебя от мошенников.
      </p>

      <h3>Шаг 3: Пополняем баланс</h3>
      <p>
        На бирже есть вкладка <span className="highlight">«P2P»</span> — это способ купить крипту напрямую у других людей с помощью своей банковской карты. Без комиссий.
        <br />Выбираешь продавца, вводишь сумму и платишь через свой банк.
      </p>

      <h3>Шаг 4: Покупаем криптовалюту</h3>
      <p>
        После пополнения можешь купить <span className="highlight">стейблкоины</span> — например, <b>USDT</b> (он привязан к доллару 1:1). Это удобно и безопасно.
      </p>

      <h3>Шаг 5: Выводим на кошелёк</h3>
      <p>
        Переведи крипту с биржи на <span className="highlight">свой кошелёк</span> (например, <b>MetaMask</b> или <b>Trust Wallet</b>), чтобы она была под твоим контролем.
        <br />Скопируй адрес кошелька и сделай вывод в нужной сети, например, Ethereum, Arbitrum или BSC.
      </p>

      <p className="note">
        Важно: хранить крипту на бирже — небезопасно. Всегда держи свои активы у себя, особенно если планируешь участвовать в DeFi.
      </p>

      <div className="navigation-buttons">
        <Link to="/intro/lesson6" className="nav-button">Назад</Link>
        <Link to="/intro/lesson8" className="nav-button">Далее</Link>
      </div>
    </LessonWrapper>
  );
}
