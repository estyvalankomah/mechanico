import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.png'

export default function Login() {
  return (
    <div className="login">
        <div className="login-form-container">
          <img src={logo} alt="logo" height="100" width="180"/>
          <h1 className="heading-1">Jump right back in</h1>
          <h2 className="heading-2">Sign in to continue</h2>
          <form action="" className="login-form">
            <div className="form-group">
              <label className='form-label'>Email address</label>
              <input type="email" placeholder="kog=figyamfi@gmail.com" className="form-control" />
            </div>
            <div className="form-group" style={{marginBottom: '10px'}}>
              <label className='form-label'>Password</label>
              <input type="password" className="form-control" />
            </div>
            <small className="small-text blue-text">Forgot password?</small>
            <div className="form-footer">
              <small className="small-text">New user? <span className="blue-text">Create account</span></small>
              <Link to="/dashboard/workshop">
                <button className="login-button">Sign In</button>
              </Link>
            </div>
          </form>
        </div>
    </div>
  );
}
