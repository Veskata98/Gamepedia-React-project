import './reviews.css';

import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import * as request from '../../../services/expressAPI';

import { AuthContext } from '../../../contexts/AuthContext';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const { user } = useContext(AuthContext)

    useEffect(() => {
        request.get('/api/forum/reviews')
            .then(data => {
                setReviews(data);
            })
            .catch(error =>
                console.log(error.message));
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
                        {reviews.length
                            ? reviews.map(x => <ReviewsCard key={x.title} review={x} />)
                            : <h2 className='reviews-noreviews'>Looks like there are no reviews yet. Share your thoughts and help others make an informed decision!</h2>
                        }
                    </div>
                </div>
                {user.username &&
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
                }
            </div>
        </section>
    );
}

export default Reviews;