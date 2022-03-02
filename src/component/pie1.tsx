import { RadialBarChart, RadialBar } from 'recharts';
import React from 'react';

const pie1 = (props: any) => {
  return (
    <div className="charter">
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
          <RadialBar background dataKey="uv" />
        </RadialBarChart>
        <h1>{props.percente}</h1>
      </div>
      <h5>{props.pietitle}</h5>
    </div>
  );
};
export default pie1;
