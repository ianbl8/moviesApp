import React from "react";
import { MemoryRouter } from "react-router";
import AddToFavouriteMovies from "../components/cardIcons/addToFavouriteMovies";
import MovieCard from "../components/movieCard";
import MoviesContextProvider from "../contexts/moviesContext";
import SampleMovie from "./sampleMovie";

export default {
  title: "Home Page/MovieCard",
  component: MovieCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <MovieCard
      movie={SampleMovie}
      action={(movie) => <AddToFavouriteMovies movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCard
      movie={sampleNoPoster}
      action={(movie) => <AddToFavouriteMovies movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
