import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
  const [favouriteTVShows, setFavouriteTVShows] = useState([]);

  const [mustWatchTVShows, setMustWatchTVShows] = useState([]);

  const [myReviewsTVShows, setMyReviewsTVShows] = useState( {} );

  const addToFavouriteTVShows = (tvShow) => {
    let updatedFavouriteTVShows = [...favouriteTVShows];
    if (!favouriteTVShows.includes(tvShow.id)) {
      updatedFavouriteTVShows.push(tvShow.id);
    }
    setFavouriteTVShows(updatedFavouriteTVShows);
  };

  const removeFromFavouriteTVShows = (tvShow) => {
    setFavouriteTVShows(favouriteTVShows.filter((tvId) => tvId !== tvShow.id));
  };

  const addToMustWatchTVShows = (tvShow) => {
    let updatedMustWatchTVShows = [...mustWatchTVShows];
    if (!mustWatchTVShows.includes(tvShow.id)) {
      updatedMustWatchTVShows.push(tvShow.id);
    }
    setMustWatchTVShows(updatedMustWatchTVShows);
  };

  const removeFromMustWatchTVShows = (tvShow) => {
    setMustWatchTVShows(mustWatchTVShows.filter((tvId) => tvId !== tvShow.id));
  };

  const addReview = (tvShow, review) => {
    setMyReviewsTVShows( {...myReviewsTVShows, [tvShow.id]: review } )
  };

  return (
    <TVShowsContext.Provider
      value={{
        favouriteTVShows,
        mustWatchTVShows,
        addToFavouriteTVShows,
        removeFromFavouriteTVShows,
        addToMustWatchTVShows,
        removeFromMustWatchTVShows,
        addReview,
      }}
    >
      {props.children}
    </TVShowsContext.Provider>
  );
};

export default TVShowsContextProvider;