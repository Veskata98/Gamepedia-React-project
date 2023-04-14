import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MyGamesCard = ({ game, removeGameHandler }) => {
    return (
        <div className='myGames-card'>
            <Link className='myGames-cover' to='/forum/reviews'>
                <img className='myGames-coverImg' src={game.backgroundImage} alt={`${game.name}_img`} />
            </Link>
            <Link className='myGames-info' to={`/game/${game.id}`}>
                <p className='myGames-title'>{game.name}</p>
            </Link>
            <button className='myGames-unsubscribe' onClick={() => removeGameHandler(game.id)}>
                <FontAwesomeIcon icon={faStar} size="2xl" style={{ color: '#ffec00' }} />
            </button>
        </div>
    );
};

export default MyGamesCard;