import React from 'react';
import './learningJourneyStyles.scss';

function LearningJourney() {
  return (
    <main className="learning-main">
      <h2 className="title-learn">Parcours d'apprentissage</h2>
      <div className="card-main">
        <div className="card-container">
          <div className="card-structure">
            <div className="head-card">
              <h3>Novice - Blockchain</h3>
              <p> 0 point avant le niveau Intermédiaire</p>
            </div>
            <div className="separator" />
            <div className="main-card">
              <h4 className="card-name">Novice - Blokchain 2022</h4>
              <p className="card-description">300/300 points</p>
            </div>
            <div className="separator" />
            <footer className="card-footer-learn">
              <div className="card-progress">
                <div className="first-card-progress" />
              </div>
              <div>
                <div className="card-time">100%</div>
              </div>
            </footer>
          </div>
        </div>
        <div className="card-container">
          <div className="card-structure">
            <div className="head-card">
              <h3>Intermédiaire - NFT 2022 </h3>
              <p> 210 points avant le niveau Confirmé</p>
            </div>
            <div className="separator" />
            <div className="main-card">
              <h4 className="card-name">Intermédiaire - NFT 2022</h4>
              <p className="card-description">90/300 points</p>
            </div>
            <div className="separator" />
            <footer className="card-footer-learn">
              <div className="card-progress">
                <div className="second-card-progress" />
              </div>
              <span className="card-time">30%</span>
            </footer>
          </div>
        </div>
        <div className="card-container">
          <div className="card-structure">
            <div className="head-card">
              <h3>Confirmé - Smart Contract 2022</h3>
              <p>510 points avant le niveau Expert</p>
            </div>
            <div className="separator" />
            <div className="main-card">
              <h4 className="card-name">Confirmé - Smart contract 2022</h4>
              <p className="card-description">0/300 points</p>
            </div>
            <div className="separator" />
            <footer className="card-footer-learn">
              <div className="card-progress">
                <div className="third-card-progress" />
              </div>
              <span className="card-time">0%</span>
            </footer>
          </div>
        </div>
      </div>
      <div className="cours-container">
        <div className="title-cours">
          <h3 className="title-footer-learning">Parcourir les cours</h3>
        </div>
        <div className="link-container">
          <a className="lien" href="/Cours/">Cours</a>
          <a className="lien" href="/challenge">Challenge</a>
          <a className="lien" href="#">Trading</a>
          <a className="lien" href="#">NFT</a>
          <a className="lien" href="#">Tout afficher</a>
        </div>
      </div>
    </main>
  );
}

export default React.memo(LearningJourney);
