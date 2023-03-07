import React from 'react'
import { user } from './UserProfileArray'
import ClubReview from './ClubReview';

export default function UserReview() {
  return (
    <div className='user-review-display'>
        { reviews }
    </div>
  )
}

const reviews = user.reviews.map((e) => {
    return (
        <ClubReview 
            rating={e.rating}
            clubName={e.clubName}
            date={e.date}
            content={e.content}
        />
    );
})
