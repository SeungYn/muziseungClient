import React, { Component } from 'react';
import AllMuzis from './pages/allMuzis';

class App extends Component {
  render() {
    return (
      <AllMuzis
        muziService={this.props.muziService}
        commentService={this.props.commentService}
      />
    );
  }
}

export default App;
