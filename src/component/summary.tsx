import React from 'react';
import Pie from './pie1';
import get_summarydata from '../func/generate_summary'; //get random data each time

const summary = () => {
  return (
    <div className="summary">
      <h1>Summary</h1>
      <div className="summary_component">
        <Pie
          data={get_summarydata()} //data as props
          pietitle="Memory usage"
          percente={get_summarydata()[0].uv + '%'}
        />
        <Pie
          data={get_summarydata()}
          pietitle="CPU usage"
          percente={get_summarydata()[0].uv + '%'}
        />
        <Pie
          data={get_summarydata()}
          pietitle="Edge connected"
          percente={get_summarydata()[0].uv}
        />
        <Pie
          data={get_summarydata()}
          pietitle="Total Nb of devices"
          percente={get_summarydata()[0].uv}
        />
      </div>
    </div>
  );
};
export default summary;
