import { createContext, useEffect, useState } from 'react';

import * as gameService from '../services/gameService';

const PLATFORM_TITLES = {
    pc: 'PC',
    playstation5: 'PlayStation 5',
    playstation4: 'PlayStation 4',
    'xbox-one': 'Xbox-One',
    'nintendo-switch': 'Nintendo Swtich',
    ios: 'iOS',
    android: 'Android',
};

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [sectorHeading, setSectorHeading] = useState('');

    const [platform, setPlatform] = useState();

    useEffect(() => {
        gameService.getAll(platform).then((res) => {
            setGames(res.results);

            const platformTitle = PLATFORM_TITLES[platform];
            setSectorHeading(platformTitle || 'Top Rated Games');
        });
    }, [platform]);

    return <GamesContext.Provider value={{ games, sectorHeading, setPlatform }}>{children}</GamesContext.Provider>;
};
