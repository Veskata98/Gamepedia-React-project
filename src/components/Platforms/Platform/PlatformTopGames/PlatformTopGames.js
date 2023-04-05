import './platformTopGames.css';

import { Link } from 'react-router-dom';

export const PlatformTopGames = ({ game }) => {
    return (
        <div className="topGames-card">
            <h2 className="topGames-name">
                <Link to={`/game/${game.id}`}>{game.name}</Link>
            </h2>
            <Link to={`/game/${game.id}`}>
                <img src={game.background_image} alt="topGames-img" className="topGames-img" />
            </Link>
        </div>
    );
};
