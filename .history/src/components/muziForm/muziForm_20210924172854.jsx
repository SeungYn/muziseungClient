import React, { Component } from 'react';
import styles from './muziForm.module.css';

class MuziForm extends Component {
  test(e) {
    console.log(e);
  }
  render() {
    return (
      <form action='#' className={styles.form}>
        <textarea className={styles.text} onKeyPress={this.test}>
          <button>무지등록</button>
        </textarea>
        <div className={styles.bottom}></div>
      </form>
    );
  }
}

export default MuziForm;
