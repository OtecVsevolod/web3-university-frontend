import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // если у тебя папка `pages`
import './i18n';
import LanguageSelector from './components/LanguageSelector';
import ScrollToTop from './components/ScrollToTop';

// Главные страницы
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import AboutProjectModule from './pages/modules/aboutproject/AboutProjectModule';
import PhilosophyPage from './pages/modules/aboutproject/PhilosophyPage';
import WhitepaperPage from './pages/modules/aboutproject/WhitepaperPage';
import ManifestPage from './pages/modules/aboutproject/ManifestPage';
import SupportPage from './pages/modules/aboutproject/SupportPage';
import PracticeDashboard from './pages/modules/practice/PracticeDashboard';
import ExchangeModule from './pages/modules/practice/exchange/ExchangeModule';
// === Урок 1: Регистрация на бирже
import Lesson1Register from './pages/modules/practice/exchange/lesson1_register'; // ⚠️ У тебя этот файл уже назван lesson1_stablecoins.jsx
import Lesson2Register from './pages/modules/practice/exchange/lesson2_register'; 
import Lesson3Register from './pages/modules/practice/exchange/lesson3_register'; 
import Lesson4Register from './pages/modules/practice/exchange/lesson4_register'; 


// Модуль 0: Мышление и финансовая грамотность
import MindsetModule from './pages/modules/mindset/MindsetModule';
import MindsetLesson1 from './pages/modules/mindset/lesson1';
import MindsetLesson2 from './pages/modules/mindset/lesson2';
import MindsetLesson3 from './pages/modules/mindset/lesson3';
import MindsetLesson4 from './pages/modules/mindset/lesson4';
import MindsetLesson5 from './pages/modules/mindset/lesson5';
import MindsetLesson6 from './pages/modules/mindset/lesson6';
import FinalTestMindset from './pages/modules/mindset/FinalTestMindset';

// Модуль 1: Введение в крипту
import IntroModule from './pages/modules/intro/IntroModule';
import IntroLesson1 from './pages/modules/intro/IntroLesson1';
import IntroLesson2 from './pages/modules/intro/IntroLesson2';
import IntroLesson3 from './pages/modules/intro/IntroLesson3';
import IntroLesson4 from './pages/modules/intro/IntroLesson4';
import IntroLesson5 from './pages/modules/intro/IntroLesson5';
import IntroLesson6 from './pages/modules/intro/IntroLesson6';
import IntroLesson7 from './pages/modules/intro/IntroLesson7';
import IntroLesson8 from './pages/modules/intro/IntroLesson8';
import IntroLesson9 from './pages/modules/intro/IntroLesson9';
import IntroLesson10 from './pages/modules/intro/IntroLesson10';
import FinalTestIntro from './pages/modules/intro/FinalTestIntro';

// ✅ Модуль 2: Основы блокчейна
import BlockModule from './pages/modules/blockchain/BlockModule';
import BlockLesson1 from './pages/modules/blockchain/BlockLesson1';
import BlockLesson2 from './pages/modules/blockchain/BlockLesson2';
import BlockLesson3 from './pages/modules/blockchain/BlockLesson3';
import BlockLesson4 from './pages/modules/blockchain/BlockLesson4';
import BlockLesson5 from './pages/modules/blockchain/BlockLesson5';
import BlockLesson6 from './pages/modules/blockchain/BlockLesson6';
import BlockLesson7 from './pages/modules/blockchain/BlockLesson7';
import BlockLesson8 from './pages/modules/blockchain/BlockLesson8';
import BlockLesson9 from './pages/modules/blockchain/BlockLesson9';
import BlockLesson10 from './pages/modules/blockchain/BlockLesson10';

// ✅ Модуль 3: Ethereum и смарт-контракты
import EthereumModule from './pages/modules/ethereum/EthereumModule';
import Lesson1 from './pages/modules/ethereum/lesson1';
import Lesson2 from './pages/modules/ethereum/lesson2';
import Lesson3 from './pages/modules/ethereum/lesson3';
import Lesson4 from './pages/modules/ethereum/lesson4';
import Lesson5 from './pages/modules/ethereum/lesson5';
import Lesson6 from './pages/modules/ethereum/lesson6';
import Lesson7 from './pages/modules/ethereum/lesson7';
import Lesson8 from './pages/modules/ethereum/lesson8';
import Lesson9 from './pages/modules/ethereum/lesson9';
import Lesson10 from './pages/modules/ethereum/lesson10';
import FinalTestEthereum from './pages/modules/ethereum/FinalTestEthereum';

// ✅ Модуль 4: Основы Web3 / DeFi
import Web3DeFiModule from './pages/modules/web3defi/Web3DeFiModule';
import FinalTestWeb3DeFi from './pages/modules/web3defi/FinalTestWeb3DeFi';
import Web3Lesson1 from './pages/modules/web3defi/lesson1';
import Web3Lesson2 from './pages/modules/web3defi/lesson2';
import Web3Lesson3 from './pages/modules/web3defi/lesson3';
import Web3Lesson4 from './pages/modules/web3defi/lesson4';
import Web3Lesson5 from './pages/modules/web3defi/lesson5';
import Web3Lesson6 from './pages/modules/web3defi/lesson6';
import Web3Lesson7 from './pages/modules/web3defi/lesson7';
import Web3Lesson8 from './pages/modules/web3defi/lesson8';
import Web3Lesson9 from './pages/modules/web3defi/lesson9';
import Web3Lesson10 from './pages/modules/web3defi/lesson10';

// 📘 Страница выбора уроков
import TokenModule from './pages/modules/token/TokenModule';
// 📚 Уроки
import TokenLesson1 from './pages/modules/token/lesson1';
import TokenLesson2 from './pages/modules/token/lesson2';
import TokenLesson3 from './pages/modules/token/lesson3';
import TokenLesson4 from './pages/modules/token/lesson4';
import TokenLesson5 from './pages/modules/token/lesson5';
import TokenLesson6 from './pages/modules/token/lesson6';
import TokenLesson7 from './pages/modules/token/lesson7';
import TokenLesson8 from './pages/modules/token/lesson8';
import TokenLesson9 from './pages/modules/token/lesson9';
import TokenLesson10 from './pages/modules/token/lesson10';

// 🧪 Финальный тест
import FinalTestToken from './pages/modules/token/FinalTestToken';

// Главная страница модуля и финальный тест
import StrategiesModule from './pages/modules/strategies/StrategiesModule';

// Уроки
import StrategiesLesson1 from './pages/modules/strategies/StrategiesLesson1';
import StrategiesLesson2 from './pages/modules/strategies/StrategiesLesson2';
import StrategiesLesson3 from './pages/modules/strategies/StrategiesLesson3';
import StrategiesLesson4 from './pages/modules/strategies/StrategiesLesson4';
import StrategiesLesson5 from './pages/modules/strategies/StrategiesLesson5';
import StrategiesLesson6 from './pages/modules/strategies/StrategiesLesson6';
import StrategiesLesson7 from './pages/modules/strategies/StrategiesLesson7';
import StrategiesLesson8 from './pages/modules/strategies/StrategiesLesson8';
import StrategiesLesson9 from './pages/modules/strategies/StrategiesLesson9';
import StrategiesLesson10 from './pages/modules/strategies/StrategiesLesson10';
import StrategiesLesson11 from './pages/modules/strategies/StrategiesLesson11';
import StrategiesLesson12 from './pages/modules/strategies/StrategiesLesson12';
// 🧪 Финальный тест
import FinalTestStrategies from './pages/modules/strategies/FinalTestStrategies';

// Главная страница модуля и финальный тест
import ZkModule from './pages/modules/zk/ZkModule';

// Уроки
import ZkLesson1 from './pages/modules/zk/ZkLesson1';
import ZkLesson2 from './pages/modules/zk/ZkLesson2';
import ZkLesson3 from './pages/modules/zk/ZkLesson3';
import ZkLesson4 from './pages/modules/zk/ZkLesson4';
import ZkLesson5 from './pages/modules/zk/ZkLesson5';
import ZkLesson6 from './pages/modules/zk/ZkLesson6';
import ZkLesson7 from './pages/modules/zk/ZkLesson7';
import ZkLesson8 from './pages/modules/zk/ZkLesson8';
import ZkLesson9 from './pages/modules/zk/ZkLesson9';
import ZkLesson10 from './pages/modules/zk/ZkLesson10';
import ZkLesson11 from './pages/modules/zk/ZkLesson11';
import ZkLesson12 from './pages/modules/zk/ZkLesson12';
import ZkLesson13 from './pages/modules/zk/ZkLesson13';
import ZkLesson14 from './pages/modules/zk/ZkLesson14';
import ZkLesson15 from './pages/modules/zk/ZkLesson15';
import ZkLesson16 from './pages/modules/zk/ZkLesson16';
import ZkLesson17 from './pages/modules/zk/ZkLesson17';
import ZkLesson18 from './pages/modules/zk/ZkLesson18';
import ZkLesson19 from './pages/modules/zk/ZkLesson19';
import ZkLesson20 from './pages/modules/zk/ZkLesson20';
// 🧪 Финальный тест
import FinalTestZk from './pages/modules/zk/FinalTestZk';

// Главный модуль и финальный тест
import TradingModule from './pages/modules/trading/TradingModule';

// Уроки 1–45
import TradingLesson1 from './pages/modules/trading/TradingLesson1';
import TradingLesson2 from './pages/modules/trading/TradingLesson2';
import TradingLesson3 from './pages/modules/trading/TradingLesson3';
import TradingLesson4 from './pages/modules/trading/TradingLesson4';
import TradingLesson5 from './pages/modules/trading/TradingLesson5';
import TradingLesson6 from './pages/modules/trading/TradingLesson6';
import TradingLesson7 from './pages/modules/trading/TradingLesson7';
import TradingLesson8 from './pages/modules/trading/TradingLesson8';
import TradingLesson9 from './pages/modules/trading/TradingLesson9';
import TradingLesson10 from './pages/modules/trading/TradingLesson10';

import TradingLesson11 from './pages/modules/trading/TradingLesson11';
import TradingLesson12 from './pages/modules/trading/TradingLesson12';
import TradingLesson13 from './pages/modules/trading/TradingLesson13';
import TradingLesson14 from './pages/modules/trading/TradingLesson14';
import TradingLesson15 from './pages/modules/trading/TradingLesson15';
import TradingLesson16 from './pages/modules/trading/TradingLesson16';
import TradingLesson17 from './pages/modules/trading/TradingLesson17';
import TradingLesson18 from './pages/modules/trading/TradingLesson18';
import TradingLesson19 from './pages/modules/trading/TradingLesson19';
import TradingLesson20 from './pages/modules/trading/TradingLesson20';

import TradingLesson21 from './pages/modules/trading/TradingLesson21';
import TradingLesson22 from './pages/modules/trading/TradingLesson22';
import TradingLesson23 from './pages/modules/trading/TradingLesson23';
import TradingLesson24 from './pages/modules/trading/TradingLesson24';
import TradingLesson25 from './pages/modules/trading/TradingLesson25';
import TradingLesson26 from './pages/modules/trading/TradingLesson26';
import TradingLesson27 from './pages/modules/trading/TradingLesson27';
import TradingLesson28 from './pages/modules/trading/TradingLesson28';
import TradingLesson29 from './pages/modules/trading/TradingLesson29';
import TradingLesson30 from './pages/modules/trading/TradingLesson30';

import TradingLesson31 from './pages/modules/trading/TradingLesson31';
import TradingLesson32 from './pages/modules/trading/TradingLesson32';
import TradingLesson33 from './pages/modules/trading/TradingLesson33';
import TradingLesson34 from './pages/modules/trading/TradingLesson34';
import TradingLesson35 from './pages/modules/trading/TradingLesson35';
import TradingLesson36 from './pages/modules/trading/TradingLesson36';
import TradingLesson37 from './pages/modules/trading/TradingLesson37';
import TradingLesson38 from './pages/modules/trading/TradingLesson38';
import TradingLesson39 from './pages/modules/trading/TradingLesson39';
import TradingLesson40 from './pages/modules/trading/TradingLesson40';

import TradingLesson41 from './pages/modules/trading/TradingLesson41';
import TradingLesson42 from './pages/modules/trading/TradingLesson42';
import TradingLesson43 from './pages/modules/trading/TradingLesson43';
import TradingLesson44 from './pages/modules/trading/TradingLesson44';
import TradingLesson45 from './pages/modules/trading/TradingLesson45';
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <LanguageSelector />

        <Routes>
          {/* Главные страницы */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutproject" element={<AboutProjectModule />} />
          <Route path="/modules/aboutproject/philosophy" element={<PhilosophyPage />} />
          <Route path="/modules/aboutproject/whitepaper" element={<WhitepaperPage />} />
          <Route path="/modules/aboutproject/manifest" element={<ManifestPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/practice" element={<PracticeDashboard />} />
          <Route path="/practice/exchange" element={<ExchangeModule />} />
          {/* === Урок 1: Регистрация на бирже === */}
          <Route path="/practice/exchange/lesson1" element={<Lesson1Register />} />
          <Route path="/practice/exchange/lesson2" element={<Lesson2Register />} />
          <Route path="/practice/exchange/lesson3" element={<Lesson3Register />} />
          <Route path="/practice/exchange/lesson4" element={<Lesson4Register />} />
         {/* Модуль: Мышление и финансовая грамотность */}
          <Route path="/mindset" element={<MindsetModule />} />
          <Route path="/mindset/lesson1" element={<MindsetLesson1 />} />
          <Route path="/mindset/lesson2" element={<MindsetLesson2 />} />
          <Route path="/mindset/lesson3" element={<MindsetLesson3 />} />
          <Route path="/mindset/lesson4" element={<MindsetLesson4 />} />
          <Route path="/mindset/lesson5" element={<MindsetLesson5 />} />
          <Route path="/mindset/lesson6" element={<MindsetLesson6 />} />
          <Route path="/mindset/test" element={<FinalTestMindset />} />

          {/* Модуль: Введение в крипту */}
          <Route path="/intro" element={<IntroModule />} />
          <Route path="/intro/lesson1" element={<IntroLesson1 />} />
          <Route path="/intro/lesson2" element={<IntroLesson2 />} />
          <Route path="/intro/lesson3" element={<IntroLesson3 />} />
          <Route path="/intro/lesson4" element={<IntroLesson4 />} />
          <Route path="/intro/lesson5" element={<IntroLesson5 />} />
          <Route path="/intro/lesson6" element={<IntroLesson6 />} />
          <Route path="/intro/lesson7" element={<IntroLesson7 />} />
          <Route path="/intro/lesson8" element={<IntroLesson8 />} />
          <Route path="/intro/lesson9" element={<IntroLesson9 />} />
          <Route path="/intro/lesson10" element={<IntroLesson10 />} />
          <Route path="/intro/FinalTestIntro" element={<FinalTestIntro />} />

          {/* Модуль: Основы блокчейна */}
          <Route path="/blockchain" element={<BlockModule />} />
          <Route path="/blockchain/lesson1" element={<BlockLesson1 />} />
          <Route path="/blockchain/lesson2" element={<BlockLesson2 />} />
          <Route path="/blockchain/lesson3" element={<BlockLesson3 />} />
          <Route path="/blockchain/lesson4" element={<BlockLesson4 />} />
          <Route path="/blockchain/lesson5" element={<BlockLesson5 />} />
          <Route path="/blockchain/lesson6" element={<BlockLesson6 />} />
          <Route path="/blockchain/lesson7" element={<BlockLesson7 />} />
          <Route path="/blockchain/lesson8" element={<BlockLesson8 />} />
          <Route path="/blockchain/lesson9" element={<BlockLesson9 />} />
          <Route path="/blockchain/lesson10" element={<BlockLesson10 />} />

          {/* ✅ Модуль: Ethereum и смарт-контракты */}
          <Route path="/modules/ethereum" element={<EthereumModule />} />
          <Route path="/modules/ethereum/lesson1" element={<Lesson1 />} />
          <Route path="/modules/ethereum/lesson2" element={<Lesson2 />} />
          <Route path="/modules/ethereum/lesson3" element={<Lesson3 />} />
          <Route path="/modules/ethereum/lesson4" element={<Lesson4 />} />
          <Route path="/modules/ethereum/lesson5" element={<Lesson5 />} />
          <Route path="/modules/ethereum/lesson6" element={<Lesson6 />} />
          <Route path="/modules/ethereum/lesson7" element={<Lesson7 />} />
          <Route path="/modules/ethereum/lesson8" element={<Lesson8 />} />
          <Route path="/modules/ethereum/lesson9" element={<Lesson9 />} />
          <Route path="/modules/ethereum/lesson10" element={<Lesson10 />} />
          <Route path="/modules/ethereum/finaltest" element={<FinalTestEthereum />} />

          {/* ✅ Модуль:Основы Web3 / DeFi */}
          <Route path="/modules/web3defi" element={<Web3DeFiModule />} />
          <Route path="/web3defi/lesson1" element={<Web3Lesson1 />} />
          <Route path="/web3defi/lesson2" element={<Web3Lesson2 />} />
          <Route path="/web3defi/lesson3" element={<Web3Lesson3 />} />
          <Route path="/web3defi/lesson4" element={<Web3Lesson4 />} />
          <Route path="/web3defi/lesson5" element={<Web3Lesson5 />} />
          <Route path="/web3defi/lesson6" element={<Web3Lesson6 />} />
          <Route path="/web3defi/lesson7" element={<Web3Lesson7 />} />
          <Route path="/web3defi/lesson8" element={<Web3Lesson8 />} />
          <Route path="/web3defi/lesson9" element={<Web3Lesson9 />} />
          <Route path="/web3defi/lesson10" element={<Web3Lesson10 />} />
          <Route path="/web3defi/final-test" element={<FinalTestWeb3DeFi />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/token" element={<TokenModule />} />
          <Route path="/token/lesson1" element={<TokenLesson1 />} />
          <Route path="/token/lesson2" element={<TokenLesson2 />} />
          <Route path="/token/lesson3" element={<TokenLesson3 />} />
          <Route path="/token/lesson4" element={<TokenLesson4 />} />
          <Route path="/token/lesson5" element={<TokenLesson5 />} />
          <Route path="/token/lesson6" element={<TokenLesson6 />} />
          <Route path="/token/lesson7" element={<TokenLesson7 />} />
          <Route path="/token/lesson8" element={<TokenLesson8 />} />
          <Route path="/token/lesson9" element={<TokenLesson9 />} />
          <Route path="/token/lesson10" element={<TokenLesson10 />} />
          <Route path="/token/finaltest" element={<FinalTestToken />} />

          <Route path="/strategies" element={<StrategiesModule />} />
          <Route path="/strategies/lesson1" element={<StrategiesLesson1 />} />
          <Route path="/strategies/lesson2" element={<StrategiesLesson2 />} />
          <Route path="/strategies/lesson3" element={<StrategiesLesson3 />} />
          <Route path="/strategies/lesson4" element={<StrategiesLesson4 />} />
          <Route path="/strategies/lesson5" element={<StrategiesLesson5 />} />
          <Route path="/strategies/lesson6" element={<StrategiesLesson6 />} />
          <Route path="/strategies/lesson7" element={<StrategiesLesson7 />} />
          <Route path="/strategies/lesson8" element={<StrategiesLesson8 />} />
          <Route path="/strategies/lesson9" element={<StrategiesLesson9 />} />
          <Route path="/strategies/lesson10" element={<StrategiesLesson10 />} />
          <Route path="/strategies/lesson11" element={<StrategiesLesson11 />} />
          <Route path="/strategies/lesson12" element={<StrategiesLesson12 />} />
          <Route path="/strategies/test" element={<FinalTestStrategies />} />

          <Route path="/zk" element={<ZkModule />} />
          <Route path="/zk/lesson1" element={<ZkLesson1 />} />
          <Route path="/zk/lesson2" element={<ZkLesson2 />} />
          <Route path="/zk/lesson3" element={<ZkLesson3 />} />
          <Route path="/zk/lesson4" element={<ZkLesson4 />} />
          <Route path="/zk/lesson5" element={<ZkLesson5 />} />
          <Route path="/zk/lesson6" element={<ZkLesson6 />} />
          <Route path="/zk/lesson7" element={<ZkLesson7 />} />
          <Route path="/zk/lesson8" element={<ZkLesson8 />} />
          <Route path="/zk/lesson9" element={<ZkLesson9 />} />
          <Route path="/zk/lesson10" element={<ZkLesson10 />} />
          <Route path="/zk/lesson11" element={<ZkLesson11 />} />
          <Route path="/zk/lesson12" element={<ZkLesson12 />} />
          <Route path="/zk/lesson13" element={<ZkLesson13 />} />
          <Route path="/zk/lesson14" element={<ZkLesson14 />} />
          <Route path="/zk/lesson15" element={<ZkLesson15 />} />
          <Route path="/zk/lesson16" element={<ZkLesson16 />} />
          <Route path="/zk/lesson17" element={<ZkLesson17 />} />
          <Route path="/zk/lesson18" element={<ZkLesson18 />} />
          <Route path="/zk/lesson19" element={<ZkLesson19 />} />
          <Route path="/zk/lesson20" element={<ZkLesson20 />} />
          <Route path="/zk/test" element={<FinalTestZk />} />

          <Route path="/trading" element={<TradingModule />} />

          <Route path="/trading/lesson1" element={<TradingLesson1 />} />
          <Route path="/trading/lesson2" element={<TradingLesson2 />} />
          <Route path="/trading/lesson3" element={<TradingLesson3 />} />
          <Route path="/trading/lesson4" element={<TradingLesson4 />} />
          <Route path="/trading/lesson5" element={<TradingLesson5 />} />
          <Route path="/trading/lesson6" element={<TradingLesson6 />} />
          <Route path="/trading/lesson7" element={<TradingLesson7 />} />
          <Route path="/trading/lesson8" element={<TradingLesson8 />} />
          <Route path="/trading/lesson9" element={<TradingLesson9 />} />
          <Route path="/trading/lesson10" element={<TradingLesson10 />} />

          <Route path="/trading/lesson11" element={<TradingLesson11 />} />
          <Route path="/trading/lesson12" element={<TradingLesson12 />} />
          <Route path="/trading/lesson13" element={<TradingLesson13 />} />
          <Route path="/trading/lesson14" element={<TradingLesson14 />} />
          <Route path="/trading/lesson15" element={<TradingLesson15 />} />
          <Route path="/trading/lesson16" element={<TradingLesson16 />} />
          <Route path="/trading/lesson17" element={<TradingLesson17 />} />
          <Route path="/trading/lesson18" element={<TradingLesson18 />} />
          <Route path="/trading/lesson19" element={<TradingLesson19 />} />
          <Route path="/trading/lesson20" element={<TradingLesson20 />} />

          <Route path="/trading/lesson21" element={<TradingLesson21 />} />
          <Route path="/trading/lesson22" element={<TradingLesson22 />} />
          <Route path="/trading/lesson23" element={<TradingLesson23 />} />
          <Route path="/trading/lesson24" element={<TradingLesson24 />} />
          <Route path="/trading/lesson25" element={<TradingLesson25 />} />
          <Route path="/trading/lesson26" element={<TradingLesson26 />} />
          <Route path="/trading/lesson27" element={<TradingLesson27 />} />
          <Route path="/trading/lesson28" element={<TradingLesson28 />} />
          <Route path="/trading/lesson29" element={<TradingLesson29 />} />
          <Route path="/trading/lesson30" element={<TradingLesson30 />} />

          <Route path="/trading/lesson31" element={<TradingLesson31 />} />
          <Route path="/trading/lesson32" element={<TradingLesson32 />} />
          <Route path="/trading/lesson33" element={<TradingLesson33 />} />
          <Route path="/trading/lesson34" element={<TradingLesson34 />} />
          <Route path="/trading/lesson35" element={<TradingLesson35 />} />
          <Route path="/trading/lesson36" element={<TradingLesson36 />} />
          <Route path="/trading/lesson37" element={<TradingLesson37 />} />
          <Route path="/trading/lesson38" element={<TradingLesson38 />} />
          <Route path="/trading/lesson39" element={<TradingLesson39 />} />
          <Route path="/trading/lesson40" element={<TradingLesson40 />} />

          <Route path="/trading/lesson41" element={<TradingLesson41 />} />
          <Route path="/trading/lesson42" element={<TradingLesson42 />} />
          <Route path="/trading/lesson43" element={<TradingLesson43 />} />
          <Route path="/trading/lesson44" element={<TradingLesson44 />} />
          <Route path="/trading/lesson45" element={<TradingLesson45 />} />
        </Routes>
      </div>
    </Router>
  );
}
