// src/pages/modules/blockchain/BlockModule.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function BlockModule() {
  const { i18n } = useTranslation(); // для обновления при смене языка

  return (
    <div key={i18n.language} className="dashboard-container">
      <h1 className="dashboard-title">
        <Trans i18nKey="shared_blockchain_module" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/dashboard" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/blockchain/lesson1" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson1" />
        </Link>
        <Link to="/blockchain/lesson2" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson2" />
        </Link>
        <Link to="/blockchain/lesson3" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson3" />
        </Link>
        <Link to="/blockchain/lesson4" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson4" />
        </Link>
        <Link to="/blockchain/lesson5" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson5" />
        </Link>
        <Link to="/blockchain/lesson6" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson6" />
        </Link>
        <Link to="/blockchain/lesson7" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson7" />
        </Link>
        <Link to="/blockchain/lesson8" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson8" />
        </Link>
        <Link to="/blockchain/lesson9" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson9" />
        </Link>
        <Link to="/blockchain/lesson10" className="dashboard-button">
          <Trans i18nKey="shared_blockchain_lesson10" />
        </Link>

        <div className="dashboard-xp">...</div>
      </div>
    </div>
  );
}
