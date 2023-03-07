import React, {useState} from 'react';
import { user } from './UserProfileArray'
import ClubCard from '../AllClubsPage/ClubCard';
import { BsBookmarkStar, BsFillBookmarkStarFill} from "react-icons/bs";

export default function UserBookmark() {
  return (
        <div className='user-review-display'>
            { bookmarks }
        </div>
  )
}

const bookmarks = user.bookmarks.map((e) => {
    return (
        <div className='bookmark-club-display'> 
            <div className='userpage-bookmark'> 
                <HeaderIcon inactiveIcon={< BsFillBookmarkStarFill size={43}/>} activeIcon={<BsBookmarkStar size={43}/>}></HeaderIcon>
            </div>
            <ClubCard 
                img={e.img}
                clubName={e.clubName}
                tags={e.tags}
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

