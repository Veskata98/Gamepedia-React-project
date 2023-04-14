import './discussions.css';

import * as request from '../../../services/expressAPI';

import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import DiscussionCard from './DiscussionCard'


const Discussions = () => {
    const [discussions, setDiscussions] = useState([]);

    const { user } = useContext(AuthContext)

    useEffect(() => {
        request.get("/api/forum/discussions/latest").then(data => setDiscussions(data));
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

                    <div className="discussions-container">

                        {user.username &&
                            <div className='discussions-create-discussion-link-container'>
                                <Link className="create-discussion-link" to="/forum/discussions/create">
                                    Create discussion
                                </Link>
                            </div>
                        }

                        {
                            discussions.length
                                ? discussions.map(x => <DiscussionCard key={x.id} discussion={x} />)
                                : <h2 className='discussions-nodiscussions'>Ready to play? Let's start a discussion and see where it takes us.</h2>
                        }

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
};

export default Discussions;