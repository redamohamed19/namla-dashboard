import React from 'react';
import Pie from './pie1';
const data = [
  {
    uv: 2,

    fill: 'rgba(253, 116, 155, 1)'
  },
  {
    uv: 3,

    fill: 'rgba(255,255,255,1)'
  }
];
const summary = () => {
  return (
    <div className="summary">
      <h1>Summary</h1>
      <div className="summary_component">
        <Pie data={data} pietitle="Memory usage" percente="75%" />
        <Pie data={data} pietitle="CPU usage" percente="68%" />
        <Pie data={data} pietitle="Edge connected" percente="12" />
        <Pie data={data} pietitle="Total Nb of devices" percente="124" />
      </div>
    </div>
  );
};
export default summary;
