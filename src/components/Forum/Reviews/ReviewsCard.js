import React from 'react';
import { Link } from 'react-router-dom';

const ReviewsCard = ({ review }) => {
    return (
        <Link className='review-link' to={`/forum/review/${review.title}`}>
            <div className='review-card'>
                <div className='review-info'>
                    <p className='review-title'>{review.title}</p>
                    <p className='review-overall'>Overall: {review.overall.toFixed(2)}</p>
                </div>
                <img src={review.backgroundImage} alt={review.title} />
            </div>
        </Link>
    );
};

export default ReviewsCard;