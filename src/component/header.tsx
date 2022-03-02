import React from 'react';
import logo from '../imgs/logo.png';
import avatar from '../imgs/avatar1.png';
import { Link } from 'react-router-dom';

import ring from '../imgs/ring.png';
const header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          {' '}
          <img src={logo} alt="logo" />
        </Link>
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
      <div className="avatar">
        <img src={avatar} alt="avatar" />
        <p>Ramon </p>
      </div>
    </nav>
  );
};
export default header;
