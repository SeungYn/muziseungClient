import React, { useState } from 'react';
import styles from './allMuzis.module.css';

const Login = ({ onSignUp, onLogin }) => {
  const [username, setUsername] = useState('');
  const [signup, setSignup] = useState(false);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setURL] = useState('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  const onChange = (e) => {
    const {
      target: { name, value, checked },
    } = e;

    switch (name) {
      case 'username':
        return setUsername(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'url':
        return setURL(value);
      case 'signup':
        return setSignup(checked);
      default:
    }
  };
  return (
    <section className={styles.form_board}>
      <div className='form-title'>{signup ? '회원가입' : '로그인'}</div>
      <form className='auth-form'>
        <input
          type='text'
          name='username'
          placeholder='Id'
          className='form-input'
          onChange={onChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          className='form-input'
          onChange={onChange}
        />
        {signup && (
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={name}
            onChange={onChange}
            className='form-input'
            required
          />
        )}
        {signup && (
          <input
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
            className='form-input'
            required
          />
        )}
        {signup && (
          <input
            name='url'
            type='url'
            placeholder='Profile Image URL'
            value={url}
            onChange={onChange}
            className='form-input'
          />
        )}
        <div className='form-signup'>
          <input
            name='signup'
            id='signup'
            type='checkbox'
            onChange={onChange}
            checked={signup}
          />
          <label htmlFor='signup'> Create a new account?</label>
        </div>
        <button className='form-btn auth-form-btn' type='submit'>
          {signup ? '회원가입' : '로그인'}
        </button>
      </form>
    </section>
  );
};

export default Login;
