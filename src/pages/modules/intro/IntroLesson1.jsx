import React from 'react';
import { Link } from 'react-router-dom';
import '../../../LessonStyle.css';

export default function IntroLesson1() {
  return (
    <div className="lesson-container">
      <h2>Урок 1: <span className="highlight">Что такое криптовалюта?</span></h2>
      <p>
        <span className="highlight">Криптовалюта</span> — это цифровая форма <span className="highlight">денег</span>, которая работает без посредников: банков, государственных структур или централизованных платформ. Она передаётся напрямую от человека к человеку через <span className="highlight">блокчейн</span>.
      </p>
      <p>
        Первая криптовалюта — <span className="highlight">Bitcoin</span>. Её появление в 2009 году стало ответом на недоверие к банковской системе после кризиса 2008 года. С тех пор появилось множество других криптовалют: <span className="highlight">Ethereum</span>, <span className="highlight">Litecoin</span>, <span className="highlight">стейблкоины</span> и другие.
      </p>
      <p>
        Главная идея — дать пользователю контроль над своими средствами. Чтобы никто не мог заморозить, отозвать или переписать твои активы. Это не просто про деньги — это про <span className="highlight">устойчивость</span>, <span className="highlight">прозрачность</span> и <span className="highlight">независимость</span>.
      </p>

      <div className="navigation-buttons">
        <Link to="/intro" className="nav-button">Назад</Link>
        <Link to="/intro/lesson2" className="nav-button">Далее</Link>
      </div>
    </div>
  );
}
