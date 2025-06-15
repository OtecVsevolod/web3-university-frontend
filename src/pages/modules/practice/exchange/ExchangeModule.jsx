import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Dashboard.css';
import { Trans, useTranslation } from 'react-i18next';

export default function ExchangeModule() {
  const { i18n } = useTranslation(); // для перерендера при смене языка

  return (
    <div key={i18n.language} className="dashboard-container">
      <div className="top-buttons">
        {/* можно добавить кнопку домой, если нужно */}
      </div>

      <h1 className="dashboard-title">
        <Trans i18nKey="shared_practice_exchange" />
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Link to="/practice" className="nav-button">
          <Trans i18nKey="shared_back_button" />
        </Link>
      </div>

      <div className="dashboard-menu">
        <Link to="/practice/exchange/lesson1" className="dashboard-button">
          <Trans i18nKey="shared_practice_exchange_lesson1" />
        </Link>
        <Link to="/practice/exchange/lesson2" className="dashboard-button">
          <Trans i18nKey="shared_practice_exchange_lesson2" />
        </Link>
        <Link to="/practice/exchange/lesson3" className="dashboard-button">
          <Trans i18nKey="shared_practice_exchange_lesson3" />
        </Link>
        <Link to="/practice/exchange/lesson4" className="dashboard-button">
          <Trans i18nKey="shared_practice_exchange_lesson4" />
        </Link>

        {/* На будущее — финальный тест */}
        <Link to="/practice/exchange/test" className="dashboard-button final-button">
          <Trans i18nKey="shared_start_final_test" />
        </Link>
      </div>
    </div>
  );
}
