import { createContext, useEffect, useState } from 'react';

import * as newsService from '../services/newsService';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [mainArticle, setMainArticle] = useState({});
    const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     newsService.getNews().then((result) => {
    //         result.map((x) => {
    //             const date = new Date(x.date);
    //             x.date = date.toLocaleString('en-US', {
    //                 year: 'numeric',
    //                 month: 'short',
    //                 day: 'numeric',
    //                 hour: 'numeric',
    //                 minute: 'numeric',
    //             });
    //             return x;
    //         });

    //         setMainArticle(result.slice(0, 1)[0]);
    //         setNews(result.slice(1, -1));
    //         setLoading(false);
    //     });
    // }, []);

    return (
        <NewsContext.Provider
            value={{
                news,
                mainArticle,
                loading
            }}>
            {children}
        </NewsContext.Provider>
    );
};
