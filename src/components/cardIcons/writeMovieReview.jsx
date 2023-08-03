import RateReviewIcon from "@mui/icons-material/RateReview";
import React from "react";
import { Link } from "react-router-dom";

const WriteMovieReview = ({ movie }) => {
  return (
    <Link
      to={'/reviews/movies/form'}
      state={{
        movieId: movie.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteMovieReview;