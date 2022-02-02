import React, { Component } from 'react';
import styles from './muzi.module.css';

class Muzi extends Component {
  liRef = React.createRef();
  state = {
    count: 0,
  };

  allContainerRef = this.props.inputRef;
  // componentDidMount() {
  //   fetch(`http://localhost:8080/muziComments/${this.props.}`, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       this.setState({ muzis: result });
  //       console.log(result);
  //     });
  // }

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
    const { id, username, createdAt, text, commentsCount } = this.props.muzi;
    console.log(this.props.children);
    return (
      <li
        ref={this.liRef}
        className={styles.muzi}
        onClick={this.onClickSelectMuzi}
      >
        <span className={styles.name}>{username}</span>
        <span className={styles.time}>{createdAt}</span>
        <p className={styles.text}>{text}</p>
        {commentsCount > 0 && (
          <div className={styles.comment}>{`${commentsCount}개의 답글`}</div>
        )}
      </li>
    );
  }
}

export default Muzi;
