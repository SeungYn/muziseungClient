import React, { Component } from 'react';
import styles from './detailMuziComment.module.css';

class DetailMuziComment extends Component {
  textRef = React.createRef();
  liRef = React.createRef();

  componentDidMount() {
    this.props.count === this.props.commentsLength && this.lastliScrollDown();
  }

  lastliScrollDown = () => {
    this.liRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  render() {
    const { userName, text, time } = this.props.muzi;
    return (
      <li ref={this.liRef} className={styles.comment}>
        <span className={styles.name}>{userName}</span>
        <span className={styles.time}>{text}</span>
      </li>
    );
  }
}

export default DetailMuziComment;