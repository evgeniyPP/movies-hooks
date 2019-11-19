import React from "react";
import noPoster from "../../assets/no-poster.jpg";
import "../../main.css";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <p>{movie.Title ? movie.Title : "Нет названия"}</p>
      <p>{movie.Year ? movie.Year : ""}</p>
      {movie.Poster === "N/A" ? (
        <img src={noPoster} alt="У фильма нет постера" />
      ) : (
        <img src={movie.Poster} alt={`Постер фильма ${movie.Title}`} />
      )}
    </div>
  );
};

export default Movie;
