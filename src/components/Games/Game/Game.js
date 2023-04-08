import './game.css';

import defaultImg from '../../../../src/assets/default.jpg';

import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as gameService from '../../../services/gameService';
import * as request from '../../../services/backEndRequest';

import { AuthContext } from '../../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Game = () => {
    const [game, setGame] = useState({});
    const [gamesIsFavorite, setGameIsFavorite] = useState();

    const [result, setResult] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const { user } = useContext(AuthContext);

    const { gameId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        gameService.getById(gameId).then((result) => {
            setGame(result);
        });
    }, [gameId]);

    useEffect(() => {
        if (user.userId) {
            request
                .post('http://localhost:5000/api/games/isGameInFavorites', { gameId, userId: user.userId })
                .then((data) => setGameIsFavorite(data.message))
                .catch((error) => {
                    console.error(error);
                    navigate('/auth/login');
                });
        }
    }, [user, gameId]);

    const addToFavorites = (gameId) => {
        request
            .post('http://localhost:5000/api/games/favoritizeGame', { gameId, userId: user.userId })
            .then((response) => {
                setGameIsFavorite((state) => !state);
                setResult(response.message);
                setShowResult(true);

                // Fade away the result after 1.5 seconds
                setTimeout(() => {
                    setShowResult(false);
                }, 1500);
            })
            .catch((error) => {
                console.error(error);
                navigate('/auth/login');
            });
    };

    return (
        <section className="oneGame-section">
            <img className="oneGame-background-img" src={game.background_image || defaultImg} alt="background-img" />
            <div className="oneGame-container">
                <Link className="oneGame-return-link" to={-1}>
                    Back
                </Link>
                <h1 className="oneGame-title">
                    {game.name}
                    {user.username && (
                        <button className="button-favorites" onClick={() => addToFavorites(game.id)}>
                            {gamesIsFavorite ? (
                                <FontAwesomeIcon icon={faStar} size="2xl" style={{ color: '#ffec00' }} />
                            ) : (
                                <FontAwesomeIcon icon={faStar} size="2xl" style={{ color: '#645a00' }} />
                            )}
                        </button>
                    )}
                    {showResult && <span className="animated fadeOut">{result}</span>}
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
