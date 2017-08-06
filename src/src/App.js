import React, { Component } from 'react';
import logo from './logo.svg';
import Landing from './components/landing';
import Main from './components/main';
import './App.css';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      logged : true
    }
}

  render() {
    return (
      <div className="App">
        <div className="container">
        {this.state.logged ? <Main/> : <Landing/>}
        </div>
      </div>
    );
  }
}

export default App;
