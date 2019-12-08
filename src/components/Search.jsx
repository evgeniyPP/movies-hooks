import React, { useState, useEffect, useCallback } from 'react';
import { TextField, Button } from '@material-ui/core';

const Search = ({ onSearch }) => {
  const [request, setRequest] = useState('');

  const handleInput = e => {
    setRequest(e.target.value);
  };

  const handleSubmit = useCallback(() => {
    if (!request) return;
    onSearch(request);
    setRequest('');
  }, [onSearch, request]);

  const handleKeyPress = useCallback(
    e => {
      if (e.keyCode === 13) {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="search">
      <TextField
        type="text"
        placeholder="Введите фильм на английском"
        margin="normal"
        onChange={handleInput}
        value={request}
        autoFocus
        className="search-input"
      />
      <Button onClick={handleSubmit} variant="contained" color="primary" className="searchBtn">
        Поиск
      </Button>
    </div>
  );
};

export default Search;
