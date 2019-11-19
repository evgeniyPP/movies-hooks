import React, { useReducer, useEffect } from "react";
import Header from "./Header";

import Movies from "./Movies/Movies";
import {
  reducer,
  initialState,
  setLoading,
  setMovies
} from "../assets/reducer";
import "../main.css";

const IMDB_API_URL = "https://www.omdbapi.com/?apikey=4a61c6f&s=";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, loading } = state;

  useEffect(() => {
    onSearch("iron man");
  }, []);

  const onSearch = request => {
    dispatch(setLoading());
    const query = request.split(" ").join("+");
    fetch(IMDB_API_URL + query)
      .then(response => response.json())
      .then(json => {
        if (json.Response === "True") {
          dispatch(setMovies(json.Search));
        }
      });
  };

  return (
    <div className="app-wrapper">
      <Header onSearch={onSearch} />
      <Movies movies={movies} loading={loading} />
    </div>
  );
};

export default App;
