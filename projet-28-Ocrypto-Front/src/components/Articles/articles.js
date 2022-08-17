/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroku from '../../config/api/heroku';
import './articlesStyles.scss';

function Articles() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');

  const fetchArticles = async () => {
    const { data } = await heroku.get('/articles');
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredArtciles = articles.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App-main-content">
      <div className="App-main-header">
        <h1 className="App-main-title">
          ARTICLES
        </h1>
        <div className="articles-search">
          <form>
            <input type="text" className="articles-input" placeholder="Rechercher un article" onChange={handleChange} />
          </form>
        </div>
      </div>
      <div className="App-articles">
        {filteredArtciles.map((article) => (
          <div key={article.id} onClick={() => navigate(`/article/${article.id}`)} className="App-article-preview">
            <div className="App-article-preview-image">
              <div className="big-box big-box1">
                <img src={require(`../../assets/images/${article.image}.png`)} alt="img" className="article-img" />
              </div>
            </div>
            <div className="App-article-preview-title">
              <h2 className="App-article-preview-title-text">
                {article.name.toUpperCase()}
              </h2>
            </div>
            <div className="App-article-preview-text">
              <p className="App-article-preview-text">
                {article.abstract.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
export default React.memo(Articles);
