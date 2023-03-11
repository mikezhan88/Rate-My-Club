import NavBar from '../NavBar/NavBar'
import React, {useState} from 'react';
import { BsBookmarkStar, BsFillBookmarkStarFill} from "react-icons/bs";
import { club, reviews } from './ClubInfoArray'
import { AverageRating, AverageRatingStars } from './ClubRating';
import ClubReviews from './ClubReviews';
import ClubUpdates from './ClubUpdates';
import {Link} from 'react-router-dom';

export var clubID

export default function ClubPage() {
    var currpath = window.location.pathname
    clubID = currpath.slice(10)
    console.log(clubID)
    
    return ( 
        <React.Fragment>
            <NavBar/>
            <div className='club-profile-page'>
                <div className='club-heading'>
                    <div className='bookmark'> 
                        <HeaderIcon inactiveIcon={< BsBookmarkStar size={50}/>} activeIcon={<BsFillBookmarkStarFill size={50}/>}></HeaderIcon>
                    </div>
                    <div>
                        <div className='club-name'>{club.name}</div>
                        <div className='club-tagline'>{club.email}</div>
                        <a href={"http://" +club.clubWebsite} ><div className='club-website'>{club.clubWebsite}</div></a>
                    </div>
                    <div className='club-tags'>
                        {
                            club.tags.map((tag) => {
                                return (
                                    <div className='clubs-tag-item'>{tag}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='overall-club-profile'>
                    <div className='club-profile-backdrop'>
                        <div className='club-subheading'>Description</div>
                        <div style={{ borderBottom: "1px solid black ", width: "130px"}}></div>
                        <div className='club-description'>{club.description}</div>
                        <div className='club-subheading'>Reviews</div>
                        <div style={{ borderBottom: "1px solid black ", width: "90px"}}></div>
                        <div className='review-display'>
                            <div className='review-summary'>
                                <div>Overall Rating</div>
                                <AverageRating club={club}/>
                                <AverageRatingStars club={club}/>
                                <Link to='/newreview'>
                                    <button className='club-profile-button'>Write a Review</button>
                                </Link>
                            </div>
                            <div className='reviews'> 
                                <ClubReviews club={club}/>
                            </div>
                        </div>
                    </div>
                    <div className='club-updates'>
                        <div className='clubs-text'>Recent Updates</div>
                            <div className='update-backdrop'>
                                <ClubUpdates club={club}/> 
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



           
      