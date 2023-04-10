const TECH_NEWS_API_KEY = process.env.REACT_APP_TECH_NEWS;

const GAMING_NEWS_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_VIDEOGAMES_NEWS_API_HOST,
    },
};

export const getGamingNews = () => fetch('https://videogames-news2.p.rapidapi.com/videogames_news/recent', GAMING_NEWS_OPTIONS).then((res) => res.json());

export const getTechNews = () => fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${TECH_NEWS_API_KEY}`).then((res) => res.json());