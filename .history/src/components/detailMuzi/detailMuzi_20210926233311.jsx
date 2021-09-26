import React, { Component } from 'react';
import DetailMuziComment from '../detailMuziComment/detailMuziComment';
import DetailMuziCommentForm from '../detailMuziCommentForm/detailMuziCommentForm';
import styles from './detailMuzi.module.css';
class DetailMuzi extends Component {
  containerRef = React.createRef();
  deleteComments = () => {
    this.props.unClickSelectMuzi();
  };
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
        <div className={styles.header}>
          <span className={styles.title}>Comments</span>
          <span className={styles.closeButton} onClick={this.deleteComments}>
            <i className={`far fa-times-circle ${styles.icon}`}></i>
          </span>
        </div>
        <ul className={styles.comments}>
          <DetailMuziComment muzi={this.props.selectedMuzi} />
          {this.props.selectedMuzi.comments &&
            this.props.selectedMuzi.comments.map((comment) => 
              <DetailMuziComment muzi={comment} />;
              
            )}
        </ul>
        <DetailMuziCommentForm />
      </section>
    );
  }
}

export default DetailMuzi;
