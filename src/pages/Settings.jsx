import React from 'react';
import boschLogo from '../img/bosch-service.jpeg'

function Settings() {
  return (
    <div className="settings">
        <div className="settings-container">
            <div className="details">
                <div className="section">
                    <div className="heading"><small>Company Name</small></div>
                    <div className="company-name">
                        <img src={boschLogo} width="50" height="40" alt="" />
                        <div style={{marginLeft: "10px"}}>
                            <span style={{fontWeight: "bold"}}>Bosch Service City </span><br/>
                            <small>Accra - Ghana</small>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="heading"><small>Type Of Services</small></div>
                    <ul className="services">
                        <li>Windscreen Repairs</li>
                        <li>Engine Repairs</li>
                        <li>Gears Exchange</li>
                        <li>Hydraulic Repairs</li>
                        <li>Windscreen Repairs</li>
                        <li>Engine Repairs</li>
                        <li>Gears Exchange</li>
                        <li>Hydraulic Repairs</li>
                    </ul>
                </div>
                <div className="section">
                    <div className="heading"><small>Technicians</small></div>
                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
                        <button className="add">Add Technician</button>
                        <button className="delete">Delete Technician</button>
                    </div>
                </div>
            </div>
            <div className="edit-settings">
                <div style={{paddingBottom: "2rem", borderBottom: "1px solid rgb(223, 222, 222)"}}>
                    <div>
                        <div className="setting-title">
                            <h3 style={{width: "10rem", marginBottom: "10px"}}>Email Address</h3>
                            <i className='bx bx-pencil blue-text'></i>
                        </div>
                        <small>Boschservice@Gmail.Com</small>
                    </div>
                    <div>
                        <div className="setting-title">
                            <h3 style={{width: "10rem", marginBottom: "10px"}}>Phone Number</h3>
                            <i className='bx bx-pencil blue-text'></i>
                        </div>
                        <small>+233 456 676 5678</small>
                    </div>
                    <div>
                        <div className="setting-title">
                            <h3 style={{width: "10rem", marginBottom: "10px"}}>Address</h3>
                            <i className='bx bx-pencil blue-text'></i>
                        </div>
                        <small>Accra - Ghana</small>
                    </div>
                </div>
                <div style={{paddingTop: "1rem"}}>
                    <div>
                        <h3 style={{marginBottom: "10px"}}>Update/Change Password</h3>
                        <div style={{display: "flex"}}>
                            <div style={{width: "25rem"}}>
                                <small>Change your old password to a new one</small>
                            </div>
                            <small className="blue-text">Change Password</small>
                        </div>
                    </div>
                    <div>
                        <h3 style={{marginBottom: "10px"}}>Update/Change PIN</h3>
                        <div style={{display: "flex"}}>
                            <div style={{width: "25rem"}}>
                                <small>Change or reset your pin to a new one</small>
                            </div>
                            <small className="blue-text">Change PIN</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Settings;
