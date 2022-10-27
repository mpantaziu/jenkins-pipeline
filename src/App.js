import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React !  Update  versiune Noua </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Sample Code</h3>
        <h3>Have the best day ever and if someone tries to ruin it for you, just tell me. I will yell at them from a safe distance, ’cause that’s what friends do, yo!</h3>
      </div>
    );
  }
}

export default App;
