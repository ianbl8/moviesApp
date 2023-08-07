import { Grid } from "@mui/material";
import React from "react";
import NewMovieHeader from "../headerNewMovie";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const NewMoviePageTemplate = ({ children }) => {
  return (
    <>
      <NewMovieHeader />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>

    </>
  );
};

export default NewMoviePageTemplate;