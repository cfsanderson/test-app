import React, { Component } from 'react';
import About from './About'
// import logo from './logo.svg';
// import '../styles/_App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Portfolio</h1>
        </div>
        <p className="App-intro">A new create-react-app that might turn into a portfolio site.</p>
        <About/>
      </div>
    );
  }
}

export default App;
