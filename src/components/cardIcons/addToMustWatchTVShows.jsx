import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import React, { useContext } from "react";
import { TVShowsContext } from "../../contexts/tvShowsContext";

const AddToMustWatchTVShows = ({ tvShow }) => {
  const context = useContext(TVShowsContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToMustWatchTVShows(tvShow);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchTVShows;