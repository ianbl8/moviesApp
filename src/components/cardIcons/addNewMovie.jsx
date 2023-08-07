import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from "react";
import { Link } from "react-router-dom";

const AddNewMovie = ({ movie }) => {
  return (
    <Link
      to={'/movies/new'}
    >
      <AddCircleOutlineIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default AddNewMovie;