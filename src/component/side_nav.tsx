import React from 'react';

import overview from '../imgs/cluster.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import wallet from '../imgs/devices.png';
import trade from '../imgs/edge.png';

const tf = () => {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_3)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 3C4 2.45 4.45 2 5 2H21C21.55 2 22 1.55 22 1C22 0.45 21.55 0 21 0H4C2.9 0 2 0.9 2 2V13H1.5C0.67 13 0 13.67 0 14.5C0 15.33 0.67 16 1.5 16H14V13H4V3ZM23 4H17C16.45 4 16 4.45 16 5V15C16 15.55 16.45 16 17 16H23C23.55 16 24 15.55 24 15V5C24 4.45 23.55 4 23 4ZM22 13H18V6H22V13Z"
          fill="#FF0000"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect width="24" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
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
