import React, { Component } from 'react';
import styles from './detailMuziComment.module.css';

class DetailMuziComment extends Component {
  textRef = React.createRef();
  liRef = React.createRef();

  componentDidMount(ref) {
    console.log(this.liRef);
  }

  render() {
    const { userName, text, time } = this.props.muzi;
    return (
      <li ref={this.liRef} className={styles.comment}>
        <span className={styles.name}>{userName}</span>
        <span className={styles.time}>{text}</span>
        <p className={styles.text}>{time}</p>
      </li>
    );
  }
}

export default DetailMuziComment;
