import React from 'react';

import overview from '../imgs/overview_white.svg';

import wallet from '../imgs/wallet.svg';
import trade from '../imgs/trade.svg';
const side_nav = () => {
  return (
    <div className="side_nav">
      <ul>
        <li>
          <img src={overview} alt="overview" />
          Clusters
        </li>
        <li>
          <img src={trade} alt="trade" />
          Trade
          <span className="notif_count">19</span>
        </li>
        <li>
          <img src={wallet} alt="wallet" />
          Wallet
        </li>
      </ul>
    </div>
  );
};
export default side_nav;
