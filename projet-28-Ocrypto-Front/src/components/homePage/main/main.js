/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authService from '../../LoginForm/auth.service';
import './mainStyles.scss';
import dashboardlogo from '../../../assets/images/Dashboard.png';

function main() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const { data } = await axios.get('https://ocrypto-backend.herokuapp.com/articles');
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    if (authService.getCurrentUser()) {
      setIsLogged(true);
    }
  }, [isLogged]);

  const randomArticles = articles.sort(() => Math.random() - 0.5);
  // Mettre les derniers articles en premier ?
  return (
    <main className="App-main">
      <div className="App-main-content">
        <div className="App-main-header">
          <h1 className="App-main-title">
            C'est quoi les cryptomonnaies ?
          </h1>
          <p className="App-main-text">
            Les crypto-monnaies sont des devises numériques qui reposent sur la technologie de la blockchain pour assurer la sécurité,
            la transparence et la fiabilité des transactions. C'est un actif qui s'échange de pair-à-pair (P2P) sans tiers de confiance comme les banques. Elles n'ont pas de support physique comme des pièces ou des billets.
          </p>
        </div>
        <div className="App-articles">
          {randomArticles.slice(3).map((article) => (
            <div key={article.name} onClick={() => navigate(`/article/${article.id}`)} className="App-article-preview">
              <div className="App-article-preview-image">
                <img src={require(`../../../assets/images/${article.image}.png`)} alt="bitcoin" className="article-img" />
              </div>
              <div className="App-article-preview-title">
                <h2 className="App-article-preview-title-text">
                  {article.name.toUpperCase()}
                </h2>
              </div>
              <div className="App-article-preview-text">
                <p className="App-article-preview-description">
                  {article.abstract.slice(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="App-more-articles">
          <button onClick={() => navigate('/articles')} type="button" className="button-more-articles">
            Plus d'articles...
          </button>
        </div>
        <div className="App-learning-preview">
          <h2 className="App-learning-preview-title">
            Devenez un expert en rejoignant notre parcours d'apprentissage !
          </h2>
          {isLogged ? (
            <button onClick={() => navigate('/learning')} type="button" className="button-signin">
              Démarrer maintenant
            </button>
          ) : (
            <button onClick={() => navigate('/log-in')} type="button" className="button-signin">
              S'inscrire ici !
            </button>
          )}
        </div>
        <div className="App-dashboard-preview">
          <div className="App-dashboard-preview-title">
            <h2 className="App-dashboard-preview-title-text">
              Suivez le cours de vos cryptos préférées !
            </h2>
          </div>
          <div className="App-dashboard-preview-image">
            <img src={dashboardlogo} className="dashboard-img" alt="bitcoin" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default React.memo(main);
