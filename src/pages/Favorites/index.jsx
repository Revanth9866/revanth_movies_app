// src/pages/FavoriteComponent/index.jsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movies";
import MovieCard from "../../components/movieCard";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

const FavoriteComponent = () => {
  const dispatch = useDispatch();
  const { movies, favorites } = useSelector((state) => state.movies);

  // Fetch movies if not already loaded
  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovies());
    }
  }, [dispatch, movies]);

  // Map favorite IDs to full movie objects
  const favoriteMovies = movies.filter((movie) =>
    favorites.includes(movie.imdbID)
  );

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Favorite Movies
        </Typography>
        {favoriteMovies.length > 0 ? (
          <Grid container spacing={2}>
            {favoriteMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No favorites added yet.</Typography>
        )}
      </Box>
    </>
  );
};

export default FavoriteComponent;
