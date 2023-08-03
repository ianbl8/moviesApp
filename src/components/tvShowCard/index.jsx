import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import StarRateIcon from "@mui/icons-material/StarRate";
import VideocamIcon from '@mui/icons-material/Videocam';
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
import { TVShowsContext } from "../../contexts/tvShowsContext";
import placeholder from "../../images/film-poster-placeholder.png";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function TVShowCard({ tvShow, action }) {
  const { favouriteTVShows, addToFavouriteTVShows, mustWatchTVShows, addToMustWatchTVShows } = useContext(TVShowsContext);

  if (favouriteTVShows.find((id) => id === tvShow.id)) {
    tvShow.favourite = true;
  } else {
    tvShow.favourite = false
  };

  if (mustWatchTVShows.find((id) => id === tvShow.id)) {
    tvShow.mustWatch = true;
  } else {
    tvShow.mustWatch = false
  };

  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={styles.header}
        avatar={
          tvShow.favourite && tvShow.mustWatch ? (
            <AvatarGroup>
              <Avatar sx={styles.avatar}>
                <FavoriteIcon />
              </Avatar>
              <Avatar sx={styles.avatar}>
                <PlaylistAddIcon />
              </Avatar>
            </AvatarGroup>
        ) : tvShow.favourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : tvShow.mustWatch ? (
            <Avatar sx={styles.avatar}>
              <PlaylistAddIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {tvShow.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : placeholder
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <VideocamIcon fontSize="small" />
              {tvShow.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvShow.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(tvShow)}
        <Link to={`/tvShows/${tvShow.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}