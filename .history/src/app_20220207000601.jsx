import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMuzis from './pages/allMuzis';

class App extends Component {
  render() {
    return (
      <Switch>
        <>
          <AllMuzis
            muziService={this.props.muziService}
            commentService={this.props.commentService}
          />
        </>
      </Switch>
    );
  }
}

export default App;
