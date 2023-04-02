export const News = ({ news }) => {
    return (
        <article className="home-news-article">
            <img src={news.image} alt="news_img" className="home-news-article-img" />
            <div className="home-news-article-text">
                <h3 className="home-news-article-title">{news.title}</h3>
                <p className="home-news-article-date">{news.date}</p>
                <p className="home-news-article-desc">{news.description}</p>
                <a href={news.link} className="home-news-article-link" target="_blank" rel="noreferrer">
                    Read More
                </a>
            </div>
        </article>
    );
};
