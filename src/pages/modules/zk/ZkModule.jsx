import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function ZkModule() {
  const { i18n } = useTranslation(); // для перерендера при смене языка

  return (
    <div key={i18n.language} className="dashboard-container">
      <div className="top-buttons">
        {/* ← можно добавить иконку домой или другие верхние кнопки здесь */}
      </div>

      <h1 className="dashboard-title">
        <Trans i18nKey="shared_zk_module" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/dashboard" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/zk/lesson1" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson1" />
        </Link>
        <Link to="/zk/lesson2" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson2" />
        </Link>
        <Link to="/zk/lesson3" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson3" />
        </Link>
        <Link to="/zk/lesson4" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson4" />
        </Link>
        <Link to="/zk/lesson5" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson5" />
        </Link>
        <Link to="/zk/lesson6" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson6" />
        </Link>
        <Link to="/zk/lesson7" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson7" />
        </Link>
        <Link to="/zk/lesson8" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson8" />
        </Link>
        <Link to="/zk/lesson9" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson9" />
        </Link>
        <Link to="/zk/lesson10" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson10" />
        </Link>
        <Link to="/zk/lesson11" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson11" />
        </Link>
        <Link to="/zk/lesson12" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson12" />
        </Link>
        <Link to="/zk/lesson13" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson13" />
        </Link>
        <Link to="/zk/lesson14" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson14" />
        </Link>
        <Link to="/zk/lesson15" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson15" />
        </Link>
        <Link to="/zk/lesson16" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson16" />
        </Link>
        <Link to="/zk/lesson17" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson17" />
        </Link>
        <Link to="/zk/lesson18" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson18" />
        </Link>
        <Link to="/zk/lesson19" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson19" />
        </Link>
        <Link to="/zk/lesson20" className="dashboard-button">
          <Trans i18nKey="shared_zk_lesson20" />
        </Link>
        <Link to="/zk/test" className="dashboard-button">
          <Trans i18nKey="shared_final_test" />
        </Link>
      </div>
    </div>
  );
}
