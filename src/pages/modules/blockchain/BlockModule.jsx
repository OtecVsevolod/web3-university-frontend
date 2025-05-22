// src/pages/modules/blockchain/BlockModule.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css'; // оставить как есть

export default function BlockModule() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Основы блокчейна</h1>

      <div className="dashboard-menu">
        <Link to="/blockchain/lesson1" className="dashboard-button">Урок 1: Что такое блокчейн?</Link>
        <Link to="/blockchain/lesson2" className="dashboard-button">Урок 2: Как работают блоки?</Link>
        <Link to="/blockchain/lesson3" className="dashboard-button">Урок 3: Децентрализация</Link>
        <Link to="/blockchain/lesson4" className="dashboard-button">Урок 4: Ноды и валидаторы</Link>
        <Link to="/blockchain/lesson5" className="dashboard-button">Урок 5: Майнинг и консенсус</Link>
        <Link to="/blockchain/lesson6" className="dashboard-button">Урок 6: Применение блокчейна</Link>
        <Link to="/blockchain/lesson7" className="dashboard-button">Урок 7: Проблемы и ограничения</Link>
        <Link to="/blockchain/lesson8" className="dashboard-button">Урок 8: Безопасность</Link>
        <Link to="/blockchain/lesson9" className="dashboard-button">Урок 9: Приватность и ZK</Link>
        <Link to="/blockchain/lesson10" className="dashboard-button">Урок 10: Будущее блокчейна</Link>
        <div className="dashboard-xp">...</div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to="/" className="dashboard-button">← Назад на главную</Link>
      </div>
    </div>
  );
}
