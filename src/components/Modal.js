import React from "react";
import { Modal, Paper, Typography } from "@material-ui/core";
import noPoster from "../assets/images/no-poster.jpg";
import '../css/Modal.css'

export default ({ isOpen, dispatchSetClose, movieData }) => {
  const renderData = () => {
    const arr = [];
    const banned = [
      "Title",
      "Poster",
      "Ratings",
      "imdbID",
      "Type",
      "DVD",
      "BoxOffice",
      "Response"
    ];
    for (let data in movieData) {
      if (!banned.includes(data) && movieData[data] !== "N/A") {
        arr.push(
          <Typography
            className={`movieData__item movieData__${data.toLowerCase()}`}
            variant="body1"
            component="p"
            key={`${movieData.Title} ${data}`}
          >
            <span>{`${data}: `}</span>
            {`${movieData[data]}`}
          </Typography>
        );
      }
    }
    return arr;
  };

  return (
    <Modal className="modalParent" open={isOpen} onClose={dispatchSetClose}>
      <Paper className="modalContent" component="div" elevation={10}>
        <Typography
          className="movieData__title"
          variant="h4"
          component="h2"
          id="modal-title"
        >
          {movieData ? movieData.Title : "No title"}
        </Typography>
        <div className="modalContent__right">
          {movieData.Poster === "N/A" ? (
            <img className="movieData__poster" src={noPoster} alt="" />
          ) : (
            <img className="movieData__poster" src={movieData.Poster} alt="" />
          )}
          <div>{movieData ? renderData() : ""}</div>
        </div>
      </Paper>
    </Modal>
  );
};
