import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMuzis from './pages/allMuzis';

class App extends Component {
  render() {
    return (
      <Routes>
        <>
          <Route exact path='/'>
            <AllMuzis
              muziService={this.props.muziService}
              commentService={this.props.commentService}
            />
          </Route>
        </>
      </Routes>
    );
  }
}

export default App;
