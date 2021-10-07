import style from './app.module.css';

import React, { Component } from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Muzis from './components/muzis/muzis';
import DetailMuzi from './components/detailMuzi/detailMuzi';

class AllMuzis extends Component {
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
            text: '안녕하세요1',
          },
          {
            id: 1,
            userName: '이혜진',
            time: '12:01',
            text: '안녕하세요2',
          },
          {
            id: 1,
            userName: '이혜진',
            time: '12:01',
            text: '안녕하세요3',
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

  onClickSelectMuzi = (muzi) => {
    this.setState({ selectedMuzi: { ...muzi } });
  };

  unClickSelectMuzi = (muzi) => {
    this.setState({ selectedMuzi: null });
  };

  onAddMuzi = (text, selectedMuzi) => {
    const muzis = [
      ...this.state.muzis,
      {
        id: Date.now(),
        userName: '유승윤',
        time: '11:31',
        text,
        comments: null,
      },
    ];
    if (selectedMuzi) {
      this.setState({ selectedMuzi: { ...selectedMuzi }, muzis });
    } else {
      this.setState({ muzis });
    }
  };
  //개선점 생각해보기 notion
  onAddMuziComment = (MuziId, text, userName) => {
    const comment = {
      id: Date.now(),
      userName: '한준영',
      time: '25:11',
      text,
    };

    const muzis = this.state.muzis.map((muzi) => {
      if (muzi.id === MuziId) {
        let comments = null;
        if (muzi.comments) {
          comments = [...muzi.comments, { ...comment }];
        } else {
          comments = [{ ...comment }];
        }

        return {
          ...muzi,
          comments: [...comments],
        };
      }
      return { ...muzi };
    });

    const selectedMuzi = muzis.find((muzi) => muzi.id === MuziId);

    this.setState({ selectedMuzi, muzis });
  };
  addCommentFliter = (comments) => {
    if (comments) {
      return [...comments];
    } else {
      return;
    }
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
            onAddMuzi={this.onAddMuzi}
          />
          {this.state.selectedMuzi && (
            <DetailMuzi
              selectedMuzi={this.state.selectedMuzi}
              unClickSelectMuzi={this.unClickSelectMuzi}
              onAddMuziComment={this.onAddMuziComment}
            />
          )}
        </div>
      </section>
    );
  }
}

export default AllMuzis;
