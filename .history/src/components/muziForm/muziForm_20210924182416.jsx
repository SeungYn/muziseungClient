import React, { Component } from 'react';
import styles from './muziForm.module.css';

class MuziForm extends Component {
  testRef = React.createRef();
  asd() {
    this.testRef.current.styles.height = '100px';
  }
  test(e) {
    console.log(e);
  }
  render() {
    return (
      <form action='#' className={styles.form}>
        <textarea
          ref={this.testRef}
          className={styles.text}
          onKeyPress={this.test}
        ></textarea>
        <div className={styles.bottom}>
          <button>무지등록</button>
        </div>
      </form>
    );
  }
}

export default MuziForm;
