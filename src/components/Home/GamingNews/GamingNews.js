import './gamingNews.css';
import defaultImg from '../../../assets/default.jpg'

import { useState } from 'react';

const GamingNews = ({ news }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <article className="home-news-article">
            {imageError
                ? <img src={defaultImg} alt="default_news_img" className="home-news-article-img" />
                : <img src={news.image} alt="news_img" className="home-news-article-img" onError={handleImageError} />
            }
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

export default GamingNews;
