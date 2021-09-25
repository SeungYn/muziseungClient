import React, { Component } from 'react';
import DetailMuziComment from '../detailMuziComment/detailMuziComment';
import DetailMuziCommentForm from '../detailMuziCommentForm/detailMuziCommentForm';
import styles from './detailMuzi.module.css';
class DetailMuzi extends Component {
  deleteComments = () => {
    console.log('delete');
  };

  render() {
    return (
      <section className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>Comments</span>
          <span className='closeButton' onClick={this.deleteComments}>
            <i className={`far fa-times-circle ${styles.closeButton}`}></i>
          </span>

          <button onClick={this.deleteComments}>f</button>
        </div>
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