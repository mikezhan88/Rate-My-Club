import React from 'react'
import { BsStarFill, BsStar } from "react-icons/bs";

export default function ClubReview(props) {
  return (
        <div className='club-review'>
            <div className='stars'>
                {
                    new Array(props.rating).fill(null).map(() => (
                        <BsStarFill size={22} className='star'></BsStarFill>
                    ))}
                    {new Array(5-props.rating).fill(null).map(() => (
                        <BsStar size={22} className='star'></BsStar>
                    ))
                }
            </div>
            <div className='club-smalltext'>
                <a style={{fontWeight: 'bold'}}>{props.clubName}</a>
                <a style={{fontStyle: 'italic'}}>{props.date}</a>
            </div>
            <p className='review-content'>{props.content}</p>
            <div className='edit-buttons'>
                <button className='edit-review-button'>Edit Review</button>
                <button className='delete-review-button'>Delete Review</button>
            </div>
        </div>
  );
}