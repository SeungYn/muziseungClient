import React, { Component } from 'react';
import styles from './muziForm.module.css';

class MuziForm extends Component {
  test(e) {
    console.log(e);
  }
  render() {
    return (
      <form action='#' className={styles.form}>
        <input type='text' className={styles.text} onKeyPress={this.test} />
        <div className={styles.bottom}>
          <button>무지등록</button>
        </div>
      </form>
    );
  }
}

export default MuziForm;
