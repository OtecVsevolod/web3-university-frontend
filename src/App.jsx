import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import Dashboard from './pages/Dashboard';
import './App.css';

export default function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1e1e1e' }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lesson1" element={<Lesson1 />} />
            <Route path="/lesson2" element={<Lesson2 />} />
            <Route path="/lesson3" element={<Lesson3 />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
