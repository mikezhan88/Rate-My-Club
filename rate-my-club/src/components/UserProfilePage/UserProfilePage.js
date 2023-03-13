import NavBar from '../NavBar/NavBar'
import React, {useState, useEffect} from 'react';
import UserBookmark from './UserBookmark';
import UserReview from './UserReview';
import { bookmarks } from './UserProfileArray';


var username = "";

export default function UserPage() {
    var currpath = window.location.pathname
    username = currpath.slice(10)
    console.log("user profile id: "+ username)

    const dummyReviews = [
        {
            rating: 0,
        }
    ]

    const [reviews, setReviews] = useState(dummyReviews);

    useEffect (() => {
        const getReviews = async() => {
            const userReviewsURL = "http://localhost:8000/users/" + username + "/reviews";
            console.log(userReviewsURL);
            const response = await fetch(userReviewsURL, {
                method: 'GET',
            })
            
            const myJson = await response.json(); //extract JSON from the http response
            
            console.log(myJson)
            var reviews = myJson;
            for(var i in reviews) {
                i = JSON.parse(i);
            }

            setReviews(Object.values(reviews));
        };
        if (username != "") {
            getReviews();
        }
    }, [username])
    

    return ( 
        <React.Fragment>
            <NavBar/>
            <div className='user-page'>
                <div className='clubs-largetext'>Welcome, {username}</div>
                <div style={{ borderTop: "1px solid black ", width: "320px"}}></div>
                <div className='user-backdrop'>
                    <div className='user-page-subheading'>My Bookmarks</div>
                    <div style={{ borderBottom: "1px solid black ", width: "190px"}}></div>
                    <UserBookmark/>
                    <div className='user-page-subheading'>My Reviews</div>
                    <div style={{ borderBottom: "1px solid black ", width: "150px"}}></div>
                    <UserReview reviews={reviews}/>
                </div>
            </div>
        </React.Fragment>
        )
    }