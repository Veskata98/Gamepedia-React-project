import { Link } from 'react-router-dom';

export const PlatformTopGames = ({ game }) => {
    return (
        <div class="topGames-card">
            <h2 class="topGames-name">
                <Link to={`/game/${game.id}`}>{game.name}</Link>
            </h2>
            <Link to={`/games/${game.id}}`}>
                <img src="{{background_image}}" alt="topGames-img" class="topGames-img" />
            </Link>
        </div>
    );
};
