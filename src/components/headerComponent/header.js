import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import logo from './dumball_logo.png';

class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          <img src={logo} height="80px" width="180px" />
        </div>

        <nav>
          <ul>
            <li classNAme="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Map">Map</Link>
            </li>
            <li>
              <Link to="/Photos">Photos</Link>
            </li>
            <li className="last">
              <Link to="/Donate">Donate</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
