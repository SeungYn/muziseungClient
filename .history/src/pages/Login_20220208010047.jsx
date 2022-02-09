import React from 'react';

const Login = ({ onSignUp, onLogin }) => {
  const onChange = (e) => {
    const {
      target: { name, value, checked },
    } = e;
    console.log(e);
  };
  return (
    <form className='auth-form'>
      <input
        type='text'
        name='username'
        placeholder='Id'
        className='form-input'
        onChange={onChange}
      />
    </form>
  );
};

export default Login;
