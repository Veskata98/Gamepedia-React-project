import * as request from './expressAPI';

export const getGamingNews = async () => {
    return await request.get('/api/news/gamingNews');
};

export const getTechNews = async () => {
    return await request.get('/api/news/techNews');
};