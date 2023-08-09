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
import { getTVShowReviews } from "../../api/tmdb-api";
import { TVShowsContext } from "../../contexts/tvShowsContext";
import { excerpt } from "../../util";

const styles = {
  table: {
    minWidth: 550,
  },
};

export default function TVShowReviews({ tvShow }) {
  const [tvShowReviews, setTVShowReviews] = useState([]);

  useEffect(() => {
    getTVShowReviews(tvShow.id).then((tvShowReviews) => {
      setTVShowReviews(tvShowReviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tvId = tvShow.id;
  const { myTVShowReviews } = useContext(TVShowsContext);
  const myReview = myTVShowReviews[tvId];

  const renderStars = () => {
    let stars = [];
    for(let i = 0; i < myReview.rating; i++) {
      stars.push(<StarIcon />);
    };
    return stars;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="tvShowReviews table">
        <TableHead>
          <TableRow>
            <TableCell >Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
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
          {tvShowReviews.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.author}
              </TableCell>
              <TableCell >{excerpt(r.content)}</TableCell>
              <TableCell >
                <Link
                  to={`/tvShowReviews/tvshows/${r.id}`}
                  state={{
                      review: r,
                      tvShow: tvShow,
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