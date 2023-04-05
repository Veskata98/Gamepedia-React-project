import './platform.css';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlatformTopGames } from './PlatformTopGames/PlatformTopGames';

export const Platform = () => {
    const [platform, setPlatform] = useState({});
    const [topGames, setTopGames] = useState([]);

    const { platformId } = useParams();

    useEffect(() => {
        //get platform details
        const RAWG_API_KEY = process.env.REACT_APP_RAWG_GAMING_API_KEY;

        (async () => {
            const response = await fetch(`https://rawg-video-games-database.p.rapidapi.com/platforms/${platformId}?key=${RAWG_API_KEY}`, {
                headers: { 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_RAWG_API_HOST },
            });

            const data = await response.json();

            //Removing HTML Tags and Special Elements from Platform descriptions
            let descr = data.description;
            descr = descr.replace(/(&nbsp;|<([^>]+)>)/gi, '');
            descr = descr.replace(/&#39;/gm, "'");
            data.description = descr;

            setPlatform(data);
        })();

        //get top games for the platform
        (async () => {
            const response = await fetch(
                `https://rawg-video-games-database.p.rapidapi.com/games?key=${RAWG_API_KEY}&platforms=${platformId}&ordering=-rating&page_size=20`,
                {
                    headers: { 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_RAWG_API_HOST },
                }
            );

            const data = await response.json();

            //Filtering and removing games with adult content
            const result = data.results.filter((x) => x.esrb_rating?.id !== 5).slice(0, 10);

            setTopGames(result);
        })();
    }, [platformId]);

    return (
        <section className="platform-section">
            <h1 className="platform-details-title">Gaming platform: {platform.name}</h1>
            <p className="platform-details-games_count">Available games: {platform.games_count}</p>
            <p className="platform-details-description">{platform.description}</p>
            <Link className="platform-return-link" to={-1}>
                Back
            </Link>

            <div className="topGames-container">
                <h2 className="topGames-title">Top 10 Rated Games for {platform.name}</h2>
                <div className="topGames-container">
                    {topGames.map((x) => (
                        <PlatformTopGames key={x.id} game={x} />
                    ))}
                </div>
            </div>
        </section>
    );
};
