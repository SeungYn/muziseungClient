import React, { Component } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import styles from './detailMuziCommentForm.module.css';

class DetailMuziCommentForm extends Component {
  textRef = React.createRef();
  formRef = React.createRef();

  textResize = () => {
    const obj = this.textRef.current;
    obj.style.height = 'auto';
    obj.style.height = obj.scrollHeight + 'px';
  };
  //스크롤 자동 나락
  // scrollAuto = (jsxRef) => {
  //   jsxRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'end',
  //   });
  // };
  onSubmit = (event) => {
    event.preventDefault();
    const comment = this.textRef.current.value;
    comment && this.props.onAddMuziComment(this.props.selectedMuzi.id, comment);
    this.formRef.current.reset();
    this.props.scrollAuto();
    //텍스트를 입력호 등록 후 크기 축소
    const obj = this.textRef.current;
    this.textRef.current.value = '';
    obj.style.height = 'auto';
  };

  render() {
    return (
      <form
        action='#'
        ref={this.formRef}
        className={styles.form}
        onSubmit={this.onSubmit}
      >
        <div className={styles.middleContainer}>
          <textarea
            ref={this.textRef}
            className={styles.text}
            onKeyUp={this.textResize}
            onKeyDown={this.textResize}
          ></textarea>
          <div className={styles.bottom}>
            <button className={styles.commentButton} onClick={this.asd}>
              무지등록
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default DetailMuziCommentForm;
