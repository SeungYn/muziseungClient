import React, { Component } from 'react';
import styles from './muziForm.module.css';

class MuziForm extends Component {
  textRef = React.createRef();
  asd(e) {
    console.log(e.altkey);
  }
  onKeyPress = (e) => {
    const obj = this.textRef.current;
    const height1 = 36;
    console.log(obj.style.fontSize);
    obj.style.height = height1 + 'px';
    obj.style.height = 36 + obj.scrollHeight + 'px';
    console.log(this.textRef);
  };

  onTest = (e) => {
    console.log(e);
  };

  test = (e) => {};
  render() {
    return (
      <form action='#' className={styles.form}>
        <div className={styles.middleContainer}>
          <textarea
            ref={this.textRef}
            className={styles.text}
            onKeyPress={this.onKeyPress}
            onKeyDown={this.onKeyPress}
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
