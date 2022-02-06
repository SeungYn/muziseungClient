import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMuzis from './pages/allMuzis';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Routes>
        (
        <>
          <Route
            exact
            path='/a'
            element={
              <AllMuzis
                muziService={this.props.muziService}
                commentService={this.props.commentService}
              />
            }
          />

          <Route exact='/w' element={<Login />} />
        </>
        )
      </Routes>
    );
  }
}

export default App;
