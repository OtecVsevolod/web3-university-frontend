import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LessonWrapper.css';

function LessonWrapper({ children }) {
  const navigate = useNavigate();

  return (
    <div className="lesson-wrapper">
      <button className="back-button" onClick={() => navigate('/intro')}>
        Вернуться
      </button>
      <div className="lesson-content">
        {children}
      </div>
    </div>
  );
}

export default LessonWrapper;
