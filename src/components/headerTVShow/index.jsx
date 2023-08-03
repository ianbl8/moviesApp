import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { AvatarGroup, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { TVShowsContext } from "../../contexts/tvShowsContext";

const styles = {
  root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  card: {
    border: "none",
    boxShadow: "none",
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const TVShowHeader = (props ) => {
  const tvShow = props.tvShow;
  
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
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Card sx={styles.card}>
        <CardHeader
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
        />
      </Card>

      <Typography variant="h4" component="h3">
        {tvShow.name}{"   "}
        <a href={tvShow.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TVShowHeader;