import './home.css';

import { useContext } from 'react';

import { NewsContext } from '../../contexts/NewsContext';

import GamingNews from './GamingNews/GamingNews';
import TechNews from './TechNews/TechNews';
import Spinner from '../Spinner/Spinner';

export const Home = () => {
    const { gamingNews, techNews, mainArticle, loading } = useContext(NewsContext);

    return (
        <section className="home-section">
            {loading ? <Spinner /> :
                <>
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

                            {gamingNews.map((x) => (
                                <GamingNews key={x.title} news={x} />
                            ))}
                        </div>
                        <div className="home-sidebar">
                            <div className="last-discussions">
                                <h2 className="home-subheading discussions">Latest threads</h2>
                                <ul className="last-discussion-list">
                                    <li className="last-discussion-item">
                                        <a href="/forum/discussions/{{_id}}">
                                            <p className="last-discussion-title">title</p>
                                            <p className="last-discussion-date">date</p>
                                        </a>
                                    </li>
                                    <li className="last-discussion-item">
                                        <a href="/forum/discussions/{{_id}}">
                                            <p className="last-discussion-title">title</p>
                                            <p className="last-discussion-date">date</p>
                                        </a>
                                    </li>
                                    <li className="last-discussion-item">
                                        <a href="/forum/discussions/{{_id}}">
                                            <p className="last-discussion-title">title</p>
                                            <p className="last-discussion-date">date</p>
                                        </a>
                                    </li>
                                    <li className="last-discussion-item">
                                        <a href="/forum/discussions/{{_id}}">
                                            <p className="last-discussion-title">title</p>
                                            <p className="last-discussion-date">date</p>
                                        </a>
                                    </li>
                                    <li className="last-discussion-item">
                                        <a href="/forum/discussions/{{_id}}">
                                            <p className="last-discussion-title">title</p>
                                            <p className="last-discussion-date">date</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-technews">
                                <h2 className="home-subheading techNews">Tech News</h2>
                                {techNews.map((x) => <TechNews key={x.title} news={x} />)}
                            </div>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};
