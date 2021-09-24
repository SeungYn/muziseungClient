import React, { Component } from 'react';
import styles from './muziForm.module.css';

class MuziForm extends Component {
  textRef = React.createRef();
  asd(e) {
    console.log(e.altkey);
  }
  onPressEnter = (e) => {
    if (e.key === 'Enter') {
      this.textRef.current.style.height = '100px';
    }
  };

  onTest = (e) => {
    console.log(this.textRef);
  };

  test = (e) => {};
  render() {
    return (
      <form action='#' className={styles.form}>
        <div className={styles.middleContainer}>
          <textarea
            ref={this.textRef}
            className={styles.text}
            onKeyPress={this.onPressEnter}
            onChange={this.onTest}
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
