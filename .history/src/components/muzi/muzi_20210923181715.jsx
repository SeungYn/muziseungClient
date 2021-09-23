import React, { Component } from 'react';
import styles from './muzi.module.css';

class Muzi extends Component {
  render() {
    return (
      <li className={styles.muzi}>
        <span className={styles.name}>유승윤</span>
        <span className={styles.tiem}>11:28</span>
        <p className={styles.text}></p>
        <div className={styles.comment}></div>
      </li>
    );
  }
}

export default Muzi;
