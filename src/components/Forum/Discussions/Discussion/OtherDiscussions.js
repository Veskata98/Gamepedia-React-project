import { Link } from 'react-router-dom';

const OtherDiscussions = ({ discussion }) => {
    return (
        <li className='otherDiscussions-item'>
            <Link to={`/forum/discussion/${discussion.id}`}>{discussion.title}</Link>
        </li>
    );
};

export default OtherDiscussions;