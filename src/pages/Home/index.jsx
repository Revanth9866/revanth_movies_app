import { useEffect } from "react";
import Navbar from "../../components/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getMoviesByGenre, getMoviesByRating } from "../../api/movies";
import MovieCard from "../../components/movieCard";
import { Box, Grid } from "@mui/material";
import { getMoviesBySearch } from "../../utils/getMoviesBySearch";

const Home = () => {

    const dispatch = useDispatch();
    const { movies, searchValue, selectedGenre, selectedRating } = useSelector(state => state.movies);

    const filterByMovieName = getMoviesBySearch(movies, searchValue);

    // ✅ Filter by genre
    const filteredMovies = selectedGenre ? filterByMovieName.filter(movie => movie.Genre?.toLowerCase().includes(selectedGenre.toLowerCase())
    )
        : filterByMovieName;

    const filterByRating = selectedRating ? filteredMovies.filter(movie =>
        movie.imdbRating >= (selectedRating)
            
    ) : filteredMovies


    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch])

    useEffect(() => {
        dispatch(getMoviesByGenre());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getMoviesByRating());
    }, [dispatch]);


    return (
        <>
            <Navbar />
            <Box sx={{ flexGrow: 1, marginTop: 2 }}>
                <Grid container spacing={2} >
                    {filterByRating.map((movie) => (
                        < MovieCard key={movie.id} movie={movie} />
                    ))}
                </Grid>

            </Box>
        </>
    )
}

export default Home;