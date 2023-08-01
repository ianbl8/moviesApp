import React from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api/tmdb-api";
import AddToFavourites from "../components/cardIcons/addToFavourites";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";

const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);
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
        return <AddToFavourites movie={movie} />
      }}
    />
  );
};

export default HomePage;