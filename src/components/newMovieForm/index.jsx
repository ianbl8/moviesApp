import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import "dayjs/locale/en-ie";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getMovieGenres } from "../../api/tmdb-api";
import { MoviesContext } from "../../contexts/moviesContext";
import Spinner from "../spinner";
import styles from "./styles";

const NewMovieForm = ({ movie }) => {
  const defaultValues = {
    title: "",
    overview: "",
    agree: false,
    genres: [],
    release_date: "",
    runtime: "",
    production_companies: [],
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(defaultValues);
  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const [open, setOpen] = useState(false);

  const { data, error, isLoading, isError } = useQuery("movieGenres", getMovieGenres);
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  const movieGenres = data.genres;
  if (movieGenres[0].name !== "All") {
    movieGenres.unshift({ id: "0", name: "All" });
  };

  const handleGenresChange = (event, index, values) => {
    this.setState({
      values: [...values]
    });
  };

  const handleSnackClose = (event) => {
    setOpen(false);
    navigate("/movies/favourites");
  };

  const onSubmit = (movie) => {
    movie.id = uuidv4();
    context.addMovie(movie);
    setOpen(true);
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Add an entry
      </Typography>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">
            Thank you for submitting this movie
          </Typography>
        </Alert>
      </Snackbar>

      <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "80ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="title"
              label="Movie title"
              autoFocus
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.title.message}
          </Typography>
        )}

        <Controller
          name="overview"
          control={control}
          rules={{
            required: "Give an overview of the film.",
            minLength: { value: 10, message: "Overview is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={value}
              onChange={onChange}
              label="Overview"
              id="overview"
              multiline
              minRows={10}
            />
          )}
        />
        {errors.overview && (
          <Typography variant="h6" component="p">
            {errors.overview.message}
          </Typography>
        )}

        <Controller
          control={control}
          name="genres"
          rules={{
            required: "Select at least one genre",
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="select-genres"
              select
              multiple
              variant="outlined"
              label="Genres"
              value={value}
              onChange={handleGenresChange}
              helperText="Select one or more genres"
            >
              {movieGenres.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        {errors.genres && (
          <Typography variant="h6" component="p">
            {errors.genres.message}
          </Typography>
        )}

        <Controller
          name="release_date"
          control={control}
          rules={{
            required: "Select the movie's release date",
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-ie">
              <DatePicker
                variant="outlined"
                margin="normal"
                required
                value={value}
                onChange={onChange}
                label="Release date"
                id="release_date"
              />
            </LocalizationProvider>
          )}
        />
        {errors.release_date && (
          <Typography variant="h6" component="p">
            {errors.release_date.message}
          </Typography>
        )}

        <Controller
          name="runtime"
          control={control}
          rules={{
            required: "Select the movie's runtime in minutes",
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="runtime"
              label="Runtime"
            />
          )}
        />
        {errors.runtime && (
          <Typography variant="h6" component="p">
            {errors.runtime.message}
          </Typography>
        )}

        <Box sx={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                author: "",
                content: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NewMovieForm;