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
import SupportPage from './pages/modules/aboutproject/SupportPage';

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
          <Route path="/support" element={<SupportPage />} />

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
        </Routes>
      </div>
    </Router>
  );
}
