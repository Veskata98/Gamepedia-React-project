import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Game = () => {
    const [game, setGame] = useState({});

    const { gameId } = useParams();

    const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
            .then((res) => res.json())
            .then(async (result) => {
                const genres = [];
                const availablePlatforms = [];
                const trailerResponse = await fetch(`https://api.rawg.io/api/games/${gameId}/movies?key=${API_KEY}`);
                const trailer = await trailerResponse.json();

                result.platforms.forEach((x) => {
                    availablePlatforms.push(x.platform.name);
                });

                result.genres.forEach((x) => {
                    genres.push(x.name);
                });

                result.availablePlatforms = availablePlatforms.join(', ');
                result.genres = genres.join(', ');

                if (trailer.count !== 0) {
                    result.trailer = trailer.results[0].data.max;
                }

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
