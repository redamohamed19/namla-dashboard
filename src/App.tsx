import './css/App.css';
import Header from './component/header';
import Side_nav from './component/side_nav';
import Overview from './component/overview';
import Devices from './component/devices';

import React from 'react';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Side_nav />
        <Devices />
      </div>
    </div>
  );
}

export default App;
