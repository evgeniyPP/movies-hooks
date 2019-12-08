import React, { useReducer } from 'react';
import Header from './Header';
import Movies from './Movies/Movies';
import Modal from './Modal';
import {
  reducer,
  initialState,
  setLoading,
  setMovies,
  setOpen,
  setClose,
  setMovieData
} from '../assets/reducer';

const IMDB_API_URL = 'https://www.omdbapi.com/?apikey=4a61c6f&';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, loading, isOpen, openedMovieData } = state;

  const fetchOpenedMovie = movieId => {
    fetch(`${IMDB_API_URL}i=${movieId}`)
      .then(response => response.json())
      .then(json => {
        if (json.Response === 'True') {
          dispatch(setMovieData(json));
        }
      });
  };

  const dispatchSetOpen = movieId => {
    dispatch(setOpen());
    fetchOpenedMovie(movieId);
  };

  const dispatchSetClose = () => {
    dispatch(setClose());
  };

  const onSearch = request => {
    dispatch(setLoading());
    const query = request.split(' ').join('+');
    fetch(`${IMDB_API_URL}s=${query}`)
      .then(response => response.json())
      .then(json => {
        if (json.Response === 'True') {
          dispatch(setMovies(json.Search));
        }
      });
  };

  return (
    <div className="app-wrapper">
      <Header onSearch={onSearch} />
      <Movies movies={movies} loading={loading} dispatchSetOpen={dispatchSetOpen} />
      <Modal isOpen={isOpen} dispatchSetClose={dispatchSetClose} movieData={openedMovieData} />
    </div>
  );
};

export default App;
