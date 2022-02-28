import React from 'react';
import Chart from '../components/Chart';

function Performance() {

  const data = {
    "vehicle_make": "Mercedes Benz E63 2019",
    "reg_num": "GT 300 Z",
    "amount": "ZAR500.50"
  }

  var rows = []

  for(var i=0; i<9; i++){
    rows.push(
      <tr>
        <td>{data.vehicle_make}</td>
        <td>{data.reg_num}</td>
        <td>{data.amount}</td>
      </tr>
    )
  }

  return (
    <div className="performance">
        <div style={{display: 'flex'}}>
          <div className="quick-stats">
            <div style={{width: "95%", marginTop: "0"}}>
              <h3 style={{fontWeight: '500', marginLeft: "2rem", marginBottom: "2rem"}}>Quick Stats</h3>
              <div className="tabs">
                <div className="tab">
                  <div className="tab-header">
                    <div className="tab-image">
                      <i className='bx bxs-user'></i>
                    </div>
                    Total Requests
                  </div>
                  <h1>45</h1>
                </div>
                <div className="tab">
                  <div className="tab-header">
                    <div className="tab-image">
                      <i className='bx bx-money'></i>
                    </div>
                    Completed Jobs
                  </div>
                  <h1>25</h1>
                </div>
                <div className="tab">
                  <div className="tab-header">
                    <div className="tab-image">
                      <i className='bx bxs-wallet'></i>
                    </div>
                    Missed Requests
                    <p style={{fontSize: '8px', backgroundColor: 'rgba(164, 223, 156, 0.726)', padding: "5px", marginLeft: "4px", color: 'rgb(67, 179, 52)'}}>+34%</p>
                  </div>
                  <h1>20</h1>
                </div>
              </div>
            </div>
            <div style={{ width: '95%', marginTop: '3rem'}}>
              <div style={{display: 'flex', marginBottom: '10px'}}>
                <div className="tab-image" style={{marginLeft: '2rem'}}>
                  <i className='bx bx-money'></i>
                </div>
                Analytics
              </div>
              <Chart />
            </div>
          </div>
          <div className="earnings">
            <div style={{width: "100%", marginTop: "0"}}>
              <h3 style={{fontWeight: '500'}}>Earnings</h3>
              <table className="table" style={{width: "100%"}}>
                <thead className="table-header">
                  <th className="table-heading">Vehicle Make</th>
                  <th className="table-heading">Reg. No.</th>
                  <th className="table-heading">Amount</th>
                </thead>
                <tbody className="performance-table">
                  {rows}
                </tbody>
              </table>
              <div className="table-footer"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Performance;
