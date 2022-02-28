import React, { useState } from 'react'
import car from '../img/mercedes-benz.png'
import Switch from "react-switch";
import { modal } from 'react-modal-dom';

function MyModal({jobType, color}) {

    const [checked, setChecked] = useState(false)

    const handleChange = checked => {
        setChecked(checked);
      }
    return (
        <div className='modal'>
            <div className="modal-header">
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '6px'}}>
                    <span style={{fontWeight: '800', backgroundColor: `${color}`, marginRight: "5px", width: '20px', height: '20px'}}/>
                    <span style={{fontWeight: '400', marginLeft: "10px"}}>{jobType}</span>
                </div>
                <i className='bx bxs-x-circle' onClick={modal.close}/>
            </div>
            <div className="modal-body">
                <div className="left-div">
                    <div className="car-image">
                        <img src={car} width="80%" height="80%" alt="car" />
                    </div>
                    {   jobType === 'Incoming Jobs' ?
                        <>
                            <div className="row">
                                <div className="col" style={{marginRight: "1rem"}}>
                                    <label className="label">Reg No.</label>
                                    <span>GT 300 - 21</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="label">Mileage</label>
                                    <span>100,000KMS</span>
                                </div>
                            </div>
                        </>
                        :
                        <div className="row">
                            <div className="col" style={{marginRight: "1rem"}}>
                                <label className="label">Reg No.</label>
                                <span>GT 300 - 21</span>
                            </div>
                            <div className="col">
                                <label className="label">Mileage</label>
                                <span>100,000KMS</span>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="col" style={{marginRight: "1rem"}}>
                            <label className="label">Date</label>
                            <span>August 13, 2021</span>
                        </div>
                    </div>
                        {   jobType === 'Incoming Jobs' ?
                                <div className="row">
                                    <div className="col">
                                        <label className="label">Type of Service</label>
                                        <span>Windscreen Repair</span>
                                    </div>
                                </div>
                            :
                            <>
                                <div className="row">
                                    <div className="col" style={{marginRight: "1rem"}}>
                                        <label className="label">Technician</label>
                                        <select>
                                            <option value="Kylie Walker">Kylie Walker</option>
                                            <option value="Jacob">Jacob</option>
                                            <option value="Israel">Israel</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col" style={{marginRight: "1rem"}}>
                                        <label className="large-label">Job Progress</label>
                                        <label htmlFor="">
                                            <Switch 
                                                onChange={handleChange}
                                                checked={checked}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                onColor="#008000"
                                                offColor="#c3c7c4"
                                                activeBoxShadow="0px 0px 5px #fff"
                                                handleDiameter={15}
                                                onHandleColor='#fff'
                                                offHandleColor='#fff'
                                                uncheckedHandleIcon={
                                                <svg viewBox="0 0 10 10" height="100%" width="100%" fill="#008000">
                                                    <circle r={3} cx={5} cy={5} />
                                                </svg>
                                                }
                                                checkedHandleIcon={
                                                <svg viewBox="0 0 10 10" height="100%" width="100%" fill="#008000">
                                                    <circle r={3} cx={5} cy={5} />
                                                </svg>
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <i class='bx bxs-error' style={{fontSize: '8px', color: 'rgb(221, 172, 12)'}}></i>
                                <span style={{fontSize: '8px', color: "rgb(189, 185, 185)"}}>Toggle button On/Off to indicate "job started"/"job completed"</span>
                            </>
                        }    
                </div>
                <div className="right-div">
                    <div style={{display: 'flex'}}>
                        <div className="col" style={{marginRight: "3rem"}}>
                            <label className="label">Car Make & Model</label>
                            <span>Mercedes Benz -E Couper</span>
                        </div>
                        {   jobType === 'Incoming Jobs' ?
                                null
                            :
                                <div className="col">
                                    <label className="label">Type of Service</label>
                                    <span>Windscreen Repair</span>
                                </div>
                        }
                    </div>
                    <div className="row">
                        <label className="label">Additional Note</label><br />
                    </div>
                    <div style={{display: "flex", marginTop: "6px", backgroundColor: "rgb(243, 243, 243)", fontWeight: "400", padding: "12px", fontSize: "10px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic fugit sunt repudiandae reprehenderit quis deleniti esse, earum ab quidem amet optio. Dolorum similique accusamus praesentium quis libero minus neque!
                    </div>
                    <div className="row" style={{justifyContent: "space-between", alignItems: "center"}}>
                        <label className="label">Cost of Vehicle Parts</label>  
                        <button className="part-button"><i className='bx bx-plus' style={{fontSize: "18px"}}/> Add New Part</button>
                    </div>
                    <table className="modal-table" style={{width: "100%", marginTop: "5px", marginBottom: '1.6rem', tableLayout: "fixed"}}>
                        <tr style={{fontWeight: "700", textAlign: "left", fontSize: "12px"}}>
                            <th>Part</th>
                            <th>Qty/Hrs</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td>Knet Brake Pad</td>
                            <td>2</td>
                            <td>500</td>
                            <td>1000.00</td>
                        </tr>
                        <tr>
                            <td>Wind shield</td>
                            <td>1</td>
                            <td>50</td>
                            <td>50.00</td>
                        </tr>
                    </table>
                    <label className="label">Cost of Service</label>
                    <table className="modal-table" style={{width: "100%", marginBottom: "1.6rem", tableLayout: "fixed"}}>
                        <tr>
                            <td>Labour</td>
                            <td>1</td>
                            <td>50</td>
                            <td>50.00</td>
                        </tr>
                    </table>
                    <label className="label">Estimated Total</label>
                    <div style={{display: "flex", paddingTop: "3px", justifyContent: "space-between", alignItems: "center"}}>
                        <div style={{fontWeight: "700", padding: "10px", backgroundColor: "rgba(150, 188, 236, 0.486)", paddingLeft: "14px", paddingRight: "14px"}}>
                            R4,785.00
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <button style={{padding: "10px", width: "8.5rem", marginRight: "8px", backgroundColor: "white", border: "1px solid black"}} onClick={modal.close}>{jobType === 'Incoming Jobs' ? 'Decline' : 'Edit Ticket'}</button>
                            <button style={{padding: "10px", width: "8.5rem", color: "white", backgroundColor: "black", outline: "none", border: "1px solid black"}} onClick={modal.close}> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyModal