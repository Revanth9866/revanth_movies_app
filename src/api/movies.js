import axios from 'axios';
import { setGenres, setImdbRating, setMovies } from '../slice/movieSlice';

const BaseUrl = 'https://raw.githubusercontent.com/toedter/movies-demo/master/backend/src/main/resources/static/movie-data/movies-250.json';

export const getMovies = () => async dispatch => {
  // const url = 'https://raw.githubusercontent.com/toedter/movies-demo/master/backend/src/main/resources/static/movie-data/movies-250.json';
  try {
    const response = await axios.get(BaseUrl);
    const movies = response.data.movies; // ✅ Extract only the array
    dispatch(setMovies(movies)); // ✅ Dispatch correct payload
  } catch (err) {
    console.error("Failed to fetch movies:", err);
  }
}


export const getMoviesByGenre = () => async dispatch => {
  try {
    const response = await axios.get(BaseUrl);
    const movies = response.data.movies;

    // Dispatch movies
    // dispatch(setGenres(movies));

    // Extract and deduplicate genres
    const allGenres = movies.flatMap(movie => movie.Genre);
    const individualGenres = [...new Set(allGenres.flatMap(g => g.split(',').map(s => s.trim())))].sort();

    dispatch(setGenres(individualGenres));
    // console.log("Unique genres:", individualGenres);
  } catch (err) {
    console.error("Failed to fetch movies:", err);
  }
};

export const getMoviesByRating = () => async dispatch => {
  try {
    const response = await axios.get(BaseUrl);
    const movies = response.data.movies;

    const allRatings = movies.flatMap(movie => movie.imdbRating );
    const individualRating = [...new Set(allRatings.flatMap(g => g.split(',').map(s => s.trim())))].sort();

    dispatch(setImdbRating(individualRating));

  } catch (err) {
    console.error("Failed to fetch movies:", err);
  }
};