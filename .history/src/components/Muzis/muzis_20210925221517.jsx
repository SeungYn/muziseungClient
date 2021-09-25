import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import MuziForm from '../muziForm/muziForm';
import styles from './muzis.module.css';

class Muzis extends Component {
  asd = this.props.inputRef;
  test = () => {
    console.log(this.asd.current);
  };
  render() {
    return (
      <section
        ref={this.props.inputRef}
        className={styles.allContainer}
        onClick={this.test}
      >
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
