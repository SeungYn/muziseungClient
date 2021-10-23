import React, { Component } from 'react';
import Muzi from '../muzi/muzi';
import MuziForm from '../muziForm/muziForm';
import styles from './muzis.module.css';

class Muzis extends Component {
  state = {
    count: 0,
  };

  allContainerRef = this.props.inputRef;
  componentDidMount() {
    fetch('http://localhost:8080/muzis', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ muzis: result });
        console.log(result);
      });
  }
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
              key={m.id}
              muzi={m}
              onClickSelectMuzi={this.props.onClickSelectMuzi}
            />
          ))}
        </ul>
        <MuziForm
          onAddMuzi={this.props.onAddMuzi}
          selectedMuzi={this.props.selectedMuzi}
        />
      </section>
    );
  }
}

export default Muzis;
