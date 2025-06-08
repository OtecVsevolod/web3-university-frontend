import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { ready } = useTranslation();

  if (!ready) {
    return <div>Загрузка переводов...</div>; // Можно заменить на спиннер
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        <Trans i18nKey="shared_web3crypto_university" />
      </h1>
      <div className="home-icon-button">
        <Link to="/" className="home-link">
          🏠
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/intro" className="dashboard-button">
          <Trans i18nKey="shared_intro_module" />
        </Link>
        <Link to="/blockchain" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_module" />
        </Link>
        <Link to="/modules/ethereum" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_module" />
        </Link>
        <Link to="/modules/web3defi" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_module" />
        </Link>
        <Link to="/token" className="dashboard-button">
          <Trans i18nKey="shared_token_module" />
        </Link>
        <Link to="/strategies" className="dashboard-button">
          <Trans i18nKey="shared_strategies_module" />
        </Link>
        <Link to="/zk" className="dashboard-button">
          <Trans i18nKey="shared_zk_module" />
        </Link>
        <Link to="/airdrops" className="dashboard-button">
          <Trans i18nKey="shared_airdrop_module" />
        </Link>
        <Link to="/platforms" className="dashboard-button">
          <Trans i18nKey="shared_platforms_module" />
        </Link>
        <Link to="/support" className="dashboard-button">
          <Trans i18nKey="shared_support_button" />
        </Link>
      </div>

      <div className="dashboard-xp">
        <span><Trans i18nKey="dashboard_xp_label" /></span>
        <div className="xp-bar">
          <div className="xp-fill" style={{ width: '20%' }}></div>
        </div>
      </div>
    </div>
  );
}
