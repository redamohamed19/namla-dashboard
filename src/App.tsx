import './css/App.css';
import Header from './component/header';
import Side_nav from './component/side_nav';

import React from 'react';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Side_nav />
      </div>
    </div>
  );
}

export default App;
