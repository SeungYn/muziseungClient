import React, { Component } from 'react';
import styles from './detailMuziComment.module.css';

class DetailMuziComment extends Component {
  render() {
    const { userName, text, time } = this.props.muzi;
    return (
      <li className={styles.comment}>
        <span className={styles.name}>{userName}</span>
        <span className={styles.time}>{text}</span>
        <p className={styles.text}>{time}</p>
      </li>
    );
  }
}

export default DetailMuziComment;
