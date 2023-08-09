import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import TVShowsContextProvider from "./contexts/tvShowsContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import AddNewMoviePage from "./pages/addNewMoviePage";
import AddTVShowReviewPage from "./pages/addTVShowReviewPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouriteTVShowsPage from "./pages/favouriteTVShowsPage";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import PersonDetailsPage from "./pages/personDetailsPage";
import TVHomePage from "./pages/tvHomePage";
import TVShowDetailsPage from "./pages/tvShowDetailsPage";
import TVShowReviewPage from "./pages/tvShowReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
          <MoviesContextProvider>
            <TVShowsContextProvider>
              <Routes>
                <Route path="/reviews/movies/form" element={<AddMovieReviewPage/>} />
                <Route path="/reviews/tvshows/form" element={<AddTVShowReviewPage/>} />
                <Route path="/reviews/movies/:id" element={<MovieReviewPage />} />
                <Route path="/reviews/tvshows/:id" element={<TVShowReviewPage />} />
                <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/movies/new" element={<AddNewMoviePage />} />
                <Route path="/movies/:id" element={<MovieDetailsPage />} />
                <Route path="/tvshows/favourites" element={<FavouriteTVShowsPage />} />
                <Route path="/tvshows/:id" element={<TVShowDetailsPage />} />
                <Route path="/tvshows" element={<TVHomePage />} />
                <Route path="/person/:id" element={<PersonDetailsPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </TVShowsContextProvider>
          </MoviesContextProvider>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);