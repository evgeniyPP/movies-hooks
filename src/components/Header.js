import React from "react";
import Search from "./Search";
import "../main.css";

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <h2>@EPP MOVIES HOOKS</h2>
      <Search onSearch={onSearch} />
    </header>
  );
};

export default Header;
