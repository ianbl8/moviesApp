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
import { StartSharp } from '@mui/icons-material';

const styles = {
  table: {
    minWidth: 550,
  },
};

export default function MovieReviews({ movie }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movie.id).then((reviews) => {
      setReviews(reviews);
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
      <Table sx={styles.table} aria-label="reviews table">
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
          {reviews.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.author}
              </TableCell>
              <TableCell>{excerpt(r.content)}</TableCell>
              <TableCell align="center">
                <Link
                  to={`/reviews/movies/${r.id}`}
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