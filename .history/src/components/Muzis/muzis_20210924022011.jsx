import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import MuziForm from '../muziForm/muziForm';
import styles from './muzis.module.css';

class Muzis extends Component {
  render() {
    return (
      <ul className={styles.container}>
        <Muzi />
        <MuziForm />
      </ul>
    );
  }
}

export default Muzis;
