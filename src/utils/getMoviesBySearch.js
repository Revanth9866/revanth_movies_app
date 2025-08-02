export const getMoviesBySearch = (movies, value) => {
  if (!value || value.trim() === '') return movies;

  return movies?.filter((movie) =>
    typeof movie?.Title === 'string' &&
    (
      movie.Title.toLowerCase().includes(value.toLowerCase()) ||
      movie.Director.toLowerCase().includes(value.toLowerCase()) ||
      movie.Writer.toLowerCase().includes(value.toLowerCase())
    )
  );
};
