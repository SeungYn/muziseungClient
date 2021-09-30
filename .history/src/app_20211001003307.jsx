import style from './app.module.css';

import React, { Component } from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Muzis from './components/muzis/muzis';
import DetailMuzi from './components/detailMuzi/detailMuzi';

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

  //댓글 창을 열고 닫은 것을 muzi가 선택됐을떄로 변경함 상위 컴퍼넌트에서 하위컴퍼넌트 스타일을
  //변경하는 것이아님 근데 이것을 하려다가 이 메서드때문에 작동이 잘안됐었음
  // muzisExpand = () => {
  //   this.muzisRef.current.style.flexBasis = '85%';
  // };

  //무지 클릭시 선택되게 하기
  onClickSelectMuzi = (muzi) => {
    this.setState({ selectedMuzi: { ...muzi } });
  };
  //detailMuzi에 있는 x있는 거 클릭시 화면 늘리기 이럴꺼면 왜 상위 컴퍼넌트 ref 할려고 똥꼬쇼 한거지;;
  //다시생각하니 state 비교를 했을때 똑같아서 실행안됨 ㅋㅇ 보류 다시 원상복구
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
          comments = {
            id: Date.now(),
            userName: '한준영',
            time: '25:11',
            text,
          };
        }
        console.log('test comments ', comments);
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
              //muzisOnClick={this.muzisOnClick}
              onAddMuziComment={this.onAddMuziComment}
            />
          )}
        </div>
      </section>
    );
  }
}

export default App;