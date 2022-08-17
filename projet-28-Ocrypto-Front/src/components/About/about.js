/* eslint-disable max-len */
import React from 'react';
import './about.scss';
import team1 from '../../assets/images/team1.png';
import team2 from '../../assets/images/team2.png';

function About() {
  return (
    <div className="about-container">
      <h1 className="about">A propos de nous</h1>

      <div className="container1">

        <div className="text">
          <h3 className="about-title">O'crypto, qu'est-ce que c'est ?</h3>
          <p>Le site “O’Crypto” est destiné à apprendre les bases de l’univers des crypto-monnaies et de la technologie Blockchain.
            O’Crypto met à disposition des visiteurs des articles qui leur permettra d’en savoir plus sur certains sujets de la cryptomonnaie.
            Le site permet également aux visiteurs de suivre le cours des crypto-monnaies en temps réel.
            Il permet aux visiteurs de s’inscrire afin d'accéder à un parcours d’apprentissage pour tester ses compétences et suivre son évolution.
            L'utilisateur a la possibilité d'ajouter en favoris les cryptomonnaies qui l'intéresse,
            suivre le cours de celles-ci et avoir les dernières informations les concernant.
          </p>
        </div>

        <div className="image1">
          <img src={team1} alt="team1" className="team1" />
        </div>

      </div>

      <div className="container2">
        <div className="image2">
          <img src={team2} alt="team2" className="team2" />
        </div>
        <div className="text">
          <h3 className="about-title">Notre objectif</h3>
          <p>Aujourd’hui, il existe de nombreux sites répertoriant des informations sur les crypto-monnaies et la technologie blockchain,
            mais aucun n’est destiné aux débutants, il y a souvent trop d’informations et des chiffres qui peuvent paraître effrayants à première vue.
            L’objectif du projet O'crypto est d’offrir un environnement d’apprentissage épuré et simple d’utilisation pour les débutants.

          </p>
        </div>
      </div>
    </div>

  );
}

export default React.memo(About);
