import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import Data from './data.js';
import './App.css';

class App extends Component {
  render() {

    const devices = ["mac", "ipad", "iphone", "watch", "tv", "music"];

    return (
      <div className="App">
        <Route exact path="/" render={() => <NavWrapper devices={devices} devicesData={Data} /> } />
      </div>
    );
  }
}

export default App;
