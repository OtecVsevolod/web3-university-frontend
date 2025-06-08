// src/pages/modules/ethereum/EthereumModule.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function EthereumModule() {
  const { i18n } = useTranslation(); // для перерендера при смене языка

  return (
    <div key={i18n.language} className="dashboard-container">
      <div className="top-buttons">
        {/* Можно добавить иконку домой или другие верхние кнопки здесь */}
      </div>

      <h1 className="dashboard-title">
        <Trans i18nKey="shared_ethereum_module" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/dashboard" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/modules/ethereum/lesson1" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson1" />
        </Link>
        <Link to="/modules/ethereum/lesson2" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson2" />
        </Link>
        <Link to="/modules/ethereum/lesson3" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson3" />
        </Link>
        <Link to="/modules/ethereum/lesson4" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson4" />
        </Link>
        <Link to="/modules/ethereum/lesson5" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson5" />
        </Link>
        <Link to="/modules/ethereum/lesson6" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson6" />
        </Link>
        <Link to="/modules/ethereum/lesson7" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson7" />
        </Link>
        <Link to="/modules/ethereum/lesson8" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson8" />
        </Link>
        <Link to="/modules/ethereum/lesson9" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson9" />
        </Link>
        <Link to="/modules/ethereum/lesson10" className="dashboard-button">
          <Trans i18nKey="shared_ethereum_lesson10" />
        </Link>
        <Link to="/modules/ethereum/finaltest" className="dashboard-button final-button">
          <Trans i18nKey="shared_ethereum_test" />
        </Link>
      </div>
    </div>
  );
}
