import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import React, { useContext } from "react";
import { TVShowsContext } from "../../contexts/tvShowsContext";

const AddToFavouriteTVShows = ({ tvShow }) => {
  const context = useContext(TVShowsContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavouriteTVShows(tvShow);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouriteTVShows;