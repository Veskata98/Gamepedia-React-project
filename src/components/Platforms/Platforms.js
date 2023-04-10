import './platforms.css';

import { useEffect, useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import { NewsContext } from '../../contexts/NewsContext';

import { PlatformTemplate } from './PlatformTemplate';
import Spinner from '../Spinner/Spinner';


const Platforms = () => {
    const [platforms, setPlatforms] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const { techNews } = useContext(NewsContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const RAWG_API_KEY = process.env.REACT_APP_RAWG_GAMING_API_KEY;

        const fetchData = async () => {
            try {
                const platformResponse = await fetch(`https://rawg-video-games-database.p.rapidapi.com/platforms?key=${RAWG_API_KEY}`, {
                    headers: { 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_RAWG_API_HOST },
                });
                const rawPlatforms = (await platformResponse.json()).results;

                const platformImgsResponse = await fetch('http://localhost:5000/api/platforms/images', { credentials: 'include' });
                const rawPlatformImgs = (await platformImgsResponse.json()).imageUrls;

                const sortedImgs = rawPlatformImgs.sort((a, b) => {
                    const n1 = parseInt(a.split('/').pop().split('-')[0]);
                    const n2 = parseInt(b.split('/').pop().split('-')[0]);
                    return n1 - n2;
                });

                const finalPlatforms = rawPlatforms.map((x, i) => {
                    x.image = sortedImgs[i];
                    return x;
                });

                setPlatforms(finalPlatforms);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const showAllHandler = () => {
        setShowAll((s) => !s);
    };

    return (
        <section className="plaftorms-section">
            {loading
                ? <Spinner />
                : <>
                    <div className="platforms-titles">
                        <h1 className="platforms-heading-main">Gaming Platforms</h1>
                        <h1 className="platforms-heading-news">Tech News</h1>
                    </div>
                    <div className="platforms-wrapper">
                        <div className="platforms-main">
                            <div className="platforms-container">
                                {platforms.slice(0, 15).map((x) => (
                                    <PlatformTemplate key={x.id} platform={x} />
                                ))}
                                {showAll && platforms.slice(16, -1).map((x) => <PlatformTemplate key={x.id} platform={x} />)}
                            </div>
                            <button className="platforms-showAll-button" onClick={showAllHandler}>
                                {showAll ? 'Show less' : 'Show All'}
                            </button>
                        </div>
                        <div className="platforms-news">
                            <ul className="platforms-news-list">
                                {techNews.map((x) => {
                                    return (
                                        <li className="platforms-news-item">
                                            <Link to={x.url} target="_blank">
                                                {x.title}
                                            </Link>
                                            <div className="platform-news-info">
                                                <span className="platform-news-author">{x.author || '-'}</span>
                                                <span className="platform-news-date">
                                                    {new Date(x.publishedAt).toLocaleString(
                                                        ('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })
                                                    )}
                                                </span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </>
            }

        </section>
    );
};

export default Platforms;
