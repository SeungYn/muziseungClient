import React, { Component } from 'react';
import DetailMuziComment from '../detailMuziComment/detailMuziComment';
import DetailMuziCommentForm from '../detailMuziCommentForm/detailMuziCommentForm';
import styles from './detailMuzi.module.css';
class DetailMuzi extends Component {
  containerRef = React.createRef();
  scrollRef = React.createRef();
  commentsRef = [];
  deleteComments = () => {
    this.props.unClickSelectMuzi();
  };

  //댓글이 등록되고 배열이 그전꺼로 남아있어서 안됨
  // scrollAuto = () => {
  //   console.log(123);
  //   this.commentsRef[this.commentsRef.length - 1].liRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'end',
  //   });
  // };
  //이부분이 문제였음 이것때문에 flex-basis가 50를 유지못함 정확히는
  // deleteComments = () => {
  //   this.containerRef.current.style.display = 'none';
  //   this.props.muzisExpand(); <정확히는 이함수
  //   this.props.unClickSelectMuzi();
  // };

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
            <DetailMuziComment muzi={this.props.selectedMuzi} />
            {this.props.selectedMuzi.comments &&
              this.props.selectedMuzi.comments.map((comment, i) => (
                <DetailMuziComment
                  count={i}
                  commentsLength={this.props.selectedMuzi.comments.lenght}
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
