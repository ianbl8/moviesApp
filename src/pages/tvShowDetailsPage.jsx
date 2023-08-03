import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getTVShow } from "../api/tmdb-api";
import TVShowDetails from "../components/tvShowDetails";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateTVShowPage";

const TVShowDetailsPage = (props) => {
  const { id } = useParams();

  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShow", { id: id }],
    getTVShow
  );
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  return (
    <>
      {tvShow ? (
        <>
          <PageTemplate tvShow={tvShow}>
            <TVShowDetails tvShow={tvShow} />
          </PageTemplate>
        </>
      ) : (
        <h2>Waiting for TV show details</h2>
      )}
    </>
  );
};

export default TVShowDetailsPage;