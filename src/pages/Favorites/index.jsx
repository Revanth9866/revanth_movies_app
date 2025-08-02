import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/movieCard';

const Favorites = () => {
  const favorites = useSelector(state => state.movies.favorites);
  const allMovies = useSelector(state => state.movies.movies);

  const favoriteMovies = allMovies.filter(movie =>
    favorites.includes(movie.imdbID)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Favorite Movies</h2>
      {favoriteMovies.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {favoriteMovies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
