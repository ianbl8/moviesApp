import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";

const styles = {
  root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  card: {
    border: "none",
    boxShadow: "none",
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const NewMovieHeader = (props) => {
  return (
    <Paper component="div" sx={styles.root}>
      <Typography variant="h4" component="h3">
        New Movie
      </Typography>
    </Paper>
  );
};

export default NewMovieHeader;