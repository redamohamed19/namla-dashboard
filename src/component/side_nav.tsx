import React from 'react';

import overview from '../imgs/overview_white.svg';
import { Link } from 'react-router-dom';

import wallet from '../imgs/wallet.svg';
import trade from '../imgs/trade.svg';
const SideNav = () => {
  return (
    <div className="side_nav">
      <ul>
        <li>
          <Link to="/">
            <img src={overview} alt="overview" />
            Clusters
          </Link>
        </li>
        <li>
          <Link to="/edge">
            <img src={trade} alt="trade" />
            Trade
          </Link>
        </li>
        <li>
          <Link to="/devices">
            <img src={wallet} alt="wallet" />
            Wallet
            <span className="notif_count">12</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideNav;
