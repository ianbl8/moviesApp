import React from "react";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToMustWatch from "../components/cardIcons/addToMustWatch";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  const movies = data ? data.results : [];

  return (
		<PageTemplate
			title="Upcoming Movies"
			movies={movies}
      action={(movie) => {
        return <AddToMustWatch movie={movie} />
      }}
		/>
	);
};

export default UpcomingMoviesPage;