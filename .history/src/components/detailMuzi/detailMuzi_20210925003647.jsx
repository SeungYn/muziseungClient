import React, { Component } from 'react';
import DetailMuziComment from '../detailMuziComment/detailMuziComment';
import DetailMuziCommentForm from '../detailMuziCommentForm/detailMuziCommentForm';
import styles from './detailMuzi.module.css';
class DetailMuzi extends Component {
  render() {
    return (
      <section className={styles.container}>
        <div className='title'>Comments</div>
        <ul className={styles.comments}>
          <DetailMuziComment />
          <DetailMuziComment />
          <DetailMuziComment />
          <DetailMuziComment />
          <DetailMuziComment />
          <DetailMuziComment />
          <DetailMuziComment />
          <DetailMuziComment />
          <DetailMuziComment />
        </ul>
        <DetailMuziCommentForm />
      </section>
    );
  }
}

export default DetailMuzi;
