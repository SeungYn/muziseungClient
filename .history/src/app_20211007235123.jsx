import style from './app.module.css';

import React, { Component } from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Muzis from './components/muzis/muzis';
import DetailMuzi from './components/detailMuzi/detailMuzi';
import AllMuzis from './pages/AllMuzis';

class App extends Component {
  render() {
    return <AllMuzis />;
  }
}

export default App;
