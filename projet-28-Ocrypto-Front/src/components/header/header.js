import React from 'react';
import Menu from './menu/menu';
import './headerStyles.scss';

function header({ logoTheme }) {
  return (
    <header className="App-header">
      <a href="/" className="App-logo-container">
        <img src={logoTheme} className="App-logo" alt="logo" />
      </a>
      <Menu />
    </header>
  );
}

export default React.memo(header);
