import style from './allMuzis.module.css';

import React, { Component, useEffect } from 'react';
import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Muzis from '../components/muzis/muzis';
import DetailMuzi from '../components/detailMuzi/detailMuzi';
import { useAuth } from '../context/AuthContext';

import React from 'react';

const AllMuzis = ({ muziService, username, addable }) => {
  const [selectedMuzi, setSelectedMuzi] = null;
  const [muzis, setMuzis] = [];
  const [comments, setComments] = [];
  const user = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    muziService //
      .getMuzi(username)
      .then((muzis) => setMuzis([...muzis]));
  }, [muziService, username]);

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
