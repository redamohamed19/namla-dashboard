import React from 'react';

import overview from '../imgs/overview_white.svg';
import { Link } from 'react-router-dom';

import wallet from '../imgs/wallet.svg';
import trade from '../imgs/trade.svg';
const side_nav = () => {
  function click123(event: any) {
    var a = (event.target.style =
      'color: white;border-radius: 0px 90px 90px 0px;background: linear-gradient(178.18deg, #4edbe5 -13.56%, #281ac8 158.3%);');
    console.log(a);
  }
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
          <Link to="/">
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
export default side_nav;
