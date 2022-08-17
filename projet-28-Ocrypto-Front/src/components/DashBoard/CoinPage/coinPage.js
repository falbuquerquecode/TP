/* eslint-disable react/jsx-closing-tag-location */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { SingleCoin } from '../../../config/api/api';
import Footer from '../../footer/footer';
import CoinChart from './CoinChart/coinChart';

import './coinPageStyles.scss';

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(false);

  const fetchCoin = async () => {
    setLoading(true);
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const htmlToParse = coin ? parse(coin?.description?.en.split('. ')[0]) : '';
  return (
    <>
      <div className="coin-page">
        {loading ? (<div className="loading">Loading...</div>) : (
          <div className="coin-page-header">
            <img src={coin?.image?.large} className="coin-page-img" alt="coin" />
            <h1 className="coin-page-name">{coin?.name}</h1>
            <p className="coin-page-description">{htmlToParse}</p>
            <p className="coin-page-rank">Rang: {coin?.market_cap_rank}</p>
            <p className="coin-page-price">Prix actuel: {coin?.market_data?.current_price.eur} €</p>
            <a href={coin?.links?.homepage[0]} className="coin-page-link">Plus d'informations</a>
          </div>
        )}
        <CoinChart />
      </div>
      <Footer />
    </>
  );
}
export default React.memo(CoinPage);
