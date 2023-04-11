import { Link } from "react-router-dom";

const PlatformNews = ({ news }) => {
    return (
        <li className="platforms-news-item">
            <Link to={news.url} target="_blank">
                {news.title}
            </Link>
            <div className="platform-news-info">
                <span className="platform-news-author">{news.author || '-'}</span>
                <span className="platform-news-date">
                    {new Date(news.date).toLocaleString(
                        ('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })
                    )}
                </span>
            </div>
        </li>
    );
}

export default PlatformNews;