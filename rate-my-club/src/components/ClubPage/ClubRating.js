import { BsStarFill, BsStar} from "react-icons/bs";

export const AverageRating = props => {
    var average = props.reviews.reduce((a, b) => a + b.rating, 0)/(props.reviews.length);
    average = average.toFixed(1);
    return (
        <div className='average-rating'>{average}</div>
    );
}

export const AverageRatingStars = props => {
    var average = props.reviews.reduce((a, b) => a + b.rating, 0)/(props.reviews.length);
    average = Math.trunc(average)
    return (
        <div className='stars'>
            {
                new Array(average).fill(null).map(() => (
                    <BsStarFill size={20} className='star'></BsStarFill>
                ))}
                {new Array(5-average).fill(null).map(() => (
                    <BsStar size={20} className='star'></BsStar>
                ))
            }
        </div>
    );
}