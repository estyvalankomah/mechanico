import React from 'react';
import Nav from '../components/Nav';
import Topbar from '../components/Topbar';
import View from '../components/View';

function Dashboard() {
  return (
    <div className="dashboard">
      <div style={{margin: "2rem"}}>
        <Topbar />
        <Nav />
        <View />
      </div>
    </div>
  );
}

export default Dashboard;
