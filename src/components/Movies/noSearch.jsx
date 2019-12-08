import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import image from '../../assets/images/gosling.png';

const NoSearch = ({ error }) => {
  const text = !error ? 'Введите запрос, чтобы начать' : <div className="error">{error}</div>;

  return (
    <Paper className="noSearch" component="div" elevation={10}>
      <Typography variant="h5" component="h5" className="noSearch__title">
        {text}
      </Typography>
      <img className="noSearch-img" src={image} alt="" />
    </Paper>
  );
};

export default NoSearch;
