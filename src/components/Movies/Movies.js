import React from "react";
import Movie from "./Movie";
import NoSearch from "./noSearch";
import "../../main.css";
import Preloader from "../Preloader";

const Movies = ({ movies, loading }) => {
  if (loading) {
    return <Preloader />;
  }

  const renderMovies = () => {
    return movies.map((movie, index) => <Movie key={index} movie={movie} />);
  };

  return (
    <div className="movies">
      {movies.length ? renderMovies() : <NoSearch />}
    </div>
  );
};

export default Movies;
