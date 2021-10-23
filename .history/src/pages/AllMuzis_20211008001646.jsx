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
        console.log(result);
      });
  }

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
