import React from "react";
import { MemoryRouter } from "react-router";
import TVShowHeader from "../components/headerTVShow";
import TVShowsContextProvider from "../contexts/tvShowsContext";
import SampleTVShow from "./sampleTVShow";

export default {
  title: "TV Show Details Page/TVShowHeader",
  component: TVShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVShowsContextProvider>{Story()}</TVShowsContextProvider>,
  ],
};

export const Basic = () => <TVShowHeader tvShow={SampleTVShow} />;

Basic.storyName = "Default";
