import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Platform = () => {
    const [platform, setPlatform] = useState({});

    const { platformId } = useParams();

    useEffect(() => {
        (async () => {
            const RAWG_API_KEY = process.env.REACT_APP_RAWG_GAMING_API_KEY;

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
    }, [platformId]);

    return (
        <section class="platform-section">
            <h1 class="platform-details-title">Gaming platform: {platform.name}</h1>
            <p class="platform-details-games_count">Available games: {platform.games_count}</p>
            <p class="platform-details-description">{platform.description}</p>
            <Link class="platform-return-link" to={-1}>
                Return to platforms
            </Link>

            <div class="topGames-container">
                <h2 class="topGames-title">Top 10 Rated Games for platform.name</h2>
                <div class="topGames-container"> topgames-card</div>
            </div>
        </section>
    );
};
