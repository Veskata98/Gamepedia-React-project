import * as request from '../../../../services/expressAPI';

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/AuthContext';

const CreateDiscussion = () => {
    const [discussion, setDiscussion] = useState({ title: '', desc: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const discussionChangeHandler = (e) => {
        setDiscussion((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        request
            .post('/api/forum/discussions/create', { userId: user.userId, discussion })
            .then((result) => {
                console.log(result.message);
                navigate('/forum');
            })
            .catch(error => {
                console.error(error.message);
                setErrorMessage(error.message);
            });
    };

    return (
        <section className='discussion-create-section'>
            <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
            {errorMessage && (
                <div className="error">
                    <p>{errorMessage}</p>
                </div>
            )}
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
        </section>
    );
};

export default CreateDiscussion;
