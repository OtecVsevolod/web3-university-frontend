import React from 'react';
import { Link } from 'react-router-dom';
import LessonWrapper from '../../../components/LessonWrapper';
import '../../../LessonStyle.css';

export default function IntroLesson2() {
  return (
    <LessonWrapper>
      <h2>Урок 2: <span className="highlight">Что такое блокчейн?</span></h2>
      
      <p><span className="highlight">Блокчейн</span> — это способ хранения информации. Можно представить его как цепочку коробок. В каждой коробке лежат данные (например, кто кому и сколько перевёл).</p>

      <p>Эти коробки называются <span className="highlight">блоками</span>, и они соединяются друг с другом в одну линию — <span className="highlight">цепочку</span> (chain).</p>

      <img src="/structure_block.png" alt="Структура блока в блокчейне" className="lesson-image" />

      <p>Каждый новый блок связан с предыдущим с помощью специального цифрового отпечатка — <span className="highlight">хеша</span>. Это делает всю цепочку защищённой: если кто-то захочет подделать информацию в одном блоке, нарушится вся цепь.</p>

      <p>Вот почему блокчейн <span className="highlight">надёжный и устойчивый</span>. Его невозможно взломать или стереть без следов. Он не хранится в одном месте — он <span className="highlight">децентрализован</span>, то есть копии есть у тысяч участников по всему миру.</p>

      <p>Такая система:</p>
      <ul>
        <li>работает без центрального сервера,</li>
        <li>открыта для всех,</li>
        <li>не подвержена цензуре или блокировкам.</li>
      </ul>

      <p>Блокчейн используется в криптовалютах, чтобы записывать все переводы. Но его можно применять и в других сферах: <span className="highlight">документы, логистика</span> — везде, где важна честность и прозрачность.</p>

      <div className="navigation-buttons">
        <Link to="/intro/lesson1" className="nav-button">Назад</Link>
        <Link to="/intro/lesson3" className="nav-button">Далее</Link>
        </div>
        </LessonWrapper>
  );
}
