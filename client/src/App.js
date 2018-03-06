import React, { Component } from 'react';
import './App.css';
import Thumb_up from './components/Thumb_up'
import Grid_AllDogs from './containers/top_ten'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid_AllDogs />
      </div>
    );
  }
}

export default App;
