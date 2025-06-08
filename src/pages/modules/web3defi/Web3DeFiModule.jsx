// src/pages/modules/web3defi/Web3DeFiModule.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function Web3DeFiModule() {
  const { i18n } = useTranslation();

  return (
    <div key={i18n.language} className="dashboard-container">
      <div className="top-buttons">
        {/* Здесь можно добавить кнопку домой, если понадобится */}
      </div>

      <h1 className="dashboard-title">
        <Trans i18nKey="shared_web3defi_module" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/dashboard" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/web3defi/lesson1" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson1" />
        </Link>
        <Link to="/web3defi/lesson2" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson2" />
        </Link>
        <Link to="/web3defi/lesson3" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson3" />
        </Link>
        <Link to="/web3defi/lesson4" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson4" />
        </Link>
        <Link to="/web3defi/lesson5" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson5" />
        </Link>
        <Link to="/web3defi/lesson6" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson6" />
        </Link>
        <Link to="/web3defi/lesson7" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson7" />
        </Link>
        <Link to="/web3defi/lesson8" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson8" />
        </Link>
        <Link to="/web3defi/lesson9" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson9" />
        </Link>
        <Link to="/web3defi/lesson10" className="dashboard-button">
          <Trans i18nKey="shared_web3defi_lesson10" />
        </Link>
        <Link to="/web3defi/final-test" className="dashboard-button final-test-button">
          <Trans i18nKey="shared_web3defi_test" />
        </Link>
      </div>
    </div>
  );
}
