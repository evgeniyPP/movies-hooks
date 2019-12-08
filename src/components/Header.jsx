import React from 'react';
import { Paper } from '@material-ui/core';
import Search from './Search';

const Header = ({ onSearch }) => {
  return (
    <Paper component="header" elevation={5} square className="header">
      <h2>EPP MOVIES HOOKS</h2>
      <Search onSearch={onSearch} />
    </Paper>
  );
};

export default Header;
