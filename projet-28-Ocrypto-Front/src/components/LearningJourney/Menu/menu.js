/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './menuStyles.scss';

function Menu() {
  return (
    <div className="head-liner">
      <div className="head-menu">
        <div>
          <a className="btn-menu" href="/learning">Quitter le cours</a>
        </div>
        <div>
          <h3 className="title-head-menu">Blockchain (2022)</h3>
        </div>
        <div>
          <a className="btn-menu" href="/challenge">Challenge</a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Menu);
