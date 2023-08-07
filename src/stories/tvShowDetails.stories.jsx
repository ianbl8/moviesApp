import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router";
import TVShowDetails from "../components/tvShowDetails";
import TVShowsContextProvider from "../contexts/tvShowsContext";
import SampleTVShow from "./sampleTVShow";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

export default {
  title: "TV Show Details Page/TVShowDetails",
  component: TVShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVShowsContextProvider>{Story()}</TVShowsContextProvider>,
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
};

export const Basic = () => <TVShowDetails tvShow={SampleTVShow} />;

Basic.storyName = "Default";
