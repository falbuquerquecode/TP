/* eslint-disable max-len */
import './updateStyles.scss';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';
import heroku from '../../../config/api/heroku';
import authService from '../../LoginForm/auth.service';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  textAlign: 'center',
  bgcolor: '#424C7C',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'white',
};

export default function Update() {
  const notify = () => toast('Votre profil a bien été mis à jour, les changements seront effectif lors de votre prochaine connexion !');
  const user = authService.getCurrentUser();
  const navigate = useNavigate();
  const [pseudo, setPseudo] = useState(user?.user.pseudo);
  const [email, setEmail] = useState(user?.user.email);
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitNickname = (e) => {
    e.preventDefault();
    heroku.patch(`/profile/update/${user.user.id}`, {
      pseudo,
    }).then((res) => {
      console.log(res);
      setAlert('Votre pseudo a bien été modifié');
      notify();
      setPseudo(user.user.pseudo);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    heroku.patch(`/profile/update/${user.user.id}`, {
      email,
    }).then((res) => {
      console.log(res);
      console.log(user.user.email);
      setAlert('Votre adresse email a bien été modifié');
      notify();
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    heroku.patch(`/profile/update/${user.user.id}`, {
      password,
    })
      .then((res) => {
        console.log(res);
        setAlert('Votre mot de passe a bien été modifié');
        notify();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    if (window.confirm('Souhaitez-vous vraiment supprimer votre compte ?')) {
      heroku.delete(`/profile/update/${user.user.id}`)
        .then((res) => {
          console.log(res);
          authService.logout();
          navigate('/');
          window.location.reload();
        }).catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Button style={{ color: 'rgb(0, 0, 82)', bgcolor: '#424C7C', width: '100%' }} onClick={handleOpen}>Modifier</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modifier vos informations personnelles
          </Typography>
          <p className="modifier-alert">{alert}</p>
          <Typography component="h3" id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmitNickname}>
              <input className="input-modifier" type="text" placeholder="Pseudo" onChange={(e) => setPseudo(e.target.value)} />
              <button className="button-modifier" type="submit">Valider</button>
            </form>
            <form onSubmit={handleSubmitEmail}>
              <input className="input-modifier" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <button className="button-modifier" type="submit">Valider</button>
            </form>
            <form onSubmit={handleSubmitPassword}>
              <input className="input-modifier" type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
              <button className="button-modifier" type="submit">Valider</button>
            </form>
            <form>
              <button className="button-modifier delete-account" type="submit" onClick={handleDeleteAccount}>Supprimer mon compte</button>
            </form>
          </Typography>
          <Button style={{ color: 'white ' }} onClick={handleClose}>Fermer</Button>
        </Box>
      </Modal>
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
    </div>

  );
}
