import React, { Component } from 'react';

import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

        <Homepage />

      </div>
    );
  }
}

export default App;
