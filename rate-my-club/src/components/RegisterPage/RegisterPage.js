import React from 'react'
import NavBar from '../NavBar/NavBar'
import Dropdown from './Dropdown';
import { categoriesOptions, sizeOptions, commitmentOptions } from './DropdownObjects';

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

                    <Dropdown isMulti placeholder='Select Categories *' options={ categoriesOptions }></Dropdown>
                    <Dropdown null placeholder='Club Size *' options={ sizeOptions }></Dropdown>
                    <Dropdown null placeholder='Commitment Level *' options={ commitmentOptions }></Dropdown>

                    <div className='club-description-text'>Club Description *</div>
                    <textarea className='register-description-box'></textarea>
                    <button type='button' className='register-button'>Register Club</button>
                </div>
           </div>      
         </React.Fragment>
  )
}





