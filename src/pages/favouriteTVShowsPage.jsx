import React, { useContext } from "react";
import { useQueries } from "react-query";
import { getTVShow } from "../api/tmdb-api";
import RemoveFromFavouriteTVShows from "../components/cardIcons/removeFromFavouriteTVShows";
import WriteTVShowReview from "../components/cardIcons/writeTVShowReview";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateTVShowListPage";
import { TVShowsContext } from "../contexts/tvShowsContext";

const FavouriteTVShowsPage = (props) => {
	const { favouriteTVShows: tvShowIds } = useContext(TVShowsContext);

  // Create an array of queries and run them in parallel.
  const favouriteTVShowQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTVShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTVShowQueries.find((tv) => tv.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTVShowQueries.map((q) => q.data);

  return (
		<PageTemplate
			title="Favourite TV Shows"
			tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromFavouriteTVShows tvShow={tvShow} />
            <WriteTVShowReview tvShow={tvShow} />
          </>
        );
      }}
		/>
	);
};

export default FavouriteTVShowsPage;