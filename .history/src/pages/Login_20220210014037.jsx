import React, { useState } from 'react';

const Login = ({ onSignUp, onLogin }) => {
	const [username, setUsername] = useState('');
	const [username, setUsername] = useState('');
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
    <form className='auth-form'>
      <input
        type='text'
        name='username'
        placeholder='Id'
        className='form-input'
        onChange={onChange}
			/>
			<input type="password" name='password' placeholder='Password' value={ }/>
    </form>
  );
};

export default Login;
