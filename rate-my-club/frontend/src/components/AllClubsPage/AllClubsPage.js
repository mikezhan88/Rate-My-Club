
import NavBar from '../NavBar/NavBar'
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom'



export default function AllClubsPage() {
  return (
          <React.Fragment>
           <NavBar/>
           
           <div className='clubs-page'>
             <div className='clubs-largetext'>Explore Clubs</div>
             <div className='clubs-filter'>
              <SelectCommitment/>
              <SelectSize/>
              {/* <SelectCategory/> */}
              <div className='select'>
              <select name="slct" id="slct">
     
              <option>Category</option>
              <option value="1">Fraternity</option>
              <option value="2">Cabbage</option>
              <option value="3">Art</option>
              <option value="4">Cultural</option>
              <option value="5">Consulting</option>
      
              </select>
              </div>
             </div>
             <div className='allclubs-page-backdrop'>
                <input type='text' className='club-register-input' placeholder='Full Name *' ></input>
                <input type='text' className='club-register-input' placeholder='Nickname *' ></input>
                <input type='text' className='club-register-input' placeholder='Email *' ></input>
                <input type='text' className='club-register-input' placeholder='Password *' ></input>
                <button type='button' className='register-button'>Register</button>
              </div>
           </div>     
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

function SelectCommitment() {
  return (
    // <li className='register-select-menu'>
    <Form.Select>
      <option>Commitment Level</option>
      <option value="1">Less than 1 hour</option>
      <option value="2">1-3 hours</option>
      <option value="3">3-5 hours</option>
      <option value="4">5-7 hours</option>
      <option value="5">7+ hours</option>
    </Form.Select>
    // </li>
  );
}

function SelectSize() {
  return (
    // <li className='register-select-menu'>
    <Form.Select>
      <option>Club Size</option>
      <option value="1">Less than 10 people</option>
      <option value="2">10 - 20 people</option>
      <option value="3">20 - 50 people</option>
      <option value="4">50 - 100 people</option>
      <option value="5">100+ people</option>
    </Form.Select>
    // </li>
  );
}

function SelectCategory() {
  return (
    // <li className='register-select-menu'>
    <Form.Select>
      <option>Category</option>
      <option value="1">Fraternity</option>
      <option value="2">Cabbage</option>
      <option value="3">Art</option>
      <option value="4">Cultural</option>
      <option value="5">Consulting</option>
    </Form.Select>
    // </li>
  );
}








