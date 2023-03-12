import NavBar from '../NavBar/NavBar'
import React, {useState, useEffect} from 'react';
import { BsBookmarkStar, BsFillBookmarkStarFill} from "react-icons/bs";
import { AverageRating, AverageRatingStars } from './ClubRating';
import ClubReviews from './ClubReviews';
import ClubUpdates from './ClubUpdates';
import {Link} from 'react-router-dom';

var clubID = ""
export var clubExport;
export var reviewCount = 0;

export default function ClubPage() {
    var currpath = window.location.pathname
    clubID = currpath.slice(10)
    console.log(clubID)

    const dummyReviews = [
        {
            rating: 0,
        }
    ]

    const [club, setClub] = useState({tags: Array(), updates: Array()});
    const [reviews, setReviews] = useState(dummyReviews);

    useEffect(() => {
        const getClub = async() => {
            const clubURL = "http://localhost:8000/clubs/" + clubID;
            console.log(clubURL)
            const response = await fetch(clubURL, {
                method: 'GET',
            });
            const myJson = await response.json();
            console.log(myJson)
            setClub(myJson);
        }
        if (clubID != "") { 
            getClub();
        };
        clubExport = club;
    
        const getReviews = async() => {
            const response = await fetch("http://localhost:8000/clubs/" + clubID + "/reviews", {
                method: 'GET',
            });
        
            const myJson = await response.json(); //extract JSON from the http response
        
            console.log(myJson)
            var reviews = myJson;
            for(var i in reviews) {
                i = JSON.parse(i);
            }
            
            setReviews(Object.values(reviews))
            reviewCount = await Object.values(reviews).length
        }
        if (clubID != ""){
            getReviews();
        };
        

    }, [clubID]);
   

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
                                <AverageRating reviews={reviews}/>
                                <AverageRatingStars reviews={reviews}/>
                                <Link to={'/newreview/'+clubID}>
                                    <button className='club-profile-button'>Write a Review</button>
                                </Link>
                            </div>
                            <div className='reviews'> 
                                <ClubReviews reviews={reviews}/>
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



           
      