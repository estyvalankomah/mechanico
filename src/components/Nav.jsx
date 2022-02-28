import React from 'react';
import { useHistory, useLocation } from 'react-router'

function Nav() {
    const location = useLocation().pathname
    let history = useHistory()
    
  return (
    <div className="nav">
        <ul>
            {
                location === '/dashboard/workshop' ? 
                <li onClick={e => history.push('/dashboard/workshop')} style={{borderBottom: '2px solid black', color: 'black', fontWeight: '600'}}>
                    <div style={{display: 'flex', alignItems: 'center', }}>
                        <i className='bx bxs-car-mechanic' style={{fontSize: "15px"}}/>Workshop
                    </div>
                </li>
                :
                <li onClick={e => history.push('/dashboard/workshop')} >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <i className='bx bxs-car-mechanic' style={{fontSize: "15px"}}/>Workshop
                    </div>
                </li>
            }
            {
                location === '/dashboard/performance' ?
                <li onClick={e => history.push('/dashboard/performance')} style={{borderBottom: '2px solid black', color: 'black', fontWeight: '600'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <i className='bx bx-bar-chart' style={{fontSize: "15px"}}/>Performance
                    </div>
                </li>
                :
                <li onClick={e => history.push('/dashboard/performance')} >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <i className='bx bx-bar-chart' style={{fontSize: "15px"}}/>Performance
                    </div>
                </li>
            }
            {
                location === '/dashboard/settings' ? 
                <li onClick={e => history.push('/dashboard/settings')} style={{borderBottom: '2px solid black', color: 'black', fontWeight: '600'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <i className='bx bx-cog' style={{fontSize: "15px"}}/>Settings
                    </div>
                </li>
                :
                <li onClick={e => history.push('/dashboard/settings')} >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <i className='bx bx-cog' style={{fontSize: "15px"}}/>Settings
                    </div>
                </li>
            }
        </ul>
    </div>
  );
}

export default Nav;
