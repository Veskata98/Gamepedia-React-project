import './discussion.css';

import * as request from '../../../../services/expressAPI';

import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AuthContext } from '../../../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

import Comments from './Comments';
import OtherDiscussions from './OtherDiscussions';

const Discussion = () => {
    const [discussion, setDiscussion] = useState({});
    const [otherDiscussions, setOtherDiscussions] = useState([]);
    const [createCommentText, setCreateCommentText] = useState('');

    const [isEditing, setIsEditing] = useState(false);

    const [error, setError] = useState('');
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const { user } = useContext(AuthContext);

    const isOwner = user.username === discussion.creator;

    const { discussionId } = useParams();

    useEffect(() => {
        request.get('/api/forum/discussions/' + discussionId)
            .then(data => setDiscussion(data));

        request.get(`/api/forum/discussions/${discussionId}/other`)
            .then(data => setOtherDiscussions(data));

    }, [discussionId]);

    const discussionNewTextInput = (e) => {
        setDiscussion(state => ({
            ...state,
            description: e.target.value
        }))
    }

    const saveEdittedDiscussion = (e) => {
        request.put(`/api/forum/discussions/${discussionId}/edit`, { desc: discussion.description })
            .then((result) => {
                console.log(result);
                setIsEditing(state => !state);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const createCommentHandler = (e) => {
        e.preventDefault();
        request.post(`/api/forum/discussions/${discussionId}/createComment`, { text: createCommentText })
            .then(data => {
                setDiscussion(data);
                setError('');
                setCreateCommentText('');
            })
            .catch(error => {
                setIsMessageVisible(true);
                setError(error.message)

                setTimeout(() => {
                    setIsMessageVisible(false);
                    setError('');
                }, 2000);
            });
    }

    const createCommentInputHandler = (e) => {
        e.preventDefault();
        setCreateCommentText(e.target.value);
    }

    return (
        <section className='one-discussion-wrapper'>
            <div className='one-discussion-section'>
                <div className='one-discussion-title-container'>
                    <h1 className='one-discussion-title'>{discussion.title}</h1>
                    <div className='one-discussion-link-container'>
                        <Link to={'/forum/discussions'}>Back to Forum</Link>
                    </div>
                </div>
                <div className='one-discussion-container'>
                    <div className='one-discussion-info'>
                        <p className='one-discussion-username'>Created by <strong>{discussion.creator}</strong></p>

                        {isEditing
                            ? <textarea className='one-discussion-descr editing' value={discussion.description} onChange={discussionNewTextInput} />
                            : <p className='one-discussion-descr'>{discussion.description}</p>
                        }

                        <div className='last-line-discussion'>
                            {(isOwner && !isEditing) &&
                                <button className='edit-discussion-button' onClick={() => setIsEditing(state => !state)}><FontAwesomeIcon icon={faEdit} />Edit</button>
                            }
                            {(isOwner && isEditing) &&
                                <button className='edit-discussion-button' onClick={saveEdittedDiscussion}><FontAwesomeIcon icon={faFloppyDisk} />Save</button>
                            }
                            <p className='one-discussion-date'>{new Date(discussion.date).toLocaleString()}</p>
                        </div>

                    </div>
                </div>
                <div className='comment-section'>
                    <h1 className='comment-section-title'>Comments</h1>
                    <div className='comments-container'>
                        {discussion.comments?.length
                            ? discussion.comments.map(x =>
                                <Comments
                                    key={x._id}
                                    comment={x}
                                    setDiscussion={setDiscussion}
                                    discussion={discussion}
                                    discussionId={discussionId}
                                />
                            )
                            : <h2>There is nothing here</h2>
                        }
                    </div>
                </div>
                {user.username &&
                    <div className='add-comment'>
                        <h1 className='comment-section-title'>Post Comment</h1>
                        {isMessageVisible && (
                            <div className="error">
                                <p>{error}</p>
                            </div>
                        )}
                        <form onSubmit={createCommentHandler}>
                            <textarea placeholder='Enter comment here' value={createCommentText} name='description' cols='50' rows='5' onChange={createCommentInputHandler}></textarea>
                            <button>Post</button>
                        </form>
                    </div>
                }
            </div>
            <div className='otherDiscussions-container'>
                <h2 className='otherDiscussions-heading'>Other discussions</h2>
                <ul className='otherDiscussions-list'>
                    {otherDiscussions.map(x => <OtherDiscussions key={x.id} discussion={x} />)}

                </ul>
            </div>
        </section>
    );
}

export default Discussion;