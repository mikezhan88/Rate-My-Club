import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'

export default function RegisterUserPage() {
    return (
          <React.Fragment>
           <NavBar></NavBar>
           <div className='register-page'>
                <img src={require("../images/logo.png")} className='register-logo' alt="logo" />
                <div className='register-largetext'>Welcome to Rate My Club!</div>
                <div className='register-user-page-backdrop'>
                    <input type='text' className='club-register-input' placeholder='Full Name *' ></input>
                    <input type='text' className='club-register-input' placeholder='Nick Name' ></input>
                    <input type='text' className='club-register-input' placeholder='Email Address *' ></input>
                    <input type='text' className='club-register-input' placeholder='Password *' ></input>
                    <button type='button' className='register-button'>Register</button>
                </div>
           </div>   
         </React.Fragment>
  )
}
