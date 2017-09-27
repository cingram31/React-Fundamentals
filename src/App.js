import React, { Component } from 'react';
import JSXIntro from './JSXIntro';
import ComponentsIntro from './ComponentsIntro';
import PropsIntro from './PropsIntro';
import StateIntro from './StateIntro';
import ChildComponentsIntro from './ChildComponentsIntro';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <hr />
      <div >
        <JSXIntro />
        <ComponentsIntro />
        <PropsIntro name="Michael Bolton" title="The Never Ending Elevator Music" />
        <StateIntro />
        <ChildComponentsIntro />
      </div>
    </div>
    );
  }
}

export default App;
