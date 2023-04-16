import React from 'react';
import { Link } from 'react-router-dom';

const MyDiscussionsCard = ({ discussion }) => {

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
        <div className="myDiscussion-container">
            <Link className="myDiscussion-card" to={`/forum/discussion/${discussion.id}`}>
                <>
                    <h3 className="discussion-title">{discussion.title}</h3>
                    <p className="discussion-date">{new Date(discussion.date).toLocaleString()}</p>
                    <p className="discussion-description">{discussion.description}</p>
                </>
            </Link>
            <div className="discussion-likes-container">
                <div className='myDiscussion-likes-wrapper'>
                    <span>Likes: </span>
                    <p className={`myDiscussion-likes-count ${likesColor(discussion.likesCount)}`}> {discussion.likesCount}</p>
                </div>
            </div>
        </div>
    );
};

export default MyDiscussionsCard;