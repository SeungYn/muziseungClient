import React, { useState } from 'react';

const Login = ({ onSignUp, onLogin }) => {
  const [username, setUsername] = useState('');

  const onChange = (e) => {
    const {
      target: { name, value, checked },
    } = e;

    switch (name) {
      case 'username':
        return setUsername(value);
    }
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
