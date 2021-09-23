import style from './app.module.css';

import React, { Component } from 'react';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <section className={style.borad}>
        <Header />
      </section>
    );
  }
}

export default App;
