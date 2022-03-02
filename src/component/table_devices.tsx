import threebuttons from '../imgs/3buttons.svg';
import { useState, useRef } from 'react';

import React from 'react';
const Tabledevices = () => {
  const [Showmore, SetShowMore] = useState(false);
  const [plus, Setplus] = useState(false);

  const showless = useRef<any>();

  const showmorebutton = () => {
    SetShowMore(!Showmore);
    console.log(showless.current.children[2]);
    if (Showmore) {
      for (let i = 4; i < showless.current.children.length; i++) {
        {
          showless.current.children[i].style.display = 'table-row';
        }
      }
    } else {
      for (let i = 4; i < showless.current.children.length; i++) {
        {
          showless.current.children[i].style.display = 'none';
        }
      }
    }
  };

  return (
    <div className="Conversion_Rate_to_Naira">
      <div className="Conversion_Rate_to_Naira_intro">
        <h4>List Devices</h4>
        <button
          id="table_plus"
          onClick={() => {
            Setplus(!plus);
          }}
        >
          <img src={threebuttons} alt="plus" />
          {plus && (
            <ul className="py-1">
              <li>Account settings</li>
              <li>Support</li>
              <li>License</li>
            </ul>
          )}
        </button>
      </div>
      <div className="container_table_conversion">
        <table className="table_conversion">
          <thead>
            <tr>
              <th title="Field #1">Machine type</th>
              <th title="Field #2">vCPUs</th>
              <th title="Field #3">Memory</th>
              <th title="Field #4">Local SSD support</th>
              <th title="Field #5">Network performance</th>
              <th title="Field #6">CPU Type</th>
              <th title="Field #7">Nested virtualization support</th>
              <th title="Field #8">Linux On Demand cost</th>
              <th title="Field #9">Windows On Demand cost</th>
              <th title="Field #9">Availibility</th>
            </tr>
          </thead>
          <tbody ref={showless}>
            <tr id="tr">
              <td>f1-micro</td>
              <td>shared</td>
              <td>0.6 Gib</td>
              <td>Not supported</td>
              <td>Unknown</td>
              <td>Intel Xeon @ 2.30GHz</td>
              <td>Not supported</td>
              <td>$0.0076 hourly</td>
              <td>$0.0076 hourly</td>
              <td id="available">
                <p>available</p>
              </td>
            </tr>
            <tr id="tr">
              <td>e2-micro</td>
              <td>0.25 vCPUs</td>
              <td>1 Gib</td>
              <td>Not supported</td>
              <td>1 Gigabit</td>
              <td>Skylake, AMD Rome</td>
              <td>Not supported</td>
              <td>$0.00838 hourly</td>
              <td>$0.01988 hourly</td>
              <td id="available">
                {' '}
                <p>available</p>
              </td>
            </tr>
            <tr id="tr">
              <td>e2-small</td>
              <td>0.5 vCPUs</td>
              <td>2 Gib</td>
              <td>Not supported</td>
              <td>1 Gigabit</td>
              <td>N/A</td>
              <td>Not supported</td>
              <td>$0.01675 hourly</td>
              <td>$0.03975 hourly</td>
              <td id="offline">
                {' '}
                <p>Offline</p>
              </td>
            </tr>
            <tr id="tr">
              <td>g1-small</td>
              <td>shared</td>
              <td>1.7 Gib</td>
              <td>Not supported</td>
              <td>Unknown</td>
              <td>Intel Xeon @ 2.30GHz</td>
              <td>Not supported</td>
              <td>$0.027 hourly</td>
              <td>$0.027 hourly</td>
              <td id="busy">
                <p>Busy</p>
              </td>
            </tr>
            <tr id="tr">
              <td>e2-medium</td>
              <td>1 vCPUs</td>
              <td>4 Gib</td>
              <td>Not supported</td>
              <td>2 Gigabit</td>
              <td>, Broadwell,EPYC </td>
              <td>Not supported</td>
              <td>$0.03351 hourly</td>
              <td>$0.07951 hourly</td>
              <td id="offline">
                {' '}
                <p>Offline</p>
              </td>
            </tr>
            <tr id="tr">
              <td>t2d-standard</td>
              <td>1 vCPUs</td>
              <td>4 Gib</td>
              <td>Not supported</td>
              <td>10 Gigabit</td>
              <td>AMD EPYC </td>
              <td>Not supported</td>
              <td>$0.04225 hourly</td>
              <td>$0.08825 hourly</td>
              <td id="busy">
                <p>Busy</p>
              </td>
            </tr>
            <tr id="tr">
              <td>n1-standar-</td>
              <td>1 vCPUs</td>
              <td>3.75 Gib</td>
              <td>Supported</td>
              <td>2 Gigabit</td>
              <td>Skylake,Bridge</td>
              <td>Supported</td>
              <td>$0.0475 hourly</td>
              <td>$0.0935 hourly</td>
              <td id="busy">
                <p>Busy</p>
              </td>
            </tr>
            <tr id="tr">
              <td>highcpu-2</td>
              <td>2 vCPUs</td>
              <td>2 Gib</td>
              <td>Not supported</td>
              <td>4 Gigabit</td>
              <td>Skylake,Rome</td>
              <td>Not supported</td>
              <td>$0.04947 hourly</td>
              <td>$0.14147 hourly</td>
              <td id="available">
                <p>available</p>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={showmorebutton}>
          {Showmore ? 'View Less' : 'View more'}{' '}
        </button>
      </div>
    </div>
  );
};
export default Tabledevices;
