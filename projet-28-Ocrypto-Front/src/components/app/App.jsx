/* eslint-disable no-constant-condition */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-constructed-context-values */
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import authService from '../LoginForm/auth.service';
import darkmodelogo from '../../assets/images/darkmodelogo.png';
import logo from '../../assets/images/Logo.png';
import Header from '../header/header';
import Footer from '../footer/footer';
import HomePage from '../homePage/homePage';
import DashBoard from '../DashBoard/dashBoard';
import CoinPage from '../DashBoard/CoinPage/coinPage';
import LoginForm from '../LoginForm/loginForm';
import LearningJourney from '../LearningJourney/learningJourney';
import Challenge from '../LearningJourney/Challenge/challenge';
import Question from '../LearningJourney/Challenge/Question/question';
import Cours from '../LearningJourney/Cours/cours';
import FAQ from '../FAQ/FAQ';
import Profil from '../Profil/profil';
import Articles from '../Articles/articles';
import Article from '../Articles/Article/article';
import Lexicon from '../Lexicon/lexicon';
import About from '../About/about';
import OurTeam from '../OurTeam/ourTeam';
import PageNotFound from '../404/PageNotFound';

function App() {
  const isLogged = authService.getCurrentUser();
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="App" id={theme}>
      <Header logoTheme={theme === 'light' ? logo : darkmodelogo} />
      <div className="theme-toggle">
        <IconButton type="button" onClick={switchTheme}>{theme === 'dark' ? <Brightness7Icon style={{ color: '#EC8B35' }} /> : <Brightness4Icon style={{ color: '#424C7C' }} />}</IconButton>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {isLogged && (
        <>
          <Route path="/profile" element={<Profil />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/Cours" element={<Cours />} />
          <Route path="/learning" element={<LearningJourney />} />
        </>
        )}
        <Route path="/question/:id" element={<Question />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/log-in" element={<LoginForm />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/lexicon" element={<Lexicon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default React.memo(App);
