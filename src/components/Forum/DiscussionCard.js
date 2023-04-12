import { Link } from "react-router-dom";

const DiscussionCard = ({ discussion }) => {
    return (
        <Link className="discussion-card" to={`/forum/discussions/${discussion.id}`}>
            <div className="discussion-container">
                <h3 className="discussion-title">{discussion.title}</h3>
                <p className="discussion-date">{new Date(discussion.date).toLocaleString()}</p>
                <p className="discussion-description">{discussion.description}</p>
            </div>
        </Link>
    );
}

export default DiscussionCard;