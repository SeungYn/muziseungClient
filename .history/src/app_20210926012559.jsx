import style from './app.module.css';

import React, { Component } from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Muzis from './components/muzis/muzis';
import DetailMuzi from './components/detailMuzi/detailMuzi';
import MuziForm from './components/muziForm/muziForm';

class App extends Component {
  state = {
    selectedMuzi: null,
    muzis: [
      {
        id: 1,
        userId: 1,
        userName: '유승윤',
        time: '12:01',
        text: '안녕하세요',
        comments: [
          {
            id: 1,
            userName: '이혜진',
            time: '12:01',
            text: '안녕하세요',
          },
          {
            id: 1,
            userName: '이혜진',
            time: '12:01',
            text: '안녕하세요',
          },
          {
            id: 1,
            userName: '이혜진',
            time: '12:01',
            text: '안녕하세요',
          },
        ],
      },
      {
        id: 2,
        userId: 1,
        userName: '유승윤',
        time: '12:01',
        text: '안녕하세요1123123ㅁㅈㅇㅁㅉㄹㄷㅁㄹㅈㄷㄹㅉㄹㄷㄹ',
        comments: [
          {
            id: 2,
            userName: '이혜진',
            time: '12:01',
            text: '안녕하세요',
          },
        ],
      },
      {
        id: 3,
        userId: 1,
        userName: '유승윤',
        time: '12:01',
        text: '안녕ㅁㄷㅎ하세ㄷㄱㅎㄷ요',
        comments: [
          {
            id: 3,
            userName: '이혜진',
            time: '12:01',
            text: '안녕하세요',
          },
        ],
      },
    ],
  };

  muzisRef = React.createRef();
  muzisExpand = () => {
    this.muzisRef.current.style.flexBasis = '85%';
  };

  //무지 클릭시 선택되게 하기
  onClickSelectMuzi = () => {
    const selectedMuzi = { selectedMuzi: true };
    this.setState({ selectedMuzi });
  };

  render() {
    return (
      <section className={style.borad}>
        <Header />
        <div className={style.center}>
          <Navbar />
          <Muzis
            onClickSelectMuzi={this.onClickSelectMuzi}
            selectedMuzi={this.state.selectedMuzi}
            muzis={this.state.muzis}
            inputRef={this.muzisRef}
            muzisOnClick={this.muzisOnClick}
          />
          {this.state.selectedMuzi && (
            <DetailMuzi muzisExpand={this.muzisExpand} />
          )}
        </div>
      </section>
    );
  }
}

export default App;
