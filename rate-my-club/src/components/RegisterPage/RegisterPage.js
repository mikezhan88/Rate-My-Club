import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';

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
                <div className='register-select-box'>
                    <SelectBasicExample/>
                </div>
     

            </div>
            
            </span>
                
            
         </React.Fragment>
  )
}

function SelectBasicExample() {
    return (
        <li className='register-select-menu'>
      <Form.Select>
        <option>Select Commitment Level</option>
        <option value="1">Less than 1 hour</option>
        <option value="2">1-3 hours</option>
        <option value="3">3-5 hours</option>
        <option value="4">5-7 hours</option>
        <option value="5">7+ hours</option>
      </Form.Select>
      </li>
    );
  }

// function textBoxes(props){
//     return(
//         <li className= 'register-page-text'>
//             <input type='text' className='register-page-text'placeholder={props.text} ></input>
//         </li>
//     );
//   }



