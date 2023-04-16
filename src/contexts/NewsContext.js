import { createContext, useEffect, useState } from 'react';

import * as newsService from '../services/newsService';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [gamingNews, setGamingNews] = useState([]);
    const [techNews, setTechNews] = useState([]);

    const [mainArticle, setMainArticle] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const [resultGamingNews, resultTechNews] = await Promise.all([newsService.getGamingNews(), newsService.getTechNews()]);

            setMainArticle(resultGamingNews.slice(0, 1)[0]);
            setGamingNews(resultGamingNews.slice(1, -1));
            setTechNews(resultTechNews);
            setLoading(false);
        }
        )();

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
