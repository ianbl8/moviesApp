import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const [mustWatchMovies, setMustWatchMovies] = useState([]);

  const [myMovieReviews, setMyMovieReviews] = useState( {} );

  const [myMovies, setMyMovies] = useState( {} );

  const addToFavouriteMovies = (movie) => {
    let updatedFavouriteMovies = [...favouriteMovies];
    if (!favouriteMovies.includes(movie.id)) {
      updatedFavouriteMovies.push(movie.id);
    }
    setFavouriteMovies(updatedFavouriteMovies);
  };

  const removeFromFavouriteMovies = (movie) => {
    setFavouriteMovies(favouriteMovies.filter((mId) => mId !== movie.id));
  };

  const addToMustWatchMovies = (movie) => {
    let updatedMustWatchMovies = [...mustWatchMovies];
    if (!mustWatchMovies.includes(movie.id)) {
      updatedMustWatchMovies.push(movie.id);
    }
    setMustWatchMovies(updatedMustWatchMovies);
    console.log(updatedMustWatchMovies);
  };

  const removeFromMustWatchMovies = (movie) => {
    setMustWatchMovies(mustWatchMovies.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyMovieReviews( {...myMovieReviews, [movie.id]: review } )
  };

  const addMovie = (movie) => {
    setMyMovies( {...myMovies, movie } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favouriteMovies,
        mustWatchMovies,
        myMovieReviews,
        addToFavouriteMovies,
        removeFromFavouriteMovies,
        addToMustWatchMovies,
        removeFromMustWatchMovies,
        addReview,
        addMovie,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;