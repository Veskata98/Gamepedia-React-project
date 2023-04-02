import { Link } from 'react-router-dom';

export const GamesRender = ({ game }) => {
    return (
        <div className="games-card">
            <h2 title={game.name} className="games-name">
                <Link to={`/game/${game.id}`}>{game.name}</Link>
            </h2>
            <Link to={`/game/${game.id}`}>
                <img src={game.background_image} alt="games-img" className="games-img" />
            </Link>
        </div>
    );
};
