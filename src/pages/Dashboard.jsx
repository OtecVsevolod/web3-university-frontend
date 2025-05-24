import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">WEB3/CRYPTO<br />УНИВЕРСИТЕТ</h1>

      <div className="dashboard-menu">
        <Link to="/intro" className="dashboard-button">Введение в крипту</Link>
        <Link to="/blockchain" className="dashboard-button">Основы блокчейна и BTC</Link>
        <Link to="/modules/ethereum" className="dashboard-button">ETH / смарт-контракты</Link> {/* ← исправлено */}
        <Link to="/web3defi" className="dashboard-button">Основы Web3 / DeFi</Link>
        <Link to="/tokenization" className="dashboard-button">Токенизация / RWA / CBDC</Link>
        <Link to="/strategies" className="dashboard-button">Стратегии заработка</Link>
        <Link to="/zk" className="dashboard-button">ZK (нулевое разглашение)</Link>
        <Link to="/airdrops" className="dashboard-button">Airdrop</Link>
        <Link to="/platforms" className="dashboard-button">Платформы</Link>
        <Link to="/support" className="dashboard-button">Помощь проекту</Link>
      </div>

      <div className="dashboard-xp">
        <span>XP:</span>
        <div className="xp-bar">
          <div className="xp-fill" style={{ width: '20%' }}></div>
        </div>
      </div>
    </div>
  );
}
