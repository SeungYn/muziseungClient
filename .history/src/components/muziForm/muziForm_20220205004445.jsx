import React, { Component } from 'react';
import styles from './muziForm.module.css';

class MuziForm extends Component {
  textRef = React.createRef();
  formRef = React.createRef();
  textResize = () => {
    const obj = this.textRef.current;
    obj.style.height = 'auto';
    obj.style.height = obj.scrollHeight + 'px';
  };

  onSubmit = (event) => {
    event.preventDefault();
    const text = this.textRef.current.value;
    text.length > 3 && this.props.onAddMuzi(text);
    this.formRef.current.reset();
    //텍스트를 입력호 등록 후 크기 축소
    const obj = this.textRef.current;
    this.textRef.current.value = '';
    obj.style.height = 'auto';
  };

  //\n을 </br>로 치환해서 화면에 나올수있게하는 메서드
  nl2br = (text) => {
    const textAll = text.split('\n');
    const filteredText = textAll.map((text, i) => {
      if (textAll.length - 1 === i) {
        return text;
      }
      return text + '<br />';
    });
    return filteredText.join('');
  };

  render() {
    return (
      <form
        action=''
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
            <button className={styles.muziButton}>
              <i className='far fa-paper-plane'></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default MuziForm;
