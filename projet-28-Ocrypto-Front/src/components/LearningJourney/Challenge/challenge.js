/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './challengeStyles.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import heroku from '../../../config/api/heroku';

function Challenge() {
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchChallenges = async () => {
    setLoading(true);
    const { data } = await heroku.get('/challenge/Blockchain');
    setChallenges(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  console.log(challenges.level_id);
  return (
    <div className="challenge-container">
      <h1 className="title-container">CHALLENGE</h1>
      {loading ? (<div className="loading">Loading...</div>) : (
        <>
          <div className="challenge-choice-text">
            <h2 className="Choice">Sur quel sujet voulez-vous testez vos connaissances ?</h2>
          </div>
          <div className="challenge-content">
            <div className="challenge-content-title">
              <ul className="challenge-choice" onClick={() => navigate(`/question/${challenges.level_id}`)}>
                <ArrowForwardIcon />
                <li className="challenge-name">{challenges.name}</li>
                <ArrowBackIcon />
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(Challenge);
