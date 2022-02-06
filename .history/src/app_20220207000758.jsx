import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMuzis from './pages/allMuzis';

class App extends Component {
  render() {
    return (
      <Routes>
        <>
          <AllMuzis
            muziService={this.props.muziService}
            commentService={this.props.commentService}
          />
        </>
      </Routes>
    );
  }
}

export default App;
