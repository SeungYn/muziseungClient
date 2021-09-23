import style from './app.module.css';

import React, { Component } from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';

class App extends Component {
  render() {
    return (
      <section className={style.borad}>
        <Header />
        <Navbar />
      </section>
    );
  }
}

export default App;
