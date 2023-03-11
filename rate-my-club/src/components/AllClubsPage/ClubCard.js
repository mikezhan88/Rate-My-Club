export default function ClubCard(props) { 
    console.log("beginnging of club card checkpoint")
    console.log(props)
    return (
      <a href = "/clubpage">
        <div className='clubs-display'>
            <img src={props.img} className='clubs-img' />
            <div className='club-name-tag'>{props.clubName}</div>
            <div className='clubs-card-tags'>
                {
                    props.tags.map((tag) => {
                        console.log("club card checkpoint")
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