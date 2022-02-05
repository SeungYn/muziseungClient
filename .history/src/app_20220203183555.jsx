import React, { Component } from 'react';
import AllMuzis from './pages/allMuzis';

class App extends Component {
  render() {
    return <AllMuzis muziService={muziService} />;
  }
}

export default App;
