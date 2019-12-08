import React from 'react';
import Movie from './Movie';
import NoSearch from './noSearch';
import Preloader from '../Preloader';

const Movies = ({ movies, loading, openModal, error }) => {
  if (loading) {
    return <Preloader />;
  }

  const renderMovies = () =>
    movies.map(movie => <Movie key={movie.imdbID} movie={movie} openModal={openModal} />);

  return (
    <div className="movies">{movies.length ? renderMovies() : <NoSearch error={error} />}</div>
  );
};

export default Movies;
