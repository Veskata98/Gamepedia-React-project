import './reviews.css';

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import * as request from '../../../services/expressAPI';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        request.get('/api/forum/reviews')
            .then(data => {
                setReviews(data);
            })
    }, []);

    return (
        <section className="forum-section">
            <div className="forum-wrapper">
                <div className="forum-container">
                    <NavLink className="forum-heading" to="/forum/discussions">
                        Discussions
                    </NavLink>
                    <NavLink className="forum-heading" to="/forum/reviews">
                        Reviews
                    </NavLink>

                    <div className="reviews-container">
                        {reviews.map(x => (
                            <Link className='review-link' to={`/forum/review/${x.title}`}>
                                <div className='review-card'>
                                    <div className='review-info'>
                                        <p className='review-title'>{x.title}</p>
                                        <p className='review-overall'>Overall: {x.overall.toFixed(2)}</p>
                                    </div>
                                    <img src={x.backgroundImage} alt={x.title} />
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
                <div className="forum-my-navigation">
                    <ul>
                        <li>
                            <Link to="/forum/discussions/myDiscussions">My Discussions</Link>
                        </li>
                        <li>
                            <Link to="/forum/reviews/myReviews">My Reviews</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Reviews;