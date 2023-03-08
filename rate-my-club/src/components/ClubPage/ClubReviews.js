import React from 'react'
import { BsStarFill, BsStar } from "react-icons/bs";

export default function ClubReviews(props) {
    return (
        props.club.reviews.map((review) => {
            return (
                <div className='club-review'>
                    <div className='stars'>
                        {
                            new Array(review.rating).fill(null).map(() => (
                                <BsStarFill size={22} className='star'></BsStarFill>
                            ))}
                            {new Array(5-review.rating).fill(null).map(() => (
                                <BsStar size={22} className='star'></BsStar>
                            ))
                        }
                    </div>
                    <div className='club-smalltext'>
                        <a style={{fontWeight: 'bold'}}>Anonymous User</a>
                        <a style={{fontStyle: 'italic'}}>{review.date}</a>
                    </div>
                    <p className='review-content'>{review.content}</p>
                </div>
          );
        })
    );
}
