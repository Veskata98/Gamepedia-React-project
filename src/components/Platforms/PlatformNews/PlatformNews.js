import { Link } from "react-router-dom";

const PlatformNews = ({ news }) => {
    return (
        <li className="platforms-news-item">
            <Link to={news.url} target="_blank">
                {news.title}
            </Link>
            <div className="platform-news-info">
                <p className="platforms-news-description">{news.description}</p>
            </div>
        </li>
    );
}

export default PlatformNews;