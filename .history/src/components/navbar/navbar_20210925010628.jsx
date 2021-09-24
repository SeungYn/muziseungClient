import styles from './navbar.module.css';
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.title}>과목</div>
      </nav>
    );
  }
}

export default Navbar;
