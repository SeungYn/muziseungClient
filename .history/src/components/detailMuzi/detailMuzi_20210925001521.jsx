import React, { Component } from 'react';
import DetailMuziComment from '../detailMuziComment/detailMuziComment';
import styles from './detailMuzi.module.css';
class DetailMuzi extends Component {
  render() {
    return (
      <section className={styles.container}>
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
      </section>
    );
  }
}

export default DetailMuzi;
