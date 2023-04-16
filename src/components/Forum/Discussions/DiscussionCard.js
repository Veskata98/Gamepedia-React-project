import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as request from '../../../services/expressAPI';

import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AuthContext } from "../../../contexts/AuthContext";

const DiscussionCard = ({ discussion }) => {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [commentsCount, setCommentsCount] = useState(0);

    const { user } = useContext(AuthContext);


    useEffect(() => {
        const userLiked = discussion?.likedUsers?.some(x => x === user.userId);
        const userDisliked = discussion?.dislikedUsers?.some(x => x === user.userId);

        setLike(userLiked);
        setDislike(userDisliked);
        setLikesCount(discussion.likesCount);
        setCommentsCount(discussion.comments.length);
    }, [discussion, user]);

    const likeHandler = async () => {
        setDislike(false);
        setLike(true);
        await request.post(`/api/forum/discussions/${discussion.id}/like`)
            .then(data => {
                setLikesCount(data);
            });
    }

    const dislikeHandler = async () => {
        setDislike(true);
        setLike(false);
        await request.post(`/api/forum/discussions/${discussion.id}/dislike`)
            .then(data => {
                setLikesCount(data);
            });
    }

    return (
        <div className="discussion-container">
            <Link className="discussion-card" to={`/forum/discussion/${discussion.id}`}>
                <>
                    <div className="discussion-title-container">
                        <h3 className="discussion-title">{discussion.title}</h3>
                        <span className="discussion-comments-count">{commentsCount} Comment{commentsCount !== 1 ? 's' : ''}</span>
                    </div>
                    <p className="discussion-date">{new Date(discussion.date).toLocaleString()}</p>
                    <p className="discussion-description">{discussion.description}</p>
                </>
            </Link>
            <div className="discussion-likes-container">
                <p className="discussion-likes-count">{likesCount}</p>
                {user.username && <>
                    <button onClick={likeHandler} className={`discussione-up-button ${like && 'liked'}`}><FontAwesomeIcon icon={faUpLong} /></button>
                    <button onClick={dislikeHandler} className={`discussione-down-button ${dislike && 'disliked'}`}><FontAwesomeIcon icon={faDownLong} /></button>
                </>
                }

            </div>
        </div>
    );
}

export default DiscussionCard;