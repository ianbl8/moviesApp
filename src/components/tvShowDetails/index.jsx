import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NavigationIcon from "@mui/icons-material/Navigation";
import StarRate from "@mui/icons-material/StarRate";
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import Chip from "@mui/material/Chip";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import React, { useState } from "react";import { useQuery } from "react-query";
import { getTVShowCredits } from "../../api/tmdb-api";
import Spinner from "../spinner";
import TVShowReviews from "../tvShowReviews";

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
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const TVShowDetails = ( {tvShow} ) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data , error, isLoading, isError } = useQuery(
    ["tvShowCredits", { id: tvShow.id }],
    getTVShowCredits
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
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tvShow.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {tvShow.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${tvShow.episode_run_time} min.`} />
        <Chip
          icon={<VideocamIcon />}
          label={`${tvShow.first_air_date.toLocaleString()}`}
        />
        <Chip
          icon={<VideocamOffIcon />}
          label={`${tvShow.last_air_date.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${tvShow.vote_average} (${tvShow.vote_count}`}
        />
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Production countries" sx={styles.chipLabel} color="primary" />
        </li>
        {tvShow.production_countries.map((pc) => (
          <li key={pc.name}>
            <Chip label={pc.name}  />
          </li>
        ))}
      </Paper>

      <br />
      <Typography variant="h5" component="h3">
        Cast
      </Typography>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {cast.map((actor) => (
            <TableRow
              key={actor.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {actor.name}
              </TableCell>
              <TableCell>
                <ul>
                {actor.roles.map((role) => (
                  <li>{role.character}</li>
                ))}
                  </ul>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <br />
      <Typography variant="h5" component="h3">
        Crew
      </Typography>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {crew.map((member) => (
            <TableRow
              key={member.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {member.name}
              </TableCell>
              <TableCell>
              <ul>
                {member.jobs.map((role) => (
                  <li>{role.job}</li>
                ))}
                  </ul>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TVShowReviews tvShow={tvShow} />
      </Drawer>
    </>
  );
};

export default TVShowDetails;