import React, { Component } from 'react';
import styles from './muzi.module.css';

class Muzi extends Component {
  render() {
    return (
      <li className={styles.muzi}>
        <span className={styles.name}>유승윤</span>
        <span className={styles.time}>11:28</span>
        <p className={styles.text}>안녕 하세요 저는 유승윤 fds</p>
        <div className={styles.comment}>1개의 답글</div>
      </li>
    );
  }
}

export default Muzi;
