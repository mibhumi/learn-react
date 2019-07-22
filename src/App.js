import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import Calculation from './containers/Calculation/Calculation';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Counter />
          <Calculation/>
        </div>
    );
  }
}

export default App;
