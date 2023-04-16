import './games.css';

import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import * as gameService from '../../services/gameService';

import GamesRender from './GamesRender';
import Spinner from '../Spinner/Spinner';

const gamesPerPage = 15;

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
    const [totalPages, setTotalPages] = useState();

    const [currentPage, setCurrentPage] = useState(1);

    const [search, setSearch] = useState('');
    const [sectorHeading, setSectorHeading] = useState('');
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const { platformName } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setLoading(true);
        if (!platformName && !searchParams.get('search') && (!searchParams.get('page') || searchParams.get('page') === "1")) {
            gameService.trendingGames()
                .then((res) => {
                    setGames(res.results);
                    setGamesCount(898808);
                    setLoading(false);
                    setSectorHeading('Trending Games');
                    setCurrentPage(Number(searchParams.get('page')) || 1);
                    setTotalPages(Math.ceil(res.count / gamesPerPage));
                })
            return;
        }

        const fetchParams = { platform: platformName || '', search: searchParams.get('search'), page: searchParams.get('page') };
        setSearch(searchParams.get('search') || '');

        gameService.getAll(fetchParams)
            .then((res) => {
                setGamesCount(res.count);
                setGames(res.results);
                setCurrentPage(Number(searchParams.get('page')) || 1);
                setTotalPages(Math.ceil(res.count / gamesPerPage));

                const platformTitle = PLATFORM_TITLES[fetchParams.platform];

                if (fetchParams.search) {
                    setSectorHeading(`Results for: ${fetchParams.search}`);
                } else {
                    setSectorHeading(platformName ? `${platformTitle} Games` : 'Trending Games');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error(error.message);
                navigate('/games');
            })
    }, [platformName, searchParams, navigate]);

    const searchInputHandler = (e) => {
        setSearch(e.target.value);
    };

    const searchHandler = (e) => {
        e.preventDefault();
        setSearchParams((state) => {
            return { ...state, search };
        });
    };

    const getLink = (page) => {
        return `/games/${platformName ? platformName : ''}?page=${page}${searchParams.get('search') ? `&search=${searchParams.get('search')}` : ''}`;
    }

    const getPageLink = (page, label) => {
        const isActive = page === currentPage;
        return (
            <Link to={getLink(page)} key={label} className={isActive ? 'active' : ''}>
                {label}
            </Link>
        );
    }

    const getPages = () => {
        const pages = [];
        const maxPagesToShow = 3;

        for (let i = currentPage - 1; i >= currentPage - maxPagesToShow && i >= 1; i--) {
            pages.unshift(getPageLink(i, i));
        }

        pages.push(getPageLink(currentPage, currentPage));

        for (let i = currentPage + 1; i <= currentPage + maxPagesToShow && i <= totalPages; i++) {
            pages.push(getPageLink(i, i));
        }

        if (pages[0] && pages[0].props.children !== 1) {
            pages.unshift(<span key="ellipsis1">...</span>);
        }
        if (pages[pages.length - 1] && pages[pages.length - 1].props.children !== totalPages) {
            pages.push(<span key="ellipsis2">...</span>);
        }

        return pages;
    }

    return (
        <section className="games-section">
            {loading
                ? <Spinner />
                : (
                    <>
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
                            <div className="games-container-wrapper">
                                <div className="games-container">
                                    {games.length ? (
                                        games.map((x) => <GamesRender key={x.id} game={x} />)
                                    ) : (
                                        <h2>Not found any games with your search criteria.</h2>
                                    )}
                                </div>
                                {gamesCount > 15 ? (
                                    <div className='pagination'>
                                        {currentPage > 1 &&
                                            <Link
                                                to={getLink(currentPage - 1)}
                                                className="prev"
                                            >
                                                &laquo;
                                            </Link>
                                        }

                                        {getPages()}

                                        {currentPage !== totalPages &&
                                            <Link
                                                disabled={currentPage === totalPages}
                                                to={getLink(currentPage + 1)}
                                                className="next"
                                            >
                                                &raquo;
                                            </Link>
                                        }
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </>
                )}
        </section>
    );
};

export default Games;
