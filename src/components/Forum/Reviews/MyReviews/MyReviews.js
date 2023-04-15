import './myReviews.css';

import React, { useEffect, useState } from 'react';

import * as request from '../../../../services/expressAPI';
import { Link } from 'react-router-dom';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        request.get('/api/forum/reviews/myReviews')
            .then((data) => setReviews(data))
    }, []);

    return (
        <div className='myReviews-section'>
            <div className="myReviews-container">
                <h1>My Reviews</h1>
                <Link className="myReviews-return-link" to={-1}>
                    Back
                </Link>
                <div className='myReviews-card'>
                    <span className='myReviews-span'></span>
                    <p className='myReviews-title'>
                        Game Title
                    </p>
                    <p className='myReviews-overview'>
                        Overview
                    </p>
                    <p className='myReviews-date'>
                        Date
                    </p>
                    <p className='myReviews-rating'>
                        Rating
                    </p>
                </div>
                {reviews.map(x => <MyReviewCard key={x._id} review={x} />)}
            </div>
        </div>
    );
};

export default MyReviews;