import React, { Component } from 'react';
import styles from './detailMuziComment.module.css';

class DetailMuziComment extends Component {
  render() {
    const { text, time } = this.props.muzi;
    return (
      <li className={styles.comment}>
        <span className={styles.name}></span>
        <span className={styles.time}>{time}</span>
        <p className={styles.text}>{text}</p>
      </li>
    );
  }
}

export default DetailMuziComment;
