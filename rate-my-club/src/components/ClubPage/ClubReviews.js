import React from 'react'
import { BsStarFill, BsStar } from "react-icons/bs";

export default function ClubReviews(props) {
    return (
        props.reviews.map((review) => {
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
                        <a style={{fontWeight: 'bold'}}>{review.author}</a>
                    </div>
                    <p className='review-content'>{review.text}</p>
                </div>
          );
        })
    );
}
