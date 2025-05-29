import React, { useState } from 'react';
import glossary from '../data/glossary';
import './GlossaryTooltip.css';

export default function GlossaryTooltip({ term, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="highlight-term"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && glossary[term] && (
        <div className="tooltip-box">
          {glossary[term]}
        </div>
      )}
    </span>
  );
}
