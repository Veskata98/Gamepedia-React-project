import './game.css';

import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as gameService from '../../../services/gameService';
import * as request from '../../../services/requester';
import { AuthContext } from '../../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Game = () => {
    const [game, setGame] = useState({});
    const { user } = useContext(AuthContext);

    const { gameId } = useParams();

    useEffect(() => {
        gameService.getById(gameId).then((result) => {
            setGame(result);
        });
    }, [gameId]);

    const [favorites, setFavorites] = useState(false);

    const addToFavorites = (gameId) => {
        const userId = user?.userId;
        request
            .post('/api/favorites', { game_id: gameId, user_id: userId })
            .then((response) => {
                setFavorites((prevState) => !prevState);
            })
            .catch((error) => console.error(error));
    };

    return (
        <section className="oneGame-section">
            <img className="oneGame-background-img" src={game.background_image} alt="background-img" />
            <div className="oneGame-container">
                <Link className="oneGame-return-link" to="#">
                    Back
                </Link>
                <h1 className="oneGame-title">
                    {game.name}
                    {user.username && (
                        <button className="button-favorites" onClick={() => addToFavorites(game.id)}>
                            {favorites ? (
                                <FontAwesomeIcon icon={faStar} size="2xl" style={{ color: '#ffec00' }} />
                            ) : (
                                <FontAwesomeIcon icon={faStar} size="2xl" style={{ color: '#645a00' }} />
                            )}
                        </button>
                    )}
                </h1>
                <p className="omeGame bold_p">
                    Release Date:
                    <span className="omeGame normal_span"> {game.released}</span>
                </p>
                <p className="omeGame bold_p">
                    Platforms:
                    <span className="omeGame normal_span"> {game.availablePlatforms}</span>
                </p>
                <p className="omeGame bold_p last">
                    Genres:
                    <span className="omeGame normal_span"> {game.genres}</span>
                </p>
                <h5 className="oneGame-description-title">Description:</h5>
                <p className="oneGame-description">{game.description_raw}</p>

                {game.trailer && (
                    <>
                        <h5 className="oneGame-description-title">Game Trailer</h5>
                        <div className="trailer-container">
                            <video width="100%" height="600" controls src={game.trailer}>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};
