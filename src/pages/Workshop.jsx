import React from 'react';
import { modal } from 'react-modal-dom';

import MyModal from '../components/MyModal'

function Workshop() {

  const ongoingJobs = {
    "vehicleMake": "Mercedes Benz E63 2019",
    "typeOfService": "Oil Service",
    "regNum": "GT300-21",
    "technician": "Kojo Abdulai"
  }

  const incomingJobs = {
    "vehicleMake": "Mercedes Benz E63 2019",
    "typeOfService": "Oil Service",
    "mileage": "GT300-21",
  }

  const unresolvedJobs = {
    "vehicleMake": "Mercedes Benz E63 2019",
    "typeOfService": "Oil Service",
    "regNum": "GT300-21",
    "technician": "Kyle Walker"
  }

  var rows = []
  var second_rows = []
  var third_rows = []

  const ongoingJob = "Ongoing Jobs"
  const ongoingColor = 'rgb(5, 90, 194)'
  const unresolvedJob = "Unresolved Jobs"
  const unresolvedColor = 'rgb(173, 32, 32)'
  const incomingJob = "Incoming Jobs"
  const incomingColor = 'rgb(51, 114, 59)'

  const handleOpenModal = (jobType, color) => {
    modal.open(<MyModal jobType={jobType} color={color}/>)
  }

  for(var i=0; i<5; i++){
    rows.push(
      <tr onClick={e => handleOpenModal(ongoingJob, ongoingColor)}>
        <td>{ongoingJobs.vehicleMake}</td>
        <td>{ongoingJobs.typeOfService}</td>
        <td>{ongoingJobs.regNum}</td>
        <td>{ongoingJobs.technician}</td>
      </tr>
    )
  }

  for(var j=0; j<3; j++){
    second_rows.push(
      <tr onClick={e => handleOpenModal(unresolvedJob, unresolvedColor)}>
        <td>{unresolvedJobs.vehicleMake}</td>
        <td>{unresolvedJobs.typeOfService}</td>
        <td>{unresolvedJobs.regNum}</td>
        <td>{unresolvedJobs.technician}</td>
      </tr>
    )
  }

  for(var k=0; k<11; k++){
    third_rows.push(
      <tr onClick={e => handleOpenModal(incomingJob, incomingColor)}>
        <td>{incomingJobs.vehicleMake}</td>
        <td>{incomingJobs.typeOfService}</td>
        <td>{incomingJobs.mileage}</td>
      </tr>
    )
  }

  return (
    <div className="workshop">
        <div style={{display: 'flex'}}>
          <div className="left-tables">
            <div className="left-table" style={{width: "95%"}}>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1.5rem', marginBottom: '6px'}}>
                <span style={{fontWeight: '400', marginLeft: "2rem"}}>Ongoing Jobs: </span>
                <span style={{fontSize: '10px', fontWeight: '800', backgroundColor: 'rgba(150, 188, 236, 0.486)', textAlign: 'center', padding: "5px", marginLeft: "4px", color: 'rgba(24, 117, 230, 0.603)', paddingTop: '2px', paddingBottom: '2px', width: '20px', borderRadius: "3px"}}>5</span>
              </div>
              <div style={{border: "1px solid rgb(209, 208, 208)", borderRadius: "8px"}}>
                <table className="table" style={{width: "100%"}}>
                  <thead className="table-header">
                    <th className="workshop-table-heading">Make Model Year</th>
                    <th className="workshop-table-heading">Type of Service</th>
                    <th className="workshop-table-heading">Registration Number</th>
                    <th className="workshop-table-heading">Technician</th>
                  </thead>
                  <tbody className="workshop-table">
                    {rows}
                  </tbody>
                </table>
                <div className="workshop-table-footer"></div>
              </div>
            </div>
            <div style={{width: "95%"}}>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '2rem', marginBottom: '6px'}}>
                <span style={{fontWeight: '400', marginLeft: "2rem"}}>Unresolved Jobs: </span>
                <span style={{fontSize: '10px', fontWeight: '800', backgroundColor: 'rgba(243, 179, 216, 0.555)', textAlign: 'center', padding: "5px", marginLeft: "4px", color: 'rgba(163, 10, 99, 0.555)', paddingTop: '2px', paddingBottom: '2px', width: '20px', borderRadius: "3px"}}>3</span>
              </div>
              <div style={{border: "1px solid rgb(209, 208, 208)", borderRadius: "8px"}}>
                <table className="table" style={{width: "100%"}}>
                  <thead className="table-header">
                    <th className="workshop-table-heading">Make Model Year</th>
                    <th className="workshop-table-heading">Type of Service</th>
                    <th className="workshop-table-heading">Registration Number</th>
                    <th className="workshop-table-heading">Technician</th>
                  </thead>
                  <tbody className="workshop-table">
                    {second_rows}
                  </tbody>
                </table>
                <div className="workshop-table-footer"></div>
              </div>
            </div>
          </div>
          <div className="right-table">
            <div style={{display: 'flex', alignItems: 'center', marginTop: '1.5rem', marginBottom: '6px'}}>
                <span style={{fontWeight: '400', marginLeft: "2rem"}}>Incoming Jobs: </span>
                <span style={{fontSize: '10px', fontWeight: '800', backgroundColor: 'rgba(164, 223, 156, 0.726)', textAlign: 'center', padding: "5px", marginLeft: "4px", color: 'rgb(67, 179, 52)', paddingTop: '2px', paddingBottom: '2px', width: '20px', borderRadius: "3px"}}>11</span>
              </div>
            <div style={{border: "1px solid rgb(209, 208, 208)", borderRadius: "8px"}}>
              <table className="table" style={{width: "100%"}}>
                <thead className="table-header">
                  <th className="workshop-table-heading">Make Model Year</th>
                  <th className="workshop-table-heading">Type of Service</th>
                  <th className="workshop-table-heading">Mileage</th>
                </thead>
                <tbody className="workshop-table">
                  {third_rows}
                </tbody>
              </table>
              <div className="workshop-table-footer"></div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Workshop;
