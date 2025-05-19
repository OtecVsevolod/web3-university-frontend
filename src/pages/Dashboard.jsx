import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // стили отдельно

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <img src="/logo.jpg" alt="Web3 Crypto University Logo" className="logo" />

      <h1 className="title">Web3/Crypto University</h1>

      <div className="menu">
        <Link to="/lesson1" className="menu-button">Введение в крипту</Link>
        <Link to="#" className="menu-button">Основы блокчейна и BTC</Link>
        <Link to="#" className="menu-button">ETH / смарт-контракты</Link>
        <Link to="#" className="menu-button">Основы Web3 / DeFi</Link>
        <Link to="#" className="menu-button">Токенизация / RWA / CBDC</Link>
        <Link to="#" className="menu-button">Стратегии заработка</Link>
        <Link to="#" className="menu-button">ZK (Zero-Knowledge)</Link>
        <Link to="#" className="menu-button">Airdrop</Link>
        <Link to="#" className="menu-button">Платформы</Link>
        <Link to="#" className="menu-button">Помощь проекту</Link>
      </div>

      <div className="xp-container">
        <span>XP:</span>
        <div className="xp-bar">
          <div className="xp-fill" style={{ width: '20%' }}></div>
        </div>
      </div>
    </div>
  );
}
