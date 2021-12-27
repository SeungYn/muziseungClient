import style from './allMuzis.module.css';

import React, { Component } from 'react';
import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Muzis from '../components/muzis/muzis';
import DetailMuzi from '../components/detailMuzi/detailMuzi';

class AllMuzis extends Component {
  state = {
    selectedMuzi: null,
    muzis: [],
    comments: [],
  };

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://localhost:8080/muzis', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ muzis: result });
        console.log('result');
      });
  }

  onClickSelectMuzi = (muzi) => {
    this.setState({ selectedMuzi: { ...muzi } });

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`http://localhost:8080/muziComments/${muzi.id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comments: [...data] });
      });
  };

  unClickSelectMuzi = () => {
    this.setState({ selectedMuzi: null, comments: null });
  };

  onAddMuzi = (text) => {
    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        username: '한중영',
        name: '한중영',
      }),
    };

    fetch('http://localhost:8080/muzis', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ muzis: [...this.state.muzis, result] });
      });
  };
  //개선점 생각해보기 notion
  onAddMuziComment = (MuziId, text, userName) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      muziId: MuziId,
      text: text,
      username: '테스트에요',
      name: '테으스테요',
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:8080/muziComments', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          comments: [...this.state.comments, data],
        });
      });

    this.muziCommentCountUpdate(MuziId);
  };

  //댓글 업데이트 되면 게시판 댓글수 갱신해주기
  muziCommentCountUpdate = async (muziId) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const update = await fetch(
      `http://localhost:8080/muzis/${muziId}`,
      requestOptions
    ).then((response) => response.json());
    const muzis = this.state.muzis.map((item) => {
      if (item.id === muziId) {
        return update;
      }
      return item;
    });
    console.log('update');
    this.setState({ muzis });
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
            onAddMuzi={this.onAddMuzi}
          />
          {this.state.selectedMuzi && (
            <DetailMuzi
              selectedMuzi={this.state.selectedMuzi}
              unClickSelectMuzi={this.unClickSelectMuzi}
              onAddMuziComment={this.onAddMuziComment}
              comments={this.state.comments}
            />
          )}
        </div>
      </section>
    );
  }
}

export default AllMuzis;
