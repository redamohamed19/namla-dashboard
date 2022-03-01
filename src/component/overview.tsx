import '../css/overview.css';
import Summary from '../component/summary';
import Terminal from './terminal';
import Statics from './statics';
import React from 'react';

const overview = () => {
  return (
    <section className="overview">
      <div className="title_overview">
        <h4>User Management System Overview</h4>
        <h4>Accounts | Admin Admin</h4>
      </div>
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
