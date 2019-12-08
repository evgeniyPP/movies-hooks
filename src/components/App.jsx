import React, { useReducer } from 'react';
import Header from './Header';
import Movies from './Movies/Movies';
import Modal from './Modal';
import {
  reducer,
  initialState,
  setLoading,
  stopLoading,
  setMovies,
  setModalOpen,
  setModalClose,
  setMovieData,
  setError,
  clearError
} from '../assets/reducer';

const IMDB_API_URL = 'https://www.omdbapi.com/?apikey=4a61c6f&';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, loading, isModal, openedMovieData, error } = state;

  const onSearch = async request => {
    dispatch(clearError());
    dispatch(setMovies([]));
    try {
      dispatch(setLoading());
      const query = request.split(' ').join('+');
      const response = await fetch(`${IMDB_API_URL}s=${query}`);
      const data = await response.json();
      if (data.Response === 'True') {
        dispatch(setMovies(data.Search));
      } else {
        throw new Error();
      }
    } catch (e) {
      dispatch(setError('Не получается найти фильмы по данному запросу'));
    } finally {
      dispatch(stopLoading());
    }
  };

  const fetchOpenedMovie = async movieId => {
    dispatch(clearError());
    try {
      const response = await fetch(`${IMDB_API_URL}i=${movieId}`);
      const data = await response.json();
      if (data.Response === 'True') {
        dispatch(setMovieData(data));
      } else {
        throw new Error();
      }
    } catch (e) {
      dispatch(setError('Не получается открыть данный фильм'));
    }
  };

  const openModal = async movieId => {
    await fetchOpenedMovie(movieId);
    dispatch(setModalOpen());
  };

  const closeModal = () => {
    dispatch(setModalClose());
  };

  return (
    <div className="app-wrapper">
      <Header onSearch={onSearch} />
      <Movies movies={movies} loading={loading} openModal={openModal} error={error} />
      <Modal isModal={isModal} closeModal={closeModal} movieData={openedMovieData} />
    </div>
  );
};

export default App;
