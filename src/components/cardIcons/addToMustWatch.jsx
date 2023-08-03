import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToMustWatchMovies = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToMustWatchMovies(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchMovies;