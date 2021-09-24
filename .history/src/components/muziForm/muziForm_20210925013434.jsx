import React, { Component } from 'react';
import styles from './muziForm.module.css';

class MuziForm extends Component {
  testRef = React.createRef();
  asd(e) {
    console.log(e.altkey);
  }
  test(e) {
    console.log(e);
  }
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
            <button className={styles.muziButton} onClick={this.asd}>
              무지등록
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default MuziForm;
