import React from 'react';

const Login = ({ onSignUp, onLogin }) => {
  return (
    <form className='auth-form'>
      <input
        type='text'
        name='username'
        placeholder='Id'
        className='form-input'
      />
    </form>
  );
};

export default Login;
