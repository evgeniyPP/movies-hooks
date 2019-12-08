export const initialState = {
  loading: false,
  movies: [],
  errorMessage: null,
  isModal: false,
  openedMovieData: {},
  error: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'STOP_LOADING':
      return {
        ...state,
        loading: false
      };
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.movies
      };
    case 'SET_OPEN':
      return {
        ...state,
        isModal: true
      };
    case 'SET_CLOSE':
      return {
        ...state,
        isModal: false
      };
    case 'SET_MOVIE_DATA':
      return {
        ...state,
        openedMovieData: action.data
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export const setLoading = () => ({
  type: 'SET_LOADING'
});

export const stopLoading = () => ({
  type: 'STOP_LOADING'
});

export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
});

export const setModalOpen = movieId => ({
  type: 'SET_OPEN',
  movieId
});

export const setModalClose = () => ({
  type: 'SET_CLOSE'
});

export const setMovieData = data => ({
  type: 'SET_MOVIE_DATA',
  data
});

export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const clearError = () => ({
  type: 'CLEAR_ERROR'
});
