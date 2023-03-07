import NavBar from '../NavBar/NavBar'
import React from 'react';
import UserBookmark from './UserBookmark';
import UserReview from './UserReview';
import { user } from './UserProfileArray';

export default function UserPage() {

    return ( 
        <React.Fragment>
            <NavBar/>
            <div className='user-page'>
                <div className='clubs-largetext'>Welcome, {user.name}</div>
                <div style={{ borderTop: "1px solid black ", width: "320px"}}></div>
                <div className='user-backdrop'>
                    <div className='user-page-subheading'>My Bookmarks</div>
                    <div style={{ borderBottom: "1px solid black ", width: "190px"}}></div>
                    <UserBookmark/>
                    <div className='user-page-subheading'>My Reviews</div>
                    <div style={{ borderBottom: "1px solid black ", width: "150px"}}></div>
                    <UserReview/>
                </div>
            </div>
        </React.Fragment>
        )
    }