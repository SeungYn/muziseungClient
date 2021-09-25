import style from './app.module.css';

import React, { Component } from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Muzis from './components/muzis/muzis';
import DetailMuzi from './components/detailMuzi/detailMuzi';
import MuziForm from './components/muziForm/muziForm';

class App extends Component {
  state = {
    muzis: [
      {
        id: 1,
        userId: 1,
        time: '12:01',
        text: '안녕하세요',
        comments: {
          id: 1,
        },
      },
    ],
  };

  muzisRef = React.createRef();
  muzisExpand = () => {
    this.muzisRef.current.style.flexBasis = '85%';
  };
  render() {
    return (
      <section className={style.borad}>
        <Header />
        <div className={style.center}>
          <Navbar />
          <Muzis inputRef={this.muzisRef} />
          <DetailMuzi muzisExpand={this.muzisExpand} />
        </div>
      </section>
    );
  }
}

export default App;
