import React from 'react';
import './404Styles.scss';
import introuvable from '../../assets/images/introuvable.png';

function PageNotFound() {
  return (

    <div className="PageNotFound">
      <div className="text404">
        <p className="notfound">404</p>
        <p className="texte1">On a rien trouvé !</p>
      </div>
      <div className="image404">
        <img className="img404" src={introuvable} height="500" width="500" alt="not found" />
      </div>
    </div>
  );
}

export default React.memo(PageNotFound);
