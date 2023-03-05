export default function ClubCard(props) { 
    return (
      <a href = "/clubpage">
        <div className='clubs-display'>
            <img src={props.img} className='clubs-img' />
            <div className='club-name-tag'>{props.clubName}</div>
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
      </a>
    );
  }