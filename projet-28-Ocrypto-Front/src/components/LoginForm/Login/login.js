/* eslint-disable max-len */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthService from '../auth.service';
import ForgottenPassword from '../ForgottenPassword/forgottenPassword';

function Login() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(() => {
        if (AuthService.getCurrentUser()) {
          navigate('/');
          window.location.reload();
        }
        else {
          setMessage('Le mot de passe ou l\'adresse email est incorrect');
        }
      }, (error) => {
        console.log(error);
      });
    }
    catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="register-right">
      <form onSubmit={handleLogin}>
        <h2 className="login">Connexion</h2>
        <div className="form-example">
          <input
            className="input-form"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-example">
          <input
            className="input-form"
            type="password"
            name="password"
            value={password}
            placeholder="Mot de passe"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn-form" type="submit">Connexion</button>
      </form>
      <p className="message">{message}</p>
      <ForgottenPassword />
    </div>
  );
}

export default React.memo(Login);
