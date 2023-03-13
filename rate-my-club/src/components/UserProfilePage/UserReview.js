import React from 'react'
import ClubReview from './ClubReview';

export default function UserReview(props) {

  const userReviews = props.reviews.map((e) => {
    return (
        <ClubReview 
            rating={e.rating}
            clubName={e.clubName}
            date={e.date}
            content={e.text}
        />
    );
})

  return (
    <div className='user-review-display'>
        { userReviews }
    </div>
  )
}
