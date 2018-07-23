import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Journey from './components/pages/journey';
import Photos from './components/pages/photos';
import Donate from './components/pages/donate';


import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header />

      <Route exact path="/" component={Homepage} />
      <Route exact path="/Journey" component={Journey} />
      <Route exact path="/Photos" component={Photos} />
      <Route exact path="/Donate" component={Donate} />

      </div>
      </Router>
    );
  }
}

export default App;
