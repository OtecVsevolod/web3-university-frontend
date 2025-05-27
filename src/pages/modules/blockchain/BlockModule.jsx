import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';

export default function BlockModule() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Основы блокчейна и BTC</h1>

      <div className="dashboard-menu">
        <Link to="/blockchain/lesson1" className="dashboard-button">Урок 1: Что такое блокчейн</Link>
        <Link to="/blockchain/lesson2" className="dashboard-button">Урок 2: Как работают блоки</Link>
        <Link to="/blockchain/lesson3" className="dashboard-button">Урок 3: Доказательство работы</Link>
        <Link to="/blockchain/lesson4" className="dashboard-button">Урок 4: Консенсус</Link>
        <Link to="/blockchain/lesson5" className="dashboard-button">Урок 5: Децентрализация</Link>
        <Link to="/blockchain/lesson6" className="dashboard-button">Урок 6: Сеть биткоина</Link>
        <Link to="/blockchain/lesson7" className="dashboard-button">Урок 7: Двойная трата</Link>
        <Link to="/blockchain/lesson8" className="dashboard-button">Урок 8: Майнеры</Link>
        <Link to="/blockchain/lesson9" className="dashboard-button">Урок 9: Уязвимости</Link>
        <Link to="/blockchain/lesson10" className="dashboard-button">Урок 10: Философия блокчейна</Link>
        <div className="dashboard-xp">...</div>
      </div>

      {/* Кнопка возврата на главную */}
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <Link to="/" className="dashboard-button">← Назад на главную</Link>
            </div>
    </div>
  );
}
