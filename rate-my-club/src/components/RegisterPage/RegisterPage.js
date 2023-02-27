import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'

export default function RegisterPage() {
    return (
          <React.Fragment>
           <NavBar></NavBar>
           <img src={require("../images/logo.png")} className='register-logo' alt="logo" />
           <div className='register-largetext'><p>Welcome to Rate My Club!</p></div>
           <div className='register-smalltext'><p>Please Fill Out The Following Information To Join Our Deck!</p></div>
           
           
           <span>
           <div className='register-page-backdrop'>
                <input type='text' className='register-clubname-box' placeholder='Club Name *' ></input>
                <input type='text' className='register-abbreviation-box'placeholder='Club Abbreviation *' ></input>
                <input type='text' className='register-email-box'placeholder='Club Email *' ></input>
                <input type='text' className='register-website-box'placeholder='Club Website' ></input>
                <div className='register-text'>
                    <p>Club Description *</p>
                </div>
                <input type='textarea' className='register-description-box'placeholder='' ></input>
     
            </div>
            
            </span>
                
            
         </React.Fragment>
  )
}

// function textBoxes(props){
//     return(
//         <li className= 'register-page-text'>
//             <input type='text' className='register-page-text'placeholder={props.text} ></input>
//         </li>
//     );
//   }



