import React from "react";
import { useQuery } from "react-query";
import { getTVShows } from "../api/tmdb-api";
import AddToFavouriteTVShows from "../components/cardIcons/addToFavouriteTVShows";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateTVShowListPage";

const TVHomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discoverTVShows", getTVShows);
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  const tvShows = data ? data.results : [];

  return (
    <PageTemplate
      title="Discover TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToFavouriteTVShows tvShow={tvShow} />
      }}
    />
  );
};

export default TVHomePage;