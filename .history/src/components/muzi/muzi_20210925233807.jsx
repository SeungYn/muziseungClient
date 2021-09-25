import React, { Component } from 'react';
import styles from './muzi.module.css';

class Muzi extends Component {
  sendMuzi = () = {
    this.props.muzisOnClick
  }
  render() {
    const { id, userName, time, text, comments } = this.props.muzi;

    return (
      <li className={styles.muzi}>
        <span className={styles.name}>{userName}</span>
        <span className={styles.time}>{time}</span>
        <p className={styles.text}>{text}</p>
        <div className={styles.comment}>{`${comments.length}개의 답글`}</div>
      </li>
    );
  }
}

export default Muzi;
