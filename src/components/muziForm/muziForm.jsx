import React, { Component } from 'react';
import styles from './muziForm.module.css';

class MuziForm extends Component {
  test(e) {
    console.log(e);
  }
  render() {
    return (
      <form action='#' className='form'>
        <input type='text' className='text' onKeyPress={this.test} />
        <button>무지등록</button>
      </form>
    );
  }
}

export default MuziForm;
