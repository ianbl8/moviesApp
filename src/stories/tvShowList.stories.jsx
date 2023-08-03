import Grid from "@mui/material/Grid";
import React from "react";
import { MemoryRouter } from "react-router";
import AddToFavouriteTVShows from "../components/cardIcons/addToFavouriteTVShows";
import TVShowList from "../components/tvShowList";
import TVShowsContextProvider from "../contexts/tvShowsContext";
import SampleTVShow from "./sampleTVShow";

export default {
  title: "TV Home Page/TVShowList",
  component: TVShowList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVShowsContextProvider>{Story()}</TVShowsContextProvider>,
  ],
};

export const Basic = () => {
  const tvShows = [
    { ...SampleTVShow, id: 1 },
    { ...SampleTVShow, id: 2 },
    { ...SampleTVShow, id: 3 },
    { ...SampleTVShow, id: 4 },
    { ...SampleTVShow, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TVShowList
        tvShows={tvShows}
        action={(tvShow) => <AddToFavouriteTVShows tvShow={tvShow} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
