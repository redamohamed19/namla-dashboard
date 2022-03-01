import base from '../imgs/Base.png';
import backchart from '../imgs/chart_background.png';
import threebuttons from '../imgs/3buttons.svg';
import { RadialBarChart, RadialBar } from 'recharts';
import React from 'react';

const pie1 = props => {
  return (
    <div className="chart">
      <div className="chart_container">
        <RadialBarChart
          width={300}
          height={300}
          innerRadius="80%"
          outerRadius="40%"
          data={props.data}
          startAngle={0}
          endAngle={360}
        >
          <RadialBar minAngle={0} background dataKey="uv" />
        </RadialBarChart>
        <h1>{props.percente}</h1>
      </div>
      <h5>{props.pietitle}</h5>
    </div>
  );
};
export default pie1;
