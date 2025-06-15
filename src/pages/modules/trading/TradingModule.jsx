import React from 'react';
import { Link } from 'react-router-dom';
import '../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function TradingModule() {
  const { i18n } = useTranslation(); // для перерендера при смене языка

  return (
    <div key={i18n.language} className="dashboard-container">
      <div className="top-buttons">
        {/* ← можно добавить иконку домой или другие верхние кнопки здесь */}
      </div>

      <h1 className="dashboard-title">
        <Trans i18nKey="shared_trading_module" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/dashboard" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        {[...Array(45)].map((_, index) => {
          const lessonNumber = index + 1;
          return (
            <Link
              key={lessonNumber}
              to={`/trading/lesson${lessonNumber}`}
              className="dashboard-button"
            >
              <Trans i18nKey={`shared_trading_lesson${lessonNumber}`} />
            </Link>
          );
        })}

        <Link to="/trading/test" className="dashboard-button">
          <Trans i18nKey="shared_final_test" />
        </Link>
      </div>
    </div>
  );
}
