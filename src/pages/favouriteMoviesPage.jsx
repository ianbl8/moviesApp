import React, { useContext } from "react";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";

const FavouriteMoviesPage = (props) => {
	const { favouriteMovies: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => q.data);

  return (
		<PageTemplate
			title="Favourite Movies"
			movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavourites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
		/>
	);
};

export default FavouriteMoviesPage;