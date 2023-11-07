import axios from 'axios';

const API_KEY = 'fe26b06e2c213166cd02853254e24b40';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMoviesByGenres = async (genreIds) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreIds.join(','),
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};


const searchMovies = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });
      return response.data.results;
    } catch (error) {
      throw error;
    }
  };
  
  export { fetchMoviesByGenres, searchMovies };
