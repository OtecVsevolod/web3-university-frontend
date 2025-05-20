// src/pages/modules/intro/IntroModule.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css'; // не меняем, всё как было

export default function IntroModule() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Введение в крипту</h1>

      <div className="dashboard-menu">
        <Link to="/intro/lesson1" className="dashboard-button">Урок 1: Что такое криптовалюта?</Link>
        <Link to="/intro/lesson2" className="dashboard-button">Урок 2: Что такое блокчейн?</Link>
        <Link to="/intro/lesson3" className="dashboard-button">Урок 3: Зачем нужна криптовалюта?</Link>
        <Link to="/intro/lesson4" className="dashboard-button">Урок 4: Как работает криптовалюта?</Link>
        <Link to="/intro/lesson5" className="dashboard-button">Урок 5: Кошельки и хранение</Link>
        <div className="dashboard-xp">...и можно прокачать до 10 уроков</div>
      </div>

      {/* Кнопка возврата на главную */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to="/" className="dashboard-button">← Назад на главную</Link>
      </div>
    </div>
  );
}
