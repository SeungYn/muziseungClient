import React, { Component } from 'react';
import styles from './muziForm.module.css';

class MuziForm extends Component {
  textRef = React.createRef();
  asd(e) {
    console.log(e.altkey);
  }
  textResize = () => {
    const obj = this.textRef.current;
    obj.style.height = 'auto';
    obj.style.height = obj.scrollHeight + 'px';
  };

  test = (e) => {};
  render() {
    return (
      <form action='#' className={styles.form}>
        <div className={styles.middleContainer}>
          <textarea
            ref={this.textRef}
            className={styles.text}
            onKeyUp={this.textResize}
            onKeyDown={this.textResize}
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
