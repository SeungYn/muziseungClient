import React, { Component } from 'react';
import styles from './detailMuziComment.module.css';

class DetailMuziComment extends Component {
  render() {
    return (
      <li className={styles.comment}>
        <span className={styles.name}>유승윤</span>
        <span className={styles.time}>11:28</span>
        <p className={styles.text}>안녕 하세요 저는 유승윤 fds</p>
      </li>
    );
  }
}

export default DetailMuziComment;
