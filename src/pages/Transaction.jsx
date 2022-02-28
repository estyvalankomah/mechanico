import React, { useState, useEffect } from 'react'
import moment from 'moment';
import DatePicker from "react-datepicker";

function Transaction({onClose}) {

    const date = moment(new Date()).format("DD/MM/YYYY");
    const exportData = {
        startDate: date,
        endDate: date,
        type: null,
        recipientList: []
    }
    const [exportBody, setExportBody] = useState(exportData)
    const [rawStartDate, setRawStartDate] = useState(date)
    const [rawEndDate, setRawEndDate] = useState(date)
    const [exportType, setExportType] = useState("individual") 

    const exportTransactions = () =>{
        setExportBody({...exportBody, startDate: moment(rawStartDate).format("DD/MM/YYYY")})
        setExportBody({...exportBody, endDate: moment(rawEndDate).format("DD/MM/YYYY")})
        // setExportBody({...exportBody, recipientList: recipients})
        // response = await TransactionService.exportTransactions(exportData, exportType)
        onClose()
    }

    return (
        <div class="card">
            <div class="card-header ">
                <h4 class="card-title">Export Transactions</h4>
            </div>
            <div className="card-body">
                <form>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">                        
                                <label class="col-form-label">Start Date</label>
                                <DatePicker
                                    selected={rawStartDate}
                                    onChange={(date) => setRawStartDate(date)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">                        
                                <label class="col-form-label">End Date</label>
                                <DatePicker
                                    selected={rawEndDate}
                                    onChange={(date) => setRawEndDate(date)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label class="form-label">Transaction Type</label>
                        <div class="form-group">
                            <select
                                value={exportBody.type}
                                onChange={e => setExportBody({...exportBody, type: e.target.value})}
                                type="text"
                                class="form-control"
                                required
                                className="form-control"
                                data-size="7"
                                data-style="btn btn-primary btn-round"
                                title="Single Select">
                                <option value="CONTRIBUTION" selected>CONTRIBUTION</option>
                                <option value="WITHDRAWAL">WITHDRAWAL</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label class="form-label">Export Type</label>
                        <div class="form-group">
                            <select
                                value={exportType}
                                onChange={e => setExportType(e.target.value)}
                                type="text"
                                class="form-control"
                                required
                                className="form-control"
                                data-size="7"
                                data-style="btn btn-primary btn-round"
                                title="Single Select">
                                <option value="individual" selected>Individual</option>
                                <option value="group">Group</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer ">
                <div class="row">
                    <div class="col-md-9">
                        <button type="submit" onClick={e => exportTransactions()} class="btn btn-fill btn-primary" >
                        {/* {   
                            loading ?
                                <Loader
                                    type="ThreeDots"
                                    color="#fff"
                                    height={12}
                                    width={12}
                                /> : */}
                                Filter
                        
                        </button>
                        <button class="ml-3 btn btn-primary btn-simple" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Transaction
