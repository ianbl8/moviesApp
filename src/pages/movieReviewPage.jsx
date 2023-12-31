import React from "react";
import { useLocation } from "react-router-dom";
import MovieReview from "../components/movieReview";
import PageTemplate from "../components/templateMoviePage";

const MovieReviewPage = (props) => {
  const { state : { movie, review } } = useLocation()
  return (
    <PageTemplate movie={movie}>
      <MovieReview review={review} />
    </PageTemplate>
  );
};

export default MovieReviewPage;