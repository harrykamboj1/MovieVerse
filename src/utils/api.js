import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTE2MDM2N2I4MmNhZjllNTdhZDg1NjcwZGZlN2MxMiIsInN1YiI6IjY0OGQ5YTFlYzNjODkxMDBlYjMyNmRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eXTY4Nyhe6nzelerCGpKh0LnbBSWCzJt8PInfuEUa9A";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params, 
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};