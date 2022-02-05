import React, { Component } from 'react';
import AllMuzis from './pages/allMuzis';

class App extends Component {
  render() {
    return <AllMuzis muziService={props.muziService} />;
  }
}

export default App;
