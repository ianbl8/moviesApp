import { action } from "@storybook/addon-actions";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router";
import FilterCard from "../components/filterTVShowsCard";

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
  title: "TV Home Page/FilterTVShowsCard",
  component: FilterCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
};

export const Basic = () => {
  return <FilterCard onUserInput={action("filter input")} />;
};
Basic.storyName = "Default";
