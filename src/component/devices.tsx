import '../css/devices.css';
import Tabledevices from './table_devices';

import React from 'react';

const devices = () => {
  //device component implementation
  return (
    <section className="devices">
      <h4>List Devices</h4>
      <Tabledevices />
    </section>
  );
};
export default devices;
