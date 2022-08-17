/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { ToastContainer, toast } from 'react-toastify';
import heroku from '../../../config/api/heroku';
import authService from '../../LoginForm/auth.service';
import './updateImgStyles.scss';
import 'react-toastify/dist/ReactToastify.css';

import profilMan from '../../../assets/images/profilMan.png';
import profilWoman from '../../../assets/images/profilWoman.png';
import profilMan1 from '../../../assets/images/profilMan1.png';
import profilWoman1 from '../../../assets/images/profilWoman1.png';

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

export default function UpdateImg() {
  const notify = () => toast('Votre image de profil a bien été mise à jour, les changements seront effectif lors de votre prochaine connexion !');
  const user = authService.getCurrentUser();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = React.useState('');

  const handleSubmitImage = (e) => {
    e.preventDefault();
    heroku.patch(`/profile/update/${user.user.id}`, {
      image,
    }).then((res) => {
      console.log(user);
      console.log(res);
      notify();
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div>
      <AddPhotoAlternateIcon
        style={{
          color: 'rgb(0, 0, 82)', bgcolor: '#424C7C', width: '100%', cursor: 'pointer'
        }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Selectionner une image de profil
          </Typography>
          <Typography component="h3" id="modal-modal-description" sx={{ mt: 2 }}>
            <form className="profil-image-choice" onSubmit={handleSubmitImage}>
              <label className="profil-image-choice" htmlFor="profilePhoto">
                <input type="image" src={profilWoman} alt="btc" className="img-modify" onClick={(e) => setImage(e.target.src)} />
                <input type="image" src={profilWoman1} alt="btc" className="img-modify" onClick={(e) => setImage(e.target.src)} />
                <input type="image" src={profilMan} alt="btc" className="img-modify" onClick={(e) => setImage(e.target.src)} />
                <input type="image" src={profilMan1} alt="btc" className="img-modify" onClick={(e) => setImage(e.target.src)} />
              </label>
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
