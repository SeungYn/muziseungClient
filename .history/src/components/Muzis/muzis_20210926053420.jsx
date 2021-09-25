import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import MuziForm from '../muziForm/muziForm';
import styles from './muzis.module.css';

class Muzis extends Component {
  allContainerRef = this.props.inputRef;

  render() {
    return (
      <section
        ref={this.allContainerRef}
        className={`${styles.allContainer}
          ${
            this.props.selectedMuzi
              ? styles.unSelectedMuzi
              : styles.selectedMuzi
          }
        `}
      >
        <div className={styles.title}>Muzi</div>
        <ul className={styles.container}>
          {this.props.muzis.map((m) => (
            <Muzi
              key={Date.now()}
              muzi={m}
              onClickSelectMuzi={this.props.onClickSelectMuzi}
            />
          ))}
        </ul>
        <MuziForm onAddMuzi={this.props.onAddMuzi} />
      </section>
    );
  }
}

export default Muzis;
