import React from "react";
import { MemoryRouter } from "react-router";
import TVShowsHeader from "../components/headerTVShowList";
import TVShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "TV Home Page/TVShowPageHeader",
  component: TVShowsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVShowsContextProvider>{Story()}</TVShowsContextProvider>,
  ],
};

export const Basic = () => <TVShowsHeader title="Discover TV Shows" />;

Basic.storyName = "Default";
