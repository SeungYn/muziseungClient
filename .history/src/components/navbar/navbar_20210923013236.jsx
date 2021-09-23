import styles from './navbar.module.css';
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return <nav className={styles.navbar}></nav>;
  }
}

export default Navbar;
