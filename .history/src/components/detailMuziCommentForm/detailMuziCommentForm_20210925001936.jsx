import React, { Component } from 'react';
import styles from './detailMuziCommentForm.module.css';

class DetailMuziCommentForm extends Component {
  render() {
    return (
      <form action='#' className={styles.form}>
        <div className={styles.middleContainer}>
          <textarea
            ref={this.testRef}
            className={styles.text}
            onKeyPress={this.test}
          ></textarea>
          <div className={styles.bottom}>
            <button onClick={this.asd}>무지등록</button>
          </div>
        </div>
      </form>
    );
  }
}

export default DetailMuziCommentForm;
