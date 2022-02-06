import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMuzis from './pages/allMuzis';

class App extends Component {
  render() {
    return (
      <>
        <AllMuzis
          muziService={this.props.muziService}
          commentService={this.props.commentService}
        />
      </>
    );
  }
}

export default App;
