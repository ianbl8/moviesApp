import Grid from "@mui/material/Grid";
import React from "react";
import TVShowCard from "../tvShowCard/";

const TVShowList = ({ tvShows, action }) => {
  let tvShowCards = tvShows.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVShowCard key={t.id} tvShow={t} action={action} />
    </Grid>
  ));
  return tvShowCards;
};

export default TVShowList;