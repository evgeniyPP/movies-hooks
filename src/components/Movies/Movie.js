import React from "react";
import noPoster from "../../assets/images/no-poster.jpg";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Movie = ({ movie, dispatchSetOpen }) => {
  const openMovie = () => {
    dispatchSetOpen(movie.imdbID);
  };

  return (
    <Card className="movie" elevation={10}>
      <CardContent className="movieCardContent">
        <Typography
          className="movieHeader"
          variant="h5"
          component="h5"
          gutterBottom
          onClick={openMovie}
        >
          {movie.Title ? movie.Title : "Нет названия"}
        </Typography>
        <Typography className='movieYear' variant="body1" component="p" gutterBottom>
          {movie.Year ? movie.Year : ""}
        </Typography>
        {movie.Poster === "N/A" ? (
          <CardMedia
            component="img"
            image={noPoster}
            alt="У фильма нет постера"
            onClick={openMovie}
          />
        ) : (
          <CardMedia
            component="img"
            image={movie.Poster}
            alt={`Постер фильма ${movie.Title}`}
            onClick={openMovie}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default Movie;
