import { Link } from 'react-router-dom';
import './forum.css';

export const Forum = () => {
    return (
        <section className="forum-section">
            <div className="forum-wrapper">
                <div className="forum-container">
                    <a className="forum-heading" href="/forum">
                        Discussions
                    </a>
                    <a className="forum-heading" href="/reviews">
                        Reviews
                    </a>

                    <div className="discussions-container">
                        <Link className="create-discussion-link" to="/forum/discussions/create">
                            Create discussion
                        </Link>
                        <a className="discussion-card" href="/forum/discussions/{{_id}}">
                            <div className="discussion-container">
                                <h3 className="discussion-title">title</h3>
                                <p className="discussion-date">date</p>
                                <p className="discussion-description">description</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="forum-my-navigation">
                    <ul>
                        <li>
                            <a href="/forum/discussions/myDiscussions">My Discussions</a>
                        </li>
                        <li>
                            <a href="/forum/discussions/myDiscussions">My Reviews</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
