import './games.css';

import { useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { GamesContext } from '../../contexts/GameContext';
import { GamesRender } from './GamesRender';

const Games = () => {
    const { platformName } = useParams();
    const { games, sectorHeading, setPlatform } = useContext(GamesContext);

    useEffect(() => {
        setPlatform(platformName);
    }, [setPlatform, platformName]);

    return (
        <section className="games-section">
            <div className="games-section-header">
                <h1 className="games-heading">{sectorHeading}</h1>
                {/* <form>
                    <input type="text" name="search" placeholder="Enter game name..." value="" />
                    <button>Search</button>
                </form> */}
            </div>
            <div className="games-section-main-wrapper">
                <div className="games-show-options">
                    <h3>Platforms</h3>
                    <ul className="games-show-options-list">
                        <li className="games-show-options-item">
                            <NavLink to="/games/pc">PC</NavLink>
                        </li>
                        <li className="games-show-options-item">
                            <NavLink to="/games/playstation5">PlayStation 5</NavLink>
                        </li>
                        <li className="games-show-options-item">
                            <NavLink to="/games/playstation4">PlayStation 4</NavLink>
                        </li>
                        <li className="games-show-options-item">
                            <NavLink to="/games/xbox-one">Xbox One</NavLink>
                        </li>
                        <li className="games-show-options-item">
                            <NavLink to="/games/nintendo-switch">Nintendo Switch</NavLink>
                        </li>
                        <li className="games-show-options-item">
                            <NavLink to="/games/ios">iOS</NavLink>
                        </li>
                        <li className="games-show-options-item">
                            <NavLink to="/games/android">Android</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="games-container-wrapper">
                    <div className="games-container">
                        {games.length ? (
                            games.map((x) => <GamesRender key={x.id} game={x} />)
                        ) : (
                            <h2>Not found any games with your search criteria.</h2>
                        )}
                    </div>

                    {/* <p className="games-pagination">
                        <a href="/games{{#if platformName}}/{{platformName}}{{/if}}?{{#if search}}search={{search}}&{{/if}}page={{prevPage}}">Prev</a>
                        Page page of pages
                        <a href="/games{{#if platformName}}/{{platformName}}{{/if}}?{{#if search}}search={{search}}&{{/if}}page={{nextPage}}">Next</a>
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default Games;