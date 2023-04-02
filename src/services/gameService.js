import * as request from './requester';

const baseUrl = 'https://api.rawg.io/api/games';

const API_KEY = process.env.REACT_APP_RAWG_GAMING_API_KEY;

const PLATFORMS = {
    pc: 4,
    playstation5: 187,
    playstation4: 18,
    'xbox-one': 1,
    'nintendo-switch': 7,
    ios: 3,
    android: 21,
};

const endpoints = {
    getAll: (platform) => {
        const platformId = PLATFORMS[platform];
        return `?key=${API_KEY}&page_size=15${typeof platformId === 'number' ? `&platforms=${platformId}` : ''}`;
    },
};

export const getAll = async (platform) => await request.get(baseUrl + endpoints.getAll(platform));

export const getById = async (gameId) => {
    return fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
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

            return result;
        });
};
