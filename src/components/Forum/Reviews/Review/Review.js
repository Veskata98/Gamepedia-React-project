import './review.css';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as request from '../../../../services/expressAPI';
import SingleGameReviews from './SingleGameReviews';

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
                {
                    reviews.map(x => <SingleGameReviews key={x._id} singleGameReviews={x} />)
                }
            </div>
        </section>
    );
}

export default Review;