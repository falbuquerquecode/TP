/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './articleStyles.scss';

function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    setLoading(true);
    const { data } = await axios.get(`https://ocrypto-backend.herokuapp.com/article/${id}`);
    setArticle(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  console.log(article);
  return (
    <div className="App-article-main-content">
      {loading ? (<div className="loading">Loading...</div>) : (
        <>
          <div key={article.id} className="App-article">
            <div className="App-article-header">
              <h1 className="App-article-title">
                {article.name?.toUpperCase()}
              </h1>
            </div>
            <div className="App-article-image">
              <img src={require(`../../../assets/images/${article.image}.png`)} alt="bitcoin" className="article-image" />
            </div>
            <div className="App-article-author">
              <h3 className="App-article-author-name">
                Ecrit par {article.author}
              </h3>
            </div>
            <div className="App-article-text">
              <p className="article-text">
                {article.abstract}
              </p>
            </div>
          </div>
          <div className="App-pub">
            <h2 className="App-pub-title">
              C'est quoi la différence entre Ethereum, Ether et ETH ?
            </h2>
            <p className="App-pub-text">
              Suivez notre parcours d'apprentissage pour tout comprendre !
            </p>
            <button onClick={() => navigate('/log-in')} type="button" className="App-pub-button">
              S'inscrire ici !
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(Article);
