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
        <span className={styles.name}>{username}</span>
        <span className={styles.time}>{createdAt}</span>
        <p className={styles.text}>{text}</p>
      </li>
    );
  }
}

export default DetailMuziComment;
