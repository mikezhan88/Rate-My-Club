import NavBar from '../NavBar/NavBar'
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import Dropdown from './DropdownAllClubs';
import { categoriesOptions, sizeOptions, commitmentOptions, sortOptions } from '../RegisterPage/DropdownObjects';
import ClubList from './ClubList';

export default function AllClubsPage() {
  return (
          <React.Fragment>
           <NavBar/>
           <div className='clubs-page'>
             <div className='clubs-largetext'>Explore Clubs</div>
             <div style={{ borderTop: "1px solid black ", width: "250px"}}></div>
             </div> 
             <div className='filter-backdrop'>
              <div className='clubs-fiter-sort'>
                  <div className='clubs-filter'>
                      <div className='clubs-text'>Filter Clubs</div>
                      <Dropdown null placeholder='Club Size' options={ sizeOptions }></Dropdown>
                      <Dropdown null placeholder='Commitment Level' options={ commitmentOptions }></Dropdown>
                      <Dropdown isMulti placeholder='Categories' options={ categoriesOptions }></Dropdown>
                  </div>
                  <div className='clubs-sort'>
                      <div className='clubs-text'>Sort By</div>
                      <Dropdown null placeholder='Sort By' options={ sortOptions }></Dropdown>
                  </div>
              </div>
                <div className='clubs-search-div'>
                  <input type='text' className='clubs-search-bar'placeholder='Search Club Name...' ></input>
                  <img src={require("../images/search-icon.png")} className='clubs-search-icon' alt="search"/>
                  <ClubList />
                </div>
              </div>   
         </React.Fragment>
  )
}


