import './myDiscussions.css';

import { useEffect, useState } from "react";

import * as request from '../../../../services/expressAPI';
import { Link } from "react-router-dom";


const MyDiscussions = () => {
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        request.get('/api/forum/discussions/myDiscussions')
            .then(data => setDiscussions(data))
            .catch(error => console.log(error.message));
    }, []);

    const likesColor = (count) => {
        if (count > 0) {
            return 'liked';
        } else if (count === 0) {
            return;
        } else {
            return 'disliked';
        }
    }

    return (
        <section className='forum-section'>
            <div className='myDiscussions-wrapper'>
                <div className='myDiscussions-container'>
                    <div className='myDiscussions-title-container'>
                        <h1 className='one-discussion-title'>My Discussions</h1>
                        <div className='one-discussion-link-container'>
                            <Link to={'/forum/discussions'}>Back to Forum</Link>
                        </div>
                    </div>
                    <Link className='create-discussion-link' to='/forum/discussions/create'>Create discussion</Link>
                    <div className='myDiscussions-all-container'>
                        {discussions.length
                            ?
                            discussions.map(x => (
                                <div className="myDiscussion-container">
                                    <Link className="myDiscussion-card" to={`/forum/discussion/${x.id}`}>
                                        <>
                                            <h3 className="discussion-title">{x.title}</h3>
                                            <p className="discussion-date">{new Date(x.date).toLocaleString()}</p>
                                            <p className="discussion-description">{x.description}</p>
                                        </>
                                    </Link>
                                    <div className="discussion-likes-container">
                                        <div className='myDiscussion-likes-wrapper'>
                                            <span>Likes: </span>
                                            <p className={`myDiscussion-likes-count ${likesColor(x.likesCount)}`}> {x.likesCount}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : <h2 className='discussions-nodiscussions'>Ready to play? Let's start a discussion and see where it takes us.</h2>
                        }
                    </div>

                </div>
                <div className='forum-my-navigation'>
                    <ul>
                        <li><Link to='/forum/discussions/myDiscussions'>My Discussions</Link></li>
                        <li><Link to='/forum/reviews/myReviews'>My Reviews</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default MyDiscussions;