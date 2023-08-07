import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPerson } from "../api/tmdb-api";
import PersonDetails from "../components/personDetails";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templatePersonPage";

const PersonDetailsPage = (props) => {
  const { id } = useParams();

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <h2>Waiting for person details</h2>
      )}
    </>
  );
};

export default PersonDetailsPage;