import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import styles from './muzis.module.css';

class Muzis extends Component {
  render() {
    return (
      <ul className={styles.container}>
        <Muzi />
      </ul>
    );
  }
}

export default Muzis;
