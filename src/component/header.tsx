import React from 'react';
import logo from '../imgs/logo.png';

import ring from '../imgs/ring.png';
const header = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar-nav">
        <li>Home</li>
        <li>Admin</li>
        <li>Config</li>
        <li>Analyst</li>
      </ul>

      <div className="notifications">
        <img src={ring} alt="ring" />
        <span>28</span>
      </div>
    </nav>
  );
};
export default header;
