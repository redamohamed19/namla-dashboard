import threebuttons from '../imgs/3buttons.svg';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import React from 'react';
import { useState } from 'react';
import getData from './generatedata';

const Statics = () => {
  const [t, SetT] = useState(getData());
  setInterval(function() {
    SetT(getData());
  }, 10000);
  return (
    <div className="overview_statics">
      <div className="overview_statics_intro">
        <h4>Statics</h4>
        <button id="table_plus">
          <img src={threebuttons} alt="plus" />
        </button>
      </div>

      <AreaChart
        width={1300}
        height={400}
        data={t}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  );
};
export default Statics;
