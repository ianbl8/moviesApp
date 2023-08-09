import RateReviewIcon from "@mui/icons-material/RateReview";
import React from "react";
import { Link } from "react-router-dom";

const WriteTVShowReview = ({ tvShow }) => {
  return (
    <Link
      to={'/reviews/tvshows/form'}
      state={{
        tvShowId: tvShow.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteTVShowReview;