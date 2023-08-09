import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToMustWatchMovies from "../components/cardIcons/addToMustWatchMovies";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage = (props) => {

  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => { 
    setPage(value);
  }; 

  const { data, error, isLoading, isError } = useQuery(["upcomingMovies", page], () => getUpcomingMovies(page));
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  const movies = data ? data.results : [];

  return (
		<>
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToMustWatchMovies movie={movie} />
        }}
      />
      <Stack spacing={2}>
        <Pagination size="large" color="primary" count={200} page={page} onChange={handlePageChange}/>
      </Stack>
    </>
	);
};

export default UpcomingMoviesPage;