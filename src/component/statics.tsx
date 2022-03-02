import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import React from 'react';
import { useState } from 'react';
import getData from '../func/generatedata'; //import random data object

const Statics = () => {
  const [t, SetT] = useState(getData()); //data variable
  setInterval(function() {
    SetT(getData());
  }, 10000); //get new data each 10sec

  return (
    //statistic component implementaion
    <div className="overview_statics">
      <div className="overview_statics_intro">
        <h4>Statistics</h4>
      </div>
      <div style={{ width: '90%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            width={900}
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
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Statics;
