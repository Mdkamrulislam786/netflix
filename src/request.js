const API_KEY = "72790eb61452dfaa89ef396d8f0b3284";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=23`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
};

export default requests;
