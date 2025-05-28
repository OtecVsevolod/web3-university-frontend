import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css'; // оставить подключение стилей

export default function Web3DeFiModule() {
  return (
    <div className="dashboard-container">
      <div className="top-buttons">
      </div>

      <h1 className="dashboard-title">Основы Web3 / DeFi</h1>
         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
           <Link to="/" className="nav-button">← Назад</Link>
            </div>

      <div className="dashboard-menu">
        <Link to="/web3defi/lesson1" className="dashboard-button">Урок 1: Что такое Web3?</Link>
        <Link to="/web3defi/lesson2" className="dashboard-button">Урок 2: Кошелёк — твой паспорт в Web3</Link>
        <Link to="/web3defi/lesson3" className="dashboard-button">Урок 3: Что такое токены и зачем они нужны?</Link>
        <Link to="/web3defi/lesson4" className="dashboard-button">Урок 4: Что такое CEX/DEX?</Link>
        <Link to="/web3defi/lesson5" className="dashboard-button">Урок 5: Что такое DeFi</Link>
        <Link to="/web3defi/lesson6" className="dashboard-button">Урок 6: Примеры DeFi-платформ</Link>
        <Link to="/web3defi/lesson7" className="dashboard-button">Урок 7: Как работает стейкинг</Link>
        <Link to="/web3defi/lesson8" className="dashboard-button">Урок 8: Доходность и фарминг</Link>
        <Link to="/web3defi/lesson9" className="dashboard-button">Урок 9: Риски и скамы в Web3/DeFi</Link>
        <Link to="/web3defi/lesson10" className="dashboard-button">Урок 10: Как начать пользоваться DeFi</Link>
        <Link to="/web3defi/final-test" className="dashboard-button final-test-button">🧠 Финальный тест</Link>
      </div>
    </div>
  );
}
