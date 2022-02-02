import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import HttpClient from './network/http';
import TokenStorage from './db/token';
import { AuthErrorEventBus } from './context/AuthContext';
import AuthService from './service/auth';
import MuziService from './service/muzi';

const url = 'http://localhost:8080';
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(url, authErrorEventBus);
const authService = new AuthService(httpClient, tokenStorage);
const muziService = new MuziService(httpClient, tokenStorage);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
