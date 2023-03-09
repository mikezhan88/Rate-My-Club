import NavBar from '../NavBar/NavBar'
import { club } from '../ClubPage/ClubInfoArray'
import { AverageRating, AverageRatingStars } from '../ClubPage/ClubRating';
import { BsStarFill, BsStar} from "react-icons/bs";
import React, {useState} from 'react';




export default function WriteReviewPage(props) {
    return (
          <React.Fragment>
           <NavBar/>
           <div className='review-page'>
                <div className='review-page-backdrop'>
                <div>
                        <div className='club-name'>{club.clubName}</div>
                        <div className='club-tagline'>{club.tagLine}</div>
                        
                    </div>
                    <div style={{ borderBottom: "1px solid black ", width: "90%"}}></div>
                    <p>Overall Rating</p>
                    <div className='review-stars'>
                        <HeaderIcon inactiveIcon={< BsStar size={40}/>} activeIcon={<BsStarFill size={40}/>}></HeaderIcon>
                        <HeaderIcon inactiveIcon={< BsStar size={40}/>} activeIcon={<BsStarFill size={40}/>}></HeaderIcon>
                        <HeaderIcon inactiveIcon={< BsStar size={40}/>} activeIcon={<BsStarFill size={40}/>}></HeaderIcon>
                        <HeaderIcon inactiveIcon={< BsStar size={40}/>} activeIcon={<BsStarFill size={40}/>}></HeaderIcon>
                        <HeaderIcon inactiveIcon={< BsStar size={40}/>} activeIcon={<BsStarFill size={40}/>}></HeaderIcon>
                    </div>

                    <p>Review</p>
                    <textarea className='register-description-box'></textarea>
                    <div className='stars'>
                        <button type='button' className='register-button'>Submit</button>
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





