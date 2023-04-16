import React, { useContext } from 'react';

import * as request from '../../../../services/expressAPI';

import { AuthContext } from '../../../../contexts/AuthContext';

const Comments = ({ comment, setDiscussion, discussion, discussionId }) => {
    const { user } = useContext(AuthContext);

    const removeCommentHandler = (commentId) => {
        request.del(`/api/forum/discussions/${discussionId}/comment/delete`, { commentId })
            .then((result) => {
                setDiscussion(state => ({
                    ...state,
                    comments: discussion.comments.filter(x => x._id !== commentId)
                }));
            })
            .catch(error => console.log(error));
    }
    return (
        <div className='comment'>
            <div className='comment-header'>
                <h2 className='comment-username'>{comment.creator}</h2>
                <p className='comment-date'>{new Date(comment.date).toLocaleString()}</p>
                {user.username === comment.creator &&
                    <button className='comment-remove-button' onClick={() => removeCommentHandler(comment._id)}>X</button>
                }
            </div>
            <p className='comment-text'>{comment.text}</p>
        </div>
    );
};

export default Comments;