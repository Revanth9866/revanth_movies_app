import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genres: [],
    Rating: [],
    searchValue: '',
    selectedGenre: '',
    selectedRating: '',
    favorites: JSON.parse(localStorage.getItem('favorites')) || [], // loading from loacl storage
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setGenres: (state, action) => {
            state.genres = action.payload
        },
        setSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload
        },
        setImdbRating: (state, action) => {
            state.Rating = action.payload
        },
        setSelectedRating: (state, action) => {
            state.selectedRating = action.payload
        },
        // ⭐ Favorite logic
        toggleFavorite: (state, action) => {
            const movieId = action.payload;
            if (state.favorites.includes(movieId)) {
                state.favorites = state.favorites.filter(id => id !== movieId);
            } else {
                state.favorites.push(movieId);
            }
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        }

    },

}
);

export const { setMovies, setSearchValue, setGenres, setSelectedGenre, setImdbRating, setSelectedRating, toggleFavorite } = movieSlice.actions;
export default movieSlice.reducer;

