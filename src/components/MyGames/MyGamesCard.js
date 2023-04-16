import * as request from '../../services/expressAPI';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyGamesCard = ({ game, removeGameHandler }) => {
    const [imageText, setImagetext] = useState('')
    const [canReview, setCanReview] = useState(false);

    useEffect(() => {
        request.post(`/api/forum/reviews/${game.name}/alreadyReviewed`)
            .then((data) => {
                if (data.canReview) {
                    setCanReview(true);
                    setImagetext('Leave a review')
                } else {
                    setImagetext('Check reviews')
                }
            })
            .catch((error) => console.log(error.message));
    }, [game]);

    return (
        <div className='myGames-card'>
            <Link className='myGames-cover' to={canReview ? `/forum/reviews/${game.id}/createReview` : `/forum/review/${game.name}`} data-content={imageText}>
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