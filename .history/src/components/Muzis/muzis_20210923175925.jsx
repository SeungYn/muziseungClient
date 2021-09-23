import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import styles from './muzis.module.css';

class Muzis extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Muzi />
      </div>
    );
  }
}

export default Muzis;
