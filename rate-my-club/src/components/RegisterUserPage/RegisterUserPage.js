
import React from 'react'
import NavBar from '../NavBar/NavBar'
import Form from 'react-bootstrap/Form';

export default function RegisterPage() {
    return (
          <React.Fragment>
<<<<<<< HEAD
           <NavBar/>
=======

           <NavBar/>

>>>>>>> 8208138dac788e1264478226b8995723bfef42ce
           <div className='register-page'>
                <img src={require("../images/logo.png")} className='register-logo' alt="logo" />
                <div className='register-largetext'>Welcome to Rate My Club!</div>
                <div className='register-user-page-backdrop'>
                    <input type='text' className='club-register-input' placeholder='Full Name *' ></input>
<<<<<<< HEAD
                    <input type='text' className='club-register-input' placeholder='Nickname *' ></input>
                    <input type='text' className='club-register-input' placeholder='Email *' ></input>
                    <input type='text' className='club-register-input' placeholder='Password *' ></input>
                    <button type='button' className='register-button'>Register</button>
                </div>
           </div>      
=======
   

                    <input type='text' className='club-register-input' placeholder='Nick Name' ></input>
                    <input type='text' className='club-register-input' placeholder='Email Address *' ></input>
                    <input type='text' className='club-register-input' placeholder='Password *' ></input>
                    <button type='button' className='register-button'>Register</button>
                </div>
           </div>   

>>>>>>> 8208138dac788e1264478226b8995723bfef42ce
         </React.Fragment>
  )
}






