import './games.css';

import { useEffect, useState } from 'react';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { GamesRender } from './GamesRender';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import * as gameService from '../../services/gameService';
import Spinner from '../Spinner/Spinner';

const PLATFORM_TITLES = {
    pc: 'PC',
    playstation5: 'PlayStation 5',
    playstation4: 'PlayStation 4',
    'xbox-one': 'Xbox-One',
    'nintendo-switch': 'Nintendo Swtich',
    ios: 'iOS',
    android: 'Android',
};

const Games = () => {
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState('');
    const [sectorHeading, setSectorHeading] = useState('');
    const [loading, setLoading] = useState(true);

    const { platformName } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const searchInputHandler = (e) => {
        setSearch(e.target.value);
    };

    const searchHandler = (e) => {
        e.preventDefault();
        setSearchParams({ search });
    };

    useEffect(() => {
        const fetchParams = { platform: platformName || '', search: searchParams.get('search') };
        setSearch(searchParams.get('search') || '');

        gameService.getAll(fetchParams).then((res) => {
            setGames(res.results);
            setLoading(false);

            const platformTitle = PLATFORM_TITLES[fetchParams.platform];

            if (fetchParams.search) {
                setSectorHeading(`Results for: ${fetchParams.search}`);
            } else {
                setSectorHeading(platformTitle || 'Trending Games');
            }
        });
    }, [platformName, searchParams]);

    return (
        <section className="games-section">
            <div className="games-section-header">
                <h1 className="games-heading">{sectorHeading}</h1>
                <form onSubmit={searchHandler}>
                    <input
                        className="games-search-input"
                        type="text"
                        name="search"
                        placeholder="World of Warcraft..."
                        value={search}
                        onChange={searchInputHandler}
                    />
                    <button className="games-search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
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
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="games-container-wrapper">
                        <div className="games-container">
                            {games.length ? (
                                games.map((x) => <GamesRender key={x.id} game={x} />)
                            ) : (
                                <h2>Not found any games with your search criteria.</h2>
                            )}
                        </div>
                        {games.length ? (
                            <div className="pagination">
                                <a href="#" className="prev">
                                    &laquo;
                                </a>
                                <a href="#" className="active">
                                    1
                                </a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#" className="next">
                                    &raquo;
                                </a>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Games;
