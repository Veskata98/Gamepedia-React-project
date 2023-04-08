import './games.css';

import { useEffect, useState } from 'react';
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom';
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
    const [gamesCount, setGamesCount] = useState();
    const [currentPage, setCurrentPage] = useState(1);
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
        setSearchParams((state) => {
            return { ...state, search };
        });
    };

    useEffect(() => {
        const fetchParams = { platform: platformName || '', search: searchParams.get('search') };
        setSearch(searchParams.get('search') || '');

        gameService.getAll(fetchParams).then((res) => {
            setGamesCount(res.count);
            setGames(res.results);
            setLoading(false);

            const platformTitle = PLATFORM_TITLES[fetchParams.platform];

            if (fetchParams.search) {
                setSectorHeading(`Results for: ${fetchParams.search}`);
            } else {
                setSectorHeading(`${platformTitle} Games` || 'Trending Games');
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
                                <Link
                                    disabled={true}
                                    to={`/games/${platformName ? platformName : ''}?page=${(searchParams.get('page') || 1) - 1}`}
                                    className="prev">
                                    &laquo;
                                </Link>
                                <a href="#" className="active">
                                    {searchParams.get('page') || 1}
                                </a>
                                <a href="#">{Number(searchParams.get('page') || 1) + 1}</a>
                                <a href="#">{Number(searchParams.get('page') || 1) + 2}</a>
                                <a href="#">{Number(searchParams.get('page') || 1) + 3}</a>
                                <a href="#">{Number(searchParams.get('page') || 1) + 4}</a>
                                <span>...</span>
                                <a href="#">{Math.ceil(gamesCount / 15)}</a>
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
