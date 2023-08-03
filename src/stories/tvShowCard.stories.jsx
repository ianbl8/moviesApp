import React from "react";
import { MemoryRouter } from "react-router";
import AddToFavouriteTVShows from "../components/cardIcons/addToFavouriteTVShows";
import TVShowCard from "../components/tvShowCard";
import TVShowContextProvider from "../contexts/tvShowsContext";
import SampleTVShow from "./sampleTVShow";

export default {
  title: "Home Page/TVShowCard",
  component: TVShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVShowContextProvider>{Story()}</TVShowContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TVShowCard
      tvShow={SampleTVShow}
      action={(tvShow) => <AddToFavouriteTVShows tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTVShow, poster_path: undefined };
  return (
    <TVShowCard
      tvShow={sampleNoPoster}
      action={(tvShow) => <AddToFavouriteTVShows tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Exceptional.storyName = "exception";
