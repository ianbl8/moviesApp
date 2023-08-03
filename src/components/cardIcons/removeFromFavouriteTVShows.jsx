import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import React, { useContext } from "react";
import { TVShowsContext } from "../../contexts/tvShowsContext";

const RemoveFromFavouriteTVShows = ({ tvShow }) => {
  const context = useContext(TVShowsContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromFavouriteTVShows(tvShow);
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

export default RemoveFromFavouriteTVShows;