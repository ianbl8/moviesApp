import StarIcon from '@mui/icons-material/Star';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieReviews } from "../../api/tmdb-api";
import { MoviesContext } from "../../contexts/moviesContext";
import { excerpt } from "../../util";

const styles = {
  table: {
    minWidth: 550,
  },
};

export default function MovieReviews({ movie }) {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movie.id).then((movieReviews) => {
      setMovieReviews(movieReviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mId = movie.id;
  const { myMovieReviews } = useContext(MoviesContext);
  const myReview = myMovieReviews[mId];

  const renderStars = () => {
    let stars = [];
    for(let i = 0; i < myReview.rating; i++) {
      stars.push(<StarIcon />);
    };
    return stars;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="movieReviews table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="center">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myReview ?
            <TableRow key={myReview.author}>
              <TableCell component="th" scope="row">
                {myReview.author}
              </TableCell>
              <TableCell>{myReview.review}</TableCell>
              <TableCell width="120">
                {renderStars()}
              </TableCell>
            </TableRow>
          : null}
          {movieReviews.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.author}
              </TableCell>
              <TableCell>{excerpt(r.content)}</TableCell>
              <TableCell align="center">
                <Link
                  to={`/movieReviews/movies/${r.id}`}
                  state={{
                      review: r,
                      movie: movie,
                  }}
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}