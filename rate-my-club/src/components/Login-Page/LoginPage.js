import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'

export default function LoginPage() {
  return (
    <React.Fragment>
        <NavBar/>
        <div className='login-page'>
        <img src={require("../images/logo.png")} className='login-logo' alt="logo" />

            <div className='login-container'>
                <span className='login-bigtext'>LOGIN</span>
                <input type='text' className='login-input' placeholder='Email Address' ></input>
                <input type='text' className='login-input' placeholder='Password' ></input>
                <button className='login-button' type='button'>LOGIN</button>
                <div className='line-text'>
                    <hr className='line'></hr>
                    <div className='or-text'>OR</div>
                    <hr className='line'></hr>
                </div>
                <button className='google-signin' type='button'>
                    <img src={require("../images/google-logo.png")} className='google-logo' alt="search"/>
                    Continue with Google
                </button>
                <span className='register-redirect'>Are you a new club? <span/>
                    <Link to='/register' style={{ textDecoration: 'none' }}>
                        <span className='register-here'>Register here</span>
                    </Link>
                </span>
            </div>
        </div>
    </React.Fragment>
  )
}

