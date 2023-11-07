import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import GenreSelector from './GenreSelector';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import { fetchMoviesByGenres, searchMovies } from './api';
import './App.css';

const genres = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
];

const App = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]); // Initialize movies as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenreChange = (selectedGenreIds) => {
    setSelectedGenres(selectedGenreIds);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let data;
        if (searchTerm) {
          data = await searchMovies(searchTerm);
        } else if (selectedGenres.length > 0) {
          data = await fetchMoviesByGenres(selectedGenres);
        }
        setMovies(data || []); // Ensure data is always an array or initialize as an empty array
      } catch (error) {
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedGenres, searchTerm]);

  return (
    <div className="App">
      <Header />
      <SearchBox handleSearch={handleSearch} />
      <GenreSelector genres={genres} handleGenreChange={handleGenreChange} />
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      <Footer />
    </div>
  );
};

export default App;
