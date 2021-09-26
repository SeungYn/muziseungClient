import React, { Component } from 'react';
import styles from './detailMuziComment.module.css';

class DetailMuziComment extends Component {
  render() {
    console.log(this.props.muzi);
    return (
      <li className={styles.comment}>
        <span className={styles.name}>{userName}</span>
        <span className={styles.time}>{time}</span>
        <p className={styles.text}>{text}</p>
      </li>
    );
  }
}

export default DetailMuziComment;
