import React from 'react';

const Login = ({ onSignUp, onLogin }) => {
  return <form className='auth-form' onSubmit={onSubmit}></form>;
};

export default Login;
