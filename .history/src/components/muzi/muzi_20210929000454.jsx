import React, { Component } from 'react';
import styles from './muzi.module.css';

class Muzi extends Component {
  liRef = React.createRef();
  onClickSelectMuzi = () => {
    this.props.onClickSelectMuzi(this.props.muzi);
  };

  componentDidMount() {
    this.lastliScrollDown();
  }

  lastliScrollDown = () => {
    this.liRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  render() {
    const { id, userName, time, text, comments } = this.props.muzi;

    return (
      <li
        ref={this.liRef}
        className={styles.muzi}
        onClick={this.onClickSelectMuzi}
      >
        <span className={styles.name}>{userName}</span>
        <span className={styles.time}>{time}</span>
        <p className={styles.text}>{text}</p>
        {comments && (
          <div className={styles.comment}>{`${comments.length}개의 답글`}</div>
        )}
      </li>
    );
  }
}

export default Muzi;
