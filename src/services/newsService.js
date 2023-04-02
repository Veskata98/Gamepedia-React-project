const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': '',
    },
};

const baseUrl = 'https://videogames-news2.p.rapidapi.com/videogames_news';

const endpoints = {
    platformNews: '/',
    allNews: '/recent',
};

export const getNews = () => fetch(baseUrl + endpoints.allNews, OPTIONS).then((res) => res.json());
