import React, { Component } from 'react';
import Navigator from '../components/navigator/Navigator';
import Main from '../components/main/Main';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Main />
      </div>
    );
  }
}

export default App;
