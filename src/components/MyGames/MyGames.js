import './myGames.css';

import { useEffect, useState } from "react";

import * as request from '../../services/expressAPI';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MyGamesCard from './MyGamesCard';
import Spinner from '../Spinner/Spinner';

const MyGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        request.get('/api/games/myGames')
            .then((data) => {
                setGames(data);
                setLoading(false);
            })
    }, []);


    const removeGameHandler = (gameId) => {
        setLoading(true);
        request.del(`/api/games/myGames/${gameId}/remove`)
            .then((data) => {
                setGames(data);
                setLoading(false);
            });
    }

    return (
        <div className='myGames-section'>
            {loading
                ? <Spinner />
                : <>
                    <h1 className='myGames-heading'>
                        My games
                    </h1>
                    <div className='myGames-container'>
                        {games.length
                            ? games.map(x => <MyGamesCard key={x.id} game={x} removeGameHandler={removeGameHandler} />)
                            : <h2 className='myGames-nothing'>Sorry, but it looks like your games favorites page is empty at the moment. Don't worry though, you can start adding some of your favorite games by clicking the <FontAwesomeIcon icon={faStar} size="lg" style={{ color: '#ffec00' }} /> icon on any game's page. Happy gaming!</h2>
                        }
                    </div>
                </>
            }

        </div>
    );
}

export default MyGames;