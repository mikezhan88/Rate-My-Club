import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react';
export var id;

export default function ClubCard(props) {
    const [state, setState] = useState(false);

    const handleclick = (setState) => {
        const tempState = true;
        setState(tempState);
        console.log("click triggered");
        id = props.id;
        console.log(id);
        return id;
    }
    return (
      <Link to={'/clubpage/'+props.id} onClick={() => handleclick(setState)}>
        <div className='clubs-display'>
            <img src={props.profile_picture} className='clubs-img' />
            <div className='club-name-tag'>{props.name}</div>
            <div className='clubs-card-tags'>
                {
                    props.tags.map((tag) => {
                        return (
                            <div className='clubs-tag-item'>{tag}</div>
                        )
                    })
                }
            </div>
        </div>
        </Link>
    );
  }