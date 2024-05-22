const apiKey = import.meta.env.VITE_API_KEY;


export const fetchMovies = async (query: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?&query=${query}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
    } catch (err) {
        console.error(err);
    }
};