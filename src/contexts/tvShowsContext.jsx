import React, { useState } from "react";

export const TVShowsContext = React.createContext(null);

const TVShowsContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);

  const [mustWatch, setMustWatch] = useState([]);

  const [myReviews, setMyReviews] = useState( {} );

  const addToFavourites = (tvShow) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(tvShow.id)) {
      updatedFavourites.push(tvShow.id);
    }
    setFavourites(updatedFavourites);
  };

  const removeFromFavourites = (tvShow) => {
    setFavourites(favourites.filter((tvId) => tvId !== tvShow.id));
  };

  const addToMustWatch = (tvShow) => {
    let updatedMustWatch = [...mustWatch];
    if (!mustWatch.includes(tvShow.id)) {
      updatedMustWatch.push(tvShow.id);
    }
    setMustWatch(updatedMustWatch);
  };

  const removeFromMustWatch = (tvShow) => {
    setMustWatch(mustWatch.filter((tvId) => tvId !== tvShow.id));
  };

  const addReview = (tvShow, review) => {
    setMyReviews( {...myReviews, [tvShow.id]: review } )
  };

  return (
    <TVShowsContext.Provider
      value={{
        favourites,
        mustWatch,
        addToFavourites,
        removeFromFavourites,
        addToMustWatch,
        removeFromMustWatch,
        addReview,
      }}
    >
      {props.children}
    </TVShowsContext.Provider>
  );
};

export default TVShowsContextProvider;