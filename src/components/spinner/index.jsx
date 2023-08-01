import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const styles = {
  root: {
    display: 'flex',
    justifyContent: "center",
    '& > * + *': {
      marginLeft: 2,
    },
  },
};

export default function Spinner() {

  return (
    <div sx={styles.root}>
      <CircularProgress />
      <CircularProgress />
    </div>
  );
}