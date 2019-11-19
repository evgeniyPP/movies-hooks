import React, { useState } from "react";
import "../main.css";

const Search = ({ onSearch }) => {
  const [request, setRequest] = useState("");

  const handleInput = e => {
    setRequest(e.target.value);
  };

  const handleSubmit = () => {
    onSearch(request);
    setRequest("");
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={request} />
      <button onClick={handleSubmit}>Поиск</button>
    </div>
  );
};

export default Search;
