import React from 'react';
import logo from '../img/logo.png'
import man from '../img/man.jpeg'
import 'boxicons'

function Topbar() {
  return (
    <div className="topbar">
        <div className="left">
            <img src={logo} alt="logo" height="60" width="150" />
            <h3>Car Service City Merlin</h3>
        </div>
        <div className="middle">
            <i className='bx bx-search search-icon'></i>
            <input type="text" placeholder="Search for vehicle by registration Number or VIN" className="search-box" />
        </div>
        <div className="right">
            <button className="job-button"><i className='bx bx-plus plus-font'/> Add Job</button>
            <div className="profile">
                <div className="profile-image">
                    <img src={man} alt="profile-image" height="100%" width="100%" style={{borderRadius: "100%"}} />
                </div>
                James McCarthy <i className='bx bx-caret-down'></i>
            </div>
        </div>
    </div>
  );
}

export default Topbar;
