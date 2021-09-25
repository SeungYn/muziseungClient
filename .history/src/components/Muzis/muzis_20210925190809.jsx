import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import MuziForm from '../muziForm/muziForm';
import styles from './muzis.module.css';

class Muzis extends Component {
  test = React.forwardRef((props, ref) => (
    <section ref={ref} className={styles.allContainer}></section>
  ));
  ref = React.createRef();
  render() {
    return (
      <this.test ref={this.ref}>
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
      </this.test>
    );
  }
}

export default Muzis;
