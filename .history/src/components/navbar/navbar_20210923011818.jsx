import styles from './navbar.module.css';
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return <navbar className={styles.navbar}></navbar>;
  }
}

export default Navbar;
