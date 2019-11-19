import React from "react";
import noPoster from "../../assets/no-poster.jpg";
import "../../main.css";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Movie = ({ movie }) => {
  return (
    <Card className="movie" elevation="10">
      <CardContent>
        <Typography variant="h5" component="h5" gutterBottom>
          {movie.Title ? movie.Title : "Нет названия"}
        </Typography>
        <Typography variant="p" component="p" gutterBottom>
          {movie.Year ? movie.Year : ""}
        </Typography>
        {movie.Poster === "N/A" ? (
          <CardMedia
            component="img"
            image={noPoster}
            alt="У фильма нет постера"
          />
        ) : (
          <CardMedia
            component="img"
            image={movie.Poster}
            alt={`Постер фильма ${movie.Title}`}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default Movie;
