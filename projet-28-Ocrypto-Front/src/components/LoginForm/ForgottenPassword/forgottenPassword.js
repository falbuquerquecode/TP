import './forgottenPasswordStyles.scss';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AuthService from '../auth.service';

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

export default function ForgottenPassword() {
  const [email, setEmail] = useState('');
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendUserMail = async (e) => {
    e.preventDefault();
    try {
      await AuthService.forgottenPwd(email).then(() => {
        setMessage('Un email vous a été envoyé afin de récuperer votre mot de passe');
      }, (error) => {
        console.log(error);
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="forgotten-pwd-container">
      <Button style={{ color: 'rgb(0, 0, 82)', bgcolor: '#424C7C', width: '100%' }} onClick={handleOpen}>Mot de passe oublié ?</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Entrez votre adresse email
          </Typography>
          <p className="modifier-alert">{alert}</p>
          <Typography component="h3" id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={sendUserMail} className="forgotten-pwd">
              <input
                type="text"
                required
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="forgotten-pwd-input"
              />
              <button className="forgotten-pwd-btn" type="submit">Valider</button>
              <p className="forgotten-pwd-message">{message}</p>
            </form>
          </Typography>
          <Button onClick={handleClose} style={{ color: 'white ' }}>Fermer</Button>
        </Box>
      </Modal>
    </div>

  );
}
