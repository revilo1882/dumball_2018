import React, { Component } from 'react';

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
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Photos</a>
            </li>
            <li className="last">
              <a href='#'>Donate</a>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
