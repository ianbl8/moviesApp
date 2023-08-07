import React from "react";
import NewMovieForm from "../components/newMovieForm";
import PageTemplate from "../components/templateNewMoviePage";

const AddNewMoviePage = (props) => {
  return (
    <PageTemplate>
      <NewMovieForm />
    </PageTemplate>
  );
};

export default AddNewMoviePage;
