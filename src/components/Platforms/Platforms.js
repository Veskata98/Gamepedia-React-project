import './platform.css';

import { useEffect, useState } from 'react';
import { PlatformTemplate } from './PlatformTemplate';

const Platforms = () => {
    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        const RAWG_API_KEY = process.env.REACT_APP_RAWG_GAMING_API_KEY;

        const fetchData = async () => {
            try {
                const platformResponse = await fetch(`https://rawg-video-games-database.p.rapidapi.com/platforms?key=${RAWG_API_KEY}`, {
                    headers: { 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_RAWG_API_HOST },
                });
                const rawPlatforms = (await platformResponse.json()).results;

                const platformImgsResponse = await fetch('http://localhost:5000/api/platforms/images');
                const rawPlatformImgs = (await platformImgsResponse.json()).imageUrls;

                const sortedImgs = rawPlatformImgs.sort((a, b) => {
                    const numA = parseInt(a.split('/').pop().split('-')[0]);
                    const numB = parseInt(b.split('/').pop().split('-')[0]);
                    return numA - numB;
                });

                const finalPlatforms = rawPlatforms.map((x, i) => {
                    x.image = sortedImgs[i];
                    return x;
                });

                setPlatforms(finalPlatforms);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    //TODO: Platoform component

    return (
        <section className="plaftorms-section">
            <div className="platforms-titles">
                <h1 className="platforms-heading-main">Gaming Platforms</h1>
                <h1 className="platforms-heading-news">Console News</h1>
            </div>
            <div className="platforms-wrapper">
                <div className="platforms-container">
                    {platforms.map((x) => (
                        <PlatformTemplate key={x.id} platform={x} />
                    ))}
                </div>
                <div className="platforms-news">
                    <ul className="platforms-news-list">
                        <li className="platforms-news-item">
                            <a href="{{url}}" target="_blank">
                                title
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Platforms;
