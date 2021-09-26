import React, { Component } from 'react';
import DetailMuziComment from '../detailMuziComment/detailMuziComment';
import DetailMuziCommentForm from '../detailMuziCommentForm/detailMuziCommentForm';
import styles from './detailMuzi.module.css';
class DetailMuzi extends Component {
  containerRef = React.createRef();
  deleteComments = () => {
    this.props.unClickSelectMuzi();
  };

  render() {
    console.log('asd', this.props.selectedMuzi);
    return (
      <section
        ref={this.containerRef}
        className={`${styles.container} ${
          this.props.selectedMuzi ? styles.selected : styles.unselected
        }`}
      >
        <div className={styles.header}>
          <span className={styles.title}>Comments</span>
          <span className={styles.closeButton} onClick={this.deleteComments}>
            <i className={`far fa-times-circle ${styles.icon}`}></i>
          </span>
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