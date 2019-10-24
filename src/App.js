import React, { Component } from 'react';
import chuck from './chuck-norris.png';
import './App.css';
import Joke from "./components/joke";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={chuck} className="App-logo" alt="Chuck Norris" />
          <h1 className="App-title">Chuck Norris Joke Generator</h1>
        </header>
        <Joke/>
      </div>
    );
  }
}

export default App;
