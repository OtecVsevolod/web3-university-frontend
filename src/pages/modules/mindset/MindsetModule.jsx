import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function MindsetModule() {
  const { i18n } = useTranslation(); // для перерендера при смене языка

  return (
    <div key={i18n.language} className="dashboard-container">
      <div className="top-buttons">
        {/* Можно добавить иконку домой или другие верхние кнопки здесь */}
      </div>

      <h1 className="dashboard-title">
        <Trans i18nKey="shared_mindset_module" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/dashboard" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/mindset/lesson1" className="dashboard-button">
          <Trans i18nKey="shared_mindset_lesson1" />
        </Link>
        <Link to="/mindset/lesson2" className="dashboard-button">
          <Trans i18nKey="shared_mindset_lesson2" />
        </Link>
        <Link to="/mindset/lesson3" className="dashboard-button">
          <Trans i18nKey="shared_mindset_lesson3" />
        </Link>
        <Link to="/mindset/lesson4" className="dashboard-button">
          <Trans i18nKey="shared_mindset_lesson4" />
        </Link>
        <Link to="/mindset/lesson5" className="dashboard-button">
          <Trans i18nKey="shared_mindset_lesson5" />
        </Link>
        <Link to="/mindset/lesson6" className="dashboard-button">
          <Trans i18nKey="shared_mindset_lesson6" />
        </Link>
        <Link to="/mindset/test" className="dashboard-button final-button">
          <Trans i18nKey="shared_start_final_test" />
        </Link>
      </div>
    </div>
  );
}
