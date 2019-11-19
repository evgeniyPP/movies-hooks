export const initialState = {
  loading: false,
  movies: [],
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.movies,
        loading: false
      };
    default:
      return state;
  }
};

export const setLoading = () => ({
    type: "SET_LOADING"
});

export const setMovies = (movies) => ({
    type: "SET_MOVIES",
    movies
});

