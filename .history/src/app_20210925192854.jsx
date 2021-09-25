import style from './app.module.css';

import React, { Component } from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Muzis from './components/muzis/muzis';
import DetailMuzi from './components/detailMuzi/detailMuzi';
import MuziForm from './components/muziForm/muziForm';

class App extends Component {
  muzisRef = React.createRef();
  test = () => {
    console.log(this.muzisRef.current.style.height);
  };
  render() {
    this.test();
    return (
      <section className={style.borad}>
        <Header />
        <div className={style.center}>
          <Navbar />
          <Muzis ref={this.muzisRef} />
          <DetailMuzi />
        </div>
      </section>
    );
  }
}

export default App;
