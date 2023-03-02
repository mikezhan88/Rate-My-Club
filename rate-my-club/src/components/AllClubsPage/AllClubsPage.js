

import NavBar from '../NavBar/NavBar'
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Link} from 'react-router-dom'
import Dropdown from './DropdownAllClubs';
import { categoriesOptions, sizeOptions, commitmentOptions, sortOptions } from '../RegisterPage/DropdownObjects';



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
                  <div className='allclubs-page-backdrop'>
                    <a href = "http://ucladsp.com" target="_blank">
                       <div className='clubs-display'>
                          <img src={require("../images/dsp.jpg")}className = 'clubs-img'/>
                          <div style={{ borderTop: "1px solid #577B5F ", width: "200px"}}></div>
                          <a style = {{color:'black'}}>Delta Sigma Pi</a>
                          <div className='clubs-card-tags'>
                            <div className='clubs-tag-item'>Fraternity</div>
                            <div className='clubs-tag-item'>Business</div>
                          </div>
                      </div>
                    </a>
                    <a href = "http://aiche.seas.ucla.edu/" target="_blank">
                      <div className='clubs-display'>
                        <img src={require("../images/aiche.png")} className = 'clubs-img'/>
                        <div style={{ borderTop: "1px solid #577B5F ", width: "200px"}}></div>
                        <a style = {{color:'black'}}>AIChE</a>
                        <div className='clubs-card-tags'>
                          <div className='clubs-tag-item'>Engineering</div>
                        </div>
                      </div>
                    </a>
                    <a href = "https://theperspectivesproject.com/" target="_blank">
                      <div className='clubs-display'>
                        <img src={require("../images/pp.png")}className = 'clubs-img'/>
                        <div style={{ borderTop: "1px solid #577B5F ", width: "200px"}}></div>
                        <a style = {{color:'black'}}>Perspectives Project</a>
                        <div className='clubs-card-tags'>
                          <div className='clubs-tag-item'>Cultural</div>
                          <div className='clubs-tag-item'>Social</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
               
         </React.Fragment>
  )
}

