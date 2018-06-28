import React, { Component } from 'react';
import LeftNav from './components/LeftNav/LeftNav.js';
import MainContent from './components/MainContent/MainContent.js';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <LeftNav />
        <MainContent />
      </div>
    );
  }
}

export default App;

// Just some psuedocode here...