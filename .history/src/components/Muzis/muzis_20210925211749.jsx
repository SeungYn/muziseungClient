import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import MuziForm from '../muziForm/muziForm';
import styles from './muzis.module.css';

class Muzis extends Component {
  test = React.forwardRef((props, ref) => {
    return (
      <section ref={ref} className={styles.allContainer}>
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
  });

  render() {
    return React.forwardRef((props, ref) => {
      return (
        <section ref={ref} className={styles.allContainer}>
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
    });
  }
}

export default Muzis;
