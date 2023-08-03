import React from "react";
import { MemoryRouter } from "react-router";
import MovieHeader from "../components/headerMovie";
import SampleMovie from "./sampleData";

export default {
  title: "Movie Details Page/MovieHeader",
  component: MovieHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MovieHeader movie={SampleMovie} />;

Basic.storyName = "Default";
