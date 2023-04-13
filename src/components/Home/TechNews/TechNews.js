import './techNews.css';

const TechNews = ({ news }) => {
    return (
        <div className="home-techNews-container">
            <a className="home-techNews-link" href={news.url} target='_blank' rel="noreferrer">
                <h3 className="home-textNews-title">{news.title}</h3>
                <p className="home-techNews-desc">{news.description}</p>
            </a>
        </div>
    );
}

export default TechNews;