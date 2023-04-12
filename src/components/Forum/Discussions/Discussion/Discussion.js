import * as request from '../../../../services/expressAPI';

import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AuthContext } from '../../../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Discussion = () => {
    const [discussion, setDiscussion] = useState({});

    const { user } = useContext(AuthContext);

    const isOwner = user.username === discussion.creator;

    const { discussionId } = useParams();

    useEffect(() => {
        request.get('/api/forum/discussions/' + discussionId)
            .then(data => setDiscussion(data));
    }, [discussionId]);

    return (
        <section className='one-discussion-section'>
            <div className='one-discussion-container'>
                <h1>{discussion.title}</h1>
                <div className='one-discussion-info'>
                    <p className='one-discussion-username'>Created by <strong>{discussion.creator}</strong></p>

                    <p className='one-discussion-descr'>{discussion.description}</p>

                    <div className='last-line-discussion'>
                        {isOwner &&
                            <Link className='edit-discussion-link' to={`/forum/discussions/${discussion._id}/edit`}>
                                <FontAwesomeIcon icon={faEdit} />
                                Edit
                            </Link>
                        }
                        <p className='one-discussion-date'>{new Date(discussion.date).toLocaleString()}</p>
                    </div>

                </div>
            </div>
            <div className='one-discussion-link-container'>
                <Link to={-1}>Back</Link>
            </div>
            <div className='comment-section'>
                <h1 className='comment-section-title'>Comments</h1>
                <div className='comments-container'>
                    <div className='comment'>
                        <div className='comment-header'>
                            <h2 className='comment-username'>creatorId.username</h2>
                            <p className='comment-date'>date</p>
                        </div>
                        <p className='comment-text'>description</p>

                    </div>
                    <h2>There is nothing here</h2>
                </div>
            </div>
            <div className='add-comment'>
                <h1 className='comment-section-title'>Post Comment</h1>
                <form action='/forum/discussions/{discussion._id}/postComment' method='post'>
                    <textarea placeholder='Enter comment here' name='description' cols='50' rows='5'></textarea>
                    <button>Post</button>
                </form>
            </div>
        </section>
    );
}

export default Discussion;