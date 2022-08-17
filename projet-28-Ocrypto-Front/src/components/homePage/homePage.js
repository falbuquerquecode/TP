import React from 'react';
import './homePageStyles.scss';
import Main from './main/main';

function homePage() {
  return (
    <div className="App-homePage">
      <Main />
    </div>
  );
}

export default React.memo(homePage);
