import React, { useState, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import parse from 'html-react-parser';
import Menu from '../Menu/menu';
import heroku from '../../../config/api/heroku';
import './coursStyles.scss';

function Cours() {
  const [lesson, setLesson] = useState('');
  const [firstSlice, setFirstSlice] = useState(0);
  const [slice, setSlice] = useState(2400);

  const fetchLesson = async () => {
    const { data } = await heroku.get('/challenge/Blockchain');
    setLesson(data.abstract);
  };

  useEffect(() => {
    fetchLesson();
  }, []);

  const moreText = () => {
    setFirstSlice(firstSlice + 2400);
    setSlice(slice + 2400);
    fetchLesson();
  };

  const lessText = () => {
    setFirstSlice(firstSlice - 2400);
    setSlice(slice - 2400);
    fetchLesson([]);
  };

  const parsedLesson = parse(lesson?.slice(firstSlice, slice));
  console.log(parsedLesson);

  console.log(lesson);
  console.log(firstSlice, slice);
  return (
    <main className="main-cours-lesson">
      <Menu />
      <div className="homepage-cours">
        <div className="title-cours">
          <h5>Blockchain</h5>
        </div>
        <p className="lesson">
          {parsedLesson}...
        </p>
        <div className="footer-cours-lesson">
          <ArrowBackIcon className="btn-cours" type="button" onClick={lessText}>Retour</ArrowBackIcon>
          <ArrowForwardIcon className="btn-cours" type="button" onClick={moreText}>Suivant</ArrowForwardIcon>
        </div>
      </div>
    </main>
  );
}

export default React.memo(Cours);
