import RateReviewIcon from "@mui/icons-material/RateReview";
import React from "react";
import { Link } from "react-router-dom";

const WriteReview = ({ tvSHow }) => {
  return (
    <Link
      to={'/reviews/form'}
      state={{
        tvShowId: tvShow.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReview;