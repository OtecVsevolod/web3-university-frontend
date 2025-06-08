import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function TokenModule() {
  const { i18n } = useTranslation(); // для перерендера при смене языка

  return (
    <div key={i18n.language} className="dashboard-container">
      <div className="top-buttons">
        {/* Можно добавить иконку домой или другие верхние кнопки здесь */}
      </div>

      <h1 className="dashboard-title">
        <Trans i18nKey="shared_token_module" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/dashboard" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/token/lesson1" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson1" />
        </Link>
        <Link to="/token/lesson2" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson2" />
        </Link>
        <Link to="/token/lesson3" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson3" />
        </Link>
        <Link to="/token/lesson4" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson4" />
        </Link>
        <Link to="/token/lesson5" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson5" />
        </Link>
        <Link to="/token/lesson6" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson6" />
        </Link>
        <Link to="/token/lesson7" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson7" />
        </Link>
        <Link to="/token/lesson8" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson8" />
        </Link>
        <Link to="/token/lesson9" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson9" />
        </Link>
        <Link to="/token/lesson10" className="dashboard-button">
          <Trans i18nKey="shared_token_lesson10" />
        </Link>
        <Link to="/token/finaltest" className="dashboard-button final-button">
          <Trans i18nKey="shared_start_final_test" />
        </Link>
      </div>
    </div>
  );
}
