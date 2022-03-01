import '../css/overview.css';
import Summary from './summary';
import Terminal from './terminal';
import Statics from './statics';
import React from 'react';

const overview = () => {
  return (
    <section className="overview">
      <div className="soustitle_overview">
        <h4>Overview</h4>
      </div>

      <Statics />
      <div className="under_content">
        <Terminal />
        <Summary />
      </div>
    </section>
  );
};
export default overview;
