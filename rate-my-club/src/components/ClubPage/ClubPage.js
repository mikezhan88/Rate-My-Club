import NavBar from '../NavBar/NavBar'
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Link} from 'react-router-dom'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import { BsStarFill,BsStarHalf} from "react-icons/bs";
import { BsBookmarkStar, BsFillBookmarkStarFill} from "react-icons/bs";



export default function ClubPage() {

    return ( 
        <React.Fragment>
            <NavBar/>
            <div className='club-profile-page'>
                <div className='club-largetext'>
                    <div className='bookmark'> <HeaderIcon inactiveIcon={< BsBookmarkStar size={37}/>} activeIcon={<BsFillBookmarkStarFill size={37}/>}></HeaderIcon></div>
                    Delta Sigma Pi
                </div>
                <div className='club-smalltext'>
                    <a>Premier Co-ed Professional Business Fraternity </a>
                    <a href = "http://ucladsp.com" target="_blank">  ucladsp.com</a>
                    <div className='profile-tags'>
                        <div className='clubs-tag-item'>Fraternity</div>
                        <div className='clubs-tag-item'>Business</div>
                        <div className='clubs-tag-item'>Finance</div>
                        <div className='clubs-tag-item'>Professional</div>
                    </div>
                </div>
                <InstagramFeed token="IGQVJYVUk4bnBtZAU5aUHd6RWhoQUxfRWZAQVGFFS1B2MGY0dTN6TlFfS1lMdmN0cUczU3pqT0hidUp1M3FZAdzJaNTZAZATkZAJYzV2Q2stVFZAGdVRPWDBzSFJzRGZAkeGs1X0xDUmkxNUZAmdlJEWFJDQ2g0QgZDZD"  counter="6"/>  
                <div className='club-profile-backdrop'>
                    <div className='clubs-largetext'>Description</div>
                    <div style={{ borderBottom: "1px solid black ", width: "200px"}}></div>
                    <a>We believe that no one should forge through their career journey alone  — which is why we’ve built a strong culture of mentorship to help members unlock their career potential. Thanks to the guidance and professional network we provide, our members have continually found success in achieving their career goals. From investment banking to entertainment, we have years of collective experience working at top companies under our belt.</a>
                    <img src={require("../images/dsp1.png")}/>
                    <div className='clubs-largetext'>Reviews</div>
                    <div style={{ borderBottom: "1px solid black ", width: "200px"}}></div>
                    <div className='review-display'>
                            <div className='total-review'>
                                <a>Overall Rating</a>
                                <h1>4.8</h1>
                                <div className='stars'>
                                    <div style = {{color: "#577B5F"}}>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarFill size={22}></BsStarFill>
                                        <BsStarHalf size={22}></BsStarHalf>
                                    </div>
                                </div>
                                <button className='club-profile-button'>Write a Review</button>
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
                                    <a style={{fontWeight: 'bold'}}>Anonymous User</a>
                                    <a style={{fontStyle: 'italic'}}>April 12, 2022</a>
                                </div>
                                <p>Great club with awesome people. Super welcoming!</p>
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
                                    <a style={{fontWeight: 'bold'}}>Anonymous User</a>
                                    <a style={{fontStyle: 'italic'}}>October 15, 2022</a>
                                </div>
                                <p>Must join club!</p>
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
           
      