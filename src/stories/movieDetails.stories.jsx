import React from "react";
import { MemoryRouter } from "react-router";
import MovieDetails from "../components/movieDetails";
import MoviesContextProvider from "../contexts/moviesContext";
import SampleMovie from "./sampleData";

export default {
  title: "Movie Details Page/MovieDetails",
  component: MovieDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <MovieDetails movie={SampleMovie} />;

Basic.storyName = "Default";
