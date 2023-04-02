import './game.css';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as gameService from '../../../services/gameService';

export const Game = () => {
    const [game, setGame] = useState({});

    const { gameId } = useParams();

    useEffect(() => {
        gameService.getById(gameId).then((result) => {
            setGame(result);
        });
    }, [gameId]);

    return (
        <section className="oneGame-section">
            <img className="oneGame-background-img" src={game.background_image} alt="background-img" />
            <div className="oneGame-container">
                <Link className="oneGame-return-link" to="#">
                    Back
                </Link>
                <h1 className="oneGame-title">{game.name}</h1>
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
                            <video width="100%" height="600" controls src={game.trailer} autoplay>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};
