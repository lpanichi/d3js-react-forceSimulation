import React, { Component } from 'react';
import Graph from './Graph'

import './App.css';

const styles = {
  app:{
    width : "100%",
    height: "100%",
  }
}


class App extends Component {
  render() {
    return (
      <div className="App" style={styles.app}>
        <Graph/>
      </div>
    );
  }
}

export default App;
