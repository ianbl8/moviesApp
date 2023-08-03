import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import TVShowsContextProvider from "./contexts/tvShowsContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import TVHomePage from "./pages/tvHomePage";
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
        <TVShowsContextProvider>
          <Routes>
            <Route path="/tvshows" element={<TVHomePage />} />
          </Routes>
        </TVShowsContextProvider>
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);