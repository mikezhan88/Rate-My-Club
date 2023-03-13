import NavBar from '../NavBar/NavBar'
import { clubExport } from '../ClubPage/ClubPage'
import { AverageRating, AverageRatingStars } from '../ClubPage/ClubRating';
import { BsStarFill, BsStar} from "react-icons/bs";
import React, {useState} from 'react';
import { genUUID } from '../../App';
import { clubID } from '../ClubPage/ClubPage';
import { useNavigate } from "react-router-dom";

var activeStars = 0;


export default function WriteReviewPage(props) {
    
    let navigate = useNavigate();

    function postReview() {
        var text = document.getElementById('userreview').value
        var rating = activeStars;
        console.log(activeStars)
        
        var currpath = window.location.pathname
        var cid = currpath.slice(11)
        console.log(cid)

        fetch('http://localhost:8000/review/', {
            method: 'POST',
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({
                "_id": genUUID(),
                "author": "Anonymous",
                "club_id" : cid, //"066de609-b04a-4b30-b46c-32537c7f1ie9",
                "text": text,
                "rating": rating
            }) 
        })

        let path = '/clubpage/' + cid;
        navigate(path);
    } 
    return (
          <React.Fragment>
           <NavBar/>
           <div className='review-page'>
                <div className='review-page-backdrop'>
                <div>
                        <div className='club-name'>{clubExport.name}</div>
                        
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
        <div onClick={() => {
            setIsActive(!isActive);
            if (isActive) {
                activeStars--;
            } else {
                activeStars++;
            }
        }}>
        {isActive ? activeIcon : inactiveIcon}
        </div>
    );
}





