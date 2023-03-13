import React, {useState} from 'react';
import { bookmarks } from './UserProfileArray'
import ClubCard from '../AllClubsPage/ClubCard';
import { BsBookmarkStar, BsFillBookmarkStarFill} from "react-icons/bs";

export default function UserBookmark() {
  return (
        <div className='user-review-display'>
            { userBookmarks }
        </div>
  )
}

const userBookmarks = bookmarks.bookmarks.map((club) => {
    return (
        <div className='bookmark-club-display'> 
            <div className='userpage-bookmark'> 
                <HeaderIcon inactiveIcon={< BsFillBookmarkStarFill size={43}/>} activeIcon={<BsBookmarkStar size={43}/>}></HeaderIcon>
            </div>
            <ClubCard 
                id={club["_id"]}
                profile_picture={club["profile_picture"]}
                name={club["name"]}
                tags={club["tags"]}
            />
        </div>
    );
})

function HeaderIcon({ inactiveIcon, activeIcon }) {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <div onClick={() => setIsActive(!isActive)}>
            {isActive ? activeIcon : inactiveIcon}
        </div>
    );
 }

