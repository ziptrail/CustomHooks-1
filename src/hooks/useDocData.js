import {useState, useEffect} from "react";

export const useDocData = (url) => {
    const [docData, setDocData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(url)
                .then(res => res.json())
                .then(data => setDocData(data));
        }
        fetchData();
    }, []);

    return [docData];
}