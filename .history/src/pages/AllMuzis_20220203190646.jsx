import style from './allMuzis.module.css';

import React, { Component, useEffect } from 'react';
import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Muzis from '../components/muzis/muzis';
import DetailMuzi from '../components/detailMuzi/detailMuzi';
import { useAuth } from '../context/AuthContext';

import React from 'react';

const AllMuzis = ({muziService, username, addable}) => {
  const [selectedMuzi, setSelectedMuzi] = null;
  const [muzis, setMuzis] = [];
  const [comments, setComments] = [];
  const user = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    muziService.getMuzi(username).then((muzis) => setMuzis([...muzis]))//.
  });


  return (
    <section className={style.borad}>
        <Header />
        <div className={style.center}>
          <Navbar />
          <Muzis
            onClickSelectMuzi={onClickSelectMuzi}
            selectedMuzi={selectedMuzi}
            muzis={muzis}
            onAddMuzi={onAddMuzi}
          />
          {selectedMuzi && (
            <DetailMuzi
              selectedMuzi={selectedMuzi}
              unClickSelectMuzi={unClickSelectMuzi}
              onAddMuziComment={onAddMuziComment}
              comments={comments}
            />
          )}
        </div>
      </section>
  );
};

export default AllMuzis;
class AllMuzis extends Component {
  state = {
    selectedMuzi: null,
    muzis: [],
    comments: [],
    user: useAuth(),
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
        username: '?????????',
        name: '?????????',
      }),
    };

    fetch('http://localhost:8080/muzis', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ muzis: [...this.state.muzis, result] });
      });
  };
  //????????? ??????????????? notion
  onAddMuziComment = (MuziId, text, userName) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      muziId: MuziId,
      text: text,
      username: '???????????????',
      name: '???????????????',
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

  //?????? ???????????? ?????? ????????? ????????? ???????????????
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
    console.log(muzis === this.state.muzis);
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
