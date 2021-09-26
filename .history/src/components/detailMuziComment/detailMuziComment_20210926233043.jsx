import React, { Component } from 'react';
import styles from './detailMuziComment.module.css';

class DetailMuziComment extends Component {
  render() {
    console.log(this.props.muzi);
    return (
      <li className={styles.comment}>
        <span className={styles.name}>{}</span>
        <span className={styles.time}>{}</span>
        <p className={styles.text}>{}</p>
      </li>
    );
  }
}

export default DetailMuziComment;
