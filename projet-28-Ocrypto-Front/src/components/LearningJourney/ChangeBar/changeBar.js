import React from 'react';
import './changeBarStyles.scss';

function ChangeBar() {
  return (
    <footer className="footer-container">
      <div className="btn-footer">
        <button className="btn-cours" type="submit">Retour</button>
        <p className="numberPage">13/17</p>
        <button className="btn-cours" type="submit">Suivant</button>
      </div>
    </footer>
  );
}

export default React.memo(ChangeBar);
