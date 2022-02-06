import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllMuzis from './pages/allMuzis';

class App extends Component {
  render() {
    return (
      <Routes>
        <Routes>
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
