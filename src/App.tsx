import './css/App.css';
import Header from './component/header';
import Side_nav from './component/side_nav';
import Overview from './component/overview';
import Devices from './component/devices';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Side_nav />
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route exact path="/devices" component={Devices} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
