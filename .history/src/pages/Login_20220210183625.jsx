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

  const onSubmit = (e) => {
    e.preventDefault();
    if (signup) {
      onSignUp(username, password, name, email, url).catch(setError);
    } else {
      onLogin(username, password).catch(setError);
    }
  };

  const setError = (error) => {
    console.log(error.toString());
    setText(error.toString());
    setIsAlert(true);
  };

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
      <div className={styles.title}>{signup ? '회원가입' : '로그인'}</div>
      <form className={styles.auth_form} onSubmit={onSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Id'
          value={username}
          className={styles.form_input}
          onChange={onChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          className={styles.form_input}
          onChange={onChange}
        />
        {signup && (
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={name}
            onChange={onChange}
            className={styles.form_input}
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
            className={styles.form_input}
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
            className={styles.form_input}
          />
        )}
        <div className={styles.form_signup}>
          <input
            name='signup'
            id='signup'
            type='checkbox'
            onChange={onChange}
            checked={signup}
          />
          <label htmlFor='signup'> Create a new account?</label>
        </div>
        <button className={styles.form_btn} type='submit'>
          {signup ? '회원가입' : '로그인'}
        </button>
      </form>
    </section>
  );
};

export default Login;
