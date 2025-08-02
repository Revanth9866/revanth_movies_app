import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../slice/movieSlice';


export default function MovieCard({ movie }) {
  const { imdbID,Director, Title, Poster, Runtime, Writer, Genre, imdbRating } = movie;

  // const [isFavorite, setIsFavorite] = React.useState(false);
  const dispatch = useDispatch()

  const favorites = useSelector(state => state.movies.favorites);

  const isFavorite = favorites.includes(imdbID);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(imdbID));
  };


  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: 240,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: '0.3s ease-in-out',
          boxShadow: 1,
          '&:hover': {
            backgroundColor: 'rgba(63, 81, 181, 0.08)',// light gray background on hover
            boxShadow: 6,               // stronger shadow
            transform: 'scale(1.02)',   // subtle zoom
            cursor: 'pointer',
          },
        }}
      >
        <CardMedia
          sx={{
            height: 320,
            transition: '0.3s ease-in-out',
            '&:hover': {
              filter: 'brightness(0.9)',
            },
          }}
          image={Poster}
          title={Title}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {Title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            Directed by: {Director}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            Written by: {Writer}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Genre: <Chip label={Genre} />
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <IconButton
            onClick={handleFavoriteClick}
            sx={{ color: isFavorite ? 'red' : 'inherit' }}
          >
            <FavoriteIcon />
          </IconButton>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Duration: {Runtime}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center' }}>
            <StarIcon sx={{ fontSize: 16, marginRight: 0.3 }} />
            {imdbRating}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
