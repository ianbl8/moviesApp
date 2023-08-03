import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavouriteMovies = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromFavouriteMovies(movie);
  };

return (
  <IconButton
    aria-label="remove from favorites"
    onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
  );
};

export default RemoveFromFavouriteMovies;