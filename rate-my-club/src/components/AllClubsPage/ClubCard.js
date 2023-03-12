import {Link} from 'react-router-dom'

export var id;

export default function ClubCard(props) {

    return (
      <Link to={'/clubpage/'+props.id}>
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