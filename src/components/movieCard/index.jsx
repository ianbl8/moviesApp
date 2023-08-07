import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import StarRateIcon from "@mui/icons-material/StarRate";
import { AvatarGroup } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import placeholder from "../../images/film-poster-placeholder.png";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function MovieCard({ movie, action }) {
  const { favouriteMovies, addToFavouriteMovies, mustWatchMovies, addToMustWatchMovies } = useContext(MoviesContext);

  if (favouriteMovies.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false
  };

  if (mustWatchMovies.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false
  };

  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        avatar={
          movie.favourite && movie.mustWatch ? (
            <AvatarGroup>
              <Avatar sx={styles.avatar}>
                <FavoriteIcon />
              </Avatar>
              <Avatar sx={styles.avatar}>
                <PlaylistAddIcon />
              </Avatar>
            </AvatarGroup>
        ) : movie.favourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : movie.mustWatch ? (
            <Avatar sx={styles.avatar}>
              <PlaylistAddIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            <Link 
              to={`/movies/${movie.id}`}
              state={{
                movie: movie,
              }}
            >
              {movie.title}
            </Link>{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : placeholder
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}