import React from "react";
import Search from "./Search";
import "../main.css";
import { Paper } from "@material-ui/core";

const Header = ({ onSearch }) => {
  return (
    <Paper component="header" elevation={5} square className="header">
      <h2>EPP MOVIES HOOKS</h2>
      <Search onSearch={onSearch} />
    </Paper>
  );
};

export default Header;
