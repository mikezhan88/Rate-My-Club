import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
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
     
            </div>
            
            </span>
                
            
         </React.Fragment>
  )
}

function DropdownItem(props){
    return(
        <li className= 'navbar-dropdownItem'>
            <a>{props.text}</a>
        </li>
    );
  }

  function SelectBasicExample() {
    return (
        <div className= 'register-select-menu'>
            <Form.Select size = "lg" >
                <option> Select Commitment Level</option>
                <option value="1"> less than 1 hour a week</option>
                <option value="2"> 1-3 hours a week </option>
                <option value="3">3-5 hours a week</option>
                <option value="3">5-7 hours a week</option>
                <option value="3">7+ hours a week</option>
            </Form.Select>
        </div>
    );
  }



