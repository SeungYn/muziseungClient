import React, { Component } from 'react';
import DetailMuziComment from '../detailMuziComment/detailMuziComment';
import DetailMuziCommentForm from '../detailMuziCommentForm/detailMuziCommentForm';
import styles from './detailMuzi.module.css';
class DetailMuzi extends Component {
  containerRef = React.createRef();
  scrollRef = React.createRef();

  deleteComments = () => {
    this.props.unClickSelectMuzi();
  };

  render() {
    return (
      <section
        ref={this.containerRef}
        className={`${styles.container} ${
          this.props.selectedMuzi ? styles.selected : styles.unselected
        }`}
      >
        <div className={styles.header} onClick={this.text}>
          <span className={styles.title}>Comments</span>
          <span className={styles.closeButton} onClick={this.deleteComments}>
            <i className={`far fa-times-circle ${styles.icon}`}></i>
          </span>
        </div>
        <>
          <ul ref={this.scrollRef} className={styles.comments}>
            <DetailMuziComment
              muzi={this.props.selectedMuzi}
              count={0}
              commentsLength={1}
            />
            {this.props.selectedMuzi.comments !== 0 &&
              this.props.selectedMuzi.comments.map((comment, i) => (
                <DetailMuziComment
                  count={i}
                  commentsLength={this.props.selectedMuzi.comments.length - 1}
                  muzi={comment}
                />
              ))}
          </ul>
        </>
        <DetailMuziCommentForm
          selectedMuzi={this.props.selectedMuzi}
          onAddMuziComment={this.props.onAddMuziComment}
        />
      </section>
    );
  }
}

export default DetailMuzi;
