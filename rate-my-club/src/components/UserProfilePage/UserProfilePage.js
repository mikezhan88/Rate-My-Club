import NavBar from '../NavBar/NavBar'
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Link} from 'react-router-dom'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import { BsStarFill,BsStarHalf} from "react-icons/bs";
import { BsBookmarkStar, BsFillBookmarkStarFill} from "react-icons/bs";



export default function UserPage() {

    return ( 
        <React.Fragment>
            <NavBar/>
            <div className='user-page'>
                <div className='club-largetext'>
                    Welcome, Chilly Tiger
                </div>
                <div style={{ borderTop: "1px solid black ", width: "320px"}}></div>
            
                <div className='user-backdrop'>
                    <div className='clubs-largetext'>My Bookmarks</div>
                    <div style={{ borderBottom: "1px solid black ", width: "200px"}}></div>
                    <div className='user-review-display'>
                        <div className='bookmark-club-display'>
                    <div className='bookmark'> <HeaderIcon inactiveIcon={< BsFillBookmarkStarFill size={43}/>} activeIcon={<BsBookmarkStar size={43}/>}></HeaderIcon></div>
                    <a href = "/clubpage" target="_blank">
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
                    </div>
                    <div className='bookmark-club-display'>
                    <div className='bookmark'> <HeaderIcon inactiveIcon={< BsFillBookmarkStarFill size={43}/>} activeIcon={<BsBookmarkStar size={43}/>}></HeaderIcon></div>
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
                    </div>
                        <div className='bookmark-club-display'>
                        <div className='bookmark'> <HeaderIcon inactiveIcon={< BsFillBookmarkStarFill size={43}/>} activeIcon={<BsBookmarkStar size={43}/>}></HeaderIcon></div>
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




                    <div className='clubs-largetext'>My Reviews</div>
                    <div style={{ borderBottom: "1px solid black ", width: "200px"}}></div>
                    <div className='user-review-display'>
                    <div className='club-review'>
                                <div className='stars'>
                                    <div style = {{color: "#577B5F"}}>
                                        <BsStarFill size={22}></BsStarFill>
                                    </div>
                                </div>
                                <div className='club-smalltext'>
                                    <a style={{fontWeight: 'bold'}}>Cabbage Patch Club</a>
                                    <a style={{fontStyle: 'italic'}}>December 19, 2022</a>
                                </div>
                                <p>Terrible club!</p>
                                <div className='edit-buttons'>
                                    <button className='edit-review-button'>Edit Review</button>
                                    <button className='delete-review-button'>Delete Review</button>
                                </div>
                            </div>
                            <div className='club-review'>
                                <div className='stars'>
                                    <div style = {{color: "#577B5F"}}>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                    </div>
                                </div>
                                <div className='club-smalltext'>
                                    <a style={{fontWeight: 'bold'}}>Delta Sigma Pi</a>
                                    <a style={{fontStyle: 'italic'}}>April 12, 2022</a>
                                </div>
                                <p>Great club with awesome people. Super welcoming!</p>
                                <div className='edit-buttons'>
                                    <button className='edit-review-button'>Edit Review</button>
                                    <button className='delete-review-button'>Delete Review</button>
                                </div>
                            </div>
                            <div className='club-review'>
                                <div className='stars'>
                                    <div style = {{color: "#577B5F"}}>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                    </div>
                                </div>
                                <div className='club-smalltext'>
                                    <a style={{fontWeight: 'bold'}}>DevX</a>
                                    <a style={{fontStyle: 'italic'}}>October 15, 2022</a>
                                </div>
                                <p>Got to work on an awesome project with other developers.</p>
                                <div className='edit-buttons'>
                                    <button className='edit-review-button'>Edit Review</button>
                                    <button className='delete-review-button'>Delete Review</button>
                                </div>
                            </div>
                            <div className='club-review'>
                                <div className='stars'>
                                    <div style = {{color: "#577B5F"}}>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                    </div>
                                </div>
                                <div className='club-smalltext'>
                                    <a style={{fontWeight: 'bold'}}>AIChE</a>
                                    <a style={{fontStyle: 'italic'}}>March 1, 2022</a>
                                </div>
                                <p>Super Helpful!</p>
                                <div className='edit-buttons'>
                                    <button className='edit-review-button'>Edit Review</button>
                                    <button className='delete-review-button'>Delete Review</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    
    
    
        )
    }


    function HeaderIcon({ inactiveIcon, activeIcon }) {
        const [isActive, setIsActive] = useState(false);
        
        return (
            <div onClick={() => setIsActive(!isActive)}>
            {isActive ? activeIcon : inactiveIcon}
            </div>
        );
     }

