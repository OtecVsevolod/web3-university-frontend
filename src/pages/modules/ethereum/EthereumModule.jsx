import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';

export default function EthereumModule() {
  return (
    <div className="dashboard-container">
      <div className="top-buttons">
        
   </div>

      <h1 className="dashboard-title">ETH / смарт-контракты</h1>
         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
           <Link to="/" className="nav-button">← Назад</Link>
            </div>
      
      <div className="dashboard-menu">
        <Link to="/modules/ethereum/lesson1" className="dashboard-button">Урок 1: Что такое Ethereum?</Link>
        <Link to="/modules/ethereum/lesson2" className="dashboard-button">Урок 2: Что делает Ethereum особенным?</Link>
        <Link to="/modules/ethereum/lesson3" className="dashboard-button">Урок 3: Как создаются токены</Link>
        <Link to="/modules/ethereum/lesson4" className="dashboard-button">Урок 4: Что такое смарт-контракты</Link>
        <Link to="/modules/ethereum/lesson5" className="dashboard-button">Урок 5: Аккаунты и адреса</Link>
        <Link to="/modules/ethereum/lesson6" className="dashboard-button">Урок 6: Что такое gas?</Link>
        <Link to="/modules/ethereum/lesson7" className="dashboard-button">Урок 7: Как работают транзакции</Link>
        <Link to="/modules/ethereum/lesson8" className="dashboard-button">Урок 8: DApps и интерфейсы</Link>
        <Link to="/modules/ethereum/lesson9" className="dashboard-button">Урок 9: Риски и безопасность</Link>
        <Link to="/modules/ethereum/lesson10" className="dashboard-button">Урок 10: Примеры проектов на Ethereum</Link>
        <Link to="/modules/ethereum/finaltest" className="dashboard-button final-button">📘 Финальный тест</Link>
      </div>
    </div>
  );
}
