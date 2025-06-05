// src/pages/modules/aboutproject/SupportPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './SupportPage.css';
import { Trans, useTranslation } from 'react-i18next';

export default function SupportPage() {
  const { t } = useTranslation('shared', { useSuspense: false });

  return (
    <div className="support-container">
      <div className="support-top">
        <Link to="/" className="home-icon-button">🏠</Link>
        <h1 className="support-title"><Trans i18nKey="shared_support_title" /></h1>
        <p className="support-description"><Trans i18nKey="shared_support_description" /></p>
      </div>

      <div className="wallet-section">
        <h2><Trans i18nKey="shared_support_wallets_title" /></h2>
        <div className="wallets">
          <div className="wallet-card">
            <h3>USDT (BEP20)</h3>
            <img src="/images/qr-usdt.jpg" alt="USDT QR" />
            <code>0xA84B05ccD2f91F3949C571319d98881D365460c2</code>
          </div>
          <div className="wallet-card">
            <h3>Ethereum (ETH)</h3>
            <img src="/images/qr-eth.jpg" alt="ETH QR" />
            <code>0xA84B05ccD2f91F3949C571319d98881D365460c2</code>
          </div>
          <div className="wallet-card">
            <h3>Bitcoin (BTC)</h3>
            <img src="/images/qr-btc.jpg" alt="BTC QR" />
            <code>bc1q7gz3szzp2gh285h2rk43rx58gnfcynvgawekf0</code>
          </div>
          <div className="wallet-card">
            <h3>Polygon (POL)</h3>
            <img src="/images/qr-pol.jpg" alt="POL QR" />
            <code>0xA84B05ccD2f91F3949C571319d98881D365460c2</code>
          </div>
        </div>
      </div>

      <div className="support-contacts">
        <h2><Trans i18nKey="shared_support_contacts_title" /></h2>
        <ul>
          <li>📩 Email: <a href="aaaseva68@gmail.com" target="_blank">aaaseva68@gmail.com</a></li>
          <li>📱 Telegram: <a href="https://t.me/Otec_Vsevolod" target="_blank">https://t.me/Otec_Vsevolod</a></li>
          <li>📸 Instagram: <a href="https://www.instagram.com/seva_detochka?igsh=MWhwb2Npa2Z3emtqeg%3D%3D&utm_source=qr" target="_blank">https://www.instagram.com/seva_detochka?igsh=MWhwb2Npa2Z3emtqeg%3D%3D&utm_source=qr</a></li>
          <li>🐦 Twitter: <a href="https://twitter.com/your_twitter" target="_blank">@your_twitter</a></li>
          <li>💻 GitHub: <a href="https://github.com/your_github" target="_blank">@your_github</a></li>
        </ul>
      </div>
    </div>
  );
}
