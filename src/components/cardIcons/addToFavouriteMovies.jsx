import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToFavouriteMovies = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavouriteMovies(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouriteMovies;