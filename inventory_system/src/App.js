import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Login</h2>
        </div>
        <p className="App-intro">
          Two fields are gonna go here once I know what I'm doing
        </p>
      </div>
    );
  }
}

export default App;
