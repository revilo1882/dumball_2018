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
          <img className="image" src={logo} alt="" />
        </div>

        <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Journey">Journey</Link>
            </li>
            <li>
              <Link to="/Map">Map</Link>
            </li>
            <li>
              <Link to="/Photos">Dumball 2016</Link>
            </li>
            <li className="last">
              <a href = 'https://www.justgiving.com/fundraising/matt-reade1'>Donate</a>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
