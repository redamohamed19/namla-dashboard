import React from 'react';

import overview from '../imgs/overview_white.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import wallet from '../imgs/wallet.svg';
import trade from '../imgs/trade.svg';
const elements = [
  { title: 'Clusters', link: '/', image: overview },
  { title: 'edge', link: '/edge', image: trade },
  { title: 'devices', link: '/devices', image: wallet }
];
const SideNav = () => {
  const [Active, SetActive] = useState(0);
  return (
    <div className="side_nav">
      <ul>
        {elements.map((element, index) => {
          return (
            <li
              onClick={() => {
                SetActive(index);
              }}
              key={index}
              className={Active === index ? 'active' : ''}
            >
              <Link to={element.link}>
                <img src={element.image} alt="overview" />
                <span> {element.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideNav;
