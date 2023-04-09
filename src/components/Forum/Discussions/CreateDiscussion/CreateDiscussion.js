import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as request from '../../../../services/backEndRequest';
import { AuthContext } from '../../../../contexts/AuthContext';

const CreateDiscussion = () => {
    const [discussion, setDiscussion] = useState({ title: '', desc: '' });

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const discussionChangeHandler = (e) => {
        setDiscussion((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        request
            .post('http://localhost:5000/api/forum/discussions/create', { userId: user.userId, discussion }, (path) => navigate(path))
            .then((result) => console.log(result.message));
    };

    return (
        <div className="discussion-create-block">
            <form onSubmit={submitHandler}>
                <h1>Create Discussion</h1>
                <input type="text" value={discussion.title} onChange={discussionChangeHandler} placeholder="Title" name="title" />
                <textarea type="text" value={discussion.desc} onChange={discussionChangeHandler} placeholder="Description" name="desc" />
                <button>Post</button>
            </form>
            <div className="create-discussion-redirect-container">
                <Link className="create-discussion-redirect-link" to={-1}>
                    Back to Forum
                </Link>
            </div>
        </div>
    );
};

export default CreateDiscussion;
