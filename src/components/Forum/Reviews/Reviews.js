import { Link, NavLink } from "react-router-dom";

const Reviews = () => {
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

                    </div>

                </div>
                <div className="forum-my-navigation">
                    <ul>
                        <li>
                            <Link to="/forum/discussions/myDiscussions">My Discussions</Link>
                        </li>
                        <li>
                            <Link to="/forum/discussions/myReviews">My Reviews</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Reviews;