import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'

export default function RegisterUserPage() {
    return (
          <React.Fragment>
           <NavBar></NavBar>
           <img src={require("../images/logo.png")} className='register-logo' alt="logo" />
           <div className='register-largetext'><p>Welcome to Rate My Club!</p></div>
           <div className='register-smalltext'><p>Please Fill Out The Following Information To Create Your Profile!</p></div>
           
           
           <span>
           <div className='register-user-backdrop'>
                <input type='text' className='register-clubname-box' placeholder='Full Name *' ></input>
                <input type='text' className='register-abbreviation-box'placeholder='Nickname' ></input>
                <input type='text' className='register-email-box'placeholder='Email *' ></input>
                <input type='text' className='register-website-box'placeholder='Password *' ></input>
                
     
            </div>
            
            </span>
                
            
         </React.Fragment>
  )
}
