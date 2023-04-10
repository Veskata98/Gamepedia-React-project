import './game.css';

import defaultImg from '../../../../src/assets/default.jpg';

import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as gameService from '../../../services/gameService';
import * as request from '../../../services/expressAPI';

import { AuthContext } from '../../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const STORE_NAMES = {
    1: 'Steam',
    2: 'Xbox Store',
    3: 'PlayStation Store',
    4: 'App Store',
    5: 'GOG',
    6: 'Nintendo Store',
    7: 'Xbox 360 Store',
    8: 'Google Play',
    9: 'itch.io',
    11: 'Epic Games',
};

export const Game = () => {
    const [game, setGame] = useState({});
    const [gamesIsFavorite, setGameIsFavorite] = useState();
    const [stores, setStores] = useState([]);

    const [result, setResult] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const { user } = useContext(AuthContext);

    const { gameId } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        const API_KEY = process.env.REACT_APP_RAWG_GAMING_API_KEY;
        window.scrollTo(0, 0);
        gameService.getById(gameId).then((result) => {
            setGame(result);
            fetch(`https://api.rawg.io/api/games/${result.id}/stores?key=${API_KEY}`).then(res => res.json()).then(data => setStores(data.results));
        });
    }, [gameId]);

    useEffect(() => {
        if (user.userId) {
            request
                .post('/api/games/isGameInFavorites', { gameId, userId: user.userId })
                .then((data) => setGameIsFavorite(data.message))
                .catch((error) => {
                    console.error(error);
                    navigate('/auth/login');
                });
        }
    }, [user, gameId, navigate]);

    const addToFavorites = (gameId) => {
        request
            .post('/api/games/favoritizeGame', { gameId, userId: user.userId })
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

                <p className='oneGame-stores-title'>Stores</p>
                <div className='oneGame-stores-links'>
                    {stores.map(s =>
                        <Link key={s.id} className='oneGame-stores-link' to={s.url} target='_blank'>
                            <div className='oneGane-stores-img-wrapper'>
                                <img className="oneGame-stores-img" src={`${process.env.PUBLIC_URL}/stores/${STORE_NAMES[s.store_id]}.png`} alt={STORE_NAMES[s.store_id]} />
                            </div>
                            {STORE_NAMES[s.store_id]}
                        </Link>)}
                </div>
            </div>
        </section>
    );
};
