import * as request from './requester';

const baseUrl = 'https://api.rawg.io/api/games';

const API_KEY = '';

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
