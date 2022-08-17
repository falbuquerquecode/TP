import heroku from '../../config/api/heroku';

const signup = (pseudo, email, password) => heroku
  .post('/sign-in', {
    pseudo,
    email,
    password
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });

//   post to get the token
const login = (email, password) => heroku
  .post('/log-in', {
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    else {
      console.log(response.data.message);
    }
    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

const forgottenPwd = (email) => heroku.post('/forgotten-password', {
  email,
}).then((response) => {
  if (response.data.message) {
    console.log(response.data.message);
  }
  return response.data;
});

const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
  forgottenPwd,
};

export default authService;
