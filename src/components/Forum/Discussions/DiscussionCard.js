import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as request from '../../../services/expressAPI';

import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
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
        if (like) {
            await request.post(`/api/forum/discussions/${discussion.id}/removeLike`)
                .then(data => {
                    setLikesCount(data);
                    setLike(false);
                });
            return;
        }

        await request.post(`/api/forum/discussions/${discussion.id}/like`)
            .then(data => {
                setLikesCount(data);
                setDislike(false);
                setLike(true);
            });
    }

    const dislikeHandler = async () => {
        if (dislike) {
            await request.post(`/api/forum/discussions/${discussion.id}/removeDislike`)
                .then(data => {
                    setLikesCount(data);
                    setDislike(false);
                });
            return;
        }

        await request.post(`/api/forum/discussions/${discussion.id}/dislike`)
            .then(data => {
                setLikesCount(data);
                setDislike(true);
                setLike(false);
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
                    <button onClick={likeHandler} className={`discussione-up-button ${like && 'liked'}`}><FontAwesomeIcon icon={faThumbsUp} /></button>
                    <button onClick={dislikeHandler} className={`discussione-down-button ${dislike && 'disliked'}`}><FontAwesomeIcon icon={faThumbsDown} /></button>
                </>
                }

            </div>
        </div>
    );
}

export default DiscussionCard;