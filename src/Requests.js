const API_KEY = "b28ef99f0498b8eada29153bc5d440b3";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
};

export default requests;