import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          LOGO
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

<nav>
  <ul>
    <li classNAme="first">
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Products">Products</Link>
    </li>
    <li className="last">
      <Link to="/">Contact</Link>
    </li>
  </ul>
</nav>
