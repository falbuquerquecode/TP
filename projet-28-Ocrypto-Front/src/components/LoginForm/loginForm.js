import React from 'react';
import './loginFormStyles.scss';
import Signin from './Signin/signin';
import Login from './Login/login';

function LoginForm() {
  return (
    <div className="container">
      <Signin />
      <span className="vertical" />
      <Login />
    </div>
  );
}
export default React.memo(LoginForm);
