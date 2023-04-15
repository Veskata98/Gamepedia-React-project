import './review.css';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as request from '../../../../services/expressAPI';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');
    const [overall, setOverall] = useState(0);

    const { gameTitle } = useParams();

    useEffect(() => {
        request.get(`/api/forum/review/${gameTitle}`)
            .then((data) => {
                setReviews(data.reviews);
                setBackgroundImage(data.backgroundImage);
                setOverall(data.overall);
            });

    }, [gameTitle]);

    return (
        <section className="review-section">
            <img className="review-background-img" src={backgroundImage} alt="background-img" />
            <div className="review-container">
                <Link className="review-return-link" to={-1}>
                    Back
                </Link>
                <h1 className="review-one-title">
                    {gameTitle}
                </h1>
                <h2 className="review-one-title">
                    Overall Rating: {overall.toFixed(2)}
                </h2>
                {reviews.map(x => (
                    <div className="review-one-card">
                        <div className='review-one-firstline'>
                            <p className='review-one-user'>Reviewed by: <b>{x.creatorId.username}</b></p>
                            <p>Rating: {x.rating}</p>
                        </div>
                        <p className='review-one-date'>{new Date(x.date).toLocaleString()}</p>
                        <p className='review-one-overview'>Overview: {x.description}</p>
                    </div>
                ))


                }
            </div>
        </section>
    );
}

export default Review;