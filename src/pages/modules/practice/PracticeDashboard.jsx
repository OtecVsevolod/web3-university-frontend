import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function PracticeDashboard() {
  const { ready } = useTranslation();

  if (!ready) {
    return <div>Загрузка переводов...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        <Trans i18nKey="shared_practice_title" />
      </h1>

      <div className="home-icon-button">
        <Link to="/" className="home-link">🏠</Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/practice/exchange" className="dashboard-button">
          <Trans i18nKey="shared_practice_exchange" />
        </Link>

        <Link to="/practice/quests" className="dashboard-button">
          <Trans i18nKey="shared_practice_quests" />
        </Link>

        <Link to="/practice/etherfi" className="dashboard-button">
          <Trans i18nKey="shared_practice_etherfi" />
        </Link>

        <Link to="/practice/staking" className="dashboard-button">
          <Trans i18nKey="shared_practice_staking" />
        </Link>
      </div>
    </div>
  );
}
