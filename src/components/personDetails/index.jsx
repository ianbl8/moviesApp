import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getPersonCredits } from "../../api/tmdb-api";
import Spinner from "../spinner";

const styles = {  
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
};

const PersonDetails = ( {person} ) => {
  const { data, error, isLoading, isError } = useQuery(
    ["personCredits", { id: person.id }],
    getPersonCredits
  );
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  const cast = data.cast;
  const crew = data.crew;

  return (
    <>
      {person.birthday ? 
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Born" sx={styles.chipLabel} color="primary" />
        </li>
        <li>
          <Chip label={`${person.birthday}`} />
        </li>
      </Paper>
      : null}
      {person.deathday ? 
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Died" sx={styles.chipLabel} color="primary" />
        </li>
        <li>
          <Chip label={`${person.deathday}`} />
        </li>
      </Paper>
      : null}

      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>

      <br />
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Movies" sx={styles.chipLabel} color="primary" />
        </li>
        {cast.map((c) => (
          c.media_type == "movie" ?
          <li>
            <Link 
              to={`/movies/${c.id}`}
              state={{
                tvshow: c,
              }}
            >
            <Chip label={`${c.title}`} />
            </Link>
          </li>: null
        ))}
      </Paper>
    
    <br />
    <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="TV Shows" sx={styles.chipLabel} color="primary" />
        </li>
        {cast.map((c) => (
          c.media_type == "tv" ?
          <li>
            <Link 
              to={`/tvshows/${c.id}`}
              state={{
                tvshow: c,
              }}
            >
            <Chip label={`${c.name}`} />
            </Link>
          </li>: null
        ))}
      </Paper>
    
    </>
  );
};

export default PersonDetails;