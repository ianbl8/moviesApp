import React from "react";
import { MemoryRouter } from "react-router";
import TVShowDetails from "../components/tvShowDetails";
import TVShowsContextProvider from "../contexts/tvShowsContext";
import SampleTVShow from "./sampleTVShow";

export default {
  title: "TV Show Details Page/TVShowDetails",
  component: TVShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVShowsContextProvider>{Story()}</TVShowsContextProvider>,
  ],
};

export const Basic = () => <TVShowDetails tvShow={SampleTVShow} />;

Basic.storyName = "Default";
