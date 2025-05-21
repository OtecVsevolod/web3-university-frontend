import React from 'react';
import { Link } from 'react-router-dom';
import '../../../LessonStyle.css';

function IntroLesson6() {
  return (
    <div className="lesson-container">
      <h2>Урок 6: Как выбрать криптовалюту</h2>
      
      <p>
        На этом этапе у тебя уже должен быть <mark>кошелёк</mark> и базовое понимание крипты.  
        Теперь поговорим о самом главном вопросе: <strong>а что именно покупать?</strong>
      </p>

      <p>
        Самый популярный сайт для выбора криптовалют — это <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer">CoinMarketCap</a>.  
        Это как рейтинг всех монет: кто на первом месте, кто набирает популярность, где какой объём и цена.
      </p>

      <p>
        На CoinMarketCap ты увидишь:
        <ul>
          <li>• <strong>Bitcoin (BTC)</strong> — король криптовалют</li>
          <li>• <strong>Ethereum (ETH)</strong> — для смарт-контрактов</li>
          <li>• <strong>USDT, USDC</strong> — <mark>стейблкоины</mark>, то есть монеты, привязанные к доллару</li>
        </ul>
      </p>

      <p>
        <mark>Стейблкоины</mark> нужны для хранения, расчётов и покупок. Их цена почти всегда = 1 доллар.  
        Они удобны тем, что не скачут в цене, как биткоин.
      </p>

      <p>
        <strong>Как купить:</strong><br/>
        На централизованной бирже (например, Binance) можно купить <mark>USDT</mark> через <mark>P2P</mark> — то есть у других людей напрямую.  
        Это похоже на обменник: ты платишь, продавец отправляет тебе монеты.  
        Главное — проверяй рейтинг продавца и не переводи деньги до подтверждения!
      </p>

      <p>
        Начни с покупки <strong>небольшого количества</strong> USDT или ETH, чтобы потренироваться.  
        Не бери сразу неизвестные токены — вначале смотри топ-100 на CoinMarketCap.  
      </p>

      <p className="lesson-warning">
        Помни: не храни всё на бирже! Как только купишь — переводи на свой кошелёк.
      </p>

      <div className="navigation-buttons">
        <Link to="/intro/lesson5" className="nav-button">Назад</Link>
        <Link to="/intro/lesson7" className="nav-button">Далее</Link>
      </div>
    </div>
  );
}

export default IntroLesson6;
