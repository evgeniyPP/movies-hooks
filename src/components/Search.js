import React, { useState } from "react";
import "../main.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Search = ({ onSearch }) => {
  const [request, setRequest] = useState("");

  const handleInput = e => {
    setRequest(e.target.value);
  };

  const handleSubmit = () => {
    if (!request) return;
    onSearch(request);
    setRequest("");
  };

  return (
    <div className="search">
      <TextField
        type="text"
        placeholder="Введите фильм на английском"
        margin="normal"
        onChange={handleInput}
        value={request}
        className="search-input"
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        className="searchBtn"
      >
        Поиск
      </Button>
    </div>
  );
};

export default Search;
