import React, { Component } from 'react';

import Tasks from './components/Tasks';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <Tasks />
      </div>
    );
  }
}

export default App;
