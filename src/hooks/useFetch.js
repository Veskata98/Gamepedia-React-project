import { useEffect } from "react";

const useFetch = (url) => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const result = await response.json();

            return result;
        }

        fetchData(url);
    }, [url]);
};

export default useFetch;