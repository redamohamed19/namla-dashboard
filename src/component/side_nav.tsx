import React from 'react';

import overview from '../imgs/cluster.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import wallet from '../imgs/devices.png';
import trade from '../imgs/edge.png';


const elements = [
  //sub section element
  { title: 'Clusters', link: '/', image: overview },
  { title: 'edge', link: '/edge', image: trade },
  { title: 'devices', link: '/devices', image: wallet }
];

const SideNav = () => {
  //navbar component implementation
  const [Active, SetActive] = useState(0); // apply effect on the clicked subsection
  return (
    // llop thourght the dynamic element object
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
