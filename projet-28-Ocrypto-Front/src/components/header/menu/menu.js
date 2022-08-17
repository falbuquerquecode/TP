/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import authService from '../../LoginForm/auth.service';
import './menuStyles.scss';

function menu() {
  // state to set the user logged in or not
  const [isLogged, setIsLogged] = useState(false);

  // state for responsive menu
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleCloseMenu = () => {
    setShowLinks(false);
  };

  const navigate = useNavigate();

  // Funtion to logout, redirect to homepage
  const handleLogout = () => {
    authService.logout();
    setIsLogged(false);
    navigate('/');
  };

  // useEffect to check if any user is logged
  useEffect(() => {
    if (authService.getCurrentUser()) {
      setIsLogged(true);
    }
  }, [isLogged]);

  return (
    <menu className="App-menu">
      <nav className={`App-nav ${showLinks ? 'show-nav' : 'hide-nav'}`}>
        {isLogged ? (
          <>
            <li className="App-nav-item slideInDown-1">
              <NavLink className="App-link" to="/dashboard" onClick={handleCloseMenu}>Cours des cryptomonnaies</NavLink>
            </li>
            <li className="App-nav-item slideInDown-2">
              <NavLink className="App-link" to="/articles" onClick={handleCloseMenu}>Articles</NavLink>
            </li>
            <li className="App-nav-item slideInDown-3">
              <NavLink className="App-link" to="/lexicon" onClick={handleCloseMenu}>Lexique</NavLink>
            </li>
            <li className="App-nav-item slideInDown-4">
              <NavLink className="App-link" to="/learning" onClick={handleCloseMenu}>Parcours d'apprentissage</NavLink>
            </li>
            <li className="App-nav-item slideInDown-5">
              <NavLink className="App-link" to="/faq" onClick={handleCloseMenu}>FAQ</NavLink>
            </li>
            <button className="App-nav-burger" type="button" onClick={handleShowLinks}>
              <span className="burger-bar" />
            </button>
          </>
        ) : (
          <>
            <li className="App-nav-item slideInDown-1">
              <NavLink className="App-link" to="/dashboard" onClick={handleCloseMenu}>Cours des cryptomonnaies</NavLink>
            </li>
            <li className="App-nav-item slideInDown-2">
              <NavLink className="App-link" to="/articles" onClick={handleCloseMenu}>Articles</NavLink>
            </li>
            <li className="App-nav-item slideInDown-3">
              <NavLink className="App-link" to="/lexicon" onClick={handleCloseMenu}>Lexique</NavLink>
            </li>
            <li className="App-nav-item slideInDown-5">
              <NavLink className="App-link" to="/faq" onClick={handleCloseMenu}>FAQ</NavLink>
            </li>
            <button className="App-nav-burger" type="button" onClick={handleShowLinks}>
              <span className="burger-bar" />
            </button>
          </>
        )}
      </nav>
      {isLogged ? (
        <div className="App-button">
          <button onClick={() => navigate('/profile')} type="button" className="App-button-signin"><PersonIcon fontSize="large" /></button>
          <button onClick={handleLogout} type="button" className="App-button-login"><LogoutIcon fontSize="medium" /></button>
        </div>
      ) : (
        <div className="App-button">
          <button onClick={() => navigate('/log-in')} type="button" className="App-button-signin">S'inscrire</button>
          <button onClick={() => navigate('/log-in')} type="button" className="App-button-login">Connexion</button>
        </div>
      )}
      <button className="App-nav-burger" type="button" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
      <div />
    </menu>
  );
}

export default React.memo(menu);
