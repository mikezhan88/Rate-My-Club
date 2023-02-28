
import NavBar from '../NavBar/NavBar'
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom'
import Dropdown from './DropdownAllClubs';
import { categoriesOptions, sizeOptions, commitmentOptions } from '../RegisterPage/DropdownObjects';



export default function AllClubsPage() {
  return (
          <React.Fragment>
           <NavBar/>
           
           <div className='clubs-page'>
             <div className='clubs-largetext'>Explore Clubs</div>
             <div style={{ borderTop: "1px solid black ", width: "250px"}}></div>
             </div> 
             <div className='filter-backdrop'>
                <div className='clubs-filter'>
                  <div className='clubs-text'>Filter Clubs</div>
                   
                    <Dropdown null placeholder='Club Size' options={ sizeOptions }></Dropdown>
                    <Dropdown null placeholder='Commitment Level' options={ commitmentOptions }></Dropdown>
                    <Dropdown isMulti placeholder='Categories' options={ categoriesOptions }></Dropdown>
                </div>
                <div className='clubs-search-div'>
                  <input type='text' className='clubs-search-bar'placeholder='Search Club Name...' ></input>
                  <img src={require("../images/search-icon.png")} className='clubs-search-icon' alt="search"/>
                  <div className='allclubs-page-backdrop'>
                    
                  </div>
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








