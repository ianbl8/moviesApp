import Grid from "@mui/material/Grid";
import React from "react";
import { MemoryRouter } from "react-router";
import AddToFavouriteMovies from "../components/cardIcons/addToFavouriteMovies";
import MovieList from "../components/movieList";
import MoviesContextProvider from "../contexts/moviesContext";
import SampleMovie from "./sampleMovie";

export default {
  title: "Home Page/MovieList",
  component: MovieList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const movies = [
    { ...SampleMovie, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
    { ...SampleMovie, id: 4 },
    { ...SampleMovie, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <MovieList
        movies={movies}
        action={(movie) => <AddToFavouriteMovies movie={movie} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
