// src/pages/modules/aboutproject/AboutProjectModule.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function AboutProjectModule() {
  const { i18n } = useTranslation(); // для корректного перерендера при смене языка

  return (
    <div key={i18n.language} className="dashboard-container">
      <div className="top-buttons">
        {/* Можно добавить дополнительные элементы */}
      </div>

      <h1 className="dashboard-title">
        <Trans i18nKey="shared_aboutproject_title" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/modules/aboutproject/philosophy" className="dashboard-button">
          <Trans i18nKey="shared_aboutproject_philosophy" />
        </Link>
        <Link to="/modules/aboutproject/whitepaper" className="dashboard-button">
          <Trans i18nKey="shared_aboutproject_whitepaper" />
        </Link>
        <Link to="/modules/aboutproject/manifest" className="dashboard-button">
          <Trans i18nKey="shared_aboutproject_manifest" />
        </Link>
      </div>
    </div>
  );
}
