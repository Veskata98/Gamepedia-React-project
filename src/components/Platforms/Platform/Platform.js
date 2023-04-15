import './platform.css';

import * as request from '../../../services/expressAPI';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { PlatformTopGames } from './PlatformTopGames/PlatformTopGames';

import Spinner from '../../Spinner/Spinner';

export const Platform = () => {
    const [platform, setPlatform] = useState({});
    const [topGames, setTopGames] = useState([]);
    const [loading, setLoading] = useState(true);

    const { platformId } = useParams();

    useEffect(() => {
        (async () => {
            const resultPlatform = await request.get('/api/platforms/' + platformId);

            setPlatform(resultPlatform);
            setTopGames(resultPlatform.topGames);
            setLoading(false);
        })();

    }, [platformId]);

    return (
        <section className="platform-section">
            {loading
                ? <Spinner />
                : <>
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
                </>
            }

        </section>
    );
};
