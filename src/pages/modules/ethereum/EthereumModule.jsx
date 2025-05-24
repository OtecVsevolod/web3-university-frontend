import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css'; // не меняем, всё как было

export default function EthereumModule() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Ethereum и смарт-контракты</h1>

      <div className="dashboard-menu">
        <Link to="/modules/ethereum/lesson1" className="dashboard-button">Урок 1: Что такое Ethereum?</Link>
        <Link to="/modules/ethereum/lesson2" className="dashboard-button">Урок 2: Смарт-контракты</Link>
        <Link to="/modules/ethereum/lesson3" className="dashboard-button">Урок 3: Что такое Gas?</Link>
        <Link to="/modules/ethereum/lesson4" className="dashboard-button">Урок 4: Ethereum vs Bitcoin</Link>
        <Link to="/modules/ethereum/lesson5" className="dashboard-button">Урок 5: Что такое EVM?</Link>
        <Link to="/modules/ethereum/lesson6" className="dashboard-button">Урок 6: DApps и Web3</Link>
        <Link to="/modules/ethereum/lesson7" className="dashboard-button">Урок 7: Сеть Ethereum</Link>
        <Link to="/modules/ethereum/lesson8" className="dashboard-button">Урок 8: Метамаск и взаимодействие</Link>
        <Link to="/modules/ethereum/lesson9" className="dashboard-button">Урок 9: Контракты в реальной жизни</Link>
        <Link to="/modules/ethereum/lesson10" className="dashboard-button">Урок 10: Ошибки и риски</Link>
        <Link to="/modules/ethereum/FinalTestEthereum" className="dashboard-button">Тест: Закреп знаний</Link>
        <div className="dashboard-xp">...</div>
      </div>

      {/* Кнопка возврата на главную */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to="/" className="dashboard-button">← Назад на главную</Link>
      </div>
    </div>
  );
}
