import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import AllMuzis from './pages/allMuzis';
import Login from './pages/Login';
import styles from './app.modeule.css';
class App extends Component {
  render() {
    return (
      <section className={styles.board}>
        <Header />
        <Routes>
          (
          <>
            <Route
              exact
              path='/'
              element={
                <AllMuzis
                  muziService={this.props.muziService}
                  commentService={this.props.commentService}
                />
              }
            />

            <Route exact path='/w' element={<Login />} />
          </>
          )
        </Routes>
      </section>
    );
  }
}

export default App;
