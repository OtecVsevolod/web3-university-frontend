import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import './HomeStyle.css';

export default function HomePage() {
  const { t } = useTranslation('shared');
  const navigate = useNavigate();

  return (
    <div className="home-manifestS">
      <div className="home-container">
        <div className="app-wrapper">
          <div className="home-inner">
            <h1 className="home-title">WEB3/CRYPTO UNIVERSITY</h1>

            <div className="neon-sign-wrapper">
              <h2 className="neon-sign-text">
                <Trans
                  i18nKey="shared_home_manifest"
                  components={{ highlight: <span className="highlight" /> }}
                />
              </h2>
            </div>
          </div>

          <div className="home-section align-left">
            <h3 className="section-title neon-blue left-aligned-title">
              {t('shared_home_path_title')}
            </h3>
            <ul className="path-list left-aligned-list">
              <li onClick={() => navigate('/intro')} className="clickable-text">
                {t('shared_home_path1')}
              </li>
              <li onClick={() => navigate('/modules/ethereum')} className="clickable-text">
                {t('shared_home_path2')}
              </li>
              <li onClick={() => navigate('/modules/web3defi')} className="clickable-text">
                {t('shared_home_path3')}
              </li>
              <li onClick={() => navigate('/blockchain')} className="clickable-text">
                {t('shared_home_path4')}
              </li>
              <li onClick={() => navigate('/airdrop')} className="clickable-text">
                {t('shared_home_path5')}
              </li>
            </ul>
          </div>

          <div className="home-section">
            <h3 className="section-title neon-blue">{t('shared_home_system_title')}</h3>
            <ul className="how-list">
              <li>
                <Trans
                  i18nKey="shared_home_system1"
                  components={{ highlight: <span className="highlight" /> }}
                />
              </li>
              <li>
                <Trans i18nKey="shared_home_system2" />
              </li>
             
            </ul>
          </div>

          <div className="home-section">
            <h3 className="section-title neon-cyan">{t('shared_home_final_title')}</h3>
            <p className="home-philosophy">{t('shared_home_final_subtitle')}</p>
          </div>

          <div className="center-button-row">
            <button className="start-button" onClick={() => navigate('/dashboard')}>
              {t('shared_home_main_cta')}
            </button>
          </div>

          <div className="bottom-button-row">
            <button className="secondary-button" onClick={() => navigate('/practice')}>
              {t('shared_home_button_practice')}
            </button>
            <button className="secondary-button" onClick={() => navigate('/modules')}>
              {t('shared_home_button_allmodules')}
            </button>
            <button className="secondary-button" onClick={() => navigate('/philosophy')}>
              {t('shared_home_button_whitepaper')}
            </button>
          </div>

          <div className="support-button-container">
            <Link to="/support" className="support-button">
              {t('shared_home_support_project')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
