import React from 'react';
import './footerStyles.scss';

function footer() {
  return (
    <footer className="App-footer">
      <nav className="Footer-nav">
        <p className="Footer-copyright">© 2022 O'crypto</p>
        <a className="Footer-link" href="/about">A propos</a>
        <a className="Footer-link" href="/team">Notre équipe</a>
      </nav>
    </footer>
  );
}

export default React.memo(footer);
