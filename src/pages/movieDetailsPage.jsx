import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovie } from "../api/tmdb-api";
import MovieDetails from "../components/movieDetails";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";

const MovieDetailsPage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <h2>Waiting for movie details</h2>
      )}
    </>
  );
};

export default MovieDetailsPage;