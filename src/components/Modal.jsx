import React from 'react';
import { Modal, Paper, Typography } from '@material-ui/core';
import noPoster from '../assets/images/no-poster.jpg';
import star from '../assets/images/star.png';
import '../css/Modal.css';

export default ({ isOpen, dispatchSetClose, movieData }) => {
  const renderData = () => {
    const banned = [
      'Title',
      'Poster',
      'Ratings',
      'imdbID',
      'Type',
      'DVD',
      'BoxOffice',
      'Response',
      'imdbRating',
      'imdbVotes',
      'totalSeasons'
    ];
    return Object.keys(movieData)
      .map(data => {
        return (
          !banned.includes(data) &&
          movieData[data] !== 'N/A' && (
            <Typography
              className={`movieData__item movieData__${data.toLowerCase()}`}
              variant="body1"
              component="p"
              key={`${movieData.Title} ${data}`}
            >
              <span>{`${data}: `}</span>
              {`${movieData[data]}`}
            </Typography>
          )
        );
      })
      .filter(data => data !== false);
  };

  return (
    <Modal className="modalParent" open={isOpen} onClose={dispatchSetClose}>
      <Paper className="modalContent" component="div" elevation={10}>
        <div className="movieData__title__wrapper">
          <Typography className="movieData__title" variant="h4" component="h2" id="modal-title">
            {movieData ? movieData.Title : 'No title'}
          </Typography>
          <div className="movieData__rating">
            <img src={star} alt="" />
            <span>{movieData ? `${movieData.imdbRating} (${movieData.imdbVotes})` : 'N/A'}</span>
          </div>
        </div>
        <div className="modalContent__right">
          {movieData.Poster === 'N/A' ? (
            <img className="movieData__poster" src={noPoster} alt="" />
          ) : (
            <img className="movieData__poster" src={movieData.Poster} alt="" />
          )}
          <div>{movieData ? renderData() : ''}</div>
        </div>
      </Paper>
    </Modal>
  );
};
