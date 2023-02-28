import React from 'react'
import NavBar from '../NavBar/NavBar'
import Form from 'react-bootstrap/Form';

export default function RegisterPage() {
    return (
          <React.Fragment>
           <NavBar/>
           <div className='register-page'>
                <img src={require("../images/logo.png")} className='register-logo' alt="logo" />
                <div className='register-largetext'>Welcome to Rate My Club!</div>
                <div className='register-smalltext'>Please fill out the following information to join our deck.</div>
                <div className='register-page-backdrop'>
                    <input type='text' className='club-register-input' placeholder='Club Name *' ></input>
                    <input type='text' className='club-register-input' placeholder='Club Tag Line *' ></input>
                    <input type='text' className='club-register-input' placeholder='Club Email Address *' ></input>
                    <input type='text' className='club-register-input' placeholder='Password *' ></input>
                    <input type='text' className='club-register-input' placeholder='Club Website' ></input>
                    <span>Select Categories</span>
                    <span>Club Size</span>
                    <span>Commitment Level</span>
                    <div className='club-description-text'>Club Description *</div>
                    <textarea className='register-description-box'></textarea>
                    <button type='button' className='register-button'>Register</button>
                </div>
           </div>      
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



