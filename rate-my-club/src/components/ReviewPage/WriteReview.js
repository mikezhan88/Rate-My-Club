import NavBar from '../NavBar/NavBar'
import { club } from '../ClubPage/ClubInfoArray'
import { AverageRating, AverageRatingStars } from '../ClubPage/ClubRating';
import { BsStarFill, BsStar} from "react-icons/bs";
import React, {useState} from 'react';
import { genUUID } from '../../App';


export default function WriteReviewPage(props) {
    
    function postReview() {
        var text = document.getElementById('userreview').value
        var rating = 3;
        console.log(text)
    
        fetch('http://localhost:8000/review/', {
            method: 'POST',
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({
                "_id": genUUID(),
                "author": "Anonymous",
                "club_id" : "066de609-b04a-4b30-b46c-32537c7f1ie9",
                "text": text,
                "rating": rating
            })
        })
    } 
    return (
          <React.Fragment>
           <NavBar/>
           <div className='review-page'>
                <div className='review-page-backdrop'>
                <div>
                        <div className='club-name'>{club.name}</div>
                        
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
                    <textarea id="userreview" className='register-description-box'></textarea>
                    <div className='stars'>
                        <div onClick={ postReview }>
                    
                            <button className='submit-button'>Submit</button>
                        
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





