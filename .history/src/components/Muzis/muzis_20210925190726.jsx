import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import MuziForm from '../muziForm/muziForm';
import styles from './muzis.module.css';

class Muzis extends Component {
  Test = React.forwardRef((props, ref) => (
    <section ref={ref} className={styles.allContainer}></section>
  ));
  ref = React.createRef();
  render() {
    return (
      <Test ref={ref}>
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
      </Test>
    );
  }
}

export default Muzis;
