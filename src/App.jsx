import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import LanguageSelector from './components/LanguageSelector';

// Главные страницы
import Dashboard from './pages/Dashboard';
import About from './pages/About';

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

export default function App() {
  return (
    <Router>
      <div className="App">
        <LanguageSelector />

        <Routes>
          {/* Главные страницы */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />

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
          <Route path="/modules/ethereum/FinalTestEthereum" element={<FinalTestEthereum />} />
        </Routes>
      </div>
    </Router>
  );
}
