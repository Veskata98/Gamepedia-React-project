import { createContext, useEffect, useState } from 'react';

import * as newsService from '../services/newsService';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [gamingNews, setGamingNews] = useState([]);
    const [techNews, setTechNews] = useState([]);

    const [mainArticle, setMainArticle] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const [resultGamingNews, resultTechNews] = await Promise.all([newsService.getGamingNews(), newsService.getTechNews()]);

            // resultGamingNews.map(x => {
            //     const date = new Date(x.date);
            //     x.date = date.toLocaleString('en-US', {
            //         year: 'numeric',
            //         month: 'short',
            //         day: 'numeric',
            //         hour: 'numeric',
            //         minute: 'numeric',
            //     });
            //     return x;
            // })

            setMainArticle(resultGamingNews.slice(0, 1)[0]);
            setGamingNews(resultGamingNews.slice(1, -1));
            setTechNews(resultTechNews);
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <NewsContext.Provider
            value={{
                gamingNews,
                techNews,
                mainArticle,
                loading
            }}>
            {children}
        </NewsContext.Provider>
    );
};
