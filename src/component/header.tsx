import React from 'react';
import logo from '../imgs/logo.png';
import avatar from '../imgs/avatar1.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import ring from '../imgs/ring.png';
const Header = () => {
  const [notif, Shownotif] = useState(false); //to show notification
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
        <img
          src={ring}
          alt="ring"
          onClick={() => {
            Shownotif(!notif);
          }}
        />
        <span>28</span>
        {notif && ( //show notification depend on notif variable
          <div className="active_notif">
            <div className="notif_contenent">
              <b>
                <p>Receive notification</p>
              </b>
              <p>notification may include alerts,sounds ,and badge</p>
            </div>
            <div className="notif_click">
              <p>Reply</p>
              <p>Dont allow</p>
            </div>
          </div>
        )}
      </div>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
        <p>Ramon </p>
      </div>
    </nav>
  );
};
export default Header;
