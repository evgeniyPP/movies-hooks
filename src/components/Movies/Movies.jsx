import React from 'react';
import Movie from './Movie';
import NoSearch from './noSearch';
import Preloader from '../Preloader';

const Movies = ({ movies, loading, dispatchSetOpen }) => {
  if (loading) {
    return <Preloader />;
  }

  const renderMovies = () => {
    return movies.map((movie, index) => (
      <Movie key={index} movie={movie} dispatchSetOpen={dispatchSetOpen} />
    ));
  };

  return <div className="movies">{movies.length ? renderMovies() : <NoSearch />}</div>;
};

export default Movies;
