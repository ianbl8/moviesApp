import React from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api/tmdb-api";
import AddToFavouriteMovies from "../components/cardIcons/addToFavouriteMovies";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";

const MoviesHomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discoverMovies", getMovies);
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouriteMovies movie={movie} />
      }}
    />
  );
};

export default MoviesHomePage;