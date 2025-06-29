import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function StrategiesModule() {
  const { i18n } = useTranslation(); // для перерендера при смене языка

  return (
    <div key={i18n.language} className="dashboard-container">
      <div className="top-buttons">
        {/* Можно добавить иконку домой или другие верхние кнопки здесь */}
      </div>

      <h1 className="dashboard-title">
        <Trans i18nKey="shared_strategies_module" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/dashboard" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/strategies/lesson1" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson1" />
        </Link>
        <Link to="/strategies/lesson2" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson2" />
        </Link>
        <Link to="/strategies/lesson3" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson3" />
        </Link>
        <Link to="/strategies/lesson4" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson4" />
        </Link>
        <Link to="/strategies/lesson5" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson5" />
        </Link>
        <Link to="/strategies/lesson6" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson6" />
        </Link>
        <Link to="/strategies/lesson7" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson7" />
        </Link>
        <Link to="/strategies/lesson8" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson8" />
        </Link>
        <Link to="/strategies/lesson9" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson9" />
        </Link>
        <Link to="/strategies/lesson10" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson10" />
        </Link>
        <Link to="/strategies/lesson11" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson11" />
        </Link>
        <Link to="/strategies/lesson12" className="dashboard-button">
          <Trans i18nKey="shared_strategies_lesson12" />
        </Link>
        <Link to="/strategies/test" className="dashboard-button final-button">
          <Trans i18nKey="shared_start_final_test" />
        </Link>
      </div>
    </div>
  );
}
