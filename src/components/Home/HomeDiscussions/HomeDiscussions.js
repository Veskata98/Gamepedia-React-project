import { Link } from "react-router-dom";

const HomeDiscussions = ({ discussion }) => {
    return (
        <li className="last-discussion-item">
            <Link to={`/forum/discussion/${discussion.id}`}>
                <p className="last-discussion-title">{discussion.title}</p>
                <div className="last-discussion-info">
                    <p className="last-discussion-creator">{discussion.creatorId.username}</p>
                    <p className="last-discussion-date">{new Date(discussion.date).toLocaleString()}</p>
                </div>
            </Link>
        </li>
    );
}

export default HomeDiscussions;