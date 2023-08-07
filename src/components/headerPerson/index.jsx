import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { AvatarGroup, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";

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

const PersonHeader = (props) => {
  const person = props.person;
  
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Card sx={styles.card}>
        <CardHeader />
      </Card>

      <Typography variant="h4" component="h3">
        {person.name}{"   "}
        {person.homepage ? 
        <a href={person.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a> : null}
        <br />
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default PersonHeader;