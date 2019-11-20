import React from "react";
import { Paper, Typography } from "@material-ui/core";
import image from "../../assets/images/gosling.png";

const NoSearch = () => {
  return (
    <Paper className="noSearch" component="div" elevation={10}>
      <Typography variant="h5" component="h5">
        Введите запрос, чтобы начать
      </Typography>
      <img className="noSearch-img" src={image} alt="" />
    </Paper>
  );
};

export default NoSearch;
