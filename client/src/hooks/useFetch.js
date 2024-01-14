import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../units/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchDataFromApi(endpoint);
            setData(res);
        };

        fetchData(); // Immediately invoke the async function

        // No need to return a cleanup function, as there is none in this case
    }, [endpoint]);

    return { data };
};

export default useFetch;