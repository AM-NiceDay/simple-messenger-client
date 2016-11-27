import React from 'react';
import './styles.css';

export default ({ theme = 'dark' }) => (
  <div className={`logo logo--${theme}`}>
    <div className="logo__icon" />
    <span className="logo__text">SMessenger</span>
  </div>
);
