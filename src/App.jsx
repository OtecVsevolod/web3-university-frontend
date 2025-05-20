import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import IntroModule from './pages/modules/intro/IntroModule';
import IntroLesson1 from './pages/modules/intro/IntroLesson1';
import IntroLesson2 from './pages/modules/intro/IntroLesson2';
import IntroLesson3 from './pages/modules/intro/IntroLesson3';
import IntroLesson4 from './pages/modules/intro/IntroLesson4';
import IntroLesson5 from './pages/modules/intro/IntroLesson5';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />

        {/* Введение в крипту (модуль + уроки) */}
        <Route path="/intro" element={<IntroModule />} />
        <Route path="/intro/lesson1" element={<IntroLesson1 />} />
        <Route path="/intro/lesson2" element={<IntroLesson2 />} />
        <Route path="/intro/lesson3" element={<IntroLesson3 />} />
        <Route path="/intro/lesson4" element={<IntroLesson4 />} />
        <Route path="/intro/lesson5" element={<IntroLesson5 />} />
      </Routes>
    </Router>
  );
}
