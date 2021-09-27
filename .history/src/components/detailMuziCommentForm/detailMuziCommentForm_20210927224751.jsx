import React, { Component } from 'react';
import styles from './detailMuziCommentForm.module.css';

class DetailMuziCommentForm extends Component {
  textRef = React.createRef();

  textResize = () => {
    const obj = this.textRef.current;
    obj.style.height = 'auto';
    obj.style.height = obj.scrollHeight + 'px';
  };

  onSubmit = (event) => {
    event.preventDefault();
    const comment = this.textRef.current.value;
    comment && this.props.onAddMuziComment(this.props.selectedMuzi.id, comment);
  };

  render() {
    return (
      <form action='#' className={styles.form} onSubmit={this.onSubmit}>
        <div className={styles.middleContainer}>
          <textarea
            ref={this.textRef}
            className={styles.text}
            onKeyUp={this.textResize}
            onKeyDown={this.textResize}
          ></textarea>
          <div className={styles.bottom}>
            <button className={styles.commentButton} onClick={this.asd}>
              무지등록
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default DetailMuziCommentForm;
