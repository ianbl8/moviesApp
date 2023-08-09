import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getTVShows } from "../api/tmdb-api";
import AddToFavouriteTVShows from "../components/cardIcons/addToFavouriteTVShows";
import AddToMustWatchTVShows from "../components/cardIcons/addToMustWatchTVShows";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateTVShowListPage";

const TVHomePage = (props) => {

  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => { 
    setPage(value);
  }; 

  const { data, error, isLoading, isError } = useQuery(["discoverTVShows", page], () => getTVShows(page));
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  const tvShows = data ? data.results : [];

  return (
    <>
      <PageTemplate
        title="Discover TV Shows"
        tvShows={tvShows}
        action={(tvShow) => {
          return (
            <>
              <AddToFavouriteTVShows tvShow={tvShow} />
              <AddToMustWatchTVShows tvShow={tvShow} />
            </>
          )
        }}
      />
      <Stack spacing={2}>
        <Pagination size="large" color="primary" count={200} page={page} onChange={handlePageChange}/>
      </Stack>
    </>
  );
};

export default TVHomePage;