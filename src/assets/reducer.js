export const initialState = {
  loading: false,
  movies: [],
  errorMessage: null,
  isOpen: false,
  openedMovieData: {}
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.movies,
        loading: false
      };
    case 'IS_OPEN':
      return {
        ...state,
        isOpen: true
      };
    case 'SET_CLOSE':
      return {
        ...state,
        isOpen: false
      };
    case 'SET_MOVIE_DATA':
      return {
        ...state,
        openedMovieData: action.data
      };
    default:
      return state;
  }
};

export const setLoading = () => ({
  type: 'SET_LOADING'
});

export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
});

export const setOpen = movieId => ({
  type: 'IS_OPEN',
  movieId
});

export const setClose = () => ({
  type: 'SET_CLOSE'
});

export const setMovieData = data => ({
  type: 'SET_MOVIE_DATA',
  data
});
