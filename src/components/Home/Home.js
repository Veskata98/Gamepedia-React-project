import './home.css';

import { useContext } from 'react';

import { NewsContext } from '../../contexts/NewsContext';
import { News } from './News/News';

export const Home = () => {
    const { news, mainArticle } = useContext(NewsContext);

    return (
        <section className="home-section">
            <h1 className="home-heading">Gamepedia - The Gaming Encyclopedia</h1>
            <div className="home-divider">
                <div className="home-news-container">
                    <h2 className="home-subheading">Gaming News</h2>

                    <article className="home-mainNews-article">
                        <img src={mainArticle.image} alt="news_img" className="home-mainNews-article-img" />
                        <div className="home-mainNews-article-text">
                            <h3 className="home-mainNews-article-title">{mainArticle.title}</h3>
                            <p className="home-mainNews-article-date">{mainArticle.date}</p>
                            <p className="home-mainNews-article-desc">{mainArticle.description}</p>
                            <a href={mainArticle.link} className="home-mainNews-article-link" target="_blank" rel="noreferrer">
                                Read More
                            </a>
                        </div>
                    </article>

                    {news.map((x) => (
                        <News key={x.title} news={x} />
                    ))}
                </div>
                <div className="last-discussions">
                    <h2 className="home-subheading">Latest Discussions</h2>
                    <ul className="last-discussion-list">
                        <li className="last-discussion-item">
                            <a href="/forum/discussions/{{_id}}">
                                <p className="last-discussion-title">title</p>
                                <p className="last-discussion-date">date</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
