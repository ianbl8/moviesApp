import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getTVShow } from "../api/tmdb-api";
import TVShowReviewForm from "../components/tvShowReviewForm";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateTVShowPage";

const AddTVShowReviewPage = (props) => {
  const location = useLocation();
  const { tvShowId } = location.state;
  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["tvShow", { id: tvShowId }],
    getTVShow
  );
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  return (
    <PageTemplate tvShow={tvShow}>
      <TVShowReviewForm tvShow={tvShow} />
    </PageTemplate>
  );
};

export default AddTVShowReviewPage;
