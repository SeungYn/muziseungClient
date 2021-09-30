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

  onAddMuziComment = (MuziId, comments, userName) => {
    this.props.onAddMuziComment(MuziId, comments);
    console.log(this.scrollRef.current.clientHeight);
    this.scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    console.log(1);
  };
  //이부분이 문제였음 이것때문에 flex-basis가 50를 유지못함 정확히는
  // deleteComments = () => {
  //   this.containerRef.current.style.display = 'none';
  //   this.props.muzisExpand(); <정확히는 이함수
  //   this.props.unClickSelectMuzi();
  // };
  text = (event) => {
    console.log('event');
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
        <ul ref={this.scrollRef} className={styles.comments} onClick={text}>
          <DetailMuziComment muzi={this.props.selectedMuzi} />
          {this.props.selectedMuzi.comments &&
            this.props.selectedMuzi.comments.map((comment) => (
              <DetailMuziComment muzi={comment} />
            ))}
        </ul>
        <DetailMuziCommentForm
          selectedMuzi={this.props.selectedMuzi}
          onAddMuziComment={this.onAddMuziComment}
        />
      </section>
    );
  }
}

export default DetailMuzi;