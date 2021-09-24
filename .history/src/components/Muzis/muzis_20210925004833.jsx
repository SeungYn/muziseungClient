import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import MuziForm from '../muziForm/muziForm';
import styles from './muzis.module.css';

class Muzis extends Component {
  render() {
    return (
      <section className={styles.allContainer}>
        <div className={styles.title}>Muzi</div>
        <ul className={styles.container}>
          <Muzi />
          <Muzi />
          <Muzi />
          <Muzi />
          <Muzi />
          <Muzi />
          <Muzi />
          <Muzi />
          <Muzi />
        </ul>
        <MuziForm />
      </section>
    );
  }
}

export default Muzis;
