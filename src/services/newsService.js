const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_VIDEOGAMES_NEWS_API_HOST,
    },
};

const baseUrl = 'https://videogames-news2.p.rapidapi.com/videogames_news';

const endpoints = {
    platformNews: '/',
    allNews: '/recent',
};

export const getNews = () => fetch(baseUrl + endpoints.allNews, OPTIONS).then((res) => res.json());
