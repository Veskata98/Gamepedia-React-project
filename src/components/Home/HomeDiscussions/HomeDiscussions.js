import { Link } from "react-router-dom";

const HomeDiscussions = ({ discussion }) => {
    return (
        <li className="last-discussion-item">
            <Link to={`/forum/discussions/${discussion.id}`}>
                <p className="last-discussion-title">{discussion.title}</p>
                <p className="last-discussion-date">{new Date(discussion.date).toLocaleString()}</p>
            </Link>
        </li>
    );
}

export default HomeDiscussions;