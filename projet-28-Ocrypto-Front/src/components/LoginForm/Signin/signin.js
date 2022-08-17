import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AuthService from '../auth.service';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const notify = () => toast('Votre inscription a bien été prise en compte');
  const [username, setUserName] = useState('');
  const [email, setUserMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(username, email, password).then(
        (response) => {
          if (response.name === 'error') {
            console.log(response.detail);
          }
          else {
            console.log('Bien enregistré', response);
            navigate('/log-in');
            notify();
            setPassword('');
            setUserMail('');
            setUserName('');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-left">
      <h2 className="signin">Inscription</h2>
      <form onSubmit={handleSignin} className="form-inscription">
        <div className="form-example">
          <input
            className="input-form"
            type="text"
            value={username}
            placeholder="Pseudo"
            pattern="[a-zA-Z0-9]{4,20}"
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <p className="hide">Le pseudo doit contenir au moins 4 et au maximum 20 caractères</p>
        </div>
        <div className="form-example">
          <input
            className="input-form"
            type="email"
            value={email}
            required
            placeholder="Email"
            onChange={(e) => {
              setUserMail(e.target.value);
            }}
          />
        </div>
        <div className="form-example">
          <input
            className="input-form"
            type="password"
            value={password}
            required
            pattern="^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$"
            placeholder="Mot de passe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="hide">Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre</p>
        </div>
        <button
          className="btn-form"
          type="submit"
        >S'enregistrer
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
}

export default React.memo(Signin);
