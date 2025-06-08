// src/pages/modules/intro/IntroModule.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function IntroModule() {
  const { i18n } = useTranslation();

  return (
    <div key={i18n.language} className="dashboard-container">
      <h1 className="dashboard-title">
        <Trans i18nKey="shared_intro_module" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/dashboard" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/intro/lesson1" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson1" />
        </Link>
        <Link to="/intro/lesson2" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson2" />
        </Link>
        <Link to="/intro/lesson3" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson3" />
        </Link>
        <Link to="/intro/lesson4" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson4" />
        </Link>
        <Link to="/intro/lesson5" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson5" />
        </Link>
        <Link to="/intro/lesson6" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson6" />
        </Link>
        <Link to="/intro/lesson7" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson7" />
        </Link>
        <Link to="/intro/lesson8" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson8" />
        </Link>
        <Link to="/intro/lesson9" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson9" />
        </Link>
        <Link to="/intro/lesson10" className="dashboard-button">
          <Trans i18nKey="shared_intro_lesson10" />
        </Link>
        <Link to="/intro/FinalTestIntro" className="dashboard-button">
          <Trans i18nKey="shared_intro_test" />
        </Link>

        <div className="dashboard-xp">
          <span><Trans i18nKey="shared_xp_label" /></span>
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: '20%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
