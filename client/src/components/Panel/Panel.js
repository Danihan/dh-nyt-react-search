import React from 'react';
import './Panel.css';

const Panel = ({ title, children }) => (
  <div className="Panel card">
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>

      <div className="card-content">
        {children}
      </div>
    </div>
  </div>
)

export default Panel
