import * as request from './thirdPartyAPI';

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
    getAll: (fetchParams) => {
        if (fetchParams.platform && fetchParams.search) {
            const platformId = PLATFORMS[fetchParams.platform];
            return `?key=${API_KEY}&page_size=15${typeof platformId === 'number' ? `&platforms=${platformId}` : ''}&search=${fetchParams.search}`;
        } else if (fetchParams.platform) {
            const platformId = PLATFORMS[fetchParams.platform];
            return `?key=${API_KEY}&page_size=15${typeof platformId === 'number' ? `&platforms=${platformId}` : ''}`;
        } else if (fetchParams.search) {
            return `?key=${API_KEY}&page_size=15&search=${fetchParams.search}`;
        } else {
            return `?key=${API_KEY}&page_size=15`;
        }
    },
};

export const getAll = async (fetchParams) => await request.get(baseUrl + endpoints.getAll(fetchParams));

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

            result.description_raw = result.description_raw.replace(/#+/gim, '');
            result.description_raw = result.description_raw.replace(/&#39/gim, "'");

            return result;
        });
};
