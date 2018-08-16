import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/headerComponent/header';
import MobileHeader from './components/headerComponent/mobileHeader';
import Homepage from './components/pages/homePage';
import MobileHomepage from './components/pages/mobileHomePage';
import Journey from './components/pages/journey';
import Mapper from './components/pages/map';
import Photos from './components/pages/photos';


import './Assets/css/default.min.css'

class App extends Component {
  constructor() {
  super();
  this.state = {
    width: window.innerWidth,
  };
}

componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

// make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

render() {
  const { width } = this.state;
  const isMobile = width <= 500;
  // the rest is the same...

  if (isMobile) {
    return (
      <Router>
      <div className="App">

      <MobileHeader />

      <Route exact path="/" component={MobileHomepage} />
      <Route exact path="/Journey" component={Journey} />
      <Route exact path="/Map" component={Mapper} />
      <Route exact path="/Photos" component={Photos} />

      </div>
      </Router>
    );
  } else {
    return (
      <Router>
      <div className="App">

      <Header />

      <Route exact path="/" component={Homepage} />
      <Route exact path="/Journey" component={Journey} />
      <Route exact path="/Map" component={Mapper} />
      <Route exact path="/Photos" component={Photos} />

      </div>
      </Router>
    );
  }
}
}

export default App;
