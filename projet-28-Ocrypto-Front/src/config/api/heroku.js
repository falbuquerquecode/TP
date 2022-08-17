import axios from 'axios';

export default axios.create({
  baseURL: 'https://ocrypto-backend.herokuapp.com',
});
