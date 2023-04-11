import './platforms.css';

import * as request from '../../services/expressAPI';

import { useEffect, useState, useContext } from 'react';

import { NewsContext } from '../../contexts/NewsContext';

import { PlatformTemplate } from './PlatformTemplate';
import PlatformNews from './PlatformNews/PlatformNews';

import Spinner from '../Spinner/Spinner';

const Platforms = () => {
    const [platforms, setPlatforms] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const { techNews } = useContext(NewsContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultPlatforms = await request.get("/api/platforms/all");
                setPlatforms(resultPlatforms);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
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
                                    <PlatformTemplate key={x._id} platform={x} />
                                ))}
                                {showAll && platforms.slice(16, -1).map((x) => <PlatformTemplate key={x._id} platform={x} />)}
                            </div>
                            <button className="platforms-showAll-button" onClick={showAllHandler}>
                                {showAll ? 'Show less' : 'Show All'}
                            </button>
                        </div>
                        <div className="platforms-news">
                            <ul className="platforms-news-list">
                                {techNews.map((x) => <PlatformNews key={x.title} news={x} />)}
                            </ul>
                        </div>
                    </div>
                </>
            }

        </section>
    );
};

export default Platforms;
